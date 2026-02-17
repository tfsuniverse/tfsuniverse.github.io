"""
Video Upscaler using Real-ESRGAN
Upscales video frames using AI, then reassembles into video
"""
import os
import sys
import subprocess
import shutil
from pathlib import Path

# Configuration
INPUT_VIDEO = "VIDEO 2 LOGO_1.mp4"
OUTPUT_VIDEO = "VIDEO 2 LOGO_1_upscaled.mp4"
TEMP_DIR = "upscale_temp"
FRAMES_DIR = os.path.join(TEMP_DIR, "frames")
UPSCALED_DIR = os.path.join(TEMP_DIR, "upscaled")
SCALE_FACTOR = 2  # 2x upscale (1080p -> 2160p/4K)

def run_cmd(cmd, desc=""):
    print(f"  {desc}..." if desc else f"  Running: {cmd[:60]}...")
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"  Error: {result.stderr[:200]}")
        return False
    return True

def main():
    print("\n" + "="*50)
    print("  VIDEO UPSCALER - Real-ESRGAN")
    print("="*50)
    
    # Setup directories
    os.makedirs(FRAMES_DIR, exist_ok=True)
    os.makedirs(UPSCALED_DIR, exist_ok=True)
    
    # Step 1: Extract frames
    print("\n[1/5] Extracting frames from video...")
    if not run_cmd(f'ffmpeg -y -i "{INPUT_VIDEO}" -qscale:v 2 "{FRAMES_DIR}/frame_%04d.png"', "Extracting"):
        return
    
    frame_count = len(list(Path(FRAMES_DIR).glob("*.png")))
    print(f"  Extracted {frame_count} frames")
    
    # Step 2: Get video info (fps, audio)
    print("\n[2/5] Getting video metadata...")
    fps_result = subprocess.run(
        f'ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate -of csv=p=0 "{INPUT_VIDEO}"',
        shell=True, capture_output=True, text=True
    )
    fps = fps_result.stdout.strip()
    print(f"  Frame rate: {fps}")
    
    # Extract audio
    run_cmd(f'ffmpeg -y -i "{INPUT_VIDEO}" -vn -acodec copy "{TEMP_DIR}/audio.aac"', "Extracting audio")
    has_audio = os.path.exists(f"{TEMP_DIR}/audio.aac") and os.path.getsize(f"{TEMP_DIR}/audio.aac") > 0
    
    # Step 3: Upscale frames using Real-ESRGAN
    print(f"\n[3/5] Upscaling {frame_count} frames with Real-ESRGAN ({SCALE_FACTOR}x)...")
    print("  This may take a few minutes...")
    
    try:
        from realesrgan import RealESRGANer
        from basicsr.archs.rrdbnet_arch import RRDBNet
        import cv2
        import torch
        import urllib.request
        
        # Download model if not exists
        model_path = os.path.join(TEMP_DIR, "RealESRGAN_x4plus.pth")
        if not os.path.exists(model_path):
            print("  Downloading model weights...")
            url = "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth"
            urllib.request.urlretrieve(url, model_path)
        
        # Initialize model
        model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=23, num_grow_ch=32, scale=4)
        upsampler = RealESRGANer(
            scale=4,
            model_path=model_path,
            model=model,
            tile=256,  # Use tiling to save memory
            tile_pad=10,
            pre_pad=0,
            half=False  # Use float32 for compatibility
        )
        
        # Process each frame
        frames = sorted(Path(FRAMES_DIR).glob("*.png"))
        for i, frame_path in enumerate(frames, 1):
            img = cv2.imread(str(frame_path), cv2.IMREAD_UNCHANGED)
            output, _ = upsampler.enhance(img, outscale=SCALE_FACTOR)
            output_path = os.path.join(UPSCALED_DIR, frame_path.name)
            cv2.imwrite(output_path, output)
            print(f"\r  Progress: {i}/{frame_count} frames ({100*i//frame_count}%)", end="", flush=True)
        
        print("\n  Upscaling complete!")
        
    except Exception as e:
        print(f"\n  Real-ESRGAN error: {e}")
        print("  Falling back to ffmpeg lanczos upscaling...")
        
        # Fallback: use ffmpeg for upscaling
        for frame_path in sorted(Path(FRAMES_DIR).glob("*.png")):
            output_path = os.path.join(UPSCALED_DIR, frame_path.name)
            subprocess.run(
                f'ffmpeg -y -i "{frame_path}" -vf "scale=iw*{SCALE_FACTOR}:ih*{SCALE_FACTOR}:flags=lanczos,unsharp=5:5:1.0:5:5:0.0" "{output_path}"',
                shell=True, capture_output=True
            )
        print("  Fallback upscaling complete!")
    
    # Step 4: Reassemble video
    print("\n[4/5] Reassembling upscaled video...")
    if has_audio:
        run_cmd(
            f'ffmpeg -y -framerate {fps} -i "{UPSCALED_DIR}/frame_%04d.png" -i "{TEMP_DIR}/audio.aac" '
            f'-c:v libx264 -preset slow -crf 18 -c:a aac -shortest "{OUTPUT_VIDEO}"',
            "Encoding with audio"
        )
    else:
        run_cmd(
            f'ffmpeg -y -framerate {fps} -i "{UPSCALED_DIR}/frame_%04d.png" '
            f'-c:v libx264 -preset slow -crf 18 "{OUTPUT_VIDEO}"',
            "Encoding video"
        )
    
    # Step 5: Cleanup
    print("\n[5/5] Cleaning up temporary files...")
    shutil.rmtree(TEMP_DIR, ignore_errors=True)
    
    # Results
    if os.path.exists(OUTPUT_VIDEO):
        orig_size = os.path.getsize(INPUT_VIDEO) / (1024*1024)
        new_size = os.path.getsize(OUTPUT_VIDEO) / (1024*1024)
        print("\n" + "="*50)
        print("  SUCCESS!")
        print("="*50)
        print(f"  Original: {INPUT_VIDEO} ({orig_size:.1f} MB)")
        print(f"  Upscaled: {OUTPUT_VIDEO} ({new_size:.1f} MB)")
        print("="*50 + "\n")
    else:
        print("\n  ERROR: Output file not created!")

if __name__ == "__main__":
    main()

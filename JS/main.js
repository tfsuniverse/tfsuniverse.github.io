// ================= TFS UNIVERSE - MAIN JAVASCRIPT =================

// ================= PRELOADER =================
(function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.loader-progress');
    const loaderText = document.querySelector('.loader-text');

    if (!preloader) return;

    // Track frame loading
    const TOTAL_FRAMES = 123;
    let loadedFrames = 0;
    const framePath = '../photo/scroll-frames/frame_';

    // Preload frames and update progress
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.onload = img.onerror = () => {
            loadedFrames++;
            const progress = (loadedFrames / TOTAL_FRAMES) * 100;
            if (progressBar) progressBar.style.width = progress + '%';
            if (loaderText) loaderText.textContent = `Loading ${Math.round(progress)}%`;

            // Hide preloader when all loaded
            if (loadedFrames >= TOTAL_FRAMES) {
                setTimeout(() => {
                    preloader.classList.add('hidden');
                }, 500);
            }
        };
        img.src = framePath + String(i).padStart(3, '0') + '.jpg';
    }

    // Fallback: hide preloader after max wait time
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 8000);
})();

// ================= SCROLL PROGRESS BAR =================
(function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;

    function updateProgress() {
        const scrollTop = window.scrollY || 0;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
})();

// ================= SCROLL-TRIGGERED CARD ANIMATIONS =================
(function initCardAnimations() {
    const cards = document.querySelectorAll('.biz-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => observer.observe(card));
})();

// ================= BACK TO TOP BUTTON =================
(function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    function toggleButton() {
        if (window.scrollY > 400) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', toggleButton, { passive: true });
    toggleButton();
})();

// ================= BACKGROUND SCROLL IMAGE SEQUENCE =================
(function initScrollImageSequence() {
    const img = document.getElementById('scrollImage');
    if (!img) return;

    const TOTAL_FRAMES = 123;
    const LERP = 0.15;
    const framePath = '../photo/scroll-frames/frame_';

    // Preload all images for instant switching
    const frames = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const image = new Image();
        image.src = framePath + String(i).padStart(3, '0') + '.jpg';
        image.onload = () => loadedCount++;
        frames.push(image);
    }

    let targetFrame = 0;
    let smoothFrame = 0;
    let rafId = null;
    let visible = true;
    let lastTime = 0;

    // Triangle wave for ping-pong effect
    function triangle(x) {
        const r = x % 2;
        return (r <= 1) ? r : (2 - r);
    }

    // Calculate target frame from scroll position
    function updateTarget() {
        const st = window.scrollY || 0;
        const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, st / max));
        const tri = triangle(progress * 2);
        targetFrame = Math.floor(tri * (TOTAL_FRAMES - 1));
    }

    // Intersection observer for performance
    const io = new IntersectionObserver(entries => {
        visible = !!(entries[0] && entries[0].isIntersecting);
        if (visible) startLoop();
        else stopLoop();
    }, { threshold: 0.01 });
    io.observe(img);

    function startLoop() {
        if (rafId) return;
        lastTime = performance.now();
        rafId = requestAnimationFrame(loop);
    }

    function stopLoop() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
    }

    // Main animation loop
    function loop(now) {
        if (!visible) { stopLoop(); return; }

        const delta = Math.min((now - lastTime) / 16.67, 2);
        lastTime = now;

        // Smooth interpolation
        const lerpFactor = 1 - Math.pow(1 - LERP, delta);
        smoothFrame += (targetFrame - smoothFrame) * lerpFactor;

        // Get frame index
        const frameIdx = Math.round(Math.max(0, Math.min(TOTAL_FRAMES - 1, smoothFrame)));

        // Update image if frame changed and loaded
        if (frames[frameIdx] && frames[frameIdx].complete) {
            img.src = frames[frameIdx].src;
        }

        rafId = requestAnimationFrame(loop);
    }

    // Event listeners
    window.addEventListener('scroll', () => {
        updateTarget();
        if (visible) startLoop();
    }, { passive: true });

    window.addEventListener('resize', updateTarget, { passive: true });

    // Initialize
    updateTarget();
    smoothFrame = targetFrame;
    if (visible) startLoop();

    // Cleanup
    window.addEventListener('beforeunload', () => {
        stopLoop();
        io.disconnect();
    });
})();

// ================= HERO VIDEO =================
(function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    const logo = document.getElementById('heroLogo');
    const playBtn = document.getElementById('heroPlayBtn');
    const heroWrapper = document.getElementById('heroWrapper');

    if (!video || !logo || !playBtn || !heroWrapper) return;

    const STORAGE_KEY = 'tfsHeroPlayed';
    const POSITION_KEY = 'tfsHeroPosition';

    function showFallback() {
        video.classList.add('fade-out');
        logo.classList.add('show');
        playBtn.classList.add('show');
    }

    function savePosition() {
        if (video.currentTime > 0 && !video.ended) {
            sessionStorage.setItem(POSITION_KEY, video.currentTime.toString());
        }
    }

    function getSavedPosition() {
        const saved = sessionStorage.getItem(POSITION_KEY);
        return saved ? parseFloat(saved) : 0;
    }

    function playMuted(fromStart = false) {
        video.muted = true;
        video.volume = 0;
        if (!fromStart) {
            const savedPos = getSavedPosition();
            if (savedPos > 0 && savedPos < video.duration) {
                video.currentTime = savedPos;
            } else {
                video.currentTime = 0;
            }
        } else {
            video.currentTime = 0;
        }
        video.classList.remove('fade-out');
        logo.classList.remove('show');
        playBtn.classList.remove('show');
        video.play().catch(() => showFallback());
    }

    function playWithSound(fromStart = true) {
        video.muted = false;
        video.volume = 1;
        if (fromStart) video.currentTime = 0;
        video.classList.remove('fade-out');
        logo.classList.remove('show');
        playBtn.classList.remove('show');
        video.play().catch(() => { });
    }

    video.addEventListener('timeupdate', savePosition);

    if (!sessionStorage.getItem(STORAGE_KEY)) {
        playMuted(true);
        sessionStorage.setItem(STORAGE_KEY, 'true');
    } else {
        const savedPos = getSavedPosition();
        if (savedPos > 0) video.currentTime = savedPos;
        video.classList.add('fade-out');
        logo.classList.add('show');
        playBtn.classList.add('show');
    }

    video.addEventListener('ended', () => {
        sessionStorage.removeItem(POSITION_KEY);
        video.classList.add('fade-out');
        logo.classList.add('show');
        playBtn.classList.add('show');
    });

    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playWithSound();
    });

    logo.addEventListener('click', (e) => {
        e.stopPropagation();
        playWithSound();
    });

    heroWrapper.addEventListener('click', (e) => {
        if (e.target.id === 'heroPlayBtn') return;
        playWithSound();
    });
})();

// ================= HEADER NAVIGATION =================
(function initHeader() {
    const toggle = document.getElementById('navToggle');
    const mobile = document.getElementById('mobileNav');
    const header = document.querySelector('.tfs-header');
    if (!toggle || !mobile || !header) return;

    function closeMenu() {
        toggle.classList.remove('open');
        mobile.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
        mobile.setAttribute('aria-hidden', 'true');
    }

    toggle.addEventListener('click', () => {
        const open = !toggle.classList.contains('open');
        if (open) {
            toggle.classList.add('open');
            mobile.classList.add('show');
            toggle.setAttribute('aria-expanded', 'true');
            mobile.setAttribute('aria-hidden', 'false');
        } else {
            closeMenu();
        }
    });

    document.addEventListener('click', (e) => {
        if (!mobile.classList.contains('show')) return;
        const inside = mobile.contains(e.target) || toggle.contains(e.target);
        if (!inside) closeMenu();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobile.classList.contains('show')) {
            closeMenu();
            toggle.focus();
        }
    });

    window.addEventListener('scroll', () => {
        const y = window.scrollY || 0;
        if (y > 40) header.classList.add('compact');
        else header.classList.remove('compact');
    }, { passive: true });
})();

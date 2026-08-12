const fs = require('fs');
let html = fs.readFileSync('portfolio.html', 'utf8');

const linkReplacements = [
    { target: 'TFS Universe', url: 'https://tfsuniverse.github.io/HTML/Home1.html' },
    { target: 'BuyItOnline', url: 'https://buyitonline.org/' },
    { target: 'Soochh', url: 'https://tfsuniverse.github.io/HTML/Soochh.html' },
    { target: 'MANZIL', url: 'https://youtube.com/playlist?list=OLAK5uy_l2Ppcv5CDqeBjZ6HZ6PxwTVrOLHGxAmPE' },
    { target: 'TFS', url: 'https://www.youtube.com/@theflyingshirt' },
    { target: 'Oza Motorsports Pvt. Ltd.', url: 'https://www.ozamotorsports.com/' },
    { target: 'Oza Motorsports', url: 'https://www.ozamotorsports.com/' }
];

// Helper to escape regex
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function applyLinks(text, isItalic) {
    let result = text;
    // We split by <a to avoid modifying existing links
    // But since this is run only on specific titles, there are no existing links!
    // Wait, some might already be links if we ran the script before or if they had <strong>?
    // Actually, it's safer to just iterate and split.
    for (const rep of linkReplacements) {
        // Find text not inside HTML tags. This is complex with regex.
        // Let's just use a simple regex that only replaces if not inside <a ...> ... </a>
        const regex = new RegExp(`(${escapeRegExp(rep.target)})(?![^<]*>|[^<>]*<\/a>)`, 'g');
        const style = isItalic ? 'color:inherit; text-decoration:underline; font-weight: 600;' : 'color:var(--accent-1); text-decoration:none; font-weight:600;';
        result = result.replace(regex, `<a href="${rep.url}" target="_blank" style="${style}">$1</a>`);
    }
    return result;
}

// Find all accordion-header nested elements
const headerRegex = /<div class="accordion-header nested">(.*?)<span class="icon">\+<\/span><\/div>/g;
html = html.replace(headerRegex, (match, innerText) => {
    return `<div class="accordion-header nested">${applyLinks(innerText, false)}<span class="icon">+</span></div>`;
});

// Find the italic titles
const italicRegex = /<p style="font-style: italic; color: var\(--accent-1\); margin-bottom: 2rem;">([\s\S]*?)<\/p>/g;
html = html.replace(italicRegex, (match, innerText) => {
    return `<p style="font-style: italic; color: var(--accent-1); margin-bottom: 2rem;">${applyLinks(innerText, true)}</p>`;
});

fs.writeFileSync('portfolio.html', html);
console.log('Successfully linked titles');

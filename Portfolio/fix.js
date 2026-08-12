const fs = require('fs');
let html = fs.readFileSync('portfolio.html', 'utf8');

// 1. Replace CSS
const oldCSS = `.accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 0 1.5rem;
        }

        .accordion-item.active > .accordion-content {
            padding: 0 1.5rem 1.5rem;
        }`;

const newCSS = `.accordion-content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .accordion-item.active > .accordion-content {
            grid-template-rows: 1fr;
        }
        
        .accordion-content-inner {
            overflow: hidden;
            padding: 0 1.5rem;
            opacity: 0;
            transition: padding 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .accordion-item.active > .accordion-content > .accordion-content-inner {
            opacity: 1;
            padding: 0 1.5rem 1.5rem;
        }`;

html = html.replace(oldCSS, newCSS);

// 2. Replace the entire <script> block to inject inner wrappers and simplify the logic.
const newScript = `<script>
    // 1. Wrap all accordion contents with an inner div to enable CSS Grid transitions
    document.querySelectorAll('.accordion-content').forEach(content => {
        const inner = document.createElement('div');
        inner.className = 'accordion-content-inner';
        while (content.firstChild) {
            inner.appendChild(content.firstChild);
        }
        content.appendChild(inner);
    });

    // 2. Simple class toggle for Accordions (Grid handles height automatically)
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.classList.toggle('active');
        });
    });

    // 3. Smooth scroll and auto-open accordions for internal links
    function handleScrollLink(e, linkEl) {
        e.preventDefault();
        const targetId = linkEl.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            // Open target and all its parent accordions
            let current = targetEl;
            while (current && current !== document.body && !current.classList.contains('container')) {
                if (current.classList.contains('accordion-item')) {
                    current.classList.add('active');
                }
                current = current.parentElement;
            }

            // Wait for transition to finish completely before scrolling
            setTimeout(() => {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Add a highlight effect
                targetEl.style.transition = 'box-shadow 0.5s ease';
                targetEl.style.boxShadow = '0 0 25px var(--accent-1)';
                setTimeout(() => {
                    targetEl.style.boxShadow = 'none';
                }, 2000);
            }, 450); // 450ms is slightly longer than the 0.4s CSS transition
        }
    }

    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            handleScrollLink(e, this);
        });
    });

    // 4. Handle Top Industry Navigation links similarly
    document.querySelectorAll('.scroll-link-top').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetAccordion = document.querySelector(targetId + ' > .accordion-item');
            if (targetAccordion) {
                targetAccordion.classList.add('active');
                
                setTimeout(() => {
                    targetAccordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    targetAccordion.style.transition = 'box-shadow 0.5s ease';
                    targetAccordion.style.boxShadow = '0 0 25px var(--accent-1)';
                    setTimeout(() => {
                        targetAccordion.style.boxShadow = 'none';
                    }, 2000);
                }, 450);
            }
        });
    });
</script>`;

html = html.replace(/<script>[\s\S]*?<\/script>/, newScript);

fs.writeFileSync('portfolio.html', html);
console.log("Successfully patched portfolio.html");

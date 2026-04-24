window.addEventListener('load', function () {
    if (typeof gsap === 'undefined') return;

    try {
        gsap.registerPlugin(ScrollTrigger);

        // Custom Cursor
        var cursor = document.querySelector('.cursor');
        var follower = document.querySelector('.cursor-follower');
        document.addEventListener('mousemove', function (e) {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
            gsap.to(follower, { x: e.clientX - 10, y: e.clientY - 10, duration: 0.3 });
        });

        // Hero Animations - Using fromTo for bulletproof visibility
        gsap.fromTo('.hero-bg', { scale: 1.5 }, { scale: 1.1, duration: 2, ease: 'power3.out' });

        gsap.fromTo('.hero h1',
            { y: 100, opacity: 0, skewY: 10 },
            { y: 0, opacity: 1, skewY: 0, duration: 1.5, delay: 0.5, ease: 'power4.out' }
        );

        gsap.fromTo('.hero-subtext',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: 'power3.out' }
        );

        // Reveal Sections
        document.querySelectorAll('section').forEach(function (section) {
            var items = section.querySelectorAll('.section-title, p, .skill-card, .project-item, .gallery-item');
            if (items.length > 0) {
                gsap.fromTo(items,
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 1, stagger: 0.2,
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            }
        });

        // Parallax Image
        gsap.to('.parallax-img', {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        // Magnetic nav links
        document.querySelectorAll('.nav-links a').forEach(function (link) {
            link.addEventListener('mousemove', function (e) {
                var r = link.getBoundingClientRect();
                gsap.to(link, {
                    x: (e.clientX - (r.left + r.width / 2)) * 0.3,
                    y: (e.clientY - (r.top + r.height / 2)) * 0.3,
                    duration: 0.3
                });
            });
            link.addEventListener('mouseleave', function () {
                gsap.to(link, { x: 0, y: 0, duration: 0.3 });
            });
        });

    } catch (err) {
        console.warn('Animation error:', err);
    }
});

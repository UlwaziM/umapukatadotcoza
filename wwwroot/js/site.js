/**
 * Ulwazi Mapukata — Portfolio
 * Site interactions: navigation, scroll animations, case study toggles
 * Author: Ulwazi Mapukata
 */

(function () {
    'use strict';

    // --- Mobile Navigation Toggle ---
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close nav when a link is clicked
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Scroll Animations ---
    function handleScrollAnimations() {
        var elements = document.querySelectorAll('.animate-on-scroll');
        var windowHeight = window.innerHeight;
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var rect = el.getBoundingClientRect();
            if (rect.top < windowHeight - 80 && rect.bottom > 0) {
                el.classList.add('visible');
            }
        }
    }

    window.addEventListener('scroll', handleScrollAnimations, { passive: true });
    window.addEventListener('resize', handleScrollAnimations, { passive: true });
    // Initial check
    handleScrollAnimations();
    // Delayed check for layout shifts
    setTimeout(handleScrollAnimations, 200);

    // --- Case Study Toggles ---
    var toggles = document.querySelectorAll('.case-study-toggle');
    for (var i = 0; i < toggles.length; i++) {
        (function (toggle) {
            toggle.addEventListener('click', function () {
                var targetId = toggle.getAttribute('data-target');
                var detail = document.getElementById(targetId);
                if (!detail) return;

                var isActive = toggle.classList.contains('active');

                if (isActive) {
                    detail.style.maxHeight = null;
                    detail.classList.remove('open');
                    toggle.classList.remove('active');
                    toggle.setAttribute('aria-expanded', 'false');
                } else {
                    detail.style.maxHeight = detail.scrollHeight + 'px';
                    detail.classList.add('open');
                    toggle.classList.add('active');
                    toggle.setAttribute('aria-expanded', 'true');
                }
            });
        })(toggles[i]);
    }

    // --- Active Nav Highlight ---
    var sections = document.querySelectorAll('section[id]');
    function highlightNav() {
        var scrollPos = window.scrollY + 120;
        for (var i = sections.length - 1; i >= 0; i--) {
            var section = sections[i];
            if (section.offsetTop <= scrollPos) {
                var id = section.getAttribute('id');
                var links = document.querySelectorAll('.nav-links a');
                for (var j = 0; j < links.length; j++) {
                    var href = links[j].getAttribute('href');
                    if (href === '#' + id) {
                        links[j].style.color = 'var(--accent)';
                    } else {
                        links[j].style.color = '';
                    }
                }
                break;
            }
        }
    }

    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();

    // --- Nav Background on Scroll ---
    var nav = document.querySelector('.site-nav');
    function updateNavBg() {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(11, 15, 26, 0.97)';
            nav.style.borderBottomColor = 'rgba(200, 147, 58, 0.2)';
        } else {
            nav.style.background = 'rgba(11, 15, 26, 0.9)';
            nav.style.borderBottomColor = 'rgba(200, 147, 58, 0.15)';
        }
    }
    if (nav) {
        window.addEventListener('scroll', updateNavBg, { passive: true });
        updateNavBg();
    }

})();

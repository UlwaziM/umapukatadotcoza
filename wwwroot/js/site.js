/**
 * Ulwazi Mapukata — Portfolio
 * Site interactions: navigation, scroll animations, case study modal presentation
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
    handleScrollAnimations();
    setTimeout(handleScrollAnimations, 200);

    // --- Case Studies Data Repository ---
    const caseStudiesData = {
        pam: {
            category: "Fintech · Payroll Infrastructure · SaaS",
            title: "Payroll Aggregation by M-Works™ (PAM)",
            overview: "A multi-tenant payroll orchestration platform designed to streamline payroll execution, statutory obligations, payment initiation and reconciliation for businesses.",
            businessProblem: "Payroll processing in many South African businesses remains fragmented — statutory calculations, payment initiation and reconciliation are often handled across disconnected systems, leading to errors, compliance risks and operational delays.",
            engineeringChallenges: [
                "Designing a robust multi-tenant architecture with strict tenant data isolation.",
                "Implementing multi-stage payroll processing workflows complying with South African statutory regulations.",
                "Engineering secure payment integrations for initiating and reconciling bulk disbursements.",
                "Ensuring secure, audited REST API design with token-based authentication and role-based permissions.",
                "Creating automated deployment infrastructure for consistent release cycles."
            ],
            architecture: [
                "Multi-tenant architecture with tenant-scoped data access and per-tenant configuration.",
                "ASP.NET Core 9 backend utilising Entity Framework Core and PostgreSQL.",
                "Modern React and TypeScript frontend for operational payroll management, tenant configuration and reporting.",
                "Secure REST API layer with tenant isolation, rate limiting and validation.",
                "Containerised deployments using Docker and Podman with automated CI/CD pipelines."
            ],
            techStack: [
                "ASP.NET Core 9",
                "C#",
                "React",
                "TypeScript",
                "Entity Framework Core",
                "PostgreSQL",
                "REST APIs",
                "Docker",
                "Podman",
                "CI/CD"
            ],
            outcomes: [
                "Functional payroll orchestration engine supporting end-to-end statutory payment workflows.",
                "Secure, tenant-isolated API layer supporting multi-tenant operations.",
                "Automated containerised deployment infrastructure (Docker / Podman) for reliable testing and rapid delivery."
            ],
            disclaimer: "PAM is a product developed under M-Works™ by Fakade Innovations (Pty) Ltd."
        },
        tshapisa: {
            category: "Business Operations · Multi-Tenant SaaS",
            title: "Tshapisa",
            overview: "A white-label business platform designed to help businesses manage online sales, services, customer interactions and operational workflows through configurable merchant storefronts.",
            businessProblem: "Small and medium enterprises frequently lack affordable, unified platforms to manage digital storefronts, service booking catalogues, customer orders, payment processing and fulfilment from a single management console.",
            engineeringChallenges: [
                "Architecting a multi-tenant platform supporting custom branding and domain routing per merchant.",
                "Designing flexible schemas for diverse product and service catalogues.",
                "Integrating secure payment gateways with automatic transaction routing and reconciliation.",
                "Integrating third-party logistics (3PL) providers for order fulfilment and tracking.",
                "Supporting real-time ordering and service booking workflows with merchant-specific configuration."
            ],
            architecture: [
                "Multi-tenant architecture with merchant-specific configuration, customizable themes and white-label storefronts.",
                "Type-safe data layer using TypeScript and Prisma ORM backed by PostgreSQL.",
                "Modular, responsive frontend built with Next.js 15 (App Router) and styled with Tailwind CSS.",
                "Asynchronous workflows for order lifecycle, payment webhook processing and logistics fulfilment.",
                "Containerised environment using Podman for reproducible development and lightweight deployment."
            ],
            techStack: [
                "TypeScript",
                "Next.js 15 (App Router)",
                "Prisma",
                "PostgreSQL",
                "Tailwind CSS",
                "Podman"
            ],
            outcomes: [
                "Multi-tenant foundation with isolated merchant configurations and customizable storefront interfaces.",
                "Unified handling of product retail catalogues and service appointment bookings.",
                "Reliable integration points for payment processing and logistics fulfilment."
            ],
            disclaimer: "Tshapisa is a product being developed under M-Works™ by Fakade Innovations (Pty) Ltd."
        },
        rmt: {
            category: "Enterprise Fintech · Payments",
            title: "Retailer Money Transfer Platform",
            overview: "A mission-critical payment platform developed during my time at Absa, supporting national retail partners with money transfers, high-volume transaction processing, automated reconciliation and remediation.",
            businessProblem: "National retail partners required a secure, high-availability financial platform enabling in-store money transfer services across widespread retail networks, requiring real-time settlement, multi-system integration, transaction reconciliation and rapid exception remediation.",
            engineeringChallenges: [
                "Maintaining 99.9% platform availability for mission-critical payment infrastructure.",
                "Scaling transaction pipelines to reliably process over 1 million transactions per month without latency degradation.",
                "Integrating complex legacy and modern banking systems with external retail partner APIs.",
                "Designing fault-tolerant reconciliation and automated remediation workflows for failed or disputed transactions.",
                "Ensuring rigorous financial compliance, auditability and end-to-end data encryption."
            ],
            architecture: [
                "High-performance payment processing engine built with C#, .NET and ASP.NET Core.",
                "Highly optimized SQL Server database layer utilizing Entity Framework for transactional integrity and audit logging.",
                "Enterprise integration layer with secure endpoints, mutual TLS and robust authentication.",
                "Deployed on high-availability IIS clusters with load balancing, SSL termination and regular disaster recovery testing.",
                "Real-time observability and health monitoring powered by Grafana and New Relic dashboards."
            ],
            techStack: [
                "C# / .NET",
                "ASP.NET Core",
                "SQL Server",
                "Entity Framework",
                "IIS",
                "Azure DevOps"
            ],
            outcomes: [
                "Consistently maintained 99.9% platform availability across peak retail trading cycles.",
                "Successfully supported platform processing in excess of 1 million monthly transactions.",
                "Substantially improved deployment automation, system observability and MTTR (Mean Time to Resolution)."
            ],
            disclaimer: "This platform was developed during my tenure at Absa Bank Limited. Clearly distinguished as enterprise banking engineering experience; no proprietary banking architecture or confidential source code is disclosed."
        }
    };

    // --- Helper for safe text rendering ---
    function escapeHtml(text) {
        if (!text) return '';
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // --- Modal DOM Elements & State ---
    const modal = document.getElementById('case-study-modal');
    const modalCategory = document.getElementById('modal-project-category');
    const modalTitle = document.getElementById('modal-project-title');
    const modalBody = document.getElementById('modal-project-body');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    let lastActiveTrigger = null;

    function renderCaseStudy(data) {
        if (!modalCategory || !modalTitle || !modalBody) return;

        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;

        let html = '';

        // 1. Overview
        html += '<div class="modal-section">';
        html += '<h4 class="modal-section-title">Overview</h4>';
        html += '<p>' + escapeHtml(data.overview) + '</p>';
        html += '</div>';

        // 2. Business Problem
        html += '<div class="modal-section">';
        html += '<h4 class="modal-section-title">Business Problem</h4>';
        html += '<p>' + escapeHtml(data.businessProblem) + '</p>';
        html += '</div>';

        // 3. Engineering Challenges
        html += '<div class="modal-section">';
        html += '<h4 class="modal-section-title">Engineering Challenges</h4>';
        html += '<ul>';
        data.engineeringChallenges.forEach(function (challenge) {
            html += '<li>' + escapeHtml(challenge) + '</li>';
        });
        html += '</ul>';
        html += '</div>';

        // 4. Architecture & Implementation
        html += '<div class="modal-section">';
        html += '<h4 class="modal-section-title">Architecture & Implementation</h4>';
        html += '<ul>';
        data.architecture.forEach(function (arch) {
            html += '<li>' + escapeHtml(arch) + '</li>';
        });
        html += '</ul>';
        html += '</div>';

        // 5. Technology Stack
        html += '<div class="modal-section">';
        html += '<h4 class="modal-section-title">Technology Stack</h4>';
        html += '<div class="modal-tech-list">';
        data.techStack.forEach(function (tech) {
            html += '<span class="modal-tech-badge">' + escapeHtml(tech) + '</span>';
        });
        html += '</div>';
        html += '</div>';

        // 6. Key Outcomes
        html += '<div class="modal-section">';
        html += '<h4 class="modal-section-title">Key Outcomes</h4>';
        html += '<ul>';
        data.outcomes.forEach(function (outcome) {
            html += '<li>' + escapeHtml(outcome) + '</li>';
        });
        html += '</ul>';
        html += '</div>';

        // Disclaimer / Attribution Note
        if (data.disclaimer) {
            html += '<p class="modal-disclaimer">' + escapeHtml(data.disclaimer) + '</p>';
        }

        modalBody.innerHTML = html;
        modalBody.scrollTop = 0;
    }

    function openModal(projectKey, triggerElement) {
        const data = caseStudiesData[projectKey];
        if (!data || !modal) return;

        lastActiveTrigger = triggerElement;
        renderCaseStudy(data);

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        // Focus close button for accessibility
        if (modalCloseBtn) {
            modalCloseBtn.focus();
        }
    }

    function closeModal() {
        if (!modal || !modal.classList.contains('is-open')) return;

        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');

        // Return focus to the triggering button
        if (lastActiveTrigger && typeof lastActiveTrigger.focus === 'function') {
            lastActiveTrigger.focus();
        }
        lastActiveTrigger = null;
    }

    // Bind triggers on project cards
    const caseStudyButtons = document.querySelectorAll('.btn-case-study');
    caseStudyButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const key = btn.getAttribute('data-project-key');
            openModal(key, btn);
        });
    });

    // Close button click
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function (e) {
            e.preventDefault();
            closeModal();
        });
    }

    // Backdrop click (click outside modal container)
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Keyboard navigation: Escape key & focus trapping
    document.addEventListener('keydown', function (e) {
        if (!modal || !modal.classList.contains('is-open')) return;

        // Escape closes modal
        if (e.key === 'Escape' || e.keyCode === 27) {
            e.preventDefault();
            closeModal();
            return;
        }

        // Tab trap inside modal dialog
        if (e.key === 'Tab' || e.keyCode === 9) {
            const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusables.length === 0) return;

            const firstFocusable = focusables[0];
            const lastFocusable = focusables[focusables.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });

    // --- Active Nav Highlight ---
    const sections = document.querySelectorAll('section[id]');
    function highlightNav() {
        const scrollPos = window.scrollY + 120;
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section.offsetTop <= scrollPos) {
                const id = section.getAttribute('id');
                const links = document.querySelectorAll('.nav-links a');
                for (let j = 0; j < links.length; j++) {
                    const href = links[j].getAttribute('href');
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
    const nav = document.querySelector('.site-nav');
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

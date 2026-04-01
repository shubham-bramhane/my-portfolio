(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
    "[project]/Desktop/google antigravity/my-portfolio/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => Navbar
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        'use client';
        ;
        const navItems = [
            {
                label: 'Home',
                id: 'hero'
            },
            {
                label: 'About',
                id: 'about'
            },
            {
                label: 'Skills',
                id: 'skills'
            },
            {
                label: 'Projects',
                id: 'projects'
            },
            {
                label: 'Journey',
                id: 'experience'
            },
            {
                label: 'Contact',
                id: 'contact'
            }
        ];
        function Navbar() {
            _s();
            const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hero');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "Navbar.useEffect": () => {
                    const handleScroll = {
                        "Navbar.useEffect.handleScroll": () => {
                            setScrolled(window.scrollY > 50);
                            const sections = document.querySelectorAll('section[id]');
                            let current = 'hero';
                            sections.forEach({
                                "Navbar.useEffect.handleScroll": (section) => {
                                    const el = section;
                                    if (window.scrollY >= el.offsetTop - 120) {
                                        current = el.getAttribute('id') || 'hero';
                                    }
                                }
                            }["Navbar.useEffect.handleScroll"]);
                            setActive(current);
                        }
                    }["Navbar.useEffect.handleScroll"];
                    window.addEventListener('scroll', handleScroll);
                    return ({
                        "Navbar.useEffect": () => window.removeEventListener('scroll', handleScroll)
                    })["Navbar.useEffect"];
                }
            }["Navbar.useEffect"], []);
            const scrollTo = (id) => {
                const target = document.getElementById(id);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
                setMenuOpen(false);
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "navbar",
                className: `navbar${scrolled ? ' scrolled' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-container",
                    children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#hero",
                        className: "nav-logo",
                        onClick: (e) => {
                            e.preventDefault();
                            scrollTo('hero');
                        },
                        children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "logo-bracket",
                            children: "<"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Navbar.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                            "SB",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "logo-bracket",
                                children: "/>"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Navbar.tsx",
                                lineNumber: 49,
                                columnNumber: 55
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Navbar.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: `nav-links${menuOpen ? ' open' : ''}`,
                        children: navItems.map((item) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `nav-link${active === item.id ? ' active' : ''}`,
                                onClick: () => scrollTo(item.id),
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Navbar.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Navbar.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Navbar.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `nav-toggle${menuOpen ? ' active' : ''}`,
                        onClick: () => setMenuOpen(!menuOpen),
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hamburger"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Navbar.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Navbar.tsx",
                    lineNumber: 47,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Navbar.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, this);
        }
        _s(Navbar, "9qR0/xLlTnoq3lcm4IkqMvDRmig=");
        _c = Navbar;
        var _c;
        __turbopack_context__.k.register(_c, "Navbar");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/Desktop/google antigravity/my-portfolio/data/profile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "experience",
            () => experience,
            "profile",
            () => profile,
            "projects",
            () => projects,
            "skills",
            () => skills
        ]);
        const profile = {
            name: "Shubham Bramhane",
            title: "Laravel Developer & Full-Stack Engineer",
            tagline: "Building Robust, Scalable Web Applications",
            email: "shubham.bramhane75@gmail.com",
            phone: "+91 8857916707",
            location: "Chandrapur, Maharashtra",
            website: "https://shubhambramhane.in",
            education: "B.E. Computer Engineering (CSE)",
            languages: "English, Hindi, Marathi",
            yearsOfExperience: 4,
            projectsCompleted: 15,
            happyClients: 10,
            bio: "Highly skilled and dedicated Laravel Developer with four years of extensive experience in designing, developing, and maintaining web applications. Proficient in leveraging the Laravel framework to create robust, scalable solutions. Demonstrated expertise in back-end development, database design, RESTful API integration, and front-end collaboration.",
            bioExtended: "Known for a meticulous approach to writing clean, maintainable code and a commitment to following best practices in security and data protection. When not coding, I explore new technologies and build side projects.",
            available: true,
            social: {
                github: "https://github.com/shubham-bramhane",
                linkedin: "https://linkedin.com/in/shubham1602",
                twitter: "https://twitter.com",
                website: "https://shubhambramhane.in"
            }
        };
        const skills = [
            {
                category: "Backend",
                icon: "⚙️",
                items: [
                    {
                        name: "PHP / Laravel",
                        level: 95
                    },
                    {
                        name: "RESTful APIs",
                        level: 92
                    },
                    {
                        name: "MySQL / Database Design",
                        level: 88
                    },
                    {
                        name: "Python",
                        level: 75
                    },
                    {
                        name: "MVC Architecture",
                        level: 90
                    },
                    {
                        name: "Security Best Practices",
                        level: 82
                    }
                ]
            },
            {
                category: "Frontend",
                icon: "🎨",
                items: [
                    {
                        name: "Vue.js / Vuex",
                        level: 85
                    },
                    {
                        name: "HTML / CSS / JavaScript",
                        level: 90
                    },
                    {
                        name: "Bootstrap / Tailwind",
                        level: 88
                    },
                    {
                        name: "Blade Templates",
                        level: 92
                    },
                    {
                        name: "Vue Router",
                        level: 83
                    },
                    {
                        name: "Responsive Design",
                        level: 87
                    }
                ]
            },
            {
                category: "Tools & DevOps",
                icon: "🛠️",
                items: [
                    {
                        name: "Git / GitHub",
                        level: 90
                    },
                    {
                        name: "Linux / cPanel",
                        level: 80
                    },
                    {
                        name: "DevOps Practices",
                        level: 75
                    },
                    {
                        name: "Testing & Debugging",
                        level: 85
                    },
                    {
                        name: "Postman / API Testing",
                        level: 88
                    },
                    {
                        name: "Agile / Team Collab",
                        level: 80
                    }
                ]
            }
        ];
        const projects = [
            {
                id: 1,
                title: "Oncquest Healthcare",
                description: "Led the development of a comprehensive healthcare management system for Oncquest, utilizing Laravel and Vue.js. Built dynamic interfaces with Vuex state management and Vue Router for efficient navigation.",
                tags: [
                    "Laravel",
                    "Vue.js",
                    "Vuex",
                    "MySQL",
                    "RESTful API"
                ],
                category: "web",
                github: "https://github.com/shubham-bramhane",
                live: "#",
                color: "#10b981",
                period: "2023–2024"
            },
            {
                id: 2,
                title: "Krayin CRM Package",
                description: "Designed and developed a custom package for Krayin CRM using Vue.js and Laravel to extend core functionalities. Built a reusable, modular package streamlining integration within the CRM ecosystem.",
                tags: [
                    "Laravel",
                    "Vue.js",
                    "CRM",
                    "Package Dev",
                    "MySQL"
                ],
                category: "web",
                github: "https://github.com/shubham-bramhane",
                live: "#",
                color: "#6366f1",
                period: "2023–2024"
            },
            {
                id: 3,
                title: "TMS – Big Basket",
                description: "Managed trainer and participant data for a training management system for Big Basket, ensuring effective organization and utilization of resources.",
                tags: [
                    "Laravel",
                    "PHP",
                    "MySQL",
                    "Bootstrap"
                ],
                category: "web",
                github: "https://github.com/shubham-bramhane",
                live: "https://bbtms.zentumsampro.in/",
                color: "#f59e0b",
                period: "2023–2024"
            },
            {
                id: 4,
                title: "Lal Path Labs Website",
                description: "Developed and maintained the Lal Path Labs website, ensuring seamless user experience and functionality for one of India's leading diagnostic chains.",
                tags: [
                    "Laravel",
                    "Vue.js",
                    "MySQL",
                    "SEO"
                ],
                category: "web",
                github: "https://github.com/shubham-bramhane",
                live: "https://www.lalpathlabs.com/",
                color: "#f43f5e",
                period: "2023–2024"
            },
            {
                id: 5,
                title: "LPL Bangladesh Admin",
                description: "Developed and managed the administrative panel for LPL Bangladesh, including SEO management for enhancing online visibility and search engine rankings.",
                tags: [
                    "Laravel",
                    "PHP",
                    "Admin Panel",
                    "SEO",
                    "MySQL"
                ],
                category: "web",
                github: "https://github.com/shubham-bramhane",
                live: "https://lpl-bangladesh-admin.abyntech.com/admin",
                color: "#8b5cf6",
                period: "2023–2024"
            },
            {
                id: 6,
                title: "Magical Umbrella Website",
                description: "Developed and maintained the Magical Umbrella website using Python, ensuring user-friendly design and functionality with optimized SQL queries and RESTful API integrations.",
                tags: [
                    "Python",
                    "Django",
                    "MySQL",
                    "REST API"
                ],
                category: "web",
                github: "https://github.com/shubham-bramhane",
                live: "https://magicalumbrella.com/",
                color: "#06b6d4",
                period: "2020–2021"
            }
        ];
        const experience = [
            {
                id: 1,
                type: "work",
                title: "Laravel Developer",
                organization: "Abym Technologies Pvt. Ltd., Noida",
                period: "2023 – Present",
                description: "Developed and maintained web applications using the Laravel framework. Collaborated with front-end developers to integrate user-facing elements with server-side logic.",
                highlights: [
                    "RESTful API integration",
                    "Database optimization",
                    "Code reviews & mentorship"
                ]
            },
            {
                id: 2,
                type: "work",
                title: "Laravel Developer",
                organization: "Finsoft Technologies Pvt. Ltd., Noida",
                period: "2022 – 2023",
                description: "Developed scalable web applications using the Laravel framework, enhancing functionality and user experience. Designed robust database schemas and optimized SQL queries.",
                highlights: [
                    "Scalable Laravel apps",
                    "SQL query optimization",
                    "Third-party APIs"
                ]
            },
            {
                id: 3,
                type: "work",
                title: "Python Developer",
                organization: "Magical Umbrella Pvt. Ltd.",
                period: "2021 – 2022",
                description: "Developed scalable web applications using Python, integrating user interfaces with back-end logic and designing robust database schemas.",
                highlights: [
                    "Python web apps",
                    "REST API development",
                    "Database design"
                ]
            },
            {
                id: 4,
                type: "education",
                title: "Bachelor of Engineering (CSE)",
                organization: "Shree Sai College of Engineering and Technology, Bhadrawati – 442505",
                period: "2016 – 2020",
                description: "Specialized in software development, algorithms, and data structures. Developed a final year project on Virtual Mouse Implementation using OpenCV.",
                highlights: [
                    "Percentage: 74.6%",
                    "Final project: OpenCV",
                    "Hackathons"
                ]
            },
            {
                id: 5,
                type: "education",
                title: "Higher Secondary Certificate (HSC)",
                organization: "Janata Junior College, Ghugus",
                period: "2015 – 2016",
                description: "Completed HSC with a focus on Science stream. Achieved strong academic results.",
                highlights: [
                    "Percentage: 71.69%"
                ]
            },
            {
                id: 6,
                type: "education",
                title: "Secondary School Certificate (SSC)",
                organization: "Janata Vidyalaya, Ghugus",
                period: "2013 – 2014",
                description: "Completed SSC with excellent academic performance.",
                highlights: [
                    "Percentage: 72.60%"
                ]
            }
        ];
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => Hero
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/data/profile.ts [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        'use client';
        ;
        ;
        function Hero() {
            _s();
            const countRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
            const stats = [
                {
                    count: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].yearsOfExperience,
                    label: 'Years Exp.'
                },
                {
                    count: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].projectsCompleted,
                    label: 'Projects'
                },
                {
                    count: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].happyClients,
                    label: 'Happy Clients'
                }
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "Hero.useEffect": () => {
                    const animateCount = {
                        "Hero.useEffect.animateCount": (el, target) => {
                            const duration = 2000;
                            const start = performance.now();
                            const update = {
                                "Hero.useEffect.animateCount.update": (currentTime) => {
                                    const elapsed = currentTime - start;
                                    const progress = Math.min(elapsed / duration, 1);
                                    const eased = 1 - Math.pow(1 - progress, 3);
                                    el.textContent = Math.floor(eased * target).toString();
                                    if (progress < 1) requestAnimationFrame(update);
                                    else el.textContent = target.toString();
                                }
                            }["Hero.useEffect.animateCount.update"];
                            requestAnimationFrame(update);
                        }
                    }["Hero.useEffect.animateCount"];
                    const observer = new IntersectionObserver({
                        "Hero.useEffect": (entries) => {
                            entries.forEach({
                                "Hero.useEffect": (entry) => {
                                    if (entry.isIntersecting) {
                                        countRefs.current.forEach({
                                            "Hero.useEffect": (el, i) => {
                                                if (el) animateCount(el, stats[i].count);
                                            }
                                        }["Hero.useEffect"]);
                                        observer.disconnect();
                                    }
                                }
                            }["Hero.useEffect"]);
                        }
                    }["Hero.useEffect"], {
                        threshold: 0.5
                    });
                    const statsEl = document.getElementById('hero-stats');
                    if (statsEl) observer.observe(statsEl);
                    // Cursor glow
                    const glow = document.getElementById('cursor-glow');
                    if (glow && window.matchMedia('(pointer: fine)').matches) {
                        const move = {
                            "Hero.useEffect.move": (e) => {
                                glow.style.left = `${e.clientX}px`;
                                glow.style.top = `${e.clientY}px`;
                                glow.classList.add('active');
                            }
                        }["Hero.useEffect.move"];
                        const leave = {
                            "Hero.useEffect.leave": () => glow.classList.remove('active')
                        }["Hero.useEffect.leave"];
                        document.addEventListener('mousemove', move);
                        document.addEventListener('mouseleave', leave);
                        return ({
                            "Hero.useEffect": () => {
                                document.removeEventListener('mousemove', move);
                                document.removeEventListener('mouseleave', leave);
                                observer.disconnect();
                            }
                        })["Hero.useEffect"];
                    }
                    return ({
                        "Hero.useEffect": () => observer.disconnect()
                    })["Hero.useEffect"];
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                }
            }["Hero.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hero",
                className: "hero-section",
                children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-bg-effects",
                    children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gradient-orb orb-1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gradient-orb orb-2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gradient-orb orb-3"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-overlay"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                    lineNumber: 70,
                    columnNumber: 7
                }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-content",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-badge",
                            id: "hero-badge",
                            children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge-dot"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Available for work"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "hero-title",
                            id: "hero-title",
                            children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero-greeting",
                                children: "Hello, I'm"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero-name",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero-tagline",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                            lineNumber: 85,
                            columnNumber: 9
                        }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hero-description",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].bio.substring(0, 160),
                                "..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                            lineNumber: 91,
                            columnNumber: 9
                        }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-cta",
                            children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#projects",
                                className: "btn btn-primary",
                                onClick: (e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "View My Work"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 12h14M12 5l7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "btn btn-secondary",
                                onClick: (e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Get In Touch"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                            lineNumber: 95,
                            columnNumber: 9
                        }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-stats",
                            id: "hero-stats",
                            children: stats.map((stat, i) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "stat-number",
                                    ref: (el) => {
                                        countRefs.current[i] = el;
                                    },
                                    children: "0"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "stat-suffix",
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "stat-label",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                            lineNumber: 115,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                    lineNumber: 77,
                    columnNumber: 7
                }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scroll-indicator",
                    id: "scroll-indicator",
                    children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Scroll Down"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scroll-arrow"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                    lineNumber: 131,
                    columnNumber: 7
                }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cursor-glow",
                    id: "cursor-glow"
                }, void 0, false, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                    lineNumber: 136,
                    columnNumber: 7
                }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Hero.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, this);
        }
        _s(Hero, "F9NTwKf8vFqKXNQ7wTv7HROS7BA=");
        _c = Hero;
        var _c;
        __turbopack_context__.k.register(_c, "Hero");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => About
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/data/profile.ts [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        'use client';
        ;
        ;
        const details = [
            {
                icon: '📍',
                label: 'Location',
                value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location
            },
            {
                icon: '🎓',
                label: 'Education',
                value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].education
            },
            {
                icon: '💼',
                label: 'Experience',
                value: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].yearsOfExperience}+ Years`
            },
            {
                icon: '🌐',
                label: 'Languages',
                value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].languages
            }
        ];
        function About() {
            _s();
            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "About.useEffect": () => {
                    const observer = new IntersectionObserver({
                        "About.useEffect": (entries) => {
                            entries.forEach({
                                "About.useEffect": (entry) => {
                                    if (entry.isIntersecting) entry.target.classList.add('visible');
                                }
                            }["About.useEffect"]);
                        }
                    }["About.useEffect"], {
                        threshold: 0.1,
                        rootMargin: '0px 0px -50px 0px'
                    });
                    const el = ref.current;
                    if (el) {
                        el.querySelectorAll('.reveal').forEach({
                            "About.useEffect": (r) => observer.observe(r)
                        }["About.useEffect"]);
                    }
                    return ({
                        "About.useEffect": () => observer.disconnect()
                    })["About.useEffect"];
                }
            }["About.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                className: "section about-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    ref: ref,
                    children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-header reveal",
                        children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "section-tag",
                            children: "Get to know me"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: [
                                "About ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Me"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                    lineNumber: 38,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about-grid",
                        children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-image-wrapper reveal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about-image-container",
                                id: "about-image",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-avatar",
                                    children: "SB"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "image-decoration dec-1"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "image-decoration dec-2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-content reveal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "about-text",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].bio
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "about-text",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].bioExtended
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about-details",
                                children: details.map((d) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "detail-item",
                                    children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "detail-icon",
                                        children: d.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                        lineNumber: 58,
                                        columnNumber: 19
                                    }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "detail-label",
                                            children: d.label
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                            lineNumber: 60,
                                            columnNumber: 21
                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "detail-value",
                                            children: d.value
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                            lineNumber: 61,
                                            columnNumber: 21
                                        }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, this)
                                    ]
                                }, d.label, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                className: "btn btn-primary",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Let's Connect"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 12h14M12 5l7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                    lineNumber: 34,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/About.tsx",
                lineNumber: 33,
                columnNumber: 5
            }, this);
        }
        _s(About, "8uVE59eA/r6b92xF80p7sH8rXLk=");
        _c = About;
        var _c;
        __turbopack_context__.k.register(_c, "About");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => Skills
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/data/profile.ts [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        'use client';
        ;
        ;
        function Skills() {
            _s();
            const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "Skills.useEffect": () => {
                    const observer = new IntersectionObserver({
                        "Skills.useEffect": (entries) => {
                            entries.forEach({
                                "Skills.useEffect": (entry) => {
                                    if (entry.isIntersecting) {
                                        entry.target.classList.add('visible');
                                        // Animate skill bars
                                        const bars = entry.target.querySelectorAll('.skill-bar-fill');
                                        bars.forEach({
                                            "Skills.useEffect": (bar) => {
                                                const width = bar.getAttribute('data-width');
                                                setTimeout({
                                                    "Skills.useEffect": () => {
                                                        bar.style.width = `${width}%`;
                                                    }
                                                }["Skills.useEffect"], 200);
                                            }
                                        }["Skills.useEffect"]);
                                    }
                                }
                            }["Skills.useEffect"]);
                        }
                    }["Skills.useEffect"], {
                        threshold: 0.1
                    });
                    const el = containerRef.current;
                    if (el) {
                        el.querySelectorAll('.skill-category').forEach({
                            "Skills.useEffect": (cat) => {
                                cat.classList.add('reveal');
                                observer.observe(cat);
                            }
                        }["Skills.useEffect"]);
                    }
                    return ({
                        "Skills.useEffect": () => observer.disconnect()
                    })["Skills.useEffect"];
                }
            }["Skills.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "skills",
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-header",
                        children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "section-tag",
                            children: "What I do"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: [
                                "My ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Skills"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                                    lineNumber: 45,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skills-categories reveal-stagger",
                        ref: containerRef,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].map((category) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skill-category",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "category-header",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "category-icon",
                                    children: category.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "category-title",
                                    children: category.category
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                                category.items.map((skill) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skill-item",
                                    children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "skill-info",
                                        children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "skill-name",
                                            children: skill.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                                            lineNumber: 59,
                                            columnNumber: 21
                                        }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "skill-percent",
                                            children: [
                                                skill.level,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                                            lineNumber: 60,
                                            columnNumber: 21
                                        }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                                        lineNumber: 58,
                                        columnNumber: 19
                                    }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "skill-bar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skill-bar-fill",
                                            "data-width": skill.level,
                                            style: {
                                                width: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                                            lineNumber: 63,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this)
                                    ]
                                }, skill.name, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this))
                            ]
                        }, category.category, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                    lineNumber: 41,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Skills.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, this);
        }
        _s(Skills, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
        _c = Skills;
        var _c;
        __turbopack_context__.k.register(_c, "Skills");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => Projects
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/data/profile.ts [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        'use client';
        ;
        ;
        const filters = [
            'all',
            'web',
            'mobile',
            'design'
        ];
        function Projects() {
            _s();
            const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
            const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const [filtered, setFiltered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"]);
            const handleFilter = (filter) => {
                if (filter === activeFilter) return;
                setIsTransitioning(true);
                setTimeout(() => {
                    setActiveFilter(filter);
                    setFiltered(filter === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p) => p.category === filter));
                    setIsTransitioning(false);
                }, 250);
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "projects",
                className: "section projects-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-header",
                        children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "section-tag",
                            children: "My work"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: [
                                "Featured ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Projects"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                    lineNumber: 28,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "projects-filter",
                        children: filters.map((f) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `filter-btn${activeFilter === f ? ' active' : ''}`,
                            onClick: () => handleFilter(f),
                            children: f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)
                        }, f, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "projects-grid",
                        style: {
                            opacity: isTransitioning ? 0 : 1,
                            transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)'
                        },
                        children: filtered.map((project) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "project-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "project-image",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "project-image-bg",
                                    style: {
                                        background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)`
                                    },
                                    children: project.title.split(' ')[0]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "project-period",
                                    children: project.period
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "project-overlay",
                                    children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.github,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "project-overlay-btn",
                                        "aria-label": "GitHub",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                                lineNumber: 72,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this),
                                        project.live && project.live !== '#' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.live,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "project-overlay-btn",
                                            "aria-label": "Live Demo",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 25
                                                }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "15 3 21 3 21 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 25
                                                }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "10",
                                                    y1: "14",
                                                    x2: "21",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 25
                                                }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                                lineNumber: 83,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                            lineNumber: 76,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "project-content",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "project-title",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "project-description",
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "project-tags",
                                    children: project.tags.map((tag) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "project-tag",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                        lineNumber: 98,
                                        columnNumber: 21
                                    }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                    lineNumber: 24,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Projects.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, this);
        }
        _s(Projects, "UiRPD73lQPdUK1ZMeHUiI4ksBWc=");
        _c = Projects;
        var _c;
        __turbopack_context__.k.register(_c, "Projects");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => Experience
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/data/profile.ts [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        'use client';
        ;
        ;
        function Experience() {
            _s();
            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "Experience.useEffect": () => {
                    const observer = new IntersectionObserver({
                        "Experience.useEffect": (entries) => {
                            entries.forEach({
                                "Experience.useEffect": (entry) => {
                                    if (entry.isIntersecting) entry.target.classList.add('visible');
                                }
                            }["Experience.useEffect"]);
                        }
                    }["Experience.useEffect"], {
                        threshold: 0.1,
                        rootMargin: '0px 0px -50px 0px'
                    });
                    const el = ref.current;
                    if (el) {
                        el.querySelectorAll('.timeline-item').forEach({
                            "Experience.useEffect": (item) => {
                                item.classList.add('reveal');
                                observer.observe(item);
                            }
                        }["Experience.useEffect"]);
                    }
                    return ({
                        "Experience.useEffect": () => observer.disconnect()
                    })["Experience.useEffect"];
                }
            }["Experience.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "experience",
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-header",
                        children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "section-tag",
                            children: "My journey"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: [
                                "Experience & ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Education"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                                    lineNumber: 34,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "timeline",
                        ref: ref,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].map((item) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "timeline-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "timeline-dot"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "timeline-card",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `timeline-type ${item.type}`,
                                    children: item.type
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "timeline-title",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "timeline-org",
                                    children: item.organization
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "timeline-period",
                                    children: item.period
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "timeline-description",
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "timeline-highlights",
                                    children: item.highlights.map((h) =>/*#__PURE__*/(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "timeline-highlight",
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                                        lineNumber: 50,
                                        columnNumber: 21
                                    }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Experience.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this);
        }
        _s(Experience, "8uVE59eA/r6b92xF80p7sH8rXLk=");
        _c = Experience;
        var _c;
        __turbopack_context__.k.register(_c, "Experience");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => Contact
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/data/profile.ts [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        'use client';
        ;
        ;
        function Contact() {
            _s();
            const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
            const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            const handleSubmit = async (e) => {
                e.preventDefault();
                setSending(true);
                setError('');
                try {
                    const res = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(form)
                    });
                    if (!res.ok) {
                        const data = await res.json();
                        throw new Error(data.error || 'Failed to send message');
                    }
                    setSubmitted(true);
                } catch (err) {
                    setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
                } finally {
                    setSending(false);
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "section contact-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-header",
                        children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "section-tag",
                            children: "Get in touch"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: [
                                "Contact ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Me"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 42,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-grid",
                        children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "contact-subtitle",
                                children: "Let's work together"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "contact-text",
                                children: "I'm always open to new opportunities and interesting projects. Feel free to reach out!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-details",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-detail-item",
                                    children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "2",
                                                y: "4",
                                                width: "20",
                                                height: "16",
                                                rx: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                                lineNumber: 58,
                                                columnNumber: 21
                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                                lineNumber: 59,
                                                columnNumber: 21
                                            }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contact-detail-label",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                            className: "contact-detail-value",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-detail-item",
                                    children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                                lineNumber: 71,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contact-detail-label",
                                            children: "Phone"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone}`,
                                            className: "contact-detail-value",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-detail-item",
                                    children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "10",
                                                r: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                                lineNumber: 84,
                                                columnNumber: 21
                                            }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contact-detail-label",
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contact-detail-value",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-detail-item",
                                    children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                                lineNumber: 96,
                                                columnNumber: 21
                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 12h20"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contact-detail-label",
                                            children: "Website"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].website,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "contact-detail-value",
                                            children: "shubhambramhane.in"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "social-links",
                                children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].social.github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-link",
                                    "aria-label": "GitHub",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "22",
                                        height: "22",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].social.linkedin,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-link",
                                    "aria-label": "LinkedIn",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "22",
                                        height: "22",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].website,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-link",
                                    "aria-label": "Website",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "22",
                                        height: "22",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M2 12h20"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-form-wrapper",
                            children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-form",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-success",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-success-icon",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 136,
                                        columnNumber: 19
                                    }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Message Sent!"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 137,
                                        columnNumber: 19
                                    }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Thank you for reaching out. I'll get back to you soon!"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "contact-form",
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "form-name",
                                        className: "form-label",
                                        children: "Your Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 144,
                                        columnNumber: 19
                                    }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "form-name",
                                        className: "form-input",
                                        placeholder: "John Doe",
                                        required: true,
                                        value: form.name,
                                        onChange: (e) => setForm({
                                            ...form,
                                            name: e.target.value
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 145,
                                        columnNumber: 19
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "form-email",
                                        className: "form-label",
                                        children: "Your Email"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        id: "form-email",
                                        className: "form-input",
                                        placeholder: "john@example.com",
                                        required: true,
                                        value: form.email,
                                        onChange: (e) => setForm({
                                            ...form,
                                            email: e.target.value
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 157,
                                        columnNumber: 19
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "form-subject",
                                        className: "form-label",
                                        children: "Subject"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 168,
                                        columnNumber: 19
                                    }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "form-subject",
                                        className: "form-input",
                                        placeholder: "Project collaboration",
                                        value: form.subject,
                                        onChange: (e) => setForm({
                                            ...form,
                                            subject: e.target.value
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 169,
                                        columnNumber: 19
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "form-message",
                                        className: "form-label",
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 179,
                                        columnNumber: 19
                                    }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "form-message",
                                        className: "form-input form-textarea",
                                        placeholder: "Tell me about your project...",
                                        rows: 5,
                                        required: true,
                                        value: form.message,
                                        onChange: (e) => setForm({
                                            ...form,
                                            message: e.target.value
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 180,
                                        columnNumber: 19
                                    }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn btn-primary btn-full",
                                    disabled: sending,
                                    children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: sending ? 'Sending...' : 'Send Message'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 191,
                                        columnNumber: 19
                                    }, this),
                                        !sending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m22 2-7 20-4-9-9-4z"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                                lineNumber: 194,
                                                columnNumber: 23
                                            }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m22 2-11 11"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                                lineNumber: 195,
                                                columnNumber: 23
                                            }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                            lineNumber: 193,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                    lineNumber: 190,
                                    columnNumber: 17
                                }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#f43f5e',
                                            marginTop: '16px',
                                            textAlign: 'center',
                                            fontSize: '0.9rem'
                                        },
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                        lineNumber: 200,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                    lineNumber: 38,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Contact.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this);
        }
        _s(Contact, "gfrzF1VZIN9nPEem8uhEEr4hzYo=");
        _c = Contact;
        var _c;
        __turbopack_context__.k.register(_c, "Contact");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => Footer
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/google antigravity/my-portfolio/data/profile.ts [app-client] (ecmascript)");
        ;
        var _s = __turbopack_context__.k.signature();
        'use client';
        ;
        ;
        function Footer() {
            _s();
            const [showTop, setShowTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "Footer.useEffect": () => {
                    const handleScroll = {
                        "Footer.useEffect.handleScroll": () => setShowTop(window.scrollY > 500)
                    }["Footer.useEffect.handleScroll"];
                    window.addEventListener('scroll', handleScroll);
                    return ({
                        "Footer.useEffect": () => window.removeEventListener('scroll', handleScroll)
                    })["Footer.useEffect"];
                }
            }["Footer.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "footer",
                    id: "footer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-content",
                            children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "footer-logo",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "logo-bracket",
                                    children: "<"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this),
                                    "SB",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "logo-bracket",
                                        children: "/>"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx",
                                        lineNumber: 20,
                                        columnNumber: 59
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "footer-text",
                                children: [
                                    "Designed & built with ❤️ by ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "footer-copyright",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx",
                    lineNumber: 16,
                    columnNumber: 7
                }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `back-to-top${showTop ? ' visible' : ''}`,
                    onClick: () => window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    }),
                    "aria-label": "Back to top",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$google__antigravity$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18 15l-6-6-6 6"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/google antigravity/my-portfolio/components/Footer.tsx",
                    lineNumber: 28,
                    columnNumber: 7
                }, this)
                ]
            }, void 0, true);
        }
        _s(Footer, "4fP+p2ymIOQsAxbtEpYXJu40FKk=");
        _c = Footer;
        var _c;
        __turbopack_context__.k.register(_c, "Footer");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
]);

//# sourceMappingURL=Desktop_google%20antigravity_my-portfolio_0nyshp~._.js.map
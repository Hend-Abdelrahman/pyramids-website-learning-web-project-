document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');

    mobileMenuBtn.addEventListener('click', function () {
        mobileSidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    sidebarClose.addEventListener('click', function () {
        mobileSidebar.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close sidebar when clicking on a link
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileSidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Language Switcher
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const langLinks = document.querySelectorAll('.language-dropdown a');

    // Toggle language dropdown
    languageBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
        languageDropdown.classList.remove('show');
    });

    // Prevent dropdown from closing when clicking inside
    languageDropdown.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    // Complete translations object with all text elements
    const translations = {
        en: {
            // Navigation
            "page_title": "Technical Staff - Pyramids FC",
            "home": "Home",
            "Technical staff": "Technical Staff",
            "team": "Team",
            "kit": "Kit",
            "trophies": "Trophies",
            "about": "About",
            "contact": "Contact",
            "english": "English",
            "arabic": "Arabic",
            "club_name": "Pyramids FC",

            // Hero Section
            "coaching_staff": "Technical staff",
            "coaching_subtitle": "The masterminds behind our success",
            "discover_more": "Discover More",

            // Coaches Section
            "coaches_title": "Coaching Staff",

            // Technical Staff Positions
            "Rehabilitation Coach": "Rehabilitation Coach",
            "Head Coach": "Head Coach",
            "Goalkeeping Coach": "Goalkeeping Coach",
            "Assistant Coach": "Assistant Coach",
            "Coach": "Coach",
            "Fitness Coach": "Fitness Coach",
            "Administrative Director": "Administrative Director",
            "Administrator": "Administrator",
            "Team Doctor": "Team Doctor",
            "Translator": "Translator",

            // Coaches Names
            "Marin Mandarić": "Marin Mandarić",
            "Kreslav Yuric": "Kreslav Yuric",
            "Khaled Abdullah": "Khaled Abdullah",
            "Josip Omrčen Čeko": "Josip Omrčen Čeko",
            "Filipe Jaime": "Filipe Jaime",
            "Mahmoud Fathallah": "Mahmoud Fathallah",
            "Zvonko Komes": "Zvonko Komes",
            "Ahmed Zaher": "Ahmed Zaher",
            "Sharif Gamal": "Sharif Gamal",
            "Mohamed Nagy “Gedo”": "Mohamed Nagy “Gedo”",
            "Mohamed Taher": "Mohamed Taher",
            "Sami Abaza": "Sami Abaza",
            "Dr. Mustafa El-Meniri": "Dr. Mustafa El-Meniri",
            "Mahmoud Ali": "Mahmoud Ali",

            // Footer
            "quick_links": "Quick Links",
            "contact_info": "Contact Info",
            "club_address": "Air Defense Stadium, Cairo, Egypt",
            "office_hours": "Office Hours: 9AM - 5PM (GMT+2)",
            "footer_desc": "Pyramids FC is a professional Egyptian football club based in Cairo. Founded in 2018, we have quickly established ourselves as one of Africa's most ambitious clubs.",
            "newsletter": "Newsletter",
            "newsletter_desc": "Subscribe to our newsletter for the latest club news and updates.",
            "email_placeholder": "Your Email Address",
            "subscribe": "Subscribe",
            "copyright": "© 2025 Pyramids FC. All Rights Reserved.",
            "year": "2025",
            "all_rights": "All Rights Reserved",
            

            // Alt texts
            "logo_alt": "Pyramids FC Logo"
        },
        ar: {
            // Navigation
            "page_title": "الجهاز الفني - نادي بيراميدز",
            "home": "الرئيسية",
            "Technical staff": "الجهاز الفني",
            "team": "الفريق",
            "kit": "الزي الرسمي",
            "trophies": "الجوائز",
            "about": "عن النادي",
            "contact": "اتصل بنا",
            "english": "الإنجليزية",
            "arabic": "العربية",
            "club_name": "نادي بيراميدز",

            // Hero Section
            "coaching_staff": "الجهاز الفني",
            "coaching_subtitle": "العقول المدبرة وراء نجاحنا",
            "discover_more": "اكتشف المزيد",

            // Coaches Section
            "coaches_title": "الجهاز الفني",

            // Technical Staff Positions
            "Rehabilitation Coach": "مدرب إعادة تأهيل",
            "Head Coach": "مدرب رئيسي",
            "Goalkeeping Coach": "مدرب حراس مرمى",
            "Assistant Coach": "مدرب مساعد",
            "Coach": "مدرب",
            "Fitness Coach": "مدرب لياقة بدنية",
            "Administrative Director": "مدير إداري",
            "Administrator": "مشرف إداري",
            "Team Doctor": "طبيب الفريق",
            "Translator": "مترجم",
            // Coaches Names
            "Marin Mandarić": "مارين مانداريتش",
            "Kreslav Yuric": "كرسلاف يوريتش",
            "Khaled Abdullah": "خالد عبدالله",
            "Josip Omrčen Čeko": "يوسيب أومرتشين تشيكو",
            "Filipe Jaime": "فيليبي جايمي",
            "Mahmoud Fathallah": "محمود فتح الله",
            "Zvonko Komes": "زفونكو كوميس",
            "Ahmed Zaher": "أحمد زاهر",
            "Sharif Gamal": "شريف جمال",
            "Mohamed Nagy “Gedo”": "محمد ناجي 'جدو'",
            "Mohamed Taher": "محمد طاهر",
            "Sami Abaza": "سامي عباشة",
            "Dr. Mustafa El-Meniri": "د. مصطفى المنيري",
            "Mahmoud Ali": "محمود علي",

            // Footer
            "quick_links": "روابط سريعة",
            "contact_info": "معلومات الاتصال",
            "club_address": "ملعب الدفاع الجوي، القاهرة، مصر",
            "office_hours": "ساعات العمل: 9 صباحًا - 5 مساءً (توقيت القاهرة)",
            "footer_desc": "نادي بيراميدز هو نادي كرة قدم مصري محترف مقره القاهرة. تأسس عام 2018، وسرعان ما أصبح أحد أكثر الأندية طموحًا في أفريقيا.",
            "newsletter": "النشرة الإخبارية",
            "newsletter_desc": "اشترك في نشرتنا الإخبارية للحصول على آخر أخبار النادي.",
            "email_placeholder": "بريدك الإلكتروني",
            "subscribe": "اشتراك",
            "copyright": "© ٢٠٢٥ نادي بيراميدز. جميع الحقوق محفوظة.",
            "year": "٢٠٢٥",
            "all_rights": "جميع الحقوق محفوظة",
            
            // Alt texts
            "logo_alt": "شعار نادي بيراميدز"
        }
    };

    // Enhanced change language function with better error handling
    function changeLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found in translations`);
            return;
        }

        // Set direction and language attribute
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        // Update button text
        if (languageBtn) {
            languageBtn.innerHTML = lang === 'ar' ? 'العربية <i class="fas fa-chevron-down"></i>' : 'EN <i class="fas fa-chevron-down"></i>';
        }

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}"`);
            }
        });

        // Update copyright
        const copyrightElement = document.querySelector('.copyright p');
        if (copyrightElement) {
            copyrightElement.innerHTML = `&copy; <span data-i18n="year">${translations[lang].year}</span> <span data-i18n="club_name">${translations[lang].club_name}</span>. <span data-i18n="all_rights">${translations[lang].all_rights}</span> | <span data-i18n="designed_by">${translations[lang].designed_by}</span>`;

            // Update the spans inside copyright
            copyrightElement.querySelector('[data-i18n="year"]').textContent = translations[lang].year;
            copyrightElement.querySelector('[data-i18n="club_name"]').textContent = translations[lang].club_name;
            copyrightElement.querySelector('[data-i18n="all_rights"]').textContent = translations[lang].all_rights;
            copyrightElement.querySelector('[data-i18n="designed_by"]').textContent = translations[lang].designed_by;
        }

        // Update page title
        document.title = translations[lang].page_title || 'Pyramids FC - Technical Staff';

        // Update all image alt attributes
        document.querySelectorAll('[data-i18n-alt]').forEach(img => {
            const altKey = img.getAttribute('data-i18n-alt');
            if (translations[lang][altKey]) {
                img.alt = translations[lang][altKey];
            }
        });

        // Store selected language
        localStorage.setItem('selectedLanguage', lang);

        // Dispatch event for any additional language change handlers
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
    }

    // Language selection event
    langLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLanguage);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add animation to coach cards when they come into view
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.coach-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    document.querySelectorAll('.coach-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Add styles for scroll to top button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #FF6B00;
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        body[dir="rtl"] .scroll-to-top {
            right: auto;
            left: 30px;
        }
        
        .scroll-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            background-color: #E05D00;
            transform: translateY(-3px);
        }
    `;
    document.head.appendChild(style);
});
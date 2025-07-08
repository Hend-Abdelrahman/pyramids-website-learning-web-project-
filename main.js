document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');

    if (mobileMenuBtn && mobileSidebar) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (sidebarClose && mobileSidebar) {
        sidebarClose.addEventListener('click', function () {
            mobileSidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close sidebar when clicking on a link
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (mobileSidebar) {
                mobileSidebar.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Hero Slider with Auto-Play and Manual Controls
    const sliderInit = function () {
        const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.querySelector('.slider-dots');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentSlide = 0;
        let slideInterval;
        const slideDuration = 5000; // 5 seconds

        if (!slides.length || !dotsContainer) return;

        // Create dots for each slide
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        // Function to show a specific slide
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        // Function to go to next slide
        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        // Function to go to previous slide
        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        // Function to go to specific slide
        function goToSlide(n) {
            showSlide(n);
            resetInterval();
        }

        // Function to start auto-slide
        function startInterval() {
            slideInterval = setInterval(nextSlide, slideDuration);
        }

        // Function to reset interval
        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        // Event listeners for buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });
        }

        // Pause on hover
        const sliderContainer = document.querySelector('.hero-slider');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });

            sliderContainer.addEventListener('mouseleave', () => {
                resetInterval();
            });
        }

        // Start auto-slide
        startInterval();
    };

    sliderInit();

    // Language Switcher
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const langLinks = document.querySelectorAll('.language-dropdown a');

    // Complete translations object with all text elements
    const translations = {
        en: {
            // Navigation
            "page_title": "Home - Pyramids FC",
            "home": "Home",
            "technical_staff": "Technical Staff",
            "team": "Team",
            "kit": "Kit",
            "trophies": "Trophies",
            "about": "About",
            "contact": "Contact",
            "english": "English",
            "arabic": "Arabic",
            "club_name": "Pyramids FC",
            "section-title": "Latest Club News",

            // Hero Section
            "hero_title": "Welcome to Pyramids FC",
            "hero_subtitle": "One of Egypt's top clubs with a vision for continental dominance.",
            "discover_more": "Discover More",
            "team_title": "First Team",
            "team_subtitle": "Meet our professional squad",
            "meet_team": "Meet the Team",
            "stadium_title": "Our Stadium",
            "stadium_subtitle": "The home of Pyramids FC",
            "view_full_team": "View Full Team",

            // Team Section
            "first_team": "First Team Players",
            "position_gk": "Goalkeeper",
            "position_def": "Defender",
            "position_mid": "Midfielder",
            "position_fw": "Forward",
            "player_ahmed": "Ahmed El Shenawy",
            "player_ali": "Ali Gabr",
            "player_abdallah": "Abdallah El Said",
            "player_fakhri": "Kareem Eltayeb",

            // Trophies Section
            "our_achievements": "Our Achievements",
            "caf_cl": "CAF Champions League",
            "finalist_2025": "Finalist 2025",
            "egypt_cup": "Egypt Cup",
            "winners_2022": "Winners 2022",
            "latest_news_title": "Latest Club News",
            "news_title_1": "Pyramids Lose Egypt Cup Final to Zamalek",
            "news_content_1": "Pyramids drew 1–1 with Zamalek but lost 7–8 on penalties in the Egypt Cup final.",
            "news_title_2": "Pyramids Win First CAF Champions League Title",
            "news_content_2": "Pyramids defeated Mamelodi Sundowns 2–1 in Cairo to win 3–2 on aggregate.",
            "news_title_3": "Pyramids Thrash Ceramica 5–1 in League Match",
            "news_content_3": "In a dominant performance, Pyramids FC secured a 5–1 victory over Ceramica Cleopatra.",
            "section-title": "Latest Club News",
            "news_title_1": "Pyramids Lose Egypt Cup Final to Zamalek",
            "news_content_1": "Pyramids drew 1–1 with Zamalek but lost 7–8 on penalties in the Egypt Cup final.",
            "news_title_2": "Pyramids Win First CAF Champions League Title",
            "news_content_2": "Pyramids defeated Mamelodi Sundowns 2–1 in Cairo to win 3–2 on aggregate and claim their maiden title.",
            "news_title_3": "Pyramids Thrash Ceramica 5–1 in League Match",
            "news_content_3": "In a dominant performance, Pyramids FC secured a 5–1 victory over Ceramica Cleopatra in the Egyptian Premier League.",
            "news_date_1": "5 June 2025",
            "news_date_2": "1 June 2025",
            "news_date_3": "28 May 2025",
            "news_image_alt_1": "Egypt Cup Final match",
            "news_image_alt_2": "CAF Champions League celebration",
            "news_image_alt_3": "League match action",
            // Sponsors
            "official_sponsors": "Official Sponsors",

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
            "technical_staff": "Technical Staff",
            "year": "2025",
            "all_rights": "All Rights Reserved",

            // Alt texts
            "logo_alt": "Pyramids FC Logo",
            "player_ahmed_alt": "Ahmed El Shenawy - Goalkeeper",
            "player_ali_alt": "Ali Gabr - Defender",
            "player_abdallah_alt": "Abdallah El Said - Midfielder",
            "player_fakhri_alt": "Kareem Eltayeb - Forward",
            "trophy_caf_alt": "CAF Champions League Trophy",
            "trophy_egypt_cup_alt": "Egypt Cup Trophy",
            "sponsor1_alt": "Official Sponsor 1",
            "sponsor2_alt": "Official Sponsor 2",
            "sponsor3_alt": "Official Sponsor 3",
            "sponsor4_alt": "Official Sponsor 4",
            "sponsor5_alt": "Official Sponsor 5",
            "sponsor6_alt": "Official Sponsor 6"
        },
        ar: {
            // Navigation
            "page_title": "بيراميدز - الصفحة الرئيسية",
            "home": "الرئيسية",
            "technical_staff": "الجهاز الفني",
            "team": "الفريق",
            "kit": "الزي الرسمي",
            "trophies": "الجوائز",
            "about": "عن النادي",
            "contact": "اتصل بنا",
            "english": "الإنجليزية",
            "arabic": "العربية",
            "club_name": "نادي بيراميدز",
            "section-title": "آخر أخبار النادي",

            // Hero Section
            "hero_title": "مرحبًا بكم في نادي بيراميدز",
            "hero_subtitle": "أحد أبرز أندية مصر برؤية للهيمنة القارية.",
            "discover_more": "اكتشف المزيد",
            "team_title": "الفريق الأول",
            "team_subtitle": "تعرف على فريقنا المحترف",
            "meet_team": "قابل الفريق",
            "stadium_title": "ملعبنا",
            "stadium_subtitle": "ملعب نادي بيراميدز",
            "view_full_team": "عرض الفريق بالكامل",
            "latest_news_title": "آخر أخبار النادي",
            "news_title_1": "خسارة بيراميدز نهائي كأس مصر أمام الزمالك",
            "news_content_1": "تعادل بيراميدز مع الزمالك 1-1 وخسر 7-8 بركلات الترجيح في نهائي كأس مصر.",
            "news_title_2": "بيراميدز يفوز بدوري أبطال أفريقيا لأول مرة",
            "news_content_2": "تغلب بيراميدز على ماميلودي صن داونز 2-1 في القاهرة ليفوز 3-2 في مجموع المباراتين.",
            "news_title_3": "بيراميدز يهزم سيراميكا 5-1 في الدوري",
            "news_content_3": "سجل بيراميدز انتصارًا كبيرًا على سيراميكا كليوباترا بنتيجة 5-1 في الدوري المصري.",


            // Team Section
            "first_team": "لاعبو الفريق الأول",
            "position_gk": "حارس مرمى",
            "position_def": "مدافع",
            "position_mid": "لاعب وسط",
            "position_fw": "مهاجم",
            "player_ahmed": "أحمد الشناوي",
            "player_ali": "علي جبر",
            "player_abdallah": "عبد الله السعيد",
            "player_fakhri": "كريم الطيب",

            // Trophies Section
            "our_achievements": "إنجازاتنا",
            "caf_cl": "دوري أبطال أفريقيا",
            "finalist_2025": "الوصيف 2025",
            "egypt_cup": "كأس مصر",
            "winners_2022": "الفائز 2022",
            "section-title": "آخر أخبار النادي",
            "news_title_1": "خسارة بيراميدز نهائي كأس مصر أمام الزمالك",
            "news_content_1": "تعادل بيراميدز مع الزمالك 1-1 وخسر 7-8 بركلات الترجيح في نهائي كأس مصر.",
            "news_title_2": "بيراميدز يفوز بدوري أبطال أفريقيا لأول مرة",
            "news_content_2": "تغلب بيراميدز على ماميلودي صن داونز 2-1 في القاهرة ليفوز 3-2 في مجموع المباراتين ويحقق لقبه الأول.",
            "news_title_3": "بيراميدز يهزم سيراميكا 5-1 في الدوري",
            "news_content_3": "سجل بيراميدز انتصارًا كبيرًا على سيراميكا كليوباترا بنتيجة 5-1 في الدوري المصري الممتاز.",
            "news_date_1": "٥ يونيو ٢٠٢٥",
            "news_date_2": "١ يونيو ٢٠٢٥",
            "news_date_3": "٢٨ مايو ٢٠٢٥",
            "news_image_alt_1": "مباراة نهائي كأس مصر",
            "news_image_alt_2": "احتفالات بطولة دوري الأبطال",
            "news_image_alt_3": "أحداث مباراة الدوري",

            // Sponsors
            "official_sponsors": "الرعاة الرسميون",

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
            "technical_staff": "الجهاز الفني",
            "year": "٢٠٢٥",
            "all_rights": "جميع الحقوق محفوظة",

            // Alt texts
            "logo_alt": "شعار نادي بيراميدز",
            "player_ahmed_alt": "أحمد الشناوي - حارس مرمى",
            "player_ali_alt": "علي جبر - مدافع",
            "player_abdallah_alt": "عبد الله السعيد - لاعب وسط",
            "player_fakhri_alt": "كريم الطيب - مهاجم",
            "trophy_caf_alt": "كأس دوري أبطال أفريقيا",
            "trophy_egypt_cup_alt": "كأس مصر",
            "sponsor1_alt": "الراعي الرسمي 1",
            "sponsor2_alt": "الراعي الرسمي 2",
            "sponsor3_alt": "الراعي الرسمي 3",
            "sponsor4_alt": "الراعي الرسمي 4",
            "sponsor5_alt": "الراعي الرسمي 5",
            "sponsor6_alt": "الراعي الرسمي 6"
        }
    };

    // Enhanced change language function
    function changeLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found in translations`);
            return;
        }
        // news
        const newsSectionTitle = document.querySelector('.news-section h2');
        if (newsSectionTitle && translations[lang].latest_news_title) {
            newsSectionTitle.textContent = translations[lang].latest_news_title;
        }
        // Set direction and language attribute
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        // Update button text
        if (languageBtn) {
            languageBtn.innerHTML = lang === 'ar' ? 'العربية <i class="fas fa-chevron-down"></i>' : 'English <i class="fas fa-chevron-down"></i>';
        }

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.hasAttribute('title')) {
                    element.title = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}"`);
            }
        });

        // Update image alt attributes
        document.querySelectorAll('[data-i18n-alt]').forEach(img => {
            const altKey = img.getAttribute('data-i18n-alt');
            if (translations[lang][altKey]) {
                img.alt = translations[lang][altKey];
            }
        });

        // Update page title
        document.title = translations[lang].page_title || 'Pyramids FC';

        // Store selected language
        localStorage.setItem('selectedLanguage', lang);

        // Dispatch event for any additional language change handlers
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
    }

    // Language selection event
    if (langLinks) {
        langLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                if (languageDropdown) {
                    languageDropdown.classList.remove('show');
                }
            });
        });
    }

    // Toggle language dropdown
    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
        if (languageDropdown) {
            languageDropdown.classList.remove('show');
        }
    });

    // Prevent dropdown from closing when clicking inside
    if (languageDropdown) {
        languageDropdown.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

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

    // Add animation to elements when they come into view
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.news-card, .player-card, .trophy-card');

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
    document.querySelectorAll('.news-card, .player-card, .trophy-card').forEach(element => {
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
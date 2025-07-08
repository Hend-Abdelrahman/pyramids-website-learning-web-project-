document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');
    
    if (mobileMenuBtn && mobileSidebar) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (sidebarClose && mobileSidebar) {
        sidebarClose.addEventListener('click', function() {
            mobileSidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close sidebar when clicking on a link
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileSidebar) {
                mobileSidebar.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Language Switcher
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const langLinks = document.querySelectorAll('.language-dropdown a');
    
    // Complete translations object with all text elements
    const translations = {
        en: {
            // Navigation
            "page_title": "Pyramids FC - Club Honors",
            "club_name": "Pyramids FC",
            "home": "Home",
            "Coaches": "Coaches",
            "team": "Team",
            "kit": "Kit",
            "trophies": "Trophies",
            "about": "About",
            "contact": "Contact",
            "english": "English",
            "arabic": "Arabic",

            // Hero Section
            "achievements_title": "Our Achievements",
            "achievements_subtitle": "Celebrating the club's proudest moments",

            // Trophies Section
            "club_honors": "Club Honors",
            "confederation_title": "CAF Confederation Cup",
            "confederation_runner": "Runner-up: 2020",
            "confederation_desc": "Our first continental final appearance, marking a historic achievement for the club.",
            "confederation_image_alt": "CAF Confederation Cup trophy",
            "egyptian_title": "Egyptian Cup",
            "egyptian_runner": "Runner-up: 2019, 2021",
            "egyptian_desc": "Strong performances in Egypt's premier cup competition.",
            "egyptian_image_alt": "Egyptian Cup trophy",
            "super_title": "Egyptian Super Cup",
            "super_runner": "Runner-up: 2020",
            "super_desc": "Competed against league champions in the season opener.",
            "super_image_alt": "Egyptian Super Cup trophy",
            "arab_title": "Arab Club Championship",
            "arab_runner": "Semi-finalists: 2021",
            "arab_desc": "Impressive run in the prestigious regional tournament.",
            "arab_image_alt": "Arab Club Championship trophy",

            // History Section
            "our_journey": "Our Journey",
            "establishment": "Club Establishment",
            "establishment_desc": "Pyramids FC was founded with ambitious goals to compete at the highest levels of Egyptian and African football.",
            "first_final": "First Egyptian Cup Final",
            "first_final_desc": "Reached our first major domestic final in just our second season.",
            "continental_success": "Continental Success",
            "continental_success_desc": "Historic run to the CAF Confederation Cup final, establishing ourselves as a continental force.",
            "new_stadium": "New Stadium",
            "new_stadium_desc": "Moved to our state-of-the-art Air Defense Stadium, providing world-class facilities for players and fans.",

            // Latest News Section
            "section-title": "Latest Club News",
            "news_title_1": "Pyramids Lose Egypt Cup Final to Zamalek",
            "news_content_1": "Pyramids drew 1–1 with Zamalek but lost 7–8 on penalties in the Egypt Cup final.",
            "news_date_1": "5 June 2025",
            "news_image_alt_1": "Egypt Cup Final match",
            "news_title_2": "Pyramids Win First CAF Champions League Title",
            "news_content_2": "Pyramids defeated Mamelodi Sundowns 2–1 in Cairo to win 3–2 on aggregate and claim their maiden title.",
            "news_date_2": "1 June 2025",
            "news_image_alt_2": "CAF Champions League celebration",
            "news_title_3": "Pyramids Thrash Ceramica 5–1 in League Match",
            "news_content_3": "In a dominant performance, Pyramids FC secured a 5–1 victory over Ceramica Cleopatra in the Egyptian Premier League.",
            "news_date_3": "28 May 2025",
            "news_image_alt_3": "League match action",

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
            "copyright": "© 2023 Pyramids FC. All Rights Reserved.",
            "year": "2023",
            "all_rights": "All Rights Reserved",

            // Alt texts
            "logo_alt": "Pyramids FC Logo"
        },
        ar: {
            // Navigation
            "page_title": "نادي بيراميدز - الألقاب و الجوائز",
            "club_name": "نادي بيراميدز",
            "home": "الرئيسية",
            "Coaches": "الجهاز الفني",
            "team": "الفريق",
            "kit": "الزي الرسمي",
            "trophies": "الجوائز",
            "about": "عن النادي",
            "contact": "اتصل بنا",
            "english": "الإنجليزية",
            "arabic": "العربية",

            // Hero Section
            "achievements_title": "إنجازاتنا",
            "achievements_subtitle": "نحتفل بأفخر لحظات النادي",

            // Trophies Section
            "club_honors": "ألقاب النادي",
            "confederation_title": "كأس الكونفيدرالية الأفريقية",
            "confederation_runner": "الوصيف: 2020",
            "confederation_desc": "أول ظهور لنا في نهائي قاري، يمثل إنجازًا تاريخيًا للنادي.",
            "confederation_image_alt": "كأس الكونفيدرالية الأفريقية",
            "egyptian_title": "كأس مصر",
            "egyptian_runner": "الوصيف: 2019، 2021",
            "egyptian_desc": "أداء قوي في بطولة الكأس المصرية الرئيسية.",
            "egyptian_image_alt": "كأس مصر",
            "super_title": "كأس السوبر المصري",
            "super_runner": "الوصيف: 2020",
            "super_desc": "تنافسنا ضد أبطال الدوري في مباراة بداية الموسم.",
            "super_image_alt": "كأس السوبر المصري",
            "arab_title": "بطولة الأندية العربية",
            "arab_runner": "نصف النهائي: 2021",
            "arab_desc": "أداء متميز في البطولة الإقليمية المرموقة.",
            "arab_image_alt": "بطولة الأندية العربية",

            // History Section
            "our_journey": "رحلتنا",
            "establishment": "تأسيس النادي",
            "establishment_desc": "تأسس نادي بيراميدز بأهداف طموحة للتنافس على أعلى المستويات في كرة القدم المصرية والأفريقية.",
            "first_final": "أول نهائي لكأس مصر",
            "first_final_desc": "وصلنا إلى أول نهائي محوري كبير في موسمنا الثاني فقط.",
            "continental_success": "النجاح القاري",
            "continental_success_desc": "وصول تاريخي إلى نهائي كأس الكونفيدرالية الأفريقية، مما يؤسس لنا كقوة قارية.",
            "new_stadium": "الملعب الجديد",
            "new_stadium_desc": "انتقلنا إلى ملعب الدفاع الجوي الحديث، الذي يوفر مرافق عالمية المستوى للاعبين والجماهير.",

            // Latest News Section
            "section-title": "آخر أخبار النادي",
            "news_title_1": "خسارة بيراميدز نهائي كأس مصر أمام الزمالك",
            "news_content_1": "تعادل بيراميدز مع الزمالك 1-1 وخسر 7-8 بركلات الترجيح في نهائي كأس مصر.",
            "news_date_1": "٥ يونيو ٢٠٢٥",
            "news_image_alt_1": "مباراة نهائي كأس مصر",
            "news_title_2": "بيراميدز يفوز بدوري أبطال أفريقيا لأول مرة",
            "news_content_2": "تغلب بيراميدز على ماميلودي صن داونز 2-1 في القاهرة ليفوز 3-2 في مجموع المباراتين ويحقق لقبه الأول.",
            "news_date_2": "١ يونيو ٢٠٢٥",
            "news_image_alt_2": "احتفالات بطولة دوري الأبطال",
            "news_title_3": "بيراميدز يهزم سيراميكا 5-1 في الدوري",
            "news_content_3": "سجل بيراميدز انتصارًا كبيرًا على سيراميكا كليوباترا بنتيجة 5-1 في الدوري المصري الممتاز.",
            "news_date_3": "٢٨ مايو ٢٠٢٥",
            "news_image_alt_3": "أحداث مباراة الدوري",

            
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
            "copyright": "© ٢٠٢٣ نادي بيراميدز. جميع الحقوق محفوظة.",
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
        document.body.style.fontFamily = lang === 'ar' ? "'Tajawal', sans-serif" : "'Montserrat', sans-serif";

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
                } else if (element.hasAttribute('title')) {
                    element.title = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}"`);
            }
        });

        // Update all image alt attributes
        document.querySelectorAll('[data-i18n-alt]').forEach(img => {
            const altKey = img.getAttribute('data-i18n-alt');
            if (translations[lang][altKey]) {
                img.alt = translations[lang][altKey];
            }
        });

        // Update page title
        document.title = translations[lang].page_title || 'Pyramids FC - Club Honors';

        // Store selected language
        localStorage.setItem('selectedLanguage', lang);

        // Dispatch event for any additional language change handlers
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
    }

    // Language selection event
    if (langLinks) {
        langLinks.forEach(link => {
            link.addEventListener('click', function(e) {
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
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        if (languageDropdown) {
            languageDropdown.classList.remove('show');
        }
    });

    // Prevent dropdown from closing when clicking inside
    if (languageDropdown) {
        languageDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLanguage);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.trophy-card, .timeline-item, .news-card');
        
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
    document.querySelectorAll('.trophy-card, .timeline-item, .news-card').forEach(element => {
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
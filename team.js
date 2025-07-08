document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileSidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    sidebarClose.addEventListener('click', function() {
        mobileSidebar.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close sidebar when clicking on a link
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a, .sidebar-language a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileSidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Team Filter Functionality
    const teamCategories = document.querySelectorAll('.team-category');
    const playerCards = document.querySelectorAll('.player-card');
    
    teamCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove active class from all buttons
            teamCategories.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Show/hide players based on category
            playerCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Language Switcher
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const langLinks = document.querySelectorAll('.language-dropdown a, .sidebar-language a');
    
    // Toggle language dropdown
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        languageDropdown.classList.remove('show');
    });
    
    // Prevent dropdown from closing when clicking inside
    languageDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Complete translations object with all text elements
    const translations = {
        en: {
            // Navigation
            "page_title": "Pyramids FC - Official Team",
            "club_name": "Pyramids FC",
            "home": "Home",
            "Technical staff": "Technical Staff",
            "team": "Team",
            "kit": "Kit",
            "trophies": "Trophies",
            "about": "About",
            "contact": "Contact",
            "english": "English",
            "arabic": "Arabic",

            // Team Page
            "team_title": "First Team",
            "team_subtitle": "Meet our professional squad",
            "all_players": "All Players",
            "goalkeepers": "Goalkeepers",
            "defenders": "Defenders",
            "midfielders": "Midfielders",
            "forwards": "Forwards",
            "squad_title": "Squad 2023/24",
            "technical_staff": "Technical Staff",

            // Players
            "player_elshenawy": "Ahmed El-Shennawy",
            "player_ekramy": "Sherif Ekramy",
            "player_mayhoub": "Ahmed Mayhoub",
            "player_nader": "Youssef Nader",
            "player_ali": "Ali Gabr",
            "player_galal": "Osama Galal",
            "player_sami": "Ahmad Sami",
            "player_gouda": "Abdelrahman Gouda",
            "player_marie": "Mahmoud Marie",
            "player_fathi": "Ahmad Fathi",
            "player_hafez": "Karim Hafez",
            "player_chibi": "Mohamed Chibi",
            "player_tawfik": "Ahmed Tawfik",
            "player_hamdy": "Mohammed Hamdy",
            "player_karti": "Walid Karti",
            "player_mfathi": "Mostafa Fathi",
            "player_dunga": "Mahmoud Dunga",
            "player_eissa": "Islam Eissa",
            "player_adel": "Ibrahim Adel",
            "player_ojo": "Samuel Ojo",
            "player_lashin": "Mohannad Lashin",
            "player_sobhi": "Ramadan Sobhi",
            "player_toure": "Blati Toure",
            "player_alsaid": "Abdullah Al-Said",
            "player_lakay": "Fakhri Lakay",
            "player_eltayeb": "Kareem Eltayeb",
            "player_algabbas": "Dodo Al-Gabbas",
            "player_mayele": "Fiston Mayele",

            // Positions
            "position_gk": "Goalkeeper",
            "position_cb": "Center Back",
            "position_lb": "Left Back",
            "position_rb": "Right Back",
            "position_dm": "Defensive Midfielder",
            "position_cm": "Central Midfielder",
            "position_am": "Attacking Midfielder",
            "position_winger": "Winger",
            "position_striker": "Striker",

            // Footer
            "footer_desc": "Pyramids FC is a professional Egyptian football club based in Cairo. Founded in 2018, we have quickly established ourselves as one of Africa's most ambitious clubs.",
            "quick_links": "Quick Links",
            "contact_info": "Contact Info",
            "club_address": "June 30 Stadium, Marshal Tantawi axis in the 5th Settlement",
            "office_hours": "Office Hours: 9AM - 5PM (GMT+2)",
            "newsletter": "Newsletter",
            "newsletter_desc": "Subscribe to our newsletter for the latest club news and updates.",
            "email_placeholder": "Your Email Address",
            "subscribe": "Subscribe",
            "copyright": "© 2025 Pyramids FC. All Rights Reserved.",
            "year": "2023",
            "all_rights": "All Rights Reserved",
            
            // Alt texts
            "logo_alt": "Pyramids FC Logo"
        },
        ar: {
            // Navigation
            "page_title": "نادي بيراميدز - الفريق الرسمي",
            "club_name": "نادي بيراميدز",
            "home": "الرئيسية",
            "Technical staff": "الجهاز الفني",
            "team": "الفريق",
            "kit": "الزي الرسمي",
            "trophies": "الجوائز",
            "about": "عن النادي",
            "contact": "اتصل بنا",
            "english": "الإنجليزية",
            "arabic": "العربية",

            // Team Page
            "team_title": "الفريق الأول",
            "team_subtitle": "تعرف على فريقنا المحترف",
            "all_players": "جميع اللاعبين",
            "goalkeepers": "حراس المرمى",
            "defenders": "الدفاع",
            "midfielders": "خط الوسط",
            "forwards": "الهجوم",
            "squad_title": "تشكيلة 2023/24",
            "technical_staff": "الجهاز الفني",

            // Players
            "player_elshenawy": "أحمد الشناوي",
            "player_ekramy": "شريف إكرامي",
            "player_mayhoub": "أحمد ماهوب",
            "player_nader": "يوسف نادر",
            "player_ali": "علي جبر",
            "player_galal": "أسامة جلال",
            "player_sami": "أحمد سامي",
            "player_gouda": "عبدالرحمن جودة",
            "player_marie": "محمود ماري",
            "player_fathi": "أحمد فتحي",
            "player_hafez": "كريم حافظ",
            "player_chibi": "محمد شيبى",
            "player_tawfik": "أحمد توفيق",
            "player_hamdy": "محمد حمدي",
            "player_karti": "وليد كرتي",
            "player_mfathi": "مصطفى فتحي",
            "player_dunga": "محمود دنقا",
            "player_eissa": "إسلام عيسى",
            "player_adel": "إبراهيم عادل",
            "player_ojo": "صامويل أوجو",
            "player_lashin": "مهند لاشين",
            "player_sobhi": "رمضان صبحي",
            "player_toure": "بلاتي توري",
            "player_alsaid": "عبدالله السعيد",
            "player_lakay": "فخري لاكاي",
            "player_eltayeb": "كريم الطيب",
            "player_algabbas": "دودو الغباس",
            "player_mayele": "فيستون ماييلي",

            // Positions
            "position_gk": "حارس مرمى",
            "position_cb": "قلب دفاع",
            "position_lb": "ظهير أيسر",
            "position_rb": "ظهير أيمن",
            "position_dm": "وسط مدافع",
            "position_cm": "وسط ملعب",
            "position_am": "وسط هجومي",
            "position_winger": "جناح",
            "position_striker": "مهاجم",

            // Footer
            "footer_desc": "نادي بيراميدز هو نادي كرة قدم مصري محترف مقره القاهرة. تأسس عام 2018، وسرعان ما أصبح أحد أكثر الأندية طموحًا في أفريقيا.",
            "quick_links": "روابط سريعة",
            "contact_info": "معلومات الاتصال",
            "club_address": "ملعب 30 يونيو، محور طنطاوي الخامس بالتجمع الخامس",
            "office_hours": "ساعات العمل: 9 صباحًا - 5 مساءً (توقيت القاهرة)",
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
        document.title = translations[lang].page_title || 'Pyramids FC - Official Team';

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
        link.addEventListener('click', function(e) {
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

    // Add animation to player cards when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.player-card');

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
    document.querySelectorAll('.player-card').forEach(element => {
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
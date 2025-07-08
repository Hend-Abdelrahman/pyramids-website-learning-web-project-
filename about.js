document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Language Switcher
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const langLinks = document.querySelectorAll('.language-dropdown a');
    
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
            "page_title": "Pyramids FC - About Us",
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

            // Hero Section
            "about_title": "About Pyramids FC",
            "about_subtitle": "Our history, vision, and values",

            // About Section
            "our_story": "Our Story",
            "about_para1": "Founded in 2018, Pyramids FC has quickly established itself as one of the most ambitious football clubs in Egypt and Africa. Originally known as Al Assiouty Sport, the club was rebranded to Pyramids FC under new ownership with a vision to compete at the highest levels of African football.",
            "about_para2": "Based in Cairo, the club plays its home matches at the 30 June Stadium and the Air Defense Stadium. With state-of-the-art training facilities and a commitment to excellence, Pyramids FC aims to develop both Egyptian and African football talent while competing for continental honors.",
            "about_para3": "The club's rapid rise in Egyptian football has been remarkable, consistently finishing in the top positions of the Egyptian Premier League and making significant impacts in continental competitions.",
            "history_img_alt": "Pyramids FC History",

            // Vision Section
            "vision_mission": "Our Vision & Mission",
            "vision_title": "Our Vision",
            "vision_text": "To become a leading football club in Africa, recognized for excellence on and off the pitch, and to be a source of pride for Egyptian and African football fans worldwide.",
            "mission_title": "Our Mission",
            "mission_text": "To develop world-class football talent, play attractive and competitive football, and contribute positively to the development of Egyptian and African football.",
            "values_title": "Our Values",
            "values_text": "Excellence, Integrity, Passion, Innovation, and Community. These values guide everything we do as a club and as representatives of Egyptian football.",

            // Stadium Section
            "our_home": "Our Home",
            "stadium_name": "Air Defense Stadium",
            "stadium_para1": "The Air Defense Stadium, with a capacity of 30,000 seats, serves as the primary home ground for Pyramids FC. Located in Cairo, the stadium provides a fantastic atmosphere for our fans and a formidable challenge for visiting teams.",
            "stadium_para2": "The stadium underwent significant renovations in 2019 to meet international standards, including upgraded seating, improved facilities, and state-of-the-art pitch technology.",
            "stadium_img_alt": "Pyramids FC Stadium",
            "capacity": "Capacity",
            "location": "Location",
            "cairo_egypt": "Cairo, Egypt",
            "pitch_size": "Pitch Size",

            // Achievements Section
            "key_achievements": "Key Achievements",
            "achievement1_title": "Club Rebranding",
            "achievement1_text": "The club was rebranded as Pyramids FC under new ownership.",
            "achievement2_title": "First Continental Appearance",
            "achievement2_text": "Reached quarter-finals in CAF Confederation Cup.",
            "achievement3_title": "Egypt Cup Finalists",
            "achievement3_text": "Finished as runners-up in Egypt Cup.",
            "achievement4_title": "Record League Finish",
            "achievement4_text": "Finished 2nd in Egyptian Premier League.",
            "achievement5_title": "CAF Confederation Cup Final",
            "achievement5_text": "Reached final of CAF Confederation Cup.",

            // Fan Section
            "our_fans": "Our Fans",
            "fans_para1": "The Pyramids FC fanbase, known as the 'Desert Warriors,' has grown rapidly since the club's rebranding. Our supporters are known for their passionate and colorful displays of support, creating an intimidating atmosphere for visiting teams.",
            "fans_para2": "We pride ourselves on having one of the most diverse fanbases in Egyptian football, with supporters from all regions of Egypt and growing international following.",
            "fans_img_alt": "Pyramids FC Fans",
            "join_fanclub": "Join Our Fan Club",

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
            "logo_alt": "Pyramids FC Logo"
        },
        ar: {
            // Navigation
            "page_title": "نادي بيراميدز - عن النادي",
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

            // Hero Section
            "about_title": "عن نادي بيراميدز",
            "about_subtitle": "تاريخنا، رؤيتنا وقيمنا",

            // About Section
            "our_story": "قصتنا",
            "about_para1": "تأسس نادي بيراميدز في عام 2018، وسرعان ما أصبح أحد أكثر أندية كرة القدم طموحًا في مصر وأفريقيا. كان يعرف النادي سابقًا باسم الأسيوطي سبورت، ثم أعيدت تسميته إلى بيراميدز تحت ملكية جديدة بهدف المنافسة على أعلى المستويات في كرة القدم الأفريقية.",
            "about_para2": "يقع النادي في القاهرة، ويخوض مبارياته على ملعبي 30 يونيو وملعب الدفاع الجوي. مع مرافق تدريب حديثة والتزام بالتميز، يهدف بيراميدز إلى تطوير مواهب كرة القدم المصرية والأفريقية مع المنافسة على الألقاب القارية.",
            "about_para3": "كان صعود النادي السريع في كرة القدم المصرية ملحوظًا، حيث احتل باستمرار المراكز الأولى في الدوري المصري الممتاز وأحدث تأثيرًا كبيرًا في البطولات القارية.",
            "history_img_alt": "تاريخ نادي بيراميدز",

            // Vision Section
            "vision_mission": "رؤيتنا ورسالتنا",
            "vision_title": "رؤيتنا",
            "vision_text": "أن نصبح نادي كرة قدم رائدًا في أفريقيا، معترفًا بنا للتميز داخل وخارج الملعب، وأن نكون مصدر فخر لعشاق كرة القدم المصرية والأفريقية في جميع أنحاء العالم.",
            "mission_title": "رسالتنا",
            "mission_text": "تطوير مواهب كرة القدم العالمية، ولعب كرة قدم جذابة تنافسية، والمساهمة إيجابيًا في تطوير كرة القدم المصرية والأفريقية.",
            "values_title": "قيمنا",
            "values_text": "التميز، النزاهة، الشغف، الابتكار، والمجتمع. هذه القيم توجه كل ما نقوم به كنادي وكممثلين لكرة القدم المصرية.",

            // Stadium Section
            "our_home": "ملعبنا",
            "stadium_name": "ملعب الدفاع الجوي",
            "stadium_para1": "ملعب الدفاع الجوي، بسعة 30,000 مقعد، هو الملعب الرئيسي لنادي بيراميدز. يقع في القاهرة، ويوفر الملعب أجواء رائعة لجماهيرنا وتحديًا صعبًا للفرق الزائرة.",
            "stadium_para2": "خضع الملعب لتجديدات كبيرة في عام 2019 لتلبية المعايير الدولية، بما في ذلك ترقيات للمقاعد وتحسين المرافق وتكنولوجيا حديثة للملعب.",
            "stadium_img_alt": "ملعب نادي بيراميدز",
            "capacity": "السعة",
            "location": "الموقع",
            "cairo_egypt": "القاهرة، مصر",
            "pitch_size": "حجم الملعب",

            // Achievements Section
            "key_achievements": "أبرز الإنجازات",
            "achievement1_title": "إعادة تسمية النادي",
            "achievement1_text": "أعيدت تسمية النادي إلى بيراميدز تحت ملكية جديدة.",
            "achievement2_title": "أول ظهور قاري",
            "achievement2_text": "الوصول إلى ربع نهائي كأس الكونفيدرالية الأفريقية.",
            "achievement3_title": "وصيف كأس مصر",
            "achievement3_text": "الوصول إلى نهائي كأس مصر.",
            "achievement4_title": "أفضل مركز في الدوري",
            "achievement4_text": "احتلال المركز الثاني في الدوري المصري الممتاز.",
            "achievement5_title": "نهائي كأس الكونفيدرالية",
            "achievement5_text": "الوصول إلى نهائي كأس الكونفيدرالية الأفريقية.",

            // Fan Section
            "our_fans": "جماهيرنا",
            "fans_para1": "نمت قاعدة جماهير بيراميدز، المعروفة باسم 'محاربو الصحراء'، بسرعة منذ إعادة تسمية النادي. يشتهر مؤيدونا بعروضهم الشغوفة والملونة للدعم، مما يخلق أجواء مرعبة للفرق الزائرة.",
            "fans_para2": "نفتخر بامتلاكنا واحدة من أكثر القواعد الجماهيرية تنوعًا في كرة القدم المصرية، مع مؤيدين من جميع مناطق مصر ومتابعة دولية متزايدة.",
            "fans_img_alt": "جماهير نادي بيراميدز",
            "join_fanclub": "انضم إلى نادي المشجعين",

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

        // Update page title
        document.title = translations[lang].page_title || 'Pyramids FC - About Us';

        // Update all image alt attributes
        document.querySelectorAll('[data-i18n-alt]').forEach(img => {
            const altKey = img.getAttribute('data-i18n-alt');
            if (translations[lang][altKey]) {
                img.alt = translations[lang][altKey];
            }
        });

        // Update copyright
        const copyrightElement = document.querySelector('.copyright p');
        if (copyrightElement) {
            copyrightElement.innerHTML = `&copy; <span data-i18n="year">${translations[lang].year}</span> <span data-i18n="club_name">${translations[lang].club_name}</span>. <span data-i18n="all_rights">${translations[lang].all_rights}</span>`;
            
            // Update the spans inside copyright
            const yearSpan = copyrightElement.querySelector('[data-i18n="year"]');
            const clubNameSpan = copyrightElement.querySelector('[data-i18n="club_name"]');
            const rightsSpan = copyrightElement.querySelector('[data-i18n="all_rights"]');
            
            if (yearSpan) yearSpan.textContent = translations[lang].year;
            if (clubNameSpan) clubNameSpan.textContent = translations[lang].club_name;
            if (rightsSpan) rightsSpan.textContent = translations[lang].all_rights;
        }

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

    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-content, .vision-card, .stadium-content, .achievement-card, .fan-content');
        
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
    document.querySelectorAll('.about-content, .vision-card, .stadium-content, .achievement-card, .fan-content').forEach(element => {
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
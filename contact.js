document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
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
            "page_title": "Pyramids FC - Contact Us",
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

            // Contact Info Section
            "club_info": "Club Information",
            "address": "Address",
            "address_details": "Air Defense Stadium, Salah Salem Road, Cairo, Egypt",
            "phone": "Phone",
            "email": "Email",
            "office_hours": "Office Hours",
            "office_hours_details": "Sunday - Thursday: 9:00 AM - 5:00 PM",

            // Contact Form
            "send_message": "Send Us a Message",
            "your_name": "Your Name",
            "your_email": "Your Email",
            "subject": "Subject",
            "your_message": "Your Message",
            "send_message_btn": "Send Message",

            // Map Section
            "our_location": "Our Location",

            // Departments Section
            "club_departments": "Club Departments",
            "ticketing": "Ticketing",
            "ticketing_desc": "For match tickets and season passes",
            "merchandise": "Merchandise",
            "merchandise_desc": "Club shop and merchandise inquiries",
            "fan_club": "Fan Club",
            "fan_club_desc": "Supporters and fan club information",
            "partnerships": "Partnerships",
            "partnerships_desc": "Sponsorship and business opportunities",

            // Footer
            "quick_links": "Quick Links",
            "contact_info": "Contact Info",
            "club_address": "Air Defense Stadium, Cairo, Egypt",
            "office_hours_footer": "Office Hours: 9AM - 5PM (GMT+2)",
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
            "page_title": "نادي بيراميدز - اتصل بنا",
            "club_name": "نادي بيراميدز",
            "home": "الرئيسية",
            "Technical staff": "الجهاز الفني",
            "team": "الفريق",
            "kit": "الزي الرسمي",
            "trophies": "البطولات",
            "about": "عن النادي",
            "contact": "اتصل بنا",
            "english": "الإنجليزية",
            "arabic": "العربية",

            // Contact Info Section
            "club_info": "معلومات النادي",
            "address": "العنوان",
            "address_details": "ملعب الدفاع الجوي، شارع صلاح سالم، القاهرة، مصر",
            "phone": "الهاتف",
            "email": "البريد الإلكتروني",
            "office_hours": "ساعات العمل",
            "office_hours_details": "الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً",

            // Contact Form
            "send_message": "أرسل لنا رسالة",
            "your_name": "اسمك",
            "your_email": "بريدك الإلكتروني",
            "subject": "الموضوع",
            "your_message": "رسالتك",
            "send_message_btn": "إرسال الرسالة",

            // Map Section
            "our_location": "موقعنا",

            // Departments Section
            "club_departments": "أقسام النادي",
            "ticketing": "التذاكر",
            "ticketing_desc": "لتذاكر المباريات والاشتراكات الموسمية",
            "merchandise": "المتجر",
            "merchandise_desc": "استفسارات المتجر والمنتجات",
            "fan_club": "نادي المشجعين",
            "fan_club_desc": "معلومات المشجعين ونادي المعجبين",
            "partnerships": "الشراكات",
            "partnerships_desc": "فرص الرعاية والأعمال",

            // Footer
            "quick_links": "روابط سريعة",
            "contact_info": "معلومات الاتصال",
            "club_address": "ملعب الدفاع الجوي، القاهرة، مصر",
            "office_hours_footer": "ساعات العمل: 9 صباحًا - 5 مساءً (توقيت القاهرة)",
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
    
    // Enhanced change language function
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

        // Update all placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Update page title
        document.title = translations[lang].page_title || 'Pyramids FC - Contact Us';

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

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert(document.documentElement.lang === 'ar' ? 
                'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.' : 
                'Your message has been sent successfully! We will contact you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }

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
        const elements = document.querySelectorAll('.contact-info, .contact-form, .location-map, .department-card');
        
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
    document.querySelectorAll('.contact-info, .contact-form, .location-map, .department-card').forEach(element => {
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
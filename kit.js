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

    // Hero Slider with Auto-Play and Manual Controls
    const sliderInit = function() {
        const slides = document.querySelectorAll('.carousel-slides .slide');
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
        const sliderContainer = document.querySelector('.hero-carousel');
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

    // Kit Selector Functionality
    const kitSelector = document.getElementById('kitSelector');
    if (kitSelector) {
        const kitOptions = kitSelector.querySelectorAll('.kit-option');
        const kitDisplays = document.querySelectorAll('.kit-display');

        kitOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove active class from all options
                kitOptions.forEach(opt => opt.classList.remove('active'));
                // Add active class to clicked option
                this.classList.add('active');
                
                // Get the kit type from data attribute
                const kitType = this.dataset.kit;
                
                // Hide all kit displays
                kitDisplays.forEach(display => display.classList.remove('active'));
                // Show the selected kit display
                document.getElementById(kitType).classList.add('active');
            });
        });
    }

    // Size Selector Functionality
    document.querySelectorAll('.kit-sizes').forEach(sizeContainer => {
        const sizeOptions = sizeContainer.querySelectorAll('.size-option');
        
        sizeOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove active class from all size options in this container
                sizeOptions.forEach(opt => opt.classList.remove('active'));
                // Add active class to clicked size option
                this.classList.add('active');
            });
        });
    });

    // Custom Kit Preview Functionality
    const kitTypeSelect = document.getElementById('kitType');
    const kitPreview = document.getElementById('kitPreview');
    
    if (kitTypeSelect && kitPreview) {
        kitTypeSelect.addEventListener('change', function() {
            // Change the preview image based on selected kit type
            switch(this.value) {
                case 'home':
                    kitPreview.src = 'kit/kit3.webp';
                    break;
                case 'away':
                    kitPreview.src = 'kit/kitt6.jpg';
                    break;
                case 'third':
                    kitPreview.src = 'kit/kitt5.jpg';
                    break;
            }
        });
    }

    // Sponsors Slider
    const sponsorsSlider = function() {
        const track = document.querySelector('.sponsors-track');
        if (!track) return;
        
        const items = track.querySelectorAll('.sponsor-item');
        const itemWidth = items[0].offsetWidth;
        let currentPosition = 0;
        const speed = 1; // pixels per frame
        
        function animate() {
            currentPosition -= speed;
            
            // If we've scrolled all items, reset position
            if (currentPosition <= -itemWidth * items.length / 2) {
                currentPosition = 0;
            }
            
            track.style.transform = `translateX(${currentPosition}px)`;
            requestAnimationFrame(animate);
        }
        
        // Start animation
        animate();
    };
    
    sponsorsSlider();

    // Language Switcher
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const langLinks = document.querySelectorAll('.language-dropdown a');

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

            
            // Kit Page
            "official_kit": "Official Kit",
            "kit_subtitle": "Wear the colors of Pyramids FC",
            "kit_collection": "2023/24 Kit Collection",
            "home_kit": "Home Kit",
            "away_kit": "Away Kit",
            "third_kit": "Third Kit",
            "home_kit_desc": "The iconic blue and gold colors that represent our identity on home soil. Inspired by the ancient pyramids of Egypt, this kit features traditional patterns woven into the fabric.",
            "away_kit_desc": "The striking white and gold design for our travels across the country. Features minimalist design with subtle pyramid motifs throughout the fabric.",
            "third_kit_desc": "The bold black and gold alternative for special occasions. Inspired by the night sky over the pyramids, featuring celestial patterns.",
            "material": "Material:",
            "home_kit_material": "100% Recycled Polyester",
            "away_kit_material": "100% Recycled Polyester",
            "third_kit_material": "100% Recycled Polyester",
            "technology": "Technology:",
            "kit_technology": "AEROREADY - Keeps you cool and dry",
            "price": "Price:",
            "add_to_cart": "Add to Cart",
            "customize_kit": "Customize Your Kit",
            "personalize_jersey": "Personalize Your Jersey",
            "kit_type": "Kit Type",
            "name": "Name",
            "name_placeholder": "Enter your name",
            "size": "Size",
            "size_s": "Small",
            "size_m": "Medium",
            "size_l": "Large",
            "size_xl": "XL",
            "size_xxl": "XXL",
            "total": "Total:",
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
            "copyright": "© 2023 Pyramids FC. All Rights Reserved.",
            "year": "2023",
            "all_rights": "All Rights Reserved",

            // Alt texts
            "logo_alt": "Pyramids FC Logo",
            "home_kit_alt": "Pyramids FC Home Kit",
            "away_kit_alt": "Pyramids FC Away Kit",
            "third_kit_alt": "Pyramids FC Third Kit",
            "custom_kit_alt": "Custom Pyramids FC Kit Preview",
            "sponsor1_alt": "Official Sponsor 1",
            "sponsor2_alt": "Official Sponsor 2",
            "sponsor3_alt": "Official Sponsor 3",
            "sponsor4_alt": "Official Sponsor 4",
            "sponsor5_alt": "Official Sponsor 5",
            "sponsor6_alt": "Official Sponsor 6"
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

            
            // Kit Page
            "official_kit": "الزي الرسمي",
            "kit_subtitle": "ارتدِ ألوان نادي بيراميدز",
            "kit_collection": "تشكيلة 2023/24",
            "home_kit": "زي الفريق الأساسي",
            "away_kit": "زي الفريق الخارجي",
            "third_kit": "الزي الثالث",
            "home_kit_desc": "الألوان الزرقاء والذهبية التي تمثل هويتنا على أرض الملعب. مستوحى من أهرامات مصر القديمة، ويضم أنماطًا تقليدية منسوجة في القماش.",
            "away_kit_desc": "التصميم الأبيض والذهبي الجذاب لرحلاتنا عبر البلاد. يتميز بتصميم بسيط مع زخارف هرمية خفية في جميع أنحاء القماش.",
            "third_kit_desc": "البديل الأسود والذهبي الجريء للمناسبات الخاصة. مستوحى من سماء الليل فوق الأهرامات، ويضم أنماطًا سماوية.",
            "material": "المادة:",
            "home_kit_material": "100% بوليستر معاد تدويره",
            "away_kit_material": "100% بوليستر معاد تدويره",
            "third_kit_material": "100% بوليستر معاد تدويره",
            "technology": "التكنولوجيا:",
            "kit_technology": "AEROREADY - يحافظ على برودتك وجفافك",
            "price": "السعر:",
            "add_to_cart": "أضف إلى السلة",
            "customize_kit": "تخصيص الزي الخاص بك",
            "personalize_jersey": "قم بتخصيص قميصك",
            "kit_type": "نوع الزي",
            "name": "الاسم",
            "name_placeholder": "أدخل اسمك",
            "size": "المقاس",
            "size_s": "صغير",
            "size_m": "متوسط",
            "size_l": "كبير",
            "size_xl": "XL",
            "size_xxl": "XXL",
            "total": "المجموع:",
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
            "copyright": "© ٢٠٢٣ نادي بيراميدز. جميع الحقوق محفوظة.",
            "year": "٢٠٢٥",
            "all_rights": "جميع الحقوق محفوظة",

            // Alt texts
            "logo_alt": "شعار نادي بيراميدز",
            "home_kit_alt": "زي بيراميدز الأساسي",
            "away_kit_alt": "زي بيراميدز الخارجي",
            "third_kit_alt": "الزي الثالث لبيراميدز",
            "custom_kit_alt": "معاينة الزي المخصص لبيراميدز",
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
        const elements = document.querySelectorAll('.kit-display, .customization-form, .sponsor-item');

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
    document.querySelectorAll('.kit-display, .customization-form, .sponsor-item').forEach(element => {
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

    // Add to Cart functionality with redirect to login
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get product details
            let productDetails = {};
            const kitDisplay = this.closest('.kit-display');
            
            if (kitDisplay) {
                // For main kit display buttons
                productDetails = {
                    kitType: kitDisplay.id,
                    size: kitDisplay.querySelector('.size-option.active').dataset.size,
                    price: 59.99,
                    name: kitDisplay.querySelector('h2').textContent
                };
            } else {
                // For customization form
                productDetails = {
                    kitType: document.getElementById('kitType').value,
                    size: document.getElementById('kitSize').value,
                    price: 69.99,
                    name: document.getElementById('playerName').value || 'Custom Jersey',
                    isCustom: true
                };
            }
            
            // Save to localStorage (optional)
            localStorage.setItem('pendingCartItem', JSON.stringify(productDetails));
            
            // Redirect to login page
            window.location.href = 'login.html';
        });
    });
});
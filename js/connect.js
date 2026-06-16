/* ==========================================================================
   Mahaar Connect & Location - Application Logic (Bilingual Support)
   ========================================================================== */

// 1. Localization Dictionary
const translations = {
    en: {
        "page-title": "Mahaar | Connect & Find Us",
        "brand-name": "MAHAAR",
        "brand-sub": "SEAFOOD",
        "nav-menu": "Our Menu",
        "visit-menu": "Explore our fresh seafood dishes",
        "view-menu": "View Menu",
        "connect-title": "Connect with Mahaar",
        "connect-subtitle": "From the Deep Ocean to Your Feed",
        "social-heading": "Connect With Us",
        "social-desc": "Follow our pages, view updates, or message us directly.",
        "visit-facebook": "Visit our Facebook page",
        "visit-instagram": "Follow our culinary journey",
        "visit-tiktok": "Watch our restaurant videos",
        "visit-whatsapp": "Chat with us directly",
        "visit-page": "Visit Page",
        "follow-page": "Follow Us",
        "watch-page": "Watch Videos",
        "chat-page": "Send Message",
        "location-heading": "Our Location",
        "location-desc": "Find us and experience seafood like never before.",
        "address-title": "Our Address",
        "address-text": "Al Nasr Sporting Club, El Mahkama Square, Heliopolis, Cairo, Egypt",
        "phone-title": "Phone & WhatsApp",
        "hours-title": "Opening Hours",
        "hours-text": "Everyday: 12:00 PM - 12:00 AM",
        "get-directions": "Get Directions",
        "footer-copyright": "Mahaar Seafood Restaurant. All Rights Reserved."
    },
    ar: {
        "page-title": "مطعم محار | تواصل معنا وموقعنا",
        "brand-name": "محار",
        "brand-sub": "مأكولات بحرية",
        "nav-menu": "قائمة الطعام",
        "visit-menu": "استكشف أطباق المأكولات البحرية الطازجة",
        "view-menu": "عرض القائمة",
        "connect-title": "تواصل مع محار",
        "connect-subtitle": "من أعماق المحيط إلى حسابك مباشرة",
        "social-heading": "تواصل معنا",
        "social-desc": "تابع صفحاتنا، أو اطلع على آخر المستجدات، أو راسلنا مباشرة.",
        "visit-facebook": "تفضل بزيارة صفحتنا على فيسبوك",
        "visit-instagram": "تابع رحلتنا في عالم الطهي",
        "visit-tiktok": "شاهد فيديوهات مطعمنا",
        "visit-whatsapp": "تحدث معنا مباشرة",
        "visit-page": "زيارة الصفحة",
        "follow-page": "تابعنا",
        "watch-page": "مشاهدة الفيديوهات",
        "chat-page": "أرسل رسالة",
        "location-heading": "موقعنا",
        "location-desc": "تفضل بزيارتنا واستمتع بتجربة مأكولات بحرية لا مثيل لها.",
        "address-title": "عنواننا",
        "address-text": "نادي النصر الرياضي - ميدان المحكمة، قسم مصر الجديدة، القاهرة، مصر",
        "phone-title": "الهاتف والواتساب",
        "hours-title": "أوقات العمل",
        "hours-text": "يومياً: 12:00 مساءً - 12:00 صباحاً",
        "get-directions": "الحصول على الاتجاهات",
        "footer-copyright": "مطعم محار للمأكولات البحرية. جميع الحقوق محفوظة."
    }
};

// 2. Application State
let currentLanguage = localStorage.getItem('mahaar_lang') || 'ar';

// 3. DOM Elements
const langSwitchBtn = document.getElementById('lang-switch-btn');
const currentYear = document.getElementById('current-year');

// 4. Initialize Page
function init() {
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    applyLanguage(currentLanguage);
    setupEventListeners();
}

// 5. Language Switcher
function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('mahaar_lang', lang);

    // Document layout & direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Translate all nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Language Button Label
    if (langSwitchBtn) {
        const labelSpan = langSwitchBtn.querySelector('.lang-label');
        if (labelSpan) {
            labelSpan.textContent = lang === 'ar' ? 'English' : 'العربية';
        }
    }
}

// 6. Event Listeners Setup
function setupEventListeners() {
    if (langSwitchBtn) {
        langSwitchBtn.addEventListener('click', () => {
            const nextLang = currentLanguage === 'en' ? 'ar' : 'en';
            applyLanguage(nextLang);
        });
    }
}

// Start execution when DOM is ready
document.addEventListener('DOMContentLoaded', init);

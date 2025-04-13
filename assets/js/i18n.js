// Translations Object
const translations = {
    en: {
        // Navigation
        about: "About",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        
        // Accessibility
        skipToContent: "Skip to Content",
        
        // Section Titles
        aboutTitle: "About Me",
        experienceTitle: "Experience",
        educationTitle: "Education",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        contactTitle: "Contact",
        
        // Education
        bachelorDegree: "Bachelor of Industrial Engineering",
        educationDesc: "Studied Business Software planning, coordination, and efficiency. Worked with various industries on launching efficient IT Systems.",
        
        // Contact
        contactText: "You can reach me via the following contact information.",
        
        // Footer
        copyright: "All rights reserved."
    },
    tr: {
        // Navigation
        about: "Hakkımda",
        experience: "Deneyim",
        education: "Eğitim",
        skills: "Yetenekler",
        projects: "Projeler",
        contact: "İletişim",
        
        // Accessibility
        skipToContent: "İçeriğe geç",
        
        // Section Titles
        aboutTitle: "Hakkımda",
        experienceTitle: "Deneyim",
        educationTitle: "Eğitim",
        skillsTitle: "Yetenekler",
        projectsTitle: "Projeler",
        contactTitle: "İletişim",
        
        // Education
        bachelorDegree: "Endüstri Mühendisliği Lisans",
        educationDesc: "İş yazılımı planlaması, koordinasyonu ve verimliliği üzerine eğitim aldım. Farklı sektörlerde, verimli BT sistemlerinin hayata geçirilmesi üzerine çalıştım.",
        
        // Contact
        contactText: "Benimle iletişime geçmek için aşağıdaki iletişim bilgilerini kullanabilirsiniz.",
        
        // Footer
        copyright: "Tüm hakları saklıdır."
    }
};

// Check URL for language parameter
function checkUrlLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam && (langParam === 'en' || langParam === 'tr')) {
        localStorage.setItem('language', langParam);
        return langParam;
    }
    
    return localStorage.getItem('language') || 'tr';
}

// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'tr';
}

// Toggle language
function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    
    // Update local storage
    localStorage.setItem('language', newLang);
    
    // Update URL parameter without page reload
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);
    
    // Update UI
    document.querySelector('.lang-text').textContent = newLang.toUpperCase();
    
    // Update HTML lang attribute
    document.documentElement.lang = newLang;
    
    // Update all translations
    updateTranslations();
    
    // Update content dynamically
    if (typeof populateTimeline === 'function') populateTimeline();
    if (typeof populateSkills === 'function') populateSkills();
    if (typeof populateProjects === 'function') populateProjects();
}

// Update all translations
function updateTranslations() {
    const lang = getCurrentLanguage();
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check URL for language parameter
    const urlLang = checkUrlLanguage();
    
    // Set the HTML lang attribute
    document.documentElement.lang = urlLang;
    
    // Update UI
    document.querySelector('.lang-text').textContent = urlLang.toUpperCase();
    
    // Update translations
    updateTranslations();
}); 
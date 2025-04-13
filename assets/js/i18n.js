// Translations Object
const translations = {
    en: {
        // Navigation
        about: "About",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        projects: "Projects",
        
        // Section Titles
        aboutTitle: "About Me",
        experienceTitle: "Experience",
        educationTitle: "Education",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        
        // Education
        bachelorDegree: "Bachelor of Industrial Engineering",
        educationDesc: "Studied Business Software planning, coordination, and efficiency. Worked with various industries on launching efficient IT Systems.",
        
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
        
        // Section Titles
        aboutTitle: "Hakkımda",
        experienceTitle: "Deneyim",
        educationTitle: "Eğitim",
        skillsTitle: "Yetenekler",
        projectsTitle: "Projeler",
        
        // Education
        bachelorDegree: "Endüstri Mühendisliği Lisans",
        educationDesc: "İş yazılımı planlaması, koordinasyonu ve verimliliği üzerine eğitim aldım. Farklı sektörlerde, verimli BT sistemlerinin hayata geçirilmesi üzerine çalıştım.",
        
        // Footer
        copyright: "Tüm hakları saklıdır."
    }
};

// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'tr';
}

// Toggle language
function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    
    // Store language preference
    localStorage.setItem('language', newLang);
    
    // Update button text
    const langBtn = document.querySelector('.lang-switch .lang-text');
    langBtn.textContent = newLang.toUpperCase();
    
    // Update content
    updateLanguageContent(newLang);
    
    // Repopulate dynamic content
    if (typeof populateTimeline === 'function') populateTimeline();
    if (typeof populateSkills === 'function') populateSkills();
    if (typeof populateProjects === 'function') populateProjects();
}

// Update static content based on language
function updateLanguageContent(lang) {
    // Update navigation links
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update hero section
    const heroTitle = document.querySelector('.title');
    if (lang === 'en') {
        heroTitle.textContent = 'Software Test Engineer';
        document.querySelector('.description').textContent = 'Dynamic and detail-oriented Software Test Engineer with 4+ years of experience in manual and automation testing.';
    } else {
        heroTitle.textContent = 'Yazılım Test Mühendisi';
        document.querySelector('.description').textContent = '4+ yıllık deneyime sahip, dinamik ve detay odaklı bir Yazılım Test Mühendisi.';
    }
    
    // Update about section
    if (lang === 'en') {
        document.querySelector('.about-text').textContent = 'Dynamic and detail-oriented Software Test Engineer with 4+ years of experience in manual and automation testing (Selenium), API testing (Postman, Rest Assured), and data flow verification (PostgreSQL). Skilled in test process planning, event storming analysis (Couchbase, Elasticsearch, Apache Kafka), and working with Agile methodologies (Scrum, Kanban).';
    } else {
        document.querySelector('.about-text').textContent = '4+ yıllık deneyime sahip, dinamik ve detay odaklı bir Yazılım Test Mühendisiyim. Manuel ve otomasyon testleri (Selenium), API testleri (Postman, Rest Assured) ve veri akış doğrulama (PostgreSQL) konularında uzmanım. Test süreçlerinin planlanması, event storming analizi (Couchbase, Elasticsearch, Apache Kafka) ve Agile metodolojileri (Scrum, Kanban) ile çalışma konusunda güçlü bir deneyime sahibim.';
    }
    
    // Update footer
    document.querySelector('.footer p').textContent = 
        `© ${new Date().getFullYear()} İbrahim Cevher Kabadayı. ${translations[lang].copyright}`;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = getCurrentLanguage();
    
    // Set initial button text
    const langBtn = document.querySelector('.lang-switch .lang-text');
    langBtn.textContent = savedLang.toUpperCase();
    
    // Update content if not the default language (default is Turkish)
    if (savedLang === 'en') {
        updateLanguageContent('en');
    }
}); 
// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const currentMode = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    
    if (currentMode === 'light-mode') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        document.querySelector('.theme-switch i').classList.replace('fa-sun', 'fa-moon');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        document.querySelector('.theme-switch i').classList.replace('fa-moon', 'fa-sun');
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Experience Timeline Data
const experiences = {
    en: [
        {
            company: 'Finartz Bilgi Teknolojileri A.Ş.',
            project: 'Trendyol GO Project',
            position: 'Software Test Engineer',
            period: 'June 2023 - September 2024',
            description: [
                'Led quality control for Trendyol GO Customer Services pages',
                'Developed automated API test workflows using Rest Assured',
                'Conducted event storming analysis with Couchbase, Elasticsearch, and Apache Kafka',
                'Implemented trunk-based development methodology',
                'Collaborated with cross-functional teams'
            ]
        },
        {
            company: 'Borda Teknoloji Bilişim A.Ş.',
            position: 'Software Test Engineer',
            period: 'February 2022 - February 2023',
            description: [
                'Spearheaded test process planning using Azure DevOps',
                'Designed API testing strategies using Postman',
                'Conducted data flow testing with PostgreSQL',
                'Optimized test documentation and reporting'
            ]
        },
        {
            company: 'Ekmob Mobil Iş Sistemleri ve Teknolojileri A.Ş.',
            position: 'Software Test Engineer',
            period: 'November 2020 - January 2022',
            description: [
                'Implemented end-to-end test planning using JIRA',
                'Conducted network monitoring and debugging',
                'Optimized mobile application performance',
                'Improved manual and exploratory testing processes'
            ]
        },
        {
            company: 'Insider',
            position: 'Web Developer (LEMP Stack)',
            period: 'September 2019 - April 2020',
            description: [
                'Led development of useinsider.com',
                'Configured web servers using Nginx, Cloudflare, and AWS',
                'Conducted integration and performance tests'
            ]
        }
    ],
    tr: [
        {
            company: 'Finartz Bilgi Teknolojileri A.Ş.',
            project: 'Trendyol GO Projesi',
            position: 'Yazılım Test Mühendisi',
            period: 'Haziran 2023 - Eylül 2024',
            description: [
                'Trendyol GO Müşteri Hizmetleri sayfalarının kalite kontrol süreçlerini yönettim',
                'Rest Assured kullanarak otomatik API test akışlarını geliştirdim',
                'Couchbase, Elasticsearch ve Apache Kafka ile event storming analizi gerçekleştirdim',
                'Sürüm kontrolü için trunk-based development metodolojisini uyguladım',
                'Çapraz fonksiyonlu ekiplerle iş birliği yaparak kritik hataları belirleyip çözdüm'
            ]
        },
        {
            company: 'Borda Teknoloji Bilişim A.Ş.',
            position: 'Yazılım Test Mühendisi',
            period: 'Şubat 2022 - Şubat 2023',
            description: [
                'Azure DevOps kullanarak test süreçlerinin planlanmasını ve takibini yönettim',
                'Postman ile kapsamlı API test stratejileri tasarlayıp uyguladım',
                'PostgreSQL ile karmaşık SQL sorguları kullanarak veri akış testleri gerçekleştirdim',
                'Test dokümantasyonu ve raporlama süreçlerini optimize ettim'
            ]
        },
        {
            company: 'Ekmob Mobil Iş Sistemleri ve Teknolojileri A.Ş.',
            position: 'Yazılım Test Mühendisi',
            period: 'Kasım 2020 - Ocak 2022',
            description: [
                'JIRA kullanarak uçtan uca test planlama ve izleme süreçlerini uyguladım',
                'Tarayıcı geliştirici araçları, Android Studio ve Apple TestFlight kullanarak ağ izleme ve hata ayıklama işlemlerini gerçekleştirdim',
                'Geliştiricilerle yakın çalışarak mobil uygulama performansını optimize ettim',
                'Manuel ve keşifsel test süreçlerini iyileştirdim'
            ]
        },
        {
            company: 'Insider',
            position: 'Web Geliştirici (LEMP Stack)',
            period: 'Eylül 2019 - Nisan 2020',
            description: [
                'useinsider.com\'un geliştirme ve yönetim süreçlerini yönettim',
                'Nginx, Cloudflare ve AWS kullanarak web sunucularını yapılandırdım ve optimize ettim',
                'Entegrasyon ve performans testleri gerçekleştirdim'
            ]
        }
    ]
};

// Skills Data
const skills = {
    en: {
        'Testing Skills': [
            'Manual Testing',
            'Automation Testing (Selenium, Rest Assured, Cypress)',
            'API Testing (Postman, SoapUI)',
            'Test Planning',
            'Performance Testing',
            'Quality Assurance'
        ],
        'Development Skills': [
            'Web Development (LEMP Stack)',
            'SQL',
            'PostgreSQL',
            'PHP',
            'Java',
            'Python'
        ],
        'Project Management': [
            'Scrum',
            'Kanban',
            'Kaizen',
            'JIRA',
            'TestRail',
            'Azure DevOps'
        ],
        'Tools & Technologies': [
            'AWS',
            'Nginx',
            'Cloudflare',
            'Android Studio',
            'TestFlight',
            'CI/CD',
            'Version Control'
        ]
    },
    tr: {
        'Test Becerileri': [
            'Manuel Test',
            'Otomasyon Testi (Selenium, Rest Assured, Cypress)',
            'API Testi (Postman, SoapUI)',
            'Test Planlama',
            'Performans Testi',
            'Kalite Güvencesi'
        ],
        'Geliştirme Becerileri': [
            'Web Geliştirme (LEMP Stack)',
            'SQL',
            'PostgreSQL',
            'PHP',
            'Java',
            'Python'
        ],
        'Proje Yönetimi': [
            'Scrum',
            'Kanban',
            'Kaizen',
            'JIRA',
            'TestRail',
            'Azure DevOps'
        ],
        'Araçlar ve Teknolojiler': [
            'AWS',
            'Nginx',
            'Cloudflare',
            'Android Studio',
            'TestFlight',
            'CI/CD',
            'Sürüm Kontrolü'
        ]
    }
};

// Projects Data
const projects = {
    en: [
        {
            title: 'Aircraft Wings Material Selection',
            description: 'Investigated material selection using SWARA and Multi MOORA methods, enhancing decision-making in materials engineering.',
            type: 'BS Graduation Project'
        },
        {
            title: 'Üniversite Sözlük',
            description: 'Developed a knowledge-sharing platform for university students. Won a Silicon Valley entrepreneurship trip.',
            type: 'Web Platform'
        }
    ],
    tr: [
        {
            title: 'Uçak Kanatları İçin Malzeme Seçimi',
            description: 'SWARA ve Multi MOORA yöntemlerini kullanarak uçak kanatları için malzeme seçimi üzerine araştırma yaparak, malzeme mühendisliğinde karar verme süreçlerini iyileştirdik.',
            type: 'Lisans Bitirme Projesi'
        },
        {
            title: 'Üniversite Sözlük',
            description: 'Üniversite öğrencileri için bir bilgi paylaşım platformu geliştirdik. Yenilikçi yaklaşımıyla çeşitli yarışmalarda ödüller kazandı ve Silicon Valley\'de bir haftalık girişimcilik programına katılma hakkı elde ettik.',
            type: 'Web Platformu'
        }
    ]
};

// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'tr';
}

// Populate Timeline
function populateTimeline() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = ''; // Clear existing items
    
    const lang = getCurrentLanguage();
    experiences[lang].forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        item.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.company}</h3>
                ${exp.project ? `<h4>${exp.project}</h4>` : ''}
                <h4>${exp.position}</h4>
                <p class="period">${exp.period}</p>
                <ul>
                    ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
            </div>
        `;
        
        timeline.appendChild(item);
    });
}

// Populate Skills
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = ''; // Clear existing items
    
    const lang = getCurrentLanguage();
    const skillsData = skills[lang];
    
    for (const [category, skillList] of Object.entries(skillsData)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        categoryDiv.innerHTML = `
            <h3>${category}</h3>
            <ul class="skill-list">
                ${skillList.map(skill => `<li class="skill-item">${skill}</li>`).join('')}
            </ul>
        `;
        
        skillsGrid.appendChild(categoryDiv);
    }
}

// Populate Projects
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = ''; // Clear existing items
    
    const lang = getCurrentLanguage();
    projects[lang].forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-type">${project.type}</p>
            <p class="project-description">${project.description}</p>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize content when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check URL parameters for language
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam && (langParam === 'en' || langParam === 'tr')) {
        localStorage.setItem('language', langParam);
        document.documentElement.lang = langParam;
    } else {
        // Use saved language or default to Turkish
        const savedLang = localStorage.getItem('language') || 'tr';
        document.documentElement.lang = savedLang;
    }
    
    // Set theme based on saved preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        document.querySelector('.theme-switch i').classList.replace('fa-sun', 'fa-moon');
    }
    
    // Populate content based on the selected language
    populateTimeline();
    populateSkills();
    populateProjects();
    
    // Add event listener for mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
    
    // Add keyboard navigation to enhance accessibility
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && document.querySelector('.nav-links.active')) {
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
    
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]:not(.skip-to-content)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
}); 
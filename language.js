// Language Toggle Functionality
let currentLanguage = 'en';

// Language data
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-portfolio': 'Portfolio',
        'nav-discography': 'Discography',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-subtitle': 'GRAMMY AWARD WINNING',
        'hero-role': 'MIXER / ENGINEER',
        'hero-description': 'Crafting sonic excellence for the world\'s most iconic artists and projects',
        'btn-work': 'View My Work',
        'btn-contact': 'Get In Touch',
        
        // About Section
        'about-title': 'About Me',
        'about-subtitle': 'Passionate about creating exceptional audio experiences',
        'about-description': 'As a Grammy award-winning sound engineer and mixer, I specialize in bringing out the best in every project. My work spans across genres and platforms, from chart-topping albums to Olympic ceremonies and record-breaking tours, always maintaining the highest standards of audio excellence.',
        'achievement-grammy': 'Grammy Award Winner',
        'achievement-platinum': 'Multi-Platinum Engineer',
        'achievement-global': 'International Recognition',
        'stat-projects': 'Projects Completed',
        'stat-years': 'Years Experience',
        'stat-clients': 'Happy Clients',
        
        // Portfolio Section
        'portfolio-title': 'Featured Work',
        'portfolio-subtitle': 'A showcase of my most notable projects and collaborations',
        'portfolio-tag-album': 'Album',
        'portfolio-tag-single': 'Single',
        'portfolio-tag-special': 'Special Project',
        'grammy-winner': 'Album of the Year Grammy Winner',
        'grammy-nominee': 'Album of the Year Grammy Nominee',
        
        // Contact Section
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Ready to bring your project to life? Let\'s create something amazing together.',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-message': 'Message',
        'contact-send': 'Send Message',
        
        // Footer
        'footer-rights': 'by Matheus Braz. All rights reserved.',
        
        // Discography Page
        'discography-title': 'Discography',
        'discography-subtitle': 'A comprehensive collection of my engineering and mixing credits across genres and platforms',
        'albums-title': 'Albums',
        'albums-subtitle': 'Full-length studio albums and EPs',
        'singles-title': 'Singles & Remixes',
        'singles-subtitle': 'Hit singles and remix productions',
        'special-title': 'Special Projects',
        'special-subtitle': 'Olympic ceremonies, films, and unique productions',
        'credits-title': 'Recent Credits',
        'credits-subtitle': 'My most recent work showcasing the latest projects and collaborations',
        'credits-recent': 'Most Recent Work',
        'credits-2024': '2024-2025',
        'credits-2023': '2022-2023',
        'credits-2021': '2021',
        'credits-brazilian': 'Brazilian Projects'
    },
    pt: {
        // Navigation
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-portfolio': 'Portfólio',
        'nav-discography': 'Discografia',
        'nav-contact': 'Contato',
        
        // Hero Section
        'hero-subtitle': 'VENCEDOR DO GRAMMY',
        'hero-role': 'MIXER / ENGENHEIRO',
        'hero-description': 'Criando excelência sonora para os artistas e projetos mais icônicos do mundo',
        'btn-work': 'Ver Meu Trabalho',
        'btn-contact': 'Entre em Contato',
        
        // About Section
        'about-title': 'Sobre Mim',
        'about-subtitle': 'Apaixonado por criar experiências de áudio excepcionais',
        'about-description': 'Como engenheiro de som e mixer vencedor do Grammy, me especializo em extrair o melhor de cada projeto. Meu trabalho abrange gêneros e plataformas, desde álbuns que lideram as paradas até cerimônias olímpicas e turnês recordistas, sempre mantendo os mais altos padrões de excelência em áudio.',
        'achievement-grammy': 'Vencedor do Grammy',
        'achievement-platinum': 'Engenheiro Multi-Platina',
        'achievement-global': 'Reconhecimento Internacional',
        'stat-projects': 'Projetos Concluídos',
        'stat-years': 'Anos de Experiência',
        'stat-clients': 'Clientes Satisfeitos',
        
        // Portfolio Section
        'portfolio-title': 'Trabalhos em Destaque',
        'portfolio-subtitle': 'Uma mostra dos meus projetos e colaborações mais notáveis',
        'portfolio-tag-album': 'Álbum',
        'portfolio-tag-single': 'Single',
        'portfolio-tag-special': 'Projeto Especial',
        'grammy-winner': 'Vencedor do Grammy de Álbum do Ano',
        'grammy-nominee': 'Indicado ao Grammy de Álbum do Ano',
        
        // Contact Section
        'contact-title': 'Entre em Contato',
        'contact-subtitle': 'Pronto para dar vida ao seu projeto? Vamos criar algo incrível juntos.',
        'contact-name': 'Nome',
        'contact-email': 'Email',
        'contact-message': 'Mensagem',
        'contact-send': 'Enviar Mensagem',
        
        // Footer
        'footer-rights': 'por Matheus Braz. Todos os direitos reservados.',
        
        // Discography Page
        'discography-title': 'Discografia',
        'discography-subtitle': 'Uma coleção abrangente dos meus créditos de engenharia e mixagem em gêneros e plataformas',
        'albums-title': 'Álbuns',
        'albums-subtitle': 'Álbuns de estúdio completos e EPs',
        'singles-title': 'Singles e Remixes',
        'singles-subtitle': 'Singles de sucesso e produções de remix',
        'special-title': 'Projetos Especiais',
        'special-subtitle': 'Cerimônias olímpicas, filmes e produções únicas',
        'credits-title': 'Créditos Recentes',
        'credits-subtitle': 'Meu trabalho mais recente mostrando os últimos projetos e colaborações',
        'credits-recent': 'Trabalho Mais Recente',
        'credits-2024': '2024-2025',
        'credits-2023': '2022-2023',
        'credits-2021': '2021',
        'credits-brazilian': 'Projetos Brasileiros'
    }
};

// Function to update text content
function updateText(element, key) {
    if (element && translations[currentLanguage][key]) {
        element.textContent = translations[currentLanguage][key];
    }
}

// Function to update all elements with data attributes
function updateLanguage() {
    // Update elements with data-en and data-pt attributes
    const elements = document.querySelectorAll('[data-en][data-pt]');
    elements.forEach(element => {
        const text = currentLanguage === 'en' ? 
            element.getAttribute('data-en') : 
            element.getAttribute('data-pt');
        element.textContent = text;
    });
    
    // Update form placeholders
    const inputs = document.querySelectorAll('[data-placeholder-en][data-placeholder-pt]');
    inputs.forEach(input => {
        const placeholder = currentLanguage === 'en' ? 
            input.getAttribute('data-placeholder-en') : 
            input.getAttribute('data-placeholder-pt');
        input.placeholder = placeholder;
    });
    
    // Update specific elements by ID or class
    updateText(document.querySelector('[data-key="nav-home"]'), 'nav-home');
    updateText(document.querySelector('[data-key="nav-about"]'), 'nav-about');
    updateText(document.querySelector('[data-key="nav-portfolio"]'), 'nav-portfolio');
    updateText(document.querySelector('[data-key="nav-discography"]'), 'nav-discography');
    updateText(document.querySelector('[data-key="nav-contact"]'), 'nav-contact');
}

// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLanguage) {
                currentLanguage = lang;
                
                // Update active button
                langButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Update all text
                updateLanguage();
                
                // Save preference
                localStorage.setItem('preferred-language', currentLanguage);
            }
        });
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && (savedLang === 'en' || savedLang === 'pt')) {
        currentLanguage = savedLang;
        const activeBtn = document.querySelector(`[data-lang="${currentLanguage}"]`);
        if (activeBtn) {
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            activeBtn.classList.add('active');
        }
    }
    
    // Initial language update
    updateLanguage();
});

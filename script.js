/**
 * BioAgro Brasil - JavaScript
 * Funcionalidades: Dark Mode, Menu Mobile, Renderização de Notícias,
 * Filtros, Scroll Suave, Animações e Validação de Formulário
 */

// ============================================
// Mock Data - Notícias sobre Bioeconomia
// ============================================
const newsData = [
    {
        id: 1,
        title: "Brasil bate recorde histórico na produção de biocombustíveis",
        excerpt: "Etanol e biodiesel somaram quase 43 bilhões de litros produzidos em 2023, segundo a ANP. O país é o 2º maior produtor de etanol do mundo e lidera a expansão global do setor, sendo responsável por 40% do crescimento previsto até 2028, segundo a Agência Internacional de Energia (AIE).",
        category: "mercado",
        categoryLabel: "Mercado",
        date: "Jul 2024",
        author: "Fonte: Agência Gov / ANP",
        source: "https://agenciagov.ebc.com.br/noticias/202407/producao-de-biocombustiveis-cresce-no-brasil-e-alcanca-recorde-historico-1",
        image: "linear-gradient(135deg, #2D5A3D, #319795)",
        emoji: "⛽"
    },
    {
        id: 2,
        title: "PIB da Bioeconomia chega a R$ 2,7 trilhões e representa 25% do PIB nacional",
        excerpt: "Levantamento do Observatório de Bioeconomia da FGV revela que a bioeconomia cresceu 1,03% em 2023. A bioindústria lidera com 46% do total (R$ 1,8 tri), seguida pela bioeconomia primária com 41% (R$ 1,1 tri).",
        category: "mercado",
        categoryLabel: "Mercado",
        date: "Ago 2024",
        author: "Fonte: Observatório de Bioeconomia FGV",
        source: "https://envolverde.com.br/politica-publica/economia/pib-da-bioeconomia-cresce-103-em-2023-ante-a-retracao-de-2022-revela-o-observatorio-de-bioeconomia-da-fgv/",
        image: "linear-gradient(135deg, #2B6CB0, #4299E1)",
        emoji: "📊"
    },
    {
        id: 3,
        title: "Emissões de gases de efeito estufa caem 16,7% no Brasil em 2024",
        excerpt: "A maior queda em 16 anos foi registrada pelo SEEG/Observatório do Clima. A redução do desmatamento na Amazônia e no Cerrado foi o principal fator, com queda de 32,5% nas emissões por mudança de uso da terra.",
        category: "sustentabilidade",
        categoryLabel: "Sustentabilidade",
        date: "Nov 2025",
        author: "Fonte: Observatório do Clima / Agência Brasil",
        source: "https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2025-11/brasil-reduziu-167-emissoes-de-gases-do-efeito-estufa-em-2024",
        image: "linear-gradient(135deg, #4A7C59, #2D5A3D)",
        emoji: "🌍"
    },
    {
        id: 4,
        title: "Lei de Bioinsumos é sancionada e cria marco regulatório inédito no Brasil",
        excerpt: "A Lei nº 15.070/2024, sancionada em dezembro de 2024, regulamenta pela primeira vez a produção, comercialização e uso de bioinsumos no Brasil. O setor movimenta R$ 5 bilhões por safra e cresce 21% ao ano — quatro vezes acima da média global.",
        category: "politicas",
        categoryLabel: "Políticas",
        date: "Dez 2024",
        author: "Fonte: Insper Agro / ANPII Bio",
        source: "https://agro.insper.edu.br/midia/entrevista/os-impactos-da-nova-lei-de-bioinsumos-no-agronegocio-brasileiro",
        image: "linear-gradient(135deg, #8B5E3C, #A67B5B)",
        emoji: "📋"
    },
    {
        id: 5,
        title: "Brasil pode criar 760 mil empregos em bioenergia até 2030",
        excerpt: "Estudo da Schneider Electric e Systemiq aponta que o Brasil já representa 26% da força de trabalho global no setor de bioenergia. Com políticas adequadas, o país pode ampliar em 63% sua capacidade de geração de empregos na área até o fim da década.",
        category: "tecnologia",
        categoryLabel: "Tecnologia",
        date: "Nov 2025",
        author: "Fonte: Schneider Electric / Systemiq",
        source: "https://www.se.com/br/pt/about-us/newsroom/news/press-releases/Brasil-pode-criar-760-mil-novos-empregos-em-bioenergia-até-2030-aponta-estudo-da-Schneider-Electric-e-Systemiq-6924b78496ab414d430e3ff0",
        image: "linear-gradient(135deg, #319795, #2B6CB0)",
        emoji: "💡"
    },
    {
        id: 6,
        title: "Mato Grosso do Sul lança primeiro programa de carbono para agricultura familiar do Brasil",
        excerpt: "O programa Agroflorestar MS - Carbono Neutro, desenvolvido com Rabobank e Rabo Foundation, insere agricultores familiares no mercado de créditos de carbono por meio de sistemas agroflorestais com espécies nativas do Cerrado. Em 2024, o Brasil também instituiu o SBCE via Lei nº 15.042.",
        category: "sustentabilidade",
        categoryLabel: "Sustentabilidade",
        date: "2024",
        author: "Fonte: SEMADESC / Agência Gov",
        source: "https://agenciagov.ebc.com.br/noticias/202510/artigo-como-mato-grosso-do-sul-esta-democratizando-o-mercado-de-carbono-para-agricultores-familiares",
        image: "linear-gradient(135deg, #2D5A3D, #4A7C59)",
        emoji: "🌱"
    },
    {
        id: 7,
        title: "Mercado de orgânicos deve superar R$ 7 bilhões no Brasil em 2024",
        excerpt: "O Centro de Inteligência em Orgânicos projeta crescimento contínuo do setor, que já ultrapassou R$ 5,8 bilhões em 2020. Globalmente, o mercado de orgânicos pode atingir R$ 730 bilhões, com Brasil se firmando como produtor competitivo.",
        category: "mercado",
        categoryLabel: "Mercado",
        date: "2024",
        author: "Fonte: Centro de Inteligência em Orgânicos",
        source: "https://ciorganicos.com.br/biblioteca/mercado-de-organicos-deve-movimentar-mais-de-r-7-bilhoes-em-2024/",
        image: "linear-gradient(135deg, #C4A35A, #D4B86A)",
        emoji: "📈"
    },
    {
        id: 8,
        title: "Brasil pode gerar 7 milhões de empregos verdes até 2030",
        excerpt: "Estudo da Agenda Pública com a Fundação Grupo Volkswagen projeta 7,1 milhões de empregos verdes no Brasil até 2030 e 15 milhões até 2050, impulsionados por energias renováveis, bioeconomia, mobilidade sustentável e economia circular.",
        category: "politicas",
        categoryLabel: "Políticas",
        date: "2025",
        author: "Fonte: Agenda Pública / Fundação Grupo Volkswagen",
        source: "https://realtime1.com.br/brasil-pode-gerar-7-milhoes-de-empregos-verdes-ate-2030-aponta-estudo/",
        image: "linear-gradient(135deg, #1E3D2A, #2D5A3D)",
        emoji: "🏛️"
    }
];

// ============================================
// DOM Elements
// ============================================
const elements = {
    header: document.getElementById('header'),
    nav: document.getElementById('nav'),
    menuToggle: document.getElementById('menu-toggle'),
    themeToggle: document.getElementById('theme-toggle'),
    newsGrid: document.getElementById('news-grid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    newsletterForm: document.getElementById('newsletter-form'),
    toast: document.getElementById('toast'),
    animatedElements: document.querySelectorAll('.animate-on-scroll'),
    navLinks: document.querySelectorAll('.nav-link')
};

// ============================================
// Theme Management (Dark Mode)
// ============================================
const ThemeManager = {
    STORAGE_KEY: 'bioagro-theme',
    
    init() {
        // Verifica preferência salva ou preferência do sistema
        const savedTheme = localStorage.getItem(this.STORAGE_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else if (prefersDark) {
            this.setTheme('dark');
        }
        
        // Event listener para toggle
        elements.themeToggle.addEventListener('click', () => this.toggle());
        
        // Escuta mudanças na preferência do sistema
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem(this.STORAGE_KEY)) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    },
    
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.STORAGE_KEY, theme);
    },
    
    toggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
};

// ============================================
// Mobile Menu
// ============================================
const MobileMenu = {
    isOpen: false,
    
    init() {
        elements.menuToggle.addEventListener('click', () => this.toggle());
        
        // Fecha menu ao clicar em um link
        elements.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.isOpen) this.close();
            });
        });
        
        // Fecha menu com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) this.close();
        });
    },
    
    toggle() {
        this.isOpen ? this.close() : this.open();
    },
    
    open() {
        this.isOpen = true;
        elements.nav.classList.add('active');
        elements.menuToggle.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
    },
    
    close() {
        this.isOpen = false;
        elements.nav.classList.remove('active');
        elements.menuToggle.classList.remove('menu-open');
        document.body.style.overflow = '';
    }
};

// ============================================
// Header Scroll Effect
// ============================================
const HeaderScroll = {
    init() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                elements.header.classList.add('scrolled');
            } else {
                elements.header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
};

// ============================================
// News Renderer
// ============================================
const NewsRenderer = {
    init() {
        this.render(newsData);
        this.initFilters();
    },
    
    render(news) {
        elements.newsGrid.innerHTML = news.map(item => this.createCard(item)).join('');
    },
    
    createCard(item) {
        return `
            <article class="news-card animate-on-scroll visible" data-category="${item.category}">
                <div class="news-image" style="background: ${item.image};">
                    <span style="font-size: 3rem;">${item.emoji}</span>
                </div>
                <div class="news-content">
                    <span class="news-category">${item.categoryLabel}</span>
                    <h3 class="news-title">${item.title}</h3>
                    <p class="news-excerpt">${item.excerpt}</p>
                    <div class="news-meta">
                        <span>${item.date} • ${item.author}</span>
                        <a href="${item.source || '#'}" class="news-link" target="_blank" rel="noopener noreferrer">Ver fonte →</a>
                    </div>
                </div>
            </article>
        `;
    },
    
    initFilters() {
        elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active de todos
                elements.filterBtns.forEach(b => b.classList.remove('active'));
                // Adiciona active no clicado
                e.target.classList.add('active');
                
                const filter = e.target.dataset.filter;
                this.filterNews(filter);
            });
        });
    },
    
    filterNews(category) {
        const cards = document.querySelectorAll('.news-card');
        
        cards.forEach(card => {
            if (category === 'todos' || card.dataset.category === category) {
                card.classList.remove('hidden');
                // Adiciona animação de entrada
                card.style.animation = 'fadeIn 0.3s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    }
};

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
const ScrollAnimations = {
    init() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Opcional: parar de observar após animar
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        elements.animatedElements.forEach(el => observer.observe(el));
    }
};

// ============================================
// Smooth Scroll
// ============================================
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// ============================================
// Form Validation
// ============================================
const FormValidation = {
    init() {
        if (!elements.newsletterForm) return;
        
        elements.newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            
            let isValid = true;
            
            // Reset errors
            nameError.textContent = '';
            emailError.textContent = '';
            nameInput.style.borderColor = '';
            emailInput.style.borderColor = '';
            
            // Validate name
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Por favor, informe seu nome.';
                nameInput.style.borderColor = '#DC2626';
                isValid = false;
            } else if (nameInput.value.trim().length < 3) {
                nameError.textContent = 'O nome deve ter pelo menos 3 caracteres.';
                nameInput.style.borderColor = '#DC2626';
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Por favor, informe seu e-mail.';
                emailInput.style.borderColor = '#DC2626';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Por favor, informe um e-mail válido.';
                emailInput.style.borderColor = '#DC2626';
                isValid = false;
            }
            
            if (isValid) {
                // Simula envio
                Toast.show('Inscrição realizada com sucesso! 🎉');
                elements.newsletterForm.reset();
            }
        });
    }
};

// ============================================
// Toast Notifications
// ============================================
const Toast = {
    show(message, duration = 3000) {
        const toast = elements.toast;
        const toastMessage = toast.querySelector('.toast-message');
        
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    }
};

// ============================================
// CSS Animation Keyframes (adiciona via JS)
// ============================================
const addAnimationStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
};

// ============================================
// Active Navigation Highlight
// ============================================
const ActiveNavigation = {
    init() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            
            elements.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
};

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona estilos de animação
    addAnimationStyles();
    
    // Inicializa todos os módulos
    ThemeManager.init();
    MobileMenu.init();
    HeaderScroll.init();
    NewsRenderer.init();
    ScrollAnimations.init();
    SmoothScroll.init();
    FormValidation.init();
    ActiveNavigation.init();
    
    console.log('🌱 BioAgro Brasil - Site carregado com sucesso!');
});

// ============================================
// Expose Toast globally for external use
// ============================================
window.Toast = Toast;

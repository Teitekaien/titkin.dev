/**
 * TITKIN.DEV - Main JavaScript
 * Language switcher, Dark mode, and interactions
 */
(function () {
    'use strict';

    // ============================================
    // TRANSLATIONS
    // ============================================
    const translations = {
        en: {
            // Skip link
            'skip': 'Skip to main content',

            // Hero
            'hero.badge': 'AI-NATIVE AGENCY',
            'hero.title1': 'THE AI',
            'hero.title2': 'AGENCY',
            'hero.desc1': 'One architect. A swarm of intelligent agents.',
            'hero.desc2': 'Websites, videos, and soundscapes',
            'hero.desc3': 'delivered at the speed of thought.',
            'hero.desc4': 'Traditional agencies take weeks. I ship in',
            'hero.desc5': 'days',
            'hero.cta1': 'Start Your Project →',
            'hero.cta2': 'See the Evidence',

            // Services
            'services.label': 'CAPABILITIES',
            'services.title': 'What I Build',
            'services.vibe.desc': "I don't code manually. I orchestrate a swarm of AI agents (Claude, GPT-4, Gemini) to build complete web applications at record speed. I focus on intent architecture, not syntax.",
            'services.video.desc': 'Next-generation video production. From script to finished clip. I leverage cutting-edge text-to-video and image-to-video models to create engaging marketing content.',
            'services.audio.desc': 'Generative soundtracks, unique samples, and voice synthesis. Perfect for video marketing, podcasts, and interactive media. Sound that builds narrative.',
            'services.images.desc': 'Custom visuals, product mockups, marketing assets, and artistic concepts. High-fidelity image generation tailored to your brand identity.',

            // Method
            'method.label': 'THE METHOD',
            'method.title1': "I Don't Sell Hours.",
            'method.title2': 'I Sell',
            'method.title3': 'Results',
            'method.text1': "Most agencies are people writing code. I'm an Architect who conducts an army of specialized AI agents.",
            'method.text2': 'This isn\'t "AI assistance." This is',
            'method.text3': 'One human with the right stack replaces a 5-person team. You get senior developer quality at a pace that seems impossible.',
            'method.stat1a': 'Faster',
            'method.stat1b': 'Deployment',
            'method.stat2a': 'Autonomous',
            'method.stat2b': 'Optimization',
            'method.stat3a': 'Human',
            'method.stat3b': 'Strategy',

            // Portfolio
            'portfolio.label': 'EVIDENCE',
            'portfolio.title': 'Case Studies',
            'portfolio.col.project': 'Project',
            'portfolio.col.type': 'Type',
            'portfolio.brief': 'PROJECT BRIEF',
            'portfolio.client': 'CLIENT',
            'portfolio.role': 'ROLE',
            'portfolio.time': 'TIME',
            'portfolio.p1.type': 'Artist Portfolio',
            'portfolio.p1.desc': 'Minimalist portfolio for a pastel artist. The main challenge was creating an "invisible" interface that doesn\'t distract from the art, while maintaining maximum performance (Google PageSpeed 100/100).',
            'portfolio.p2.desc': 'This very site. An experiment in "Brutalist Engineering" style. Built largely by autonomous agents writing code in real-time under my supervision.',

            // FAQ
            'faq.title': 'Common Questions',
            'faq.q1': 'What is "Vibe Coding"?',
            'faq.a1': "It's a methodology where I direct AI agents to write code based on my architectural vision. I focus on intent and quality control, while AI handles execution. Think of it as conducting an orchestra — I don't play every instrument, but I shape the symphony.",
            'faq.q2': 'How fast can you deliver?',
            'faq.a2': 'Depending on scope: simple landing pages in 24-48 hours, complex websites in 1-2 weeks, full applications in 2-4 weeks. I work in sprints with clear milestones so you always know where we stand.',
            'faq.q3': 'Is AI-generated content lower quality?',
            'faq.a3': 'No — when properly orchestrated, AI produces senior-level code. The key is human oversight. I review, refine, and test everything before delivery. You get the speed of AI with the judgment of an experienced developer.',
            'faq.q4': 'What technologies do you use?',
            'faq.a4': 'For web: HTML/CSS/JS for static sites, Next.js for apps, Supabase for backends. For AI content: Runway & Pika (video), Suno & ElevenLabs (audio), Midjourney & Flux (images). I stay current with the latest models.',
            'faq.q5': 'How does pricing work?',
            'faq.a5': 'Project-based, not hourly. You pay for outcomes, not time spent. This aligns our incentives — the faster I deliver quality work, the better for both of us. Reach out for a custom quote based on your specific needs.',
            'faq.q6': 'Can you work with my existing site?',
            'faq.a6': "Yes — I can redesign, optimize, extend, or completely rebuild existing projects. I'll analyze what you have and recommend the most efficient path forward.",
            'faq.q7': "What if I'm not satisfied?",
            'faq.a7': "Clear milestones with review points at each stage. We iterate until you're happy. I don't consider a project done until you've signed off on the results.",
            'faq.q8': 'Do you offer ongoing support?',
            'faq.a8': 'Yes — maintenance packages available for hosting, updates, content changes, and new features. I can also train you or your team to manage the site independently.',

            // CTA
            'cta.title1': 'Have an Idea?',
            'cta.title2': "Let's Build It Together.",
            'cta.desc': 'From concept to deployment. Fast, precise, with attention to detail.',

            // Footer
            'footer.desc': 'AI-native agency. Combining human intuition with a swarm of AI agents to deliver software faster than ever thought possible.',
            'footer.nav': 'Navigation',
            'footer.home': 'Home',
            'footer.services': 'Services',
            'footer.contact': 'Contact',
            'footer.connect': 'Connect',
            'footer.copyright': '© 2025 TITKIN.DEV. All rights reserved.'
        },
        pl: {
            // Skip link
            'skip': 'Przejdź do treści',

            // Hero
            'hero.badge': 'AGENCJA AI-NATIVE',
            'hero.title1': 'AGENCJA',
            'hero.title2': 'AI',
            'hero.desc1': 'Jeden architekt. Rój inteligentnych agentów.',
            'hero.desc2': 'Strony, filmy i ścieżki dźwiękowe',
            'hero.desc3': 'dostarczane z prędkością myśli.',
            'hero.desc4': 'Tradycyjne agencje potrzebują tygodni. Ja dostarczam w',
            'hero.desc5': 'dni',
            'hero.cta1': 'Rozpocznij projekt →',
            'hero.cta2': 'Zobacz dowody',

            // Services
            'services.label': 'MOŻLIWOŚCI',
            'services.title': 'Co tworzę',
            'services.vibe.desc': 'Nie koduję ręcznie. Zarządzam rojem agentów AI (Claude, GPT-4, Gemini), aby tworzyć kompletne aplikacje webowe w rekordowym tempie. Skupiam się na architekturze intencji, nie na składni.',
            'services.video.desc': 'Produkcja wideo nowej generacji. Od scenariusza po gotowy klip. Wykorzystuję najnowsze modele text-to-video i image-to-video do tworzenia angażujących treści marketingowych.',
            'services.audio.desc': 'Generatywne ścieżki dźwiękowe, unikalne sample i synteza głosu. Idealne do marketingu wideo, podcastów i interaktywnych mediów. Dźwięk, który buduje narrację.',
            'services.images.desc': 'Niestandardowe wizualizacje, mockupy produktów, materiały marketingowe i koncepcje artystyczne. Generowanie obrazów wysokiej jakości dostosowanych do tożsamości Twojej marki.',

            // Method
            'method.label': 'METODA',
            'method.title1': 'Nie sprzedaję godzin.',
            'method.title2': 'Sprzedaję',
            'method.title3': 'Wyniki',
            'method.text1': 'Większość agencji to ludzie piszący kod. Ja jestem Architektem, który dyryguje armią wyspecjalizowanych agentów AI.',
            'method.text2': 'To nie jest "wspomaganie AI". To',
            'method.text3': 'Jeden człowiek z odpowiednim stackiem zastępuje 5-osobowy zespół. Dostajesz jakość senior developera w tempie, które wydaje się niemożliwe.',
            'method.stat1a': 'Szybsze',
            'method.stat1b': 'Wdrożenie',
            'method.stat2a': 'Autonomiczna',
            'method.stat2b': 'Optymalizacja',
            'method.stat3a': 'Ludzka',
            'method.stat3b': 'Strategia',

            // Portfolio
            'portfolio.label': 'DOWODY',
            'portfolio.title': 'Realizacje',
            'portfolio.col.project': 'Projekt',
            'portfolio.col.type': 'Typ',
            'portfolio.brief': 'OPIS PROJEKTU',
            'portfolio.client': 'KLIENT',
            'portfolio.role': 'ROLA',
            'portfolio.time': 'CZAS',
            'portfolio.p1.type': 'Portfolio artysty',
            'portfolio.p1.desc': 'Minimalistyczne portfolio dla artystki pastelowej. Głównym wyzwaniem było stworzenie "niewidzialnego" interfejsu, który nie odciąga uwagi od sztuki, przy zachowaniu maksymalnej wydajności (Google PageSpeed 100/100).',
            'portfolio.p2.desc': 'Ta strona. Eksperyment ze stylem "Brutalist Engineering". Zbudowana w dużej mierze przez autonomiczne agenty piszące kod w czasie rzeczywistym pod moim nadzorem.',

            // FAQ
            'faq.title': 'Najczęstsze pytania',
            'faq.q1': 'Czym jest "Vibe Coding"?',
            'faq.a1': 'To metodologia, w której kieruję agentami AI do pisania kodu zgodnie z moją wizją architektoniczną. Skupiam się na intencji i kontroli jakości, podczas gdy AI zajmuje się wykonaniem. Pomyśl o tym jak o dyrygowaniu orkiestrą — nie gram na każdym instrumencie, ale kształtuję symfonię.',
            'faq.q2': 'Jak szybko możesz dostarczyć?',
            'faq.a2': 'W zależności od zakresu: proste landing page w 24-48 godzin, złożone strony w 1-2 tygodnie, pełne aplikacje w 2-4 tygodnie. Pracuję w sprintach z jasnymi kamieniami milowymi, więc zawsze wiesz, na jakim etapie jesteśmy.',
            'faq.q3': 'Czy treści generowane przez AI są niższej jakości?',
            'faq.a3': 'Nie — przy odpowiedniej orkiestracji AI produkuje kod na poziomie seniora. Kluczem jest ludzki nadzór. Przeglądam, udoskonalam i testuję wszystko przed dostarczeniem. Dostajesz szybkość AI z osądem doświadczonego developera.',
            'faq.q4': 'Jakich technologii używasz?',
            'faq.a4': 'Do stron: HTML/CSS/JS dla statycznych, Next.js dla aplikacji, Supabase dla backendów. Do treści AI: Runway i Pika (wideo), Suno i ElevenLabs (audio), Midjourney i Flux (obrazy). Śledzę najnowsze modele.',
            'faq.q5': 'Jak działa wycena?',
            'faq.a5': 'Projektowo, nie godzinowo. Płacisz za rezultaty, nie za spędzony czas. To wyrównuje nasze interesy — im szybciej dostarczę jakościową pracę, tym lepiej dla nas obojga. Napisz po indywidualną wycenę.',
            'faq.q6': 'Czy możesz pracować z moją istniejącą stroną?',
            'faq.a6': 'Tak — mogę przeprojektować, zoptymalizować, rozszerzyć lub całkowicie przebudować istniejące projekty. Przeanalizuję co masz i polecę najbardziej efektywną ścieżkę.',
            'faq.q7': 'Co jeśli nie będę zadowolony?',
            'faq.a7': 'Jasne kamienie milowe z punktami kontrolnymi na każdym etapie. Iterujemy aż będziesz zadowolony. Nie uważam projektu za ukończony, dopóki nie zaakceptujesz rezultatów.',
            'faq.q8': 'Czy oferujesz wsparcie po wdrożeniu?',
            'faq.a8': 'Tak — dostępne pakiety utrzymania obejmujące hosting, aktualizacje, zmiany treści i nowe funkcje. Mogę też przeszkolić Ciebie lub Twój zespół do samodzielnego zarządzania stroną.',

            // CTA
            'cta.title1': 'Masz pomysł?',
            'cta.title2': 'Zbudujmy to razem.',
            'cta.desc': 'Od koncepcji po wdrożenie. Szybko, precyzyjnie, z dbałością o detale.',

            // Footer
            'footer.desc': 'Agencja AI-native. Łączę ludzką intuicję z rojem agentów AI, aby dostarczać oprogramowanie szybciej niż kiedykolwiek wcześniej.',
            'footer.nav': 'Nawigacja',
            'footer.home': 'Start',
            'footer.services': 'Usługi',
            'footer.contact': 'Kontakt',
            'footer.connect': 'Połącz się',
            'footer.copyright': '© 2025 TITKIN.DEV. Wszelkie prawa zastrzeżone.'
        }
    };

    // ============================================
    // LANGUAGE SWITCHER
    // ============================================
    // Default: Polish for Polish browsers, English for others
    function detectDefaultLanguage() {
        const browserLang = navigator.language || navigator.userLanguage || 'pl';
        return browserLang.toLowerCase().startsWith('pl') ? 'pl' : 'en';
    }

    let currentLang = localStorage.getItem('lang') || detectDefaultLanguage();

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        document.documentElement.setAttribute('data-lang', lang);

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update toggle button label
        const langLabel = document.getElementById('lang-label');
        if (langLabel) {
            langLabel.textContent = lang === 'en' ? 'PL' : 'EN';
        }
    }

    // ============================================
    // DARK MODE
    // ============================================
    // Default: Light theme
    let currentTheme = localStorage.getItem('theme') || 'light';

    function setTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);

        const lightIcon = document.getElementById('theme-icon-light');
        const darkIcon = document.getElementById('theme-icon-dark');

        if (lightIcon && darkIcon) {
            if (theme === 'dark') {
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'inline';
            } else {
                lightIcon.style.display = 'inline';
                darkIcon.style.display = 'none';
            }
        }
    }

    // ============================================
    // PORTFOLIO ACCORDION
    // ============================================
    function toggleRow(row) {
        if (!row.classList.contains('accordion-toggle')) return;
        const wasActive = row.classList.contains('active-row');

        document.querySelectorAll('.accordion-toggle.active-row').forEach(function (activeRow) {
            if (activeRow !== row) {
                activeRow.classList.remove('active-row');
                activeRow.setAttribute('aria-expanded', 'false');
                const details = activeRow.nextElementSibling;
                if (details && details.classList.contains('details-row')) {
                    details.classList.remove('show');
                    details.setAttribute('aria-hidden', 'true');
                }
            }
        });

        row.classList.toggle('active-row');
        row.setAttribute('aria-expanded', !wasActive);

        const detailsRow = row.nextElementSibling;
        if (detailsRow && detailsRow.classList.contains('details-row')) {
            detailsRow.classList.toggle('show');
            detailsRow.setAttribute('aria-hidden', wasActive);
        }
    }

    window.toggleRow = toggleRow;

    // ============================================
    // EVENT LISTENERS
    // ============================================
    document.addEventListener('DOMContentLoaded', function () {
        // Initialize language
        setLanguage(currentLang);

        // Initialize theme
        setTheme(currentTheme);

        // Language toggle
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', function () {
                setLanguage(currentLang === 'en' ? 'pl' : 'en');
            });
        }

        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', function () {
                setTheme(currentTheme === 'light' ? 'dark' : 'light');
            });
        }
    });

    // Keyboard support for accordion
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.classList.contains('accordion-toggle')) {
                e.preventDefault();
                toggleRow(e.target);
            }
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, targetId);
            }
        });
    });

    // Console message
    console.log('%cTITKIN.DEV - Built with AI agents', 'font-size: 16px; font-weight: bold;');
})();

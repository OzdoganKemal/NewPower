import React, { useState, createContext, useContext, useEffect, useRef } from 'react';

// --- Theme & Language Context Setup ---

const AppContext = createContext();

const translations = {
  en: {
    navHome: "Home",
    navAbout: "My Approach",
    navServices: "Services",
    navProcess: "Process",
    navOptimization: "Optimization",
    navContact: "Contact",
    getInTouch: "Get in Touch",
    heroTitle: "Turn Your Business Processes into a Competitive Advantage",
    heroSubtitle: "I am here to support your digital transformation. I turn your complex operations into simple, efficient, and powerful solutions by extending the capabilities of your IFS environment with modern technology.",
    exploreServices: "Discover My Solutions",
    contactMe: "Book a Consultation",
    aboutTitle: "The Intersection of Technology & Strategy",
    aboutP1: "My philosophy is simple: Your ERP system should adapt to your business, not the other way around. As a consultant with deep expertise in both the technical and functional aspects of IFS, I don't just implement software; I build strategic assets.",
    aboutHighlights: [
        { title: "Holistic Approach", description: "I connect deep technical knowledge with strategic business vision to ensure solutions are not only functional but also drive real growth." },
        { title: "Technical Depth", description: "From database optimization to custom app development with React, I solve complex challenges that go beyond standard consulting." },
        { title: "Business Acumen", description: "I understand that technology is a tool for business success. Every solution is designed to deliver measurable ROI and a seamless user experience." }
    ],
    processTitle: "My Approach: The DDX Methodology",
    processSubtitle: "A structured process to ensure successful outcomes and maximum value.",
    processSteps: [
        { title: "Discovery & Analysis", description: "We start by deeply understanding your current processes, challenges, and strategic goals." },
        { title: "Strategy & Design", description: "I design a tailored solution and a strategic roadmap that aligns technology with your business objectives." },
        { title: "Implementation & Development", description: "I manage the entire implementation, development, and integration process with precision and transparency." },
        { title: "Value Realization & Support", description: "After go-live, I provide continuous support and optimization to ensure you realize the full value of your investment." }
    ],
    optimizationTitle: "IFS Process Optimization: From Insight to Impact",
    optimizationSubtitle: "I don't just set up an ERP system; I design smarter, faster, and more profitable processes that carry your business into the future. I use my proven methodology to ensure you get maximum value from your existing IFS investment.",
    optimizationSteps: [
        { title: "As-Is Process Analysis", description: "Through workshops, user interviews, and system data analysis, I create a detailed map of your current workflows (e.g., Order-to-Cash). I clearly identify inefficiencies, bottlenecks, and hidden costs. Our goal is to provide a clear picture and present initial strategic ideas for improvement based on the latest IFS standards.", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
        { title: "Improvement & Restructuring (To-Be)", description: "Leveraging industry best practices and standard IFS capabilities, I design simpler, more intelligent processes that eliminate redundant steps. This new configuration is structured to be easier for your users and more efficient for your business.", icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" },
        { title: "Continuous Improvement & Automation", description: "I make the improved processes permanent by supporting them with custom IFS Lobbies, automations (event actions), and reporting. I transform your system into a flexible structure that can easily adapt to future needs.", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" }
    ],
    servicesTitle: "My Solutions & Expertise",
    servicesSubtitle: "From core ERP optimization to custom application development, I provide end-to-end solutions.",
    ctaTitle: "Ready to Build a More Agile & Efficient Enterprise?",
    ctaSubtitle: "Let's discuss how we can transform your IFS system from a simple tool into a powerful engine for growth and innovation. Schedule your strategic consultation today.",
    ctaButton: "Schedule a Consultation",
    contactTitle: "Get In Touch",
    contactSubtitle: "Have a question or a project to discuss? I'd love to hear from you.",
    contactInfoTitle: "Contact Information",
    contactInfoSubtitle: "Fill out the form and I'll get back to you shortly.",
    formName: "Your Name",
    formEmail: "Your Email",
    formSubject: "Subject",
    formMessage: "Your Message",
    formButton: "Send Message",
    helpMeWrite: "Help me write ✨",
    generating: "Generating...",
    footerSlogan: "Driving business excellence through technology.",
    footerRights: "All Rights Reserved.",
    services: {
        technical: {
            title: "Technical Consultancy",
            items: [
                { title: "Performance Tuning & Optimization", description: "Oracle database tuning, PL/SQL optimization, and resolving performance bottlenecks in your IFS environment." },
                { title: "Custom Development & Integrations", description: "Extending IFS with custom web/mobile apps (React/Native) and integrating with 3rd-party systems via IFS Connect, REST & OData APIs." },
                { title: "AI & Cloud Assistant Implementation", description: "Deploying and configuring the IFS Cloud Assistant, and developing strategies to leverage AI for predictive insights and automation." },
                { title: "System Health & Maintenance", description: "Providing expert support, version upgrades, patch management, and proactive monitoring for the long-term health of your IFS system." }
            ]
        },
        functional: {
            title: "Functional Consultancy",
            items: [
                { title: "Business Process Optimization", description: "Analyzing and re-engineering your core business flows like Order-to-Cash or Procure-to-Pay within IFS." },
                { title: "Module Implementation & Configuration", description: "Expert configuration of core IFS modules: Finance, SCM, HCM, Manufacturing, Project, EAM, and Service Management." },
                { title: "Strategic Roadmap & Aurena Migration", description: "Providing strategic guidance for upgrades and planning a seamless, value-driven migration to the IFS Aurena user experience." },
                { title: "User Adoption & Training", description: "Ensuring your team leverages all system capabilities, including custom Lobbies, through effective, role-based training." }
            ]
        }
    }
  },
  tr: {
    navHome: "Ana Sayfa",
    navAbout: "Yaklaşımım",
    navServices: "Hizmetler",
    navProcess: "Sürecim",
    navOptimization: "Süreç Optimizasyonu",
    navContact: "İletişim",
    getInTouch: "Randevu Alın",
    heroTitle: "İş Süreçlerinizi Rekabet Avantajına Dönüştürün",
    heroSubtitle: "Dijital dönüşümünüzde size destek olmak için buradayım. Karmaşık operasyonlarınızı modern teknolojiyle basit, verimli ve güçlü çözümlere dönüştürüyorum.",
    exploreServices: "Çözümlerimi Keşfedin",
    contactMe: "Danışmanlık Randevusu",
    aboutTitle: "Teknoloji ve Stratejinin Kesişim Noktası",
    aboutP1: "Felsefem basit: ERP sisteminiz işinize adapte olmalı, işiniz ERP'ye değil. IFS'in hem teknik hem de fonksiyonel yönlerinde derin uzmanlığa sahip bir danışman olarak, sadece yazılım kurmuyorum; stratejik varlıklar inşa ediyorum.",
    aboutHighlights: [
        { title: "Bütünsel Yaklaşım", description: "Çözümlerin sadece işlevsel olmasını değil, aynı zamanda gerçek büyüme sağlamasını garanti etmek için derin teknik bilgiyi stratejik iş vizyonuyla birleştiriyorum." },
        { title: "Teknik Derinlik", description: "Veritabanı optimizasyonundan React ile özel uygulama geliştirmeye kadar, standart danışmanlığın ötesine geçen karmaşık zorlukları çözüyorum." },
        { title: "İş Odaklılık", description: "Teknolojinin iş başarısı için bir araç olduğunu anlıyorum. Her çözüm, ölçülebilir yatırım getirisi ve kusursuz bir kullanıcı deneyimi sunmak üzere tasarlanmıştır." }
    ],
    processTitle: "Sürecim: DDX Metodolojisi",
    processSubtitle: "Başarılı sonuçlar ve maksimum değer sağlamak için yapılandırılmış bir süreç.",
    processSteps: [
        { title: "Keşif ve Analiz", description: "Mevcut süreçlerinizi, zorluklarınızı ve stratejik hedeflerinizi derinlemesine anlayarak başlıyoruz." },
        { title: "Strateji ve Tasarım", description: "Teknolojiyi iş hedeflerinizle uyumlu hale getiren özel bir çözüm ve stratejik bir yol haritası tasarlıyorum." },
        { title: "Uygulama ve Geliştirme", description: "Tüm uygulama, geliştirme ve entegrasyon sürecini hassasiyet ve şeffaflıkla yönetiyorum." },
        { title: "Değer Yaratma ve Destek", description: "Canlıya geçtikten sonra, yatırımınızın tam değerini elde etmenizi sağlamak için sürekli destek ve optimizasyon sağlıyorum." }
    ],
    optimizationTitle: "IFS ile Süreç Mükemmelliği: Verimlilik ve Büyüme",
    optimizationSubtitle: "Sadece bir ERP sistemi kurmuyorum; işinizi geleceğe taşıyan, daha akıllı, daha hızlı ve daha kârlı süreçler tasarlıyorum. Mevcut IFS yatırımınızdan maksimum değeri elde etmeniz için kanıtlanmış metodolojimi kullanıyorum.",
    optimizationSteps: [
        { title: "Mevcut Süreç Analizi (As-Is)", description: "Bu ilk ve en kritik adımda, işletmenizin DNA'sını anlamak için derinlemesine bir yolculuğa çıkıyoruz. Atölye çalışmaları ve kilit kullanıcılarınızla yapacağımız birebir görüşmelerle mevcut süreçlerinizi (örneğin Siparişten Tahsilata) haritalandırıyor; darboğazları, gizli maliyetleri ve verimsizlikleri somut verilerle ortaya koyuyoruz. Amacımız, en son IFS standartları ışığında süreçlerinizi nasıl daha verimli hale getirebileceğimize dair ilk stratejik fikirleri sunmaktır.", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
        { title: "İyileştirme ve Yeniden Yapılandırma (To-Be)", description: "Sektördeki en iyi uygulamaları ve IFS'in standart yeteneklerini kullanarak, gereksiz adımları ortadan kaldıran, daha basit ve akıllı süreçler tasarlıyorum. Bu yeni yapılandırma, kullanıcılarınız için daha kolay, işletmeniz için daha verimli olacak şekilde kurgulanır.", icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" },
        { title: "Sürekli Gelişim ve Otomasyon", description: "İyileştirilmiş süreçleri, özel IFS Lobi'leri, otomasyonlar (event actions) ve raporlamalar ile destekleyerek kalıcı hale getiriyorum. Sisteminizi, gelecekteki ihtiyaçlarınıza kolayca adapte olabilecek esnek bir yapıya kavuşturuyorum.", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" }
    ],
    servicesTitle: "Çözümlerim ve Uzmanlık Alanlarım",
    servicesSubtitle: "Temel ERP optimizasyonundan özel uygulama geliştirmeye kadar uçtan uca çözümler.",
    ctaTitle: "Daha Çevik ve Verimli Bir İşletme Kurmaya Hazır mısınız?",
    ctaSubtitle: "IFS sisteminizi basit bir araçtan güçlü bir büyüme ve inovasyon motoruna nasıl dönüştürebileceğimizi tartışalım. Stratejik danışmanlık randevunuzu bugün alın.",
    ctaButton: "Danışmanlık Talep Edin",
    contactTitle: "İletişime Geçin",
    contactSubtitle: "Bir sorunuz veya projeniz mi var? Sizden haber almak isterim.",
    contactInfoTitle: "İletişim Bilgileri",
    contactInfoSubtitle: "Formu doldurun, size kısa sürede geri döneceğim.",
    formName: "Adınız",
    formEmail: "E-posta Adresiniz",
    formSubject: "Konu",
    formMessage: "Mesajınız",
    formButton: "Mesajı Gönder",
    helpMeWrite: "Yazmama yardım et ✨",
    generating: "Oluşturuluyor...",
    footerSlogan: "Teknoloji ile iş mükemmelliğini sağlamak.",
    footerRights: "Tüm Hakları Saklıdır.",
     services: {
        technical: {
            title: "Teknik Danışmanlık",
            items: [
                { title: "Performans İyileştirme ve Optimizasyon", description: "Oracle veritabanı ayarları, PL/SQL optimizasyonu ve IFS ortamınızdaki performans darboğazlarını çözme." },
                { title: "Özel Geliştirme ve Entegrasyonlar", description: "IFS'i React/Native ile özel web/mobil uygulamalarla genişletme ve IFS Connect, REST & OData API'leri ile 3. parti sistemlere entegre etme." },
                { title: "Yapay Zeka ve Cloud Assistant Uygulaması", description: "IFS Cloud Assistant'ı kurma, yapılandırma ve yapay zekayı öngörüsel analiz ve otomasyon için kullanma stratejileri geliştirme." },
                { title: "Sistem Sağlığı ve Bakımı", description: "IFS sisteminizin uzun vadeli sağlığı için uzman desteği, sürüm yükseltmeleri, yama yönetimi ve proaktif izleme sağlama." }
            ]
        },
        functional: {
            title: "Fonksiyonel Danışmanlık",
            items: [
                { title: "İş Süreçleri Optimizasyonu", description: "Siparişten Tahsilata (Order-to-Cash) veya Tedarikten Ödemeye (Procure-to-Pay) gibi temel iş akışlarınızı IFS içinde analiz etme ve iyileştirme." },
                { title: "Modül Uygulaması ve Yapılandırması", description: "Finans, SCM, HCM, Üretim, Proje, EAM ve Servis Yönetimi dahil olmak üzere temel IFS modüllerinin uzman düzeyinde yapılandırılması." },
                { title: "Stratejik Yol Haritası ve Aurena Geçişi", description: "Sürüm yükseltmeleri ve IFS Aurena kullanıcı deneyimine sorunsuz, değer odaklı bir geçiş planlaması için stratejik rehberlik sağlama." },
                { title: "Kullanıcı Adaptasyonu ve Eğitimi", description: "Ekibinizin, özel Lobi'ler de dahil olmak üzere tüm sistem yeteneklerini etkin, rol bazlı eğitimlerle kullanmasını sağlama." }
            ]
        }
    }
  },
  de: {
    navHome: "Start",
    navAbout: "Mein Ansatz",
    navServices: "Leistungen",
    navProcess: "Mein Prozess",
    navOptimization: "Optimierung",
    navContact: "Kontakt",
    getInTouch: "Termin Buchen",
    heroTitle: "Schaffen Sie Wettbewerbsvorteile durch digitale Transformation",
    heroSubtitle: "Ich bin hier, um Ihre digitale Transformation zu unterstützen. Ich verwandle Ihre komplexen Abläufe in einfache, effiziente und leistungsstarke Lösungen, indem ich die Fähigkeiten Ihrer IFS-Umgebung mit moderner Technologie erweitere.",
    exploreServices: "Meine Lösungen entdecken",
    contactMe: "Beratung Buchen",
    aboutTitle: "Die Schnittstelle von Technologie & Strategie",
    aboutP1: "Meine Philosophie ist einfach: Ihr ERP-System sollte sich an Ihr Unternehmen anpassen, nicht umgekehrt. Als Berater mit tiefgreifender Expertise in den technischen und funktionalen Aspekten von IFS implementiere ich nicht nur Software; ich schaffe strategische Werte.",
    aboutHighlights: [
        { title: "Ganzheitlicher Ansatz", description: "Ich verbinde tiefes technisches Wissen mit strategischer Geschäftsvision, um sicherzustellen, dass Lösungen nicht nur funktional sind, sondern auch echtes Wachstum fördern." },
        { title: "Technische Tiefe", description: "Von der Datenbankoptimierung bis zur Entwicklung benutzerdefinierter Apps mit React löse ich komplexe Herausforderungen, die über die Standardberatung hinausgehen." },
        { title: "Geschäftssinn", description: "Ich verstehe, dass Technologie ein Werkzeug für den Geschäftserfolg ist. Jede Lösung ist darauf ausgelegt, einen messbaren ROI und ein nahtloses Benutzererlebnis zu liefern." }
    ],
    processTitle: "Mein Prozess: Die DDX-Methodik",
    processSubtitle: "Ein strukturierter Prozess, um erfolgreiche Ergebnisse und maximalen Wert sicherzustellen.",
    processSteps: [
        { title: "Entdeckung & Analyse", description: "Wir beginnen damit, Ihre aktuellen Prozesse, Herausforderungen und strategischen Ziele tiefgreifend zu verstehen." },
        { title: "Strategie & Design", description: "Ich entwerfe eine maßgeschneiderte Lösung und eine strategische Roadmap, die Technologie mit Ihren Geschäftszielen in Einklang bringt." },
        { title: "Implementierung & Entwicklung", description: "Ich verwalte den gesamten Implementierungs-, Entwicklungs- und Integrationsprozess mit Präzision und Transparenz." },
        { title: "Wertschöpfung & Support", description: "Nach dem Go-Live biete ich kontinuierlichen Support und Optimierung, um sicherzustellen, dass Sie den vollen Wert Ihrer Investition realisieren." }
    ],
    optimizationTitle: "IFS-Prozessoptimierung: Von der Einsicht zur Wirkung",
    optimizationSubtitle: "Ich richte nicht nur ein ERP-System ein; ich entwerfe intelligentere, schnellere und profitablere Prozesse, die Ihr Unternehmen in die Zukunft führen. Ich nutze meine bewährte Methodik, um sicherzustellen, dass Sie den maximalen Wert aus Ihrer bestehenden IFS-Investition ziehen.",
    optimizationSteps: [
        { title: "Ist-Prozessanalyse", description: "In diesem ersten und kritischsten Schritt tauchen wir tief ein, um die DNA Ihres Unternehmens zu verstehen. Durch Workshops und Einzelinterviews mit Ihren Schlüsselanwendern kartieren wir nicht nur Ihre aktuellen Prozesse (z. B. Order-to-Cash), sondern identifizieren auch Engpässe, versteckte Kosten und Ineffizienzen mit konkreten Daten. Unser Ziel ist es, ein klares Bild zu schaffen und erste strategische Verbesserungsideen auf Basis der neuesten IFS-Standards zu präsentieren.", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
        { title: "Verbesserung & Neugestaltung (Soll)", description: "Auf der Grundlage von Branchen-Best-Practices und Standard-IFS-Funktionen entwerfe ich einfachere, intelligentere Prozesse, die überflüssige Schritte eliminieren. Diese neue Konfiguration ist so strukturiert, dass sie für Ihre Benutzer einfacher und für Ihr Unternehmen effizienter ist.", icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" },
        { title: "Kontinuierliche Verbesserung & Automatisierung", description: "Durch die Automatisierung und kontinuierliche Überwachung Ihrer Prozesse stelle ich sicher, dass Ihr Unternehmen langfristig agil bleibt.", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" }
    ],
    servicesTitle: "Meine Lösungen & Expertise",
    servicesSubtitle: "Von der Optimierung des Kern-ERP bis zur Entwicklung kundenspezifischer Anwendungen biete ich End-to-End-Lösungen.",
    ctaTitle: "Bereit für ein agileres & effizienteres Unternehmen?",
    ctaSubtitle: "Lassen Sie uns besprechen, wie wir Ihr IFS-System von einem einfachen Werkzeug in einen leistungsstarken Motor für Wachstum und Innovation verwandeln können. Vereinbaren Sie noch heute Ihre strategische Beratung.",
    ctaButton: "Beratung anfordern",
    contactTitle: "Kontakt aufnehmen",
    contactSubtitle: "Haben Sie eine technische Frage oder ein Projekt zu besprechen? Ich würde mich freuen, von Ihnen zu hören.",
    contactInfoTitle: "Kontaktinformationen",
    contactInfoSubtitle: "Füllen Sie das Formular aus und ich melde mich in Kürze bei Ihnen.",
    formName: "Ihr Name",
    formEmail: "Ihre E-Mail",
    formSubject: "Betreff",
    formMessage: "Ihre Nachricht",
    formButton: "Nachricht Senden",
    helpMeWrite: "Hilf mir beim Schreiben ✨",
    generating: "Wird generiert...",
    footerSlogan: "Business Excellence durch Technologie vorantreiben.",
    footerRights: "Alle Rechte vorbehalten.",
    services: {
        technical: {
            title: "Technische Beratung",
            items: [
                { title: "Leistungsoptimierung", description: "Oracle-Datenbank-Tuning, PL/SQL-Optimierung und Behebung von Leistungsengpässen in Ihrer IFS-Umgebung." },
                { title: "Maßgeschneiderte Entwicklung & Integrationen", description: "Erweiterung von IFS mit benutzerdefinierten Web-/Mobil-Apps (React/Native) und nahtlose Integration mit Drittanbietersystemen über IFS Connect, REST & OData APIs." },
                { title: "KI & Cloud Assistant Implementierung", description: "Bereitstellung und Konfiguration des IFS Cloud Assistant sowie Entwicklung von Strategien zur Nutzung von KI für prädiktive Einblicke und Automatisierung." },
                { title: "Systemzustand & Wartung", description: "Expertenunterstützung, Versions-Upgrades, Patch-Management und proaktive Überwachung für die langfristige Gesundheit Ihres IFS-Systems." }
            ]
        },
        functional: {
            title: "Funktionale Beratung",
            items: [
                { title: "Geschäftsprozessoptimierung", description: "Analyse und Neugestaltung Ihrer Kerngeschäftsabläufe wie Order-to-Cash oder Procure-to-Pay innerhalb von IFS." },
                { title: "Modulimplementierung & -konfiguration", description: "Expertenkonfiguration der wichtigsten IFS-Module: Finanzen, SCM, HCM, Fertigung, Projektmanagement, EAM und Service Management." },
                { title: "Strategische Roadmap & Aurena-Migration", description: "Strategische Beratung für Upgrades und Planung einer nahtlosen, wertorientierten Migration zur IFS Aurena-Benutzeroberfläche." },
                { title: "Benutzerakzeptanz & Schulung", description: "Sicherstellung, dass Ihr Team alle Systemfunktionen, einschließlich benutzerdefinierter Lobbys, durch effektive, rollenbasierte Schulungen nutzt." }
            ]
        }
    }
  }
};

const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useApp = () => useContext(AppContext);

// --- Helper Components ---

const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

// --- Animation Hook ---
const useFadeIn = (stagger = 0) => {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (stagger > 0) {
                        const children = element.querySelectorAll('.fade-in-child');
                        children.forEach((child, index) => {
                            child.style.transitionDelay = `${index * stagger}ms`;
                        });
                    }
                    element.classList.add('fade-in-visible');
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.1,
            }
        );
        
        observer.observe(element);
        
        return () => { if(element) observer.unobserve(element); };
    }, [stagger]);
    return ref;
};

// --- Main Components (Updated to use the language context) ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useApp();
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef(null);

  const navLinks = [
    { href: "#home", text: t.navHome },
    { href: "#services", text: t.navServices },
    { href: "#about", text: t.navAbout },
    { href: "#process", text: t.navProcess },
    { href: "#optimization", text: t.navOptimization },
    { href: "#contact", text: t.navContact },
  ];
  
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langDropdownRef]);

  const languageOptions = {
    en: { name: 'English', flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="15"><path fill="#012169" d="M0 0h60v30H0z"/><path fill="#FFF" d="M0 0l60 30m0-30L0 30"/><path stroke="#C8102E" strokeWidth="6" d="M0 0l60 30m0-30L0 30"/><path stroke="#FFF" strokeWidth="10" d="M30 0v30M0 15h60"/><path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60"/></svg> },
    tr: { name: 'Türkçe', flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="20" height="15"><path fill="#e30a17" d="M0 0h30v20H0z"/><path fill="#fff" d="M11.25 10a5 5 0 100-5 5 5 0 000 5z"/><path fill="#e30a17" d="M12.5 10a4 4 0 100-4 4 4 0 000 4z"/><path fill="#fff" d="M15.5 10l-2.6-1.9.9 3.1-.9 3.1z"/></svg> },
    de: { name: 'Deutsch', flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="20" height="15"><path d="M0 0h5v3H0z"/><path fill="#D00" d="M0 1h5v2H0z"/><path fill="#FFCE00" d="M0 2h5v1H0z"/></svg> },
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-slate-800">
          Kemal Ozdogan
          <span className="block text-sm font-normal text-blue-600">IFS Consultant</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-600 font-medium relative group py-2">
              <span>{link.text}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </a>
          ))}
          
          <div className="relative" ref={langDropdownRef}>
            <button onClick={() => setLangDropdownOpen(!isLangDropdownOpen)} className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors p-2 rounded-md">
              {languageOptions[language].flag}
              <Icon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-4 h-4 ml-2" />
            </button>
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-20 transition-all duration-300 transform origin-top scale-95 opacity-0 animate-dropdown-open">
                {Object.keys(languageOptions).map(langCode => (
                    <a href="#!" key={langCode} onClick={(e) => {e.preventDefault(); setLanguage(langCode); setLangDropdownOpen(false);}} className={`flex items-center px-4 py-2 text-sm ${language === langCode ? 'font-bold text-blue-600' : 'text-gray-700'} hover:bg-blue-50`}>
                        {languageOptions[langCode].flag}
                        <span className="ml-3">{languageOptions[langCode].name}</span>
                    </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hidden md:inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
          {t.getInTouch}
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <Icon path={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} className="w-7 h-7" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <nav className="flex flex-col items-center p-4 space-y-2">
             {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block w-full text-center py-2 text-gray-700 hover:bg-blue-50 rounded-md">{link.text}</a>
            ))}
             <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="w-full text-center bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 mt-2">
              {t.getInTouch}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
    const { t } = useApp();
    const fadeInRef = useFadeIn();
    return (
        <section id="home" className="relative bg-white py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-slate-50"></div>
            <div ref={fadeInRef} className="container mx-auto px-6 text-center fade-in relative z-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-4 leading-tight">
                {t.heroTitle}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                {t.heroSubtitle}
                </p>
                <div className="flex justify-center items-center space-x-4">
                    <a href="#services" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    {t.exploreServices}
                    </a>
                    <a href="#contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-200">
                    {t.contactMe}
                    </a>
                </div>
            </div>
            </div>
        </section>
    );
};


const About = () => {
    const { t } = useApp();
    const fadeInRef = useFadeIn();
    return (
        <section id="about" ref={fadeInRef} className="py-20 bg-white fade-in">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">{t.aboutTitle}</h2>
                        <div className="w-24 h-1 bg-blue-500 mb-6"></div>
                        <p className="text-gray-600 mb-6">{t.aboutP1}</p>
                        <div className="space-y-4">
                            {t.aboutHighlights.map(highlight => (
                                <div key={highlight.title} className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <Icon path="M4.5 12.75l6 6 9-13.5" className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">{highlight.title}</h3>
                                        <p className="text-gray-600">{highlight.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center items-center">
                        <div className="relative w-full max-w-md h-96">
                            <img 
                                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                alt="Digital Transformation" 
                                className="object-cover w-full h-full rounded-2xl shadow-xl"
                            />
                            <div className="absolute inset-0 bg-slate-900/30 rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Process = () => {
    const { t } = useApp();
    const fadeInRef = useFadeIn(100);
    return (
        <section id="process" className="py-20 bg-slate-50">
            <div ref={fadeInRef} className="container mx-auto px-6 fade-in">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-800 fade-in-child">{t.processTitle}</h2>
                    <p className="text-lg text-gray-600 mt-2 fade-in-child" style={{transitionDelay: '100ms'}}>{t.processSubtitle}</p>
                    <div className="w-24 h-1 bg-slate-400 mx-auto mt-4 fade-in-child" style={{transitionDelay: '200ms'}}></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.processSteps.map((step, index) => (
                        <div key={step.title} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 fade-in-child" style={{transitionDelay: `${300 + index * 100}ms`}}>
                            <div className="mx-auto bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-inner">
                                <span className="text-3xl font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    const { t } = useApp();
    const fadeInRef = useFadeIn();
    const icons = [
        "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
        "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
        "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a15.045 15.045 0 01-7.5 0C4.508 19.64 2.25 15.223 2.25 10.5c0-1.503.294-2.936.834-4.256M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 0114.232-5.234",
        "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    ];

    return (
        <section id="services" ref={fadeInRef} className="py-20 bg-white fade-in">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-800">{t.servicesTitle}</h2>
                    <p className="text-lg text-gray-600 mt-2">{t.servicesSubtitle}</p>
                    <div className="w-24 h-1 bg-slate-400 mx-auto mt-4"></div>
                </div>
                <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
                    {/* Technical Consultancy Column */}
                    <div className="bg-slate-50 p-8 rounded-xl shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">{t.services.technical.title}</h3>
                        <div className="space-y-8 flex-grow">
                            {t.services.technical.items.map((service, index) => (
                                <div key={service.title} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 bg-slate-100 text-slate-600 w-12 h-12 rounded-full flex items-center justify-center">
                                        <Icon path={icons[index]} className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-800">{service.title}</h4>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Functional Consultancy Column */}
                    <div className="bg-slate-50 p-8 rounded-xl shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center">{t.services.functional.title}</h3>
                        <div className="space-y-8 flex-grow">
                            {t.services.functional.items.map((service, index) => (
                                <div key={service.title} className="flex items-start space-x-4">
                                     <div className="flex-shrink-0 bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                                        <Icon path={icons[index]} className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-800">{service.title}</h4>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Optimization = () => {
    const { t } = useApp();
    const fadeInRef = useFadeIn(150);
    return (
        <section id="optimization" ref={fadeInRef} className="py-20 bg-slate-50 fade-in">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-800 fade-in-child">{t.optimizationTitle}</h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto fade-in-child" style={{transitionDelay: '100ms'}}>{t.optimizationSubtitle}</p>
                    <div className="w-24 h-1 bg-slate-400 mx-auto mt-4 fade-in-child" style={{transitionDelay: '200ms'}}></div>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                    {t.optimizationSteps.map((step, index) => (
                        <div key={step.title} className="bg-white rounded-xl shadow-lg p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 fade-in-child" style={{transitionDelay: `${300 + index * 100}ms`}}>
                            <div className="flex-shrink-0 bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Icon path={step.icon} className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CtaSection = () => {
    const { t } = useApp();
    const fadeInRef = useFadeIn();
    return (
        <section ref={fadeInRef} className="bg-slate-800 fade-in">
            <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">{t.ctaTitle}</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">{t.ctaSubtitle}</p>
            <a href="#contact" className="bg-white text-slate-800 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                {t.ctaButton}
            </a>
            </div>
        </section>
    );
};

const Contact = () => {
    const { t, language } = useApp();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const fadeInRef = useFadeIn();

    const handleGenerateMessage = async () => {
        if (!message.trim()) return;
        setIsLoading(true);

        const prompt = `You are a professional business communication assistant. A potential client wants to contact an IFS Technical Consultant named Kemal Ozdogan. Their initial thought is: "${message}". Please expand this into a polite, professional, and clear inquiry. Structure it with a greeting, a clear statement of their need or problem, and a closing. Keep it concise and professional. The response should be in the same language as the user's input, which is ${language}.`;

        try {
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = "" // API key is handled by the environment
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const result = await response.json();
            
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setMessage(text);
            } else {
                console.error("No content in API response:", result);
            }
        } catch (error) {
            console.error("Error calling Gemini API:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" ref={fadeInRef} className="py-20 bg-slate-50 fade-in">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-800">{t.contactTitle}</h2>
                    <p className="text-lg text-gray-600 mt-2">{t.contactSubtitle}</p>
                    <div className="w-24 h-1 bg-slate-400 mx-auto mt-4"></div>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-lg">
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">{t.contactInfoTitle}</h3>
                        <p className="text-gray-600">{t.contactInfoSubtitle}</p>
                        <div className="flex items-center space-x-4 text-gray-700">
                            <Icon path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" className="w-6 h-6 text-blue-600" />
                            <span>kemalozdogann@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-700">
                            <Icon path="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" className="w-6 h-6 text-blue-600" />
                            <span>+90 530 260 16 62</span>
                        </div>
                    </div>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder={t.formName} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" />
                        <input type="email" placeholder={t.formEmail} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" />
                        <input type="text" placeholder={t.formSubject} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" />
                        <div className="relative">
                            <textarea 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="5" 
                                placeholder={t.formMessage} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                            ></textarea>
                            {message && (
                                <button 
                                    onClick={handleGenerateMessage}
                                    disabled={isLoading}
                                    className="absolute bottom-2 right-2 bg-slate-200 text-slate-700 text-xs font-semibold py-1 px-2 rounded-md hover:bg-slate-300 disabled:bg-slate-100 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? t.generating : t.helpMeWrite}
                                </button>
                            )}
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                            {t.formButton}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const { t } = useApp();
    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="font-bold text-lg">Kemal Ozdogan | IFS Consultant</p>
                <p className="text-slate-400 text-sm">{t.footerSlogan}</p>
                </div>
                <div className="text-center">
                <p className="text-slate-300">&copy; {new Date().getFullYear()} Kemal Ozdogan. {t.footerRights}</p>
                </div>
            </div>
            </div>
        </footer>
    );
};


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        >
            <Icon path="M4.5 15.75l7.5-7.5 7.5 7.5" className="w-6 h-6" />
        </button>
    );
};


// --- Main App Component ---

export default function App() {
  return (
    <AppProvider>
        <style>{`
            html {
                scroll-behavior: smooth;
            }
            @keyframes dropdown-open {
                from { transform: scale(0.95); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            .animate-dropdown-open {
                animation: dropdown-open 0.2s ease-out forwards;
            }
            .fade-in {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .fade-in-visible {
                opacity: 1;
                transform: translateY(0);
            }
            .fade-in-child {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .fade-in-visible .fade-in-child {
                opacity: 1;
                transform: translateY(0);
            }
            .bg-grid-slate-100 {
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
            }
        `}</style>
        <div className="bg-white font-sans text-slate-700">
        <Header />
        <main>
            <Hero />
            <About />
            <Process />
            <Services />
            <Optimization />
            <CtaSection />
            <Contact />
        </main>
        <Footer />
        <ScrollToTopButton />
        </div>
    </AppProvider>
  );
}

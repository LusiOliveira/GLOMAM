import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

const Executivo = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [fixedCards, setFixedCards] = useState<number[]>([]);
  const [dynamicScales, setDynamicScales] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const executivos = [
    { id: 1, image: "/images/executivos/Executivo .png", name: "Executivo 1" },
    { id: 2, image: "/images/executivos/Executivo 2.png", name: "Executivo 2" },
    { id: 3, image: "/images/executivos/Executivo 3.png", name: "Executivo 3" },
    { id: 4, image: "/images/executivos/Executivo 4.png", name: "Executivo 4" },
    { id: 5, image: "/images/executivos/Executivo 5.png", name: "Executivo 5" },
    { id: 6, image: "/images/executivos/Executivo 6.png", name: "Executivo 6" },
    { id: 7, image: "/images/executivos/Executivo 7.png", name: "Executivo 7" },
    { id: 8, image: "/images/executivos/Executivo 8.png", name: "Executivo 8" },
    { id: 9, image: "/images/executivos/Executivo 9.png", name: "Executivo 9" },
    { id: 10, image: "/images/executivos/Executivo 10.png", name: "Executivo 10" },
    { id: 11, image: "/images/executivos/Executivo 11.png", name: "Executivo 11" },
    { id: 12, image: "/images/executivos/Executivo 12.png", name: "Executivo 12" },
    { id: 13, image: "/images/executivos/Executivo 13.png", name: "Executivo 13" },
    { id: 14, image: "/images/executivos/Executivo 14.png", name: "Executivo 14" },
    { id: 15, image: "/images/executivos/Executivo 15.png", name: "Executivo 15" },
  ];

  useEffect(() => {
    setIsTitleVisible(true);
    setDynamicScales(new Array(15).fill(1.05));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    const refs = cardRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      
      const newScales = cardRefs.current.map((ref) => {
        if (!ref) return 1.05;
        
        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        
        // Calcula o scale máximo baseado na posição do elemento
        // Quando o elemento está no centro da viewport, scale máximo = 1.05
        // Quando está mais longe do centro, scale máximo diminui até 1.02
        let maxScale = 1.05;
        
        if (elementTop < windowHeight && elementTop + rect.height > 0) {
          // Elemento está visível na viewport
          const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
          const maxDistance = windowHeight / 2;
          const progress = Math.min(1, distanceFromCenter / maxDistance);
          
          // Scale varia de 1.05 (no centro) a 1.02 (longe do centro)
          maxScale = 1.05 - (progress * 0.03);
        } else {
          // Elemento fora da viewport - scale mínimo
          maxScale = 1.02;
        }
        
        return Math.max(1.02, Math.min(1.05, maxScale));
      });
      
      setDynamicScales(newScales);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Calcula o scale inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PageBackground>
      <Navigation />
      <section className="pt-24 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold text-gold mb-4"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                opacity: isTitleVisible ? 1 : 0,
                transform: isTitleVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Poder Executivo
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {executivos.map((executivo, index) => (
                <div
                  key={executivo.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="rounded-lg overflow-hidden transition-all duration-300 group cursor-pointer active:scale-95"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => {
                    setFixedCards((prev) => 
                      prev.includes(index) 
                        ? prev.filter(i => i !== index)
                        : [...prev, index]
                    );
                  }}
                  style={{
                    opacity: visibleCards.includes(index) ? 1 : 0,
                    backgroundColor: (hoveredCard === index || fixedCards.includes(index)) ? '#1a1f2e' : 'transparent',
                    border: (hoveredCard === index || fixedCards.includes(index)) ? '1px solid rgba(212, 175, 55, 0.5)' : '1px solid transparent',
                    transform: visibleCards.includes(index) 
                      ? (hoveredCard === index ? `translateY(0) scale(${dynamicScales[index] || 1.05})` : 'translateY(0) scale(1)')
                      : (hoveredCard === index ? `translateY(30px) scale(${dynamicScales[index] || 1.05})` : 'translateY(30px) scale(1)'),
                    transformOrigin: 'center center',
                    transition: `opacity 0.6s ease-out ${index * 0.2}s, transform 0.3s ease-out, background-color 0.3s ease-out, border 0.3s ease-out`,
                    isolation: 'isolate',
                    willChange: 'transform',
                    position: 'relative',
                    zIndex: hoveredCard === index ? 10 : 1
                  }}
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={executivo.image}
                      alt={executivo.name}
                      className="w-full h-auto object-cover max-h-[300px]"
                    />
                  </div>
                  <div 
                    className={`px-3 py-2 md:px-4 md:py-3 ${(hoveredCard === index || fixedCards.includes(index)) ? 'pt-2 pb-2 md:pt-3 md:pb-3' : 'pt-0 pb-0'}`}
                    style={{ 
                      backgroundColor: '#161d34',
                      opacity: (hoveredCard === index || fixedCards.includes(index)) ? 1 : 0,
                      maxHeight: (hoveredCard === index || fixedCards.includes(index)) ? '500px' : '0',
                      marginTop: (hoveredCard === index || fixedCards.includes(index)) ? '0' : '0',
                      overflow: 'hidden',
                      transform: (hoveredCard === index || fixedCards.includes(index)) ? 'translateY(0)' : 'translateY(-5px)',
                      pointerEvents: (hoveredCard === index || fixedCards.includes(index)) ? 'auto' : 'none',
                      transition: (hoveredCard === index || fixedCards.includes(index))
                        ? 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding-top 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                        : 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), max-height 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), padding-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), padding-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  >
                    <p className="text-foreground/80 text-xs md:text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageBackground>
  );
};

export default Executivo;


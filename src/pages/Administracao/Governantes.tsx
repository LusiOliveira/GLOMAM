import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

const Governantes = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const governantes = [
    {
      id: 2,
      image: "/images/governantes/Grao-Mestre.png",
      name: "Grão-Mestre",
      position: "Grão-Mestre",
    },
    {
      id: 3,
      image: "/images/governantes/Primeiro Vigilante.png",
      name: "Primeiro Vigilante",
      position: "1º Vigilante",
    },
    {
      id: 1,
      image: "/images/governantes/Segundo Vigilante.png",
      name: "Segundo Vigilante",
      position: "2º Vigilante",
    },
  ];

  useEffect(() => {
    setIsTitleVisible(true);
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
              Governantes
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {governantes.map((governante, index) => (
                <div
                  key={governante.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="bg-charcoal rounded-lg border border-gold/20 overflow-hidden hover:border-gold/50 transition-all duration-300 group"
                  style={{
                    opacity: visibleCards.includes(index) ? 1 : 0,
                    transform: visibleCards.includes(index) 
                      ? 'translateY(0)' 
                      : 'translateY(30px)',
                    transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`
                  }}
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={governante.image}
                      alt={governante.name}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-foreground/80 text-sm leading-relaxed">
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

export default Governantes;


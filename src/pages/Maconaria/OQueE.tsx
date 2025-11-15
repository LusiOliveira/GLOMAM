import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

const OQueE = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  
  const text = "A Maçonaria, Ordem Universal, é constituída por homens de todas as raças e nacionalidades, acolhidos por iniciação e congregados em Lojas, nas quais, auxiliados por símbolos e alegorias, estudam e trabalham para o aperfeiçoamento da Sociedade Humana. É fundada no Amor Fraternal e na esperança de que, com amor a Deus, à pátria, à família e ao próximo, com tolerância e sabedoria, com a constante e livre investigação da Verdade, com a evolução do conhecimento humano pela filosofia, ciências e artes, sob a tríade da Liberdade, Igualdade e Fraternidade e dentro dos Princípios da Moral, da Razão e da Justiça, o mundo alcance a felicidade geral e a paz universal.";

  useEffect(() => {
    setIsTitleVisible(true);
    setTimeout(() => {
      setIsTextVisible(true);
    }, 300); // Texto aparece 300ms depois do título
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
                opacity: isTitleVisible ? 1 : 0,
                transform: isTitleVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              O Que É a Maçonaria
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-charcoal p-10 rounded-lg">
              <div 
                className="h-64 overflow-y-auto space-y-6 pr-4 custom-scrollbar"
                style={{ 
                  fontFamily: "'Lato', sans-serif",
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#d4af37 transparent'
                }}
              >
                <p 
                  className="text-foreground/80 leading-relaxed text-lg"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    opacity: isTextVisible ? 1 : 0,
                    transform: isTextVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                  }}
                >
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageBackground>
  );
};

export default OQueE;


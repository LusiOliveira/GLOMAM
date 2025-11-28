import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

const Paramaconicos = () => {
  return (
    <PageBackground>
      <Navigation />
      <section className="pt-24 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-normal uppercase mb-4"
              style={{ 
                fontFamily: "'Baskerville Old Face', serif",
                background: 'linear-gradient(to right, #e3da98, #d3a54c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Entidades Paramaçônicas
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
              <p className="text-foreground/80 leading-relaxed text-center mb-8">
                As organizações paramaçônicas são entidades associadas à Maçonaria que
                compartilham seus valores e princípios, trabalhando em áreas específicas
                de atuação social e familiar.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-charcoal-light p-6 rounded-lg border border-gold/10">
                  <h4 className="text-xl font-bold text-gold mb-3">Ordem DeMolay</h4>
                  <p className="text-foreground/70">
                    Organização juvenil que prepara jovens para serem líderes exemplares,
                    desenvolvendo virtudes e responsabilidade social.
                  </p>
                </div>
                
                <div className="bg-charcoal-light p-6 rounded-lg border border-gold/10">
                  <h4 className="text-xl font-bold text-gold mb-3">Ordem das Filhas de Jó</h4>
                  <p className="text-foreground/70">
                    Organização feminina juvenil que desenvolve jovens em liderança,
                    valores morais e serviço comunitário.
                  </p>
                </div>
                
                <div className="bg-charcoal-light p-6 rounded-lg border border-gold/10">
                  <h4 className="text-xl font-bold text-gold mb-3">Ordem da Estrela do Oriente</h4>
                  <p className="text-foreground/70">
                    Organização que reúne maçons e suas familiares, promovendo
                    fraternidade e trabalhos filantrópicos.
                  </p>
                </div>
                
                <div className="bg-charcoal-light p-6 rounded-lg border border-gold/10">
                  <h4 className="text-xl font-bold text-gold mb-3">Outras Entidades</h4>
                  <p className="text-foreground/70">
                    Diversas organizações paramaçônicas atuam em conjunto com a GLOMAM
                    em projetos sociais e educacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageBackground>
  );
};

export default Paramaconicos;


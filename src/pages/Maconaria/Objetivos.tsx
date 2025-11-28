import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

const Objetivos = () => {
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
              Objetivos da Maçonaria
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-charcoal p-10 rounded-lg border border-gold/20 space-y-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Desenvolvimento Moral</h3>
                <p className="text-foreground/80">
                  Promover o aperfeiçoamento moral e espiritual dos seus membros através do estudo
                  e da prática de virtudes.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Desenvolvimento Intelectual</h3>
                <p className="text-foreground/80">
                  Estimular o estudo e a busca constante do conhecimento em todas as áreas do saber.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Desenvolvimento Social</h3>
                <p className="text-foreground/80">
                  Contribuir para a construção de uma sociedade mais justa, fraterna e igualitária.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Filantropia</h3>
                <p className="text-foreground/80">
                  Realizar ações de caridade e assistência social sem distinção de credo, raça ou
                  condição social.
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

export default Objetivos;


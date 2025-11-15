import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

const Judiciario = () => {
  return (
    <PageBackground>
      <Navigation />
      <section className="pt-24 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              Poder Judiciário
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
              <p className="text-foreground/80 text-center mb-8">
                Informações sobre o Poder Judiciário da GLOMAM serão disponibilizadas em breve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageBackground>
  );
};

export default Judiciario;


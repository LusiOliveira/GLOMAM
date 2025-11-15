import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

const QuemSomos = () => {
  return (
    <PageBackground>
      <Navigation />
      <section className="pt-24 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              Quem Somos
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-charcoal p-10 rounded-lg border border-gold/20 space-y-6">
              <p className="text-foreground/80 leading-relaxed text-lg">
                O Dispensário da GLOMAM é uma instituição dedicada a fornecer assistência
                e apoio aos membros da comunidade maçônica e à sociedade em geral.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Nosso objetivo é promover o bem-estar, oferecendo serviços de qualidade
                e mantendo os valores de fraternidade, caridade e solidariedade que são
                fundamentais para a Maçonaria.
              </p>
              <div className="border-l-4 border-gold pl-6 mt-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Nossa Missão</h3>
                <p className="text-foreground/80">
                  Proporcionar assistência e cuidados de qualidade, sempre respeitando
                  a dignidade humana e promovendo o desenvolvimento social.
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

export default QuemSomos;


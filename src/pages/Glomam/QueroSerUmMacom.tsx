import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Users } from "lucide-react";

const QueroSerUmMacom = () => {
  return (
    <PageBackground>
      <Navigation />
      <section className="pt-24 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              Quero Ser um Maçom
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
              <div className="text-center mb-8">
                <Users className="w-16 h-16 text-gold mx-auto mb-4" />
                <p className="text-foreground/80 leading-relaxed">
                  Interessado em fazer parte da Maçonaria? Conheça os requisitos e o
                  processo para se tornar um membro da fraternidade.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="text-xl font-bold text-foreground mb-3">Requisitos Básicos</h4>
                  <ul className="text-foreground/80 space-y-2">
                    <li>• Ser maior de 18 anos</li>
                    <li>• Ter boa reputação moral e social</li>
                    <li>• Acreditar em um Ser Supremo</li>
                    <li>• Ser livre e de bons costumes</li>
                    <li>• Ter meios honestos de subsistência</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="text-xl font-bold text-foreground mb-3">Processo de Iniciação</h4>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    O processo de iniciação maçônica é uma experiência transformadora que
                    marca o início da jornada do candidato na fraternidade.
                  </p>
                  <ol className="text-foreground/80 space-y-2">
                    <li>1. Manifestação de interesse junto a uma loja</li>
                    <li>2. Análise do perfil do candidato</li>
                    <li>3. Sindicância e verificação de antecedentes</li>
                    <li>4. Votação pela loja</li>
                    <li>5. Cerimônia de iniciação</li>
                  </ol>
                </div>

                <div className="bg-gold/10 p-6 rounded-lg">
                  <p className="text-foreground/80 text-center">
                    Para mais informações, entre em contato com uma das lojas filiadas
                    à GLOMAM ou envie uma mensagem através do nosso formulário de contato.
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

export default QueroSerUmMacom;


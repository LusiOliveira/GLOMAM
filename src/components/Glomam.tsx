import symbolsImage from "@/assets/masonic-symbols.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users } from "lucide-react";

const Glomam = () => {
  return (
    <section id="glomam" className="py-24 bg-charcoal-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            GLOMAM
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Grande Loja Maçônica do Amazonas
          </p>
        </div>

        <Tabs defaultValue="historia" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="historia">História</TabsTrigger>
            <TabsTrigger value="paramaconicos">Paramaçônicos</TabsTrigger>
            <TabsTrigger value="quero-ser">Quero Ser um Maçom</TabsTrigger>
          </TabsList>

          <TabsContent value="historia" className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <img
                  src={symbolsImage}
                  alt="Símbolos Maçônicos"
                  className="relative rounded-lg shadow-elegant w-full h-auto"
                />
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Nossa História
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    A GLOMAM - Grande Loja Maçônica do Amazonas foi fundada com o objetivo
                    de reunir e coordenar as atividades maçônicas no estado do Amazonas,
                    preservando as tradições milenares da Ordem e adaptando-as ao contexto
                    amazônico.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Missão e Valores
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Promover o desenvolvimento moral, intelectual e social de nossos
                    membros, contribuindo para a construção de uma sociedade mais justa
                    e fraterna através de ações educacionais e filantrópicas.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "50+",
                  label: "Lojas Filiadas",
                  description: "Em todo o Amazonas",
                },
                {
                  number: "1000+",
                  label: "Membros Ativos",
                  description: "Trabalhando pela fraternidade",
                },
                {
                  number: "30+",
                  label: "Anos de História",
                  description: "Servindo ao Amazonas",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-charcoal p-8 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-gold group text-center"
                >
                  <div className="text-5xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{stat.label}</h4>
                  <p className="text-foreground/70 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="paramaconicos" className="space-y-8">
            <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
              <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                Entidades Paramaçônicas
              </h3>
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
          </TabsContent>

          <TabsContent value="quero-ser" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
                <div className="text-center mb-8">
                  <Users className="w-16 h-16 text-gold mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Quero Ser um Maçom
                  </h3>
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Glomam;

import { Heart, Users, Stethoscope, Clock, MapPin, Phone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dispensario = () => {
  return (
    <section id="dispensario" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Dispensário
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Serviço de saúde filantrópico da GLOMAM
          </p>
        </div>

        <Tabs defaultValue="quem-somos" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto mb-12">
            <TabsTrigger value="quem-somos">Quem Somos</TabsTrigger>
          </TabsList>

          <TabsContent value="quem-somos" className="space-y-12">
            {/* Main Introduction */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal-light p-10 rounded-lg border border-gold/20">
                <Heart className="w-16 h-16 text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                  Quem Somos
                </h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    O Dispensário Maçônico é uma iniciativa filantrópica da GLOMAM que
                    oferece serviços de saúde gratuitos ou a preços acessíveis para a
                    comunidade, especialmente para pessoas em situação de vulnerabilidade
                    social.
                  </p>
                  <p>
                    Mantido através de contribuições dos maçons e doações da comunidade,
                    o Dispensário representa o compromisso da Maçonaria com a beneficência
                    e o bem-estar social, oferecendo atendimento médico, odontológico e
                    farmacêutico.
                  </p>
                  <p>
                    Nossa equipe é composta por profissionais voluntários e colaboradores
                    comprometidos com o atendimento humanizado e de qualidade, trabalhando
                    para promover saúde e dignidade para todos.
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground text-center mb-12">
                Nossos Serviços
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-charcoal-light p-8 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-gold group text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Stethoscope className="w-10 h-10 text-charcoal" />
                  </div>
                  <h4 className="text-xl font-bold text-gold mb-4">
                    Atendimento Médico
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    Consultas médicas em diversas especialidades, exames clínicos e
                    acompanhamento de saúde geral.
                  </p>
                </div>

                <div className="bg-charcoal-light p-8 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-gold group text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-10 h-10 text-charcoal" />
                  </div>
                  <h4 className="text-xl font-bold text-gold mb-4">
                    Odontologia
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    Tratamentos dentários preventivos e curativos, garantindo saúde
                    bucal para toda a família.
                  </p>
                </div>

                <div className="bg-charcoal-light p-8 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-gold group text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-charcoal" />
                  </div>
                  <h4 className="text-xl font-bold text-gold mb-4">
                    Farmácia Social
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    Distribuição de medicamentos essenciais e orientação farmacêutica
                    gratuita ou a preços populares.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal-light p-10 rounded-lg border border-gold/20">
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                  Informações de Atendimento
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gold mb-2">Horário</h4>
                      <p className="text-foreground/80">Segunda a Sexta: 8h às 17h</p>
                      <p className="text-foreground/80">Sábados: 8h às 12h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gold mb-2">Endereço</h4>
                      <p className="text-foreground/80">
                        [Endereço do Dispensário]
                      </p>
                      <p className="text-foreground/80">Manaus - AM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gold mb-2">Contato</h4>
                      <p className="text-foreground/80">Tel: (92) XXXX-XXXX</p>
                      <p className="text-foreground/80">dispensario@glomam.org.br</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gold mb-2">Agendamento</h4>
                      <p className="text-foreground/80">Por telefone ou presencial</p>
                      <p className="text-foreground/80">Documentos: RG e CPF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  number: "5000+",
                  label: "Atendimentos/Ano",
                  description: "Pessoas beneficiadas",
                },
                {
                  number: "15+",
                  label: "Profissionais",
                  description: "Equipe dedicada",
                },
                {
                  number: "100%",
                  label: "Gratuito",
                  description: "Para quem necessita",
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

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gold/10 p-8 rounded-lg border border-gold/20 text-center">
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Como Ajudar
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  O Dispensário Maçônico funciona graças ao apoio da comunidade. Você pode
                  contribuir através de doações financeiras, medicamentos, materiais ou
                  oferecendo seu trabalho voluntário.
                </p>
                <p className="text-gold font-semibold">
                  Entre em contato conosco para saber como você pode fazer a diferença!
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Dispensario;
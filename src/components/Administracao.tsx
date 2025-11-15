import { Shield, Scale, BookOpen, Users, Gavel, Building } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Administracao = () => {
  const administration = [{
    title: "Grão-Mestre",
    name: "Ir∴ [Nome do Grão-Mestre]",
    period: "2023-2025",
    description: "Autoridade máxima da GLOMAM"
  }, {
    title: "Grão-Mestre Adjunto",
    name: "Ir∴ [Nome do Adjunto]",
    period: "2023-2025",
    description: "Vice-presidência executiva"
  }, {
    title: "Grande Secretário",
    name: "Ir∴ [Nome do Secretário]",
    period: "2023-2025",
    description: "Administração e documentação"
  }, {
    title: "Grande Tesoureiro",
    name: "Ir∴ [Nome do Tesoureiro]",
    period: "2023-2025",
    description: "Gestão financeira"
  }];
  const departments = [{
    icon: Shield,
    title: "Regularidade Maçônica",
    description: "Garantia de conformidade com os princípios e tradições da Maçonaria Universal"
  }, {
    icon: Scale,
    title: "Justiça Maçônica",
    description: "Tribunal e comissões para assegurar a harmonia e resolver conflitos"
  }, {
    icon: BookOpen,
    title: "Estudos e Instrução",
    description: "Programas educacionais e desenvolvimento dos graus maçônicos"
  }, {
    icon: Users,
    title: "Relações Públicas",
    description: "Interface com a sociedade e outras potências maçônicas"
  }];
  return <section id="administracao" className="py-24 bg-charcoal-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Administração
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Estrutura administrativa e liderança da GLOMAM
          </p>
        </div>

        <Tabs defaultValue="governantes" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
            <TabsTrigger value="governantes">Governantes</TabsTrigger>
            <TabsTrigger value="executivo">Executivo</TabsTrigger>
            <TabsTrigger value="legislativo">Legislativo</TabsTrigger>
            <TabsTrigger value="judiciario">Judiciário</TabsTrigger>
            <TabsTrigger value="comissoes">Grandes Comissões</TabsTrigger>
          </TabsList>

          <TabsContent value="governantes" className="space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {administration.map((member, index) => <div key={index} className="bg-charcoal p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-gold group">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 rounded-full">
                    <span className="text-3xl font-bold text-charcoal">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gold text-center mb-2">
                    {member.title}
                  </h4>
                  <p className="text-foreground text-center font-semibold mb-1">
                    {member.name}
                  </p>
                  <p className="text-foreground/60 text-sm text-center mb-2">
                    {member.period}
                  </p>
                  <p className="text-foreground/70 text-sm text-center">
                    {member.description}
                  </p>
                </div>)}
            </div>

            <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Transparência e Governança
              </h3>
              <p className="text-foreground/80 leading-relaxed text-center mb-6">
                A GLOMAM mantém os mais altos padrões de governança e transparência
                administrativa, com gestão democrática e participativa.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">100%</div>
                  <p className="text-foreground/70 text-sm">Transparente</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">Anual</div>
                  <p className="text-foreground/70 text-sm">Assembleias</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">Regular</div>
                  <p className="text-foreground/70 text-sm">Reconhecida</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="executivo" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
                <Building className="w-16 h-16 text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                  Poder Executivo
                </h3>
                <p className="text-foreground/80 leading-relaxed text-center mb-8">
                  O Poder Executivo da GLOMAM é responsável pela administração diária,
                  implementação de políticas e representação externa da instituição.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-charcoal-light p-6 rounded-lg border border-gold/10">
                    <h4 className="text-xl font-bold text-gold mb-3">Grão-Mestrado</h4>
                    <p className="text-foreground/70">
                      Composto pelo Grão-Mestre e Grão-Mestre Adjunto, responsáveis pela
                      liderança executiva e representação da GLOMAM perante as lojas
                      filiadas e outras potências maçônicas.
                    </p>
                  </div>
                  
                  <div className="bg-charcoal-light p-6 rounded-lg border border-gold/10">
                    <h4 className="text-xl font-bold text-gold mb-3">Secretaria Geral</h4>
                    <p className="text-foreground/70">
                      Administra toda a documentação, comunicações oficiais e registros
                      da Grande Loja, mantendo o arquivo histórico e administrativo.
                    </p>
                  </div>
                  
                  <div className="bg-charcoal-light p-6 rounded-lg border border-gold/10">
                    <h4 className="text-xl font-bold text-gold mb-3">Tesouraria Geral</h4>
                    <p className="text-foreground/70">
                      Gerencia os recursos financeiros, elabora orçamentos e presta
                      contas das atividades econômicas da instituição.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="legislativo" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
                <BookOpen className="w-16 h-16 text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                  Poder Legislativo
                </h3>
                <p className="text-foreground/80 leading-relaxed text-center mb-8">
                  Responsável pela elaboração, discussão e aprovação de leis,
                  regulamentos e normativas que regem a GLOMAM e suas lojas filiadas.
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-gold pl-6">
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      Assembleia Geral
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      Órgão máximo de deliberação, composto por representantes de todas
                      as lojas filiadas. Reúne-se anualmente para discutir e votar
                      assuntos de interesse da ordem.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      Comissão de Constituição e Legislação
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      Analisa e propõe alterações na constituição e legislação maçônica,
                      garantindo conformidade com os princípios da ordem e modernização
                      dos estatutos.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      Processo Legislativo
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      Toda proposição legislativa passa por comissões especializadas,
                      discussão em assembleia e votação democrática, garantindo ampla
                      participação das lojas no processo decisório.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="judiciario" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
                <Gavel className="w-16 h-16 text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                  Poder Judiciário
                </h3>
                <p className="text-foreground/80 leading-relaxed text-center mb-8">
                  Garante o cumprimento das leis maçônicas, julga questões disciplinares
                  e resolve conflitos entre lojas e membros com imparcialidade e justiça.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-charcoal-light p-6 rounded-lg border border-gold/10">
                    <h4 className="text-xl font-bold text-gold mb-3">
                      Tribunal de Justiça Maçônica
                    </h4>
                    <p className="text-foreground/70 mb-3">
                      Instância máxima de julgamento, responsável por julgar recursos e
                      casos de maior complexidade ou gravidade.
                    </p>
                    <ul className="text-foreground/70 text-sm space-y-1">
                      <li>• Julga recursos de decisões inferiores</li>
                      <li>• Analisa questões de regularidade maçônica</li>
                      <li>• Resolve conflitos entre lojas</li>
                    </ul>
                  </div>
                  
                  <div className="bg-charcoal-light p-6 rounded-lg border border-gold/10">
                    <h4 className="text-xl font-bold text-gold mb-3">
                      Comissões de Sindicância
                    </h4>
                    <p className="text-foreground/70">
                      Investigam denúncias e irregularidades, coletando provas e
                      elaborando relatórios para subsidiar decisões judiciais maçônicas.
                    </p>
                  </div>
                  
                  <div className="bg-charcoal-light p-6 rounded-lg border border-gold/10">
                    <h4 className="text-xl font-bold text-gold mb-3">
                      Princípios de Justiça
                    </h4>
                    <p className="text-foreground/70">
                      Todo julgamento segue os princípios do contraditório, ampla defesa
                      e devido processo legal, garantindo julgamento justo a todos os
                      envolvidos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="comissoes" className="space-y-8">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground text-center mb-12">
                Grandes Comissões
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {departments.map((dept, index) => {
                const Icon = dept.icon;
                return <div key={index} className="bg-charcoal p-8 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-gold group">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-charcoal" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gold mb-3">
                            {dept.title}
                          </h4>
                          <p className="text-foreground/70 leading-relaxed">
                            {dept.description}
                          </p>
                        </div>
                      </div>
                    </div>;
              })}
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-6">
                <div className="bg-charcoal p-6 rounded-lg border border-gold/20">
                  <h4 className="text-lg font-bold text-gold mb-3">
                    Comissão de Finanças
                  </h4>
                  <p className="text-foreground/70">
                    Fiscaliza e aprova orçamentos, analisa prestações de contas e
                    garante a saúde financeira da instituição.
                  </p>
                </div>
                
                <div className="bg-charcoal p-6 rounded-lg border border-gold/20">
                  <h4 className="text-lg font-bold text-gold mb-3">
                    Comissão de Patrimônio
                  </h4>
                  <p className="text-foreground/70">
                    Administra e preserva o patrimônio material e imaterial da GLOMAM,
                    incluindo templos e documentos históricos.
                  </p>
                </div>
                
                <div className="bg-charcoal p-6 rounded-lg border border-gold/20">
                  <h4 className="text-lg font-bold text-gold mb-3">
                    Comissão de Beneficência
                  </h4>
                  <p className="text-foreground/70">
                    Coordena ações sociais, projetos filantrópicos e assistenciais
                    desenvolvidos pela GLOMAM e suas lojas.
                  </p>
                </div>
                
                <div className="bg-charcoal p-6 rounded-lg border border-gold/20">
                  <h4 className="text-lg font-bold text-gold mb-3">
                    Comissão de Comunicação
                  </h4>
                  <p className="text-foreground/70">
                    Gerencia a comunicação institucional, relacionamento com mídia e
                    divulgação das atividades maçônicas.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>;
};
export default Administracao;
import { Compass, Heart, Lightbulb, BookOpen, Globe } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Maconaria = () => {
  const principles = [
    {
      icon: Heart,
      title: "Fraternidade",
      description: "União entre irmãos baseada no respeito mútuo e amor fraternal",
    },
    {
      icon: Compass,
      title: "Liberdade",
      description: "Defesa da liberdade de pensamento e expressão individual",
    },
    {
      icon: Lightbulb,
      title: "Igualdade",
      description: "Todos os membros são iguais independente de posição social",
    },
  ];

  const faqs = [
    {
      question: "O que é a Maçonaria?",
      answer: "A Maçonaria é uma instituição filosófica, filantrópica e progressista que tem como objetivo o aperfeiçoamento moral, intelectual e social do ser humano através de ensinamentos simbólicos e ritualísticos."
    },
    {
      question: "A Maçonaria é uma religião?",
      answer: "Não. A Maçonaria não é uma religião, mas exige que seus membros acreditem em um Ser Supremo. Ela respeita todas as religiões e não interfere nas crenças pessoais de seus membros."
    },
    {
      question: "Como funciona a hierarquia maçônica?",
      answer: "A Maçonaria possui três graus simbólicos: Aprendiz, Companheiro e Mestre. Além destes, existem graus filosóficos em diferentes ritos que aprofundam os ensinamentos maçônicos."
    },
    {
      question: "Mulheres podem ser maçons?",
      answer: "Na Maçonaria regular masculina tradicional, apenas homens podem ser iniciados. Entretanto, existem organizações paramaçônicas femininas e mistas que seguem princípios semelhantes."
    },
    {
      question: "Qual o papel social da Maçonaria?",
      answer: "A Maçonaria promove ações filantrópicas, educacionais e sociais, contribuindo para o desenvolvimento da sociedade através de projetos voltados à educação, saúde e assistência social."
    }
  ];

  return (
    <section id="maconaria" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Maçonaria
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        <Tabs defaultValue="o-que-e" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
            <TabsTrigger value="o-que-e">O Que É</TabsTrigger>
            <TabsTrigger value="principios">Princípios</TabsTrigger>
            <TabsTrigger value="objetivos">Objetivos</TabsTrigger>
            <TabsTrigger value="perguntas">Perguntas e Respostas</TabsTrigger>
            <TabsTrigger value="grandes-lojas">Grandes Lojas</TabsTrigger>
          </TabsList>

          <TabsContent value="o-que-e" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal-light p-10 rounded-lg border border-gold/20">
                <BookOpen className="w-16 h-16 text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                  O Que É a Maçonaria
                </h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    A Maçonaria é uma instituição essencialmente filosófica, filantrópica,
                    educativa e progressista. É uma sociedade discreta de homens livres e de
                    bons costumes, que visa o aperfeiçoamento moral, intelectual e social da
                    humanidade.
                  </p>
                  <p>
                    Suas origens remontam às antigas corporações de construtores medievais,
                    que se reuniam em lojas para discutir os segredos de sua arte. Com o tempo,
                    a Maçonaria evoluiu de operativa (construtores de pedra) para especulativa
                    (construtores do caráter).
                  </p>
                  <p>
                    A Maçonaria utiliza símbolos e alegorias da arte da construção para
                    transmitir ensinamentos morais e éticos. O objetivo é fazer do maçom um
                    homem melhor, mais consciente de seus deveres para consigo mesmo, para com
                    sua família e para com a sociedade.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="principios" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={index}
                    className="bg-charcoal-light p-8 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-gold group text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-charcoal" />
                    </div>
                    <h3 className="text-2xl font-bold text-gold mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="max-w-4xl mx-auto bg-charcoal-light p-10 rounded-lg border border-gold/20">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Valores Fundamentais
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="text-lg font-bold text-gold mb-2">Tolerância</h4>
                  <p className="text-foreground/70">
                    Respeito às opiniões, crenças e escolhas de cada indivíduo.
                  </p>
                </div>
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="text-lg font-bold text-gold mb-2">Beneficência</h4>
                  <p className="text-foreground/70">
                    Prática constante da caridade e auxílio ao próximo.
                  </p>
                </div>
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="text-lg font-bold text-gold mb-2">Justiça</h4>
                  <p className="text-foreground/70">
                    Busca pela equidade e correção em todas as ações.
                  </p>
                </div>
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="text-lg font-bold text-gold mb-2">Progresso</h4>
                  <p className="text-foreground/70">
                    Desenvolvimento contínuo do conhecimento e da sabedoria.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="objetivos" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal-light p-10 rounded-lg border border-gold/20">
                <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Objetivos da Maçonaria
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-gold pl-6">
                    <h4 className="text-xl font-bold text-gold mb-3">
                      Aperfeiçoamento Moral
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      Desenvolver virtudes morais e éticas nos seus membros, tornando-os
                      homens melhores através do estudo e prática de princípios universais
                      de conduta e caráter.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h4 className="text-xl font-bold text-gold mb-3">
                      Desenvolvimento Intelectual
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      Promover o estudo das ciências, artes e filosofia, incentivando a
                      busca pelo conhecimento e pela verdade através do livre pensamento e
                      investigação racional.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h4 className="text-xl font-bold text-gold mb-3">
                      Progresso Social
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      Contribuir para o desenvolvimento da sociedade através de ações
                      filantrópicas, educacionais e de assistência social, trabalhando pelo
                      bem-estar coletivo e justiça social.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h4 className="text-xl font-bold text-gold mb-3">
                      Fraternidade Universal
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      Cultivar laços fraternais entre os membros, transcendendo barreiras
                      de nacionalidade, religião, raça ou posição social, promovendo a paz
                      e harmonia entre os povos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="perguntas" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal-light p-10 rounded-lg border border-gold/20">
                <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Perguntas Frequentes
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-gold hover:text-gold-dark">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="grandes-lojas" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal-light p-10 rounded-lg border border-gold/20">
                <Globe className="w-16 h-16 text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                  Grandes Lojas do Brasil
                </h3>
                <p className="text-foreground/80 leading-relaxed text-center mb-8">
                  A Maçonaria brasileira é organizada em Grandes Lojas estaduais, cada uma
                  com jurisdição em seu respectivo estado. A GLOMAM mantém relações
                  fraternais com todas as Grandes Lojas regulares do Brasil.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Grande Loja Maçônica do Estado de São Paulo",
                    "Grande Loja Maçônica do Estado do Rio de Janeiro",
                    "Grande Loja Maçônica do Estado de Minas Gerais",
                    "Grande Loja Maçônica do Estado da Bahia",
                    "Grande Loja Maçônica do Estado do Paraná",
                    "Grande Loja Maçônica do Estado de Pernambuco",
                    "Grande Loja Maçônica do Estado do Rio Grande do Sul",
                    "E outras Grandes Lojas estaduais..."
                  ].map((loja, index) => (
                    <div
                      key={index}
                      className="bg-charcoal p-4 rounded-lg border border-gold/10 hover:border-gold/30 transition-colors"
                    >
                      <p className="text-foreground/80 text-sm">{loja}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gold/10 p-6 rounded-lg">
                  <p className="text-foreground/80 text-center text-sm">
                    A regularidade maçônica garante o reconhecimento mútuo entre as Grandes
                    Lojas, permitindo que maçons visitem lojas em todo o país e no mundo.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Maconaria;
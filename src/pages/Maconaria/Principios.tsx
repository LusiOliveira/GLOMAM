import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Principios = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: number[] }>({
    sintese: [],
    serMacom: [],
    finalidades: []
  });
  const itemRefs = useRef<{ [key: string]: (HTMLDivElement | null)[] }>({
    sintese: [],
    serMacom: [],
    finalidades: []
  });

  useEffect(() => {
    setIsTitleVisible(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(itemRefs.current).forEach((key) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = itemRefs.current[key].indexOf(entry.target as HTMLDivElement);
              if (index !== -1) {
                setVisibleItems((prev) => ({
                  ...prev,
                  [key]: [...(prev[key] || []), index].filter((v, i, a) => a.indexOf(v) === i)
                }));
              }
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      const refs = itemRefs.current[key];
      refs.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  const sintesePrincipios = [
    {
      number: "1",
      text: "A Maçonaria proclama, como sempre o fez, desde sua origem, a existência de um Princípio Criador, sob a denominação de GRANDE ARQUITETO DO UNIVERSO;",
    },
    {
      number: "2",
      text: "É uma instituição filosófica, que proclama a liberdade de consciência como sacratíssimo direito humano;",
    },
    {
      number: "3",
      text: "Não impõe limite à investigação da Verdade e é para garantir essa liberdade que exige de todos a maior tolerância;",
    },
    {
      number: "4",
      text: "Honra o trabalho em suas formas honestas e o tem por dever, a que nenhuma pessoa válida pode fugir;",
    },
    {
      number: "5",
      text: "Proscreve qualquer discussão sectária, de natureza política ou religiosa, dentro de seus Templos ou fora deles, em nome da Ordem;",
    },
    {
      number: "6",
      text: "Condena o despotismo e trabalha, incessantemente, para unir a espécie humana pelos laços do amor fraternal;",
    },
    {
      number: "7",
      text: "Impõe o culto à Pátria, exige respeito absoluto à família e não admite a menor ofensa nem a uma nem a outra;",
    },
    {
      number: "8",
      text: "Cada Loja é um Templo sagrado, sob cuja abóboda os homens livres e de bons costumes devem reunir-se fraternalmente, procurando conseguir o bem da humanidade;",
    },
    {
      number: "9",
      text: "Todo pensamento maçônico deve ser criador. Essa atitude mental engrandece o espírito e fortifica o coração. Cada maçom, parte viva dos irmãos, concorrerá para similar o ideal da Ordem e desenvolvê-lo na capacidade de sua inteligência;",
    },
    {
      number: "10",
      text: "A Maçonaria é acessível aos de todas as classes, crenças religiosas convicções políticas, com exceção daquelas que privem o homem da liberdade de consciência e exijam submissão incondicional a seus chefes;",
    },
    {
      number: "11",
      text: "Em seus Templos aprende-se a amar e a respeitar tudo o que a virtude e a sabedoria consagram;",
    },
    {
      number: "12",
      text: "Exige estudo meditado de seus rituais e a pratica da solidariedade humana;",
    },
    {
      number: "13",
      text: "A Maçonaria, por conseguinte, é uma instituição criada para combater tudo o que atente contra a razão e contra o espírito de fraternidade universal;",
    },
    {
      number: "14",
      text: "Os ensinamentos maçônicos, realizados através de símbolos e de alegorias universais, induzem seus adeptos a dedicarem-se à felicidade a seus semelhantes, não porque a razão e a justiça lhe imponham esse dever, mas porque o sentimento é qualidade inata, que os faz filhos do Universo e amigos de todos os homens.",
    },
  ];

  const serMacom = [
    {
      number: "01",
      text: "Ser Maçom é ser amante da Virtude, da Sabedoria, da Justiça e da Humanidade;",
    },
    {
      number: "02",
      text: "Ser Maçom é ser amigo dos pobres e desgraçados, dos que sofrem, dos que choram, dos que tem fome de justiça; é porque como única norma de conduta o bem de todos e o seu progresso e engrandecimento;",
    },
    {
      number: "03",
      text: "Ser Maçom é querer a harmonia das famílias, a concórdia dos povos, a paz do gênero humano;",
    },
    {
      number: "04",
      text: "Ser Maçom é derramar por todas as partes os esplendores divinos da instrução; e educar a inteligência para o bem, conceber os mais ideais do Direito, da moralidade e do amor, e praticá-los;",
    },
    {
      number: "05",
      text: "Ser Maçom é levar à prática aquele formosíssimo preceito de todos os lugares e de todos os séculos, que diz, com infinita ternura aos seres humanos, indistintamente, do alto de uma Cruz é com os braços aberto ao mundo: \"Amai-vos uns aos outros, formai uma única família, sede todos irmão\"!",
    },
    {
      number: "06",
      text: "Ser Maçom é olvidar as ofensas que se nos fazem, ser bom, até mesmo para com os nossos adversários e inimigos, não odiar a ninguém, praticar a Virtude constantemente, pagar o mal com o bem;",
    },
    {
      number: "07",
      text: "Ser Maçom é amar a luz e aborrecer as trevas; ser amigo da Ciência e combater a ignorância, render culto a Razão e à Sabedoria;",
    },
    {
      number: "08",
      text: "Ser Maçom é praticar a Tolerância, exercer a Caridade, sem distinção de raças, crenças ou opiniões, lutar contra a hipocrisia e o fanatismo;",
    },
    {
      number: "09",
      text: "Ser Maçom é realizar, enfim, o sonho áureo da Fraternidade universal entre os homens.",
    },
  ];

  const finalidades = [
    {
      number: "01",
      text: "Grandes vultos do passado e do presente pertenceram ou pertencem à Sublime Ordem Maçônica Universal, adotando esta filosofia de vida;",
    },
    {
      number: "02",
      text: "A Maçonaria se reocupa com os problemas nacionais e internacionais, usando de sua influência para minorar o sofrimento dos povos, sem distinção de cor, raça ou religião;",
    },
    {
      number: "03",
      text: "A Maçonaria é parte integrante da História Pátria e Universal, os maçons sempre estiveram presentes nos grandes eventos, defendendo a trilogia sagrada LIBERDADE, IGUALDADE E FRATERNIDADE;",
    },
    {
      number: "04",
      text: "Assim lutaram e venceram os maçons que nos antecederam; assim lutamos hoje; assim lutarão amanhã nossos sucessores, empenhando esta mesma bandeira;",
    },
    {
      number: "05",
      text: "Trabalhando pela felicidade do gênero humano, os maçons se consideram recompensados e realizados, pois servindo ao próximo, estão observando os ensinamentos da Sublime Instituição;",
    },
    {
      number: "06",
      text: "Os que satisfizerem estes requisitos e desejarem cerrar fileiras com os Apóstolos da Liberdade e Sacerdotes do Direito, deverão se comprometer a trabalhar pelo bem-estar da Pátria e da Humanidade;",
    },
    {
      number: "07",
      text: "Aquele que for convidado e aceito será considerado nosso irmão, passando a fazer parte da grande Família Maçônica Universal;",
    },
    {
      number: "08",
      text: "Nossa Ordem deseja ardentemente que todos os homens de bem se unam numa cruzada mundial de recuperação dos valores morais da humanidade;",
    },
    {
      number: "09",
      text: "DEUS, a quem denominamos GRANDE ARQUITETO DO UNIVERSO, conhece muito bem nossas intenções e penetra no mais recôndito de nossas almas, razão por que devemos ser sinceros em nossas atitudes.",
    },
  ];

  return (
    <PageBackground>
      <Navigation />
      <section className="pt-24 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold text-gold mb-4"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                opacity: isTitleVisible ? 1 : 0,
                transform: isTitleVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Princípios da Maçonaria
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="sintese" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-charcoal border border-gold/20 rounded-lg p-1">
                <TabsTrigger 
                  value="sintese" 
                  className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold transition-all"
                >
                  Síntese dos Princípios
                </TabsTrigger>
                <TabsTrigger 
                  value="ser-macom" 
                  className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold transition-all"
                >
                  Ser Maçom
                </TabsTrigger>
                <TabsTrigger 
                  value="finalidades" 
                  className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold transition-all"
                >
                  Nossas Finalidades
                </TabsTrigger>
              </TabsList>

              {/* Síntese dos Princípios Maçônicos */}
              <TabsContent value="sintese" className="space-y-6">
                <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
                  <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8 text-center">
                    Síntese dos Princípios Maçônicos
                  </h2>
                  <div className="space-y-4">
                    {sintesePrincipios.map((principio, index) => (
                      <div
                        key={principio.number}
                        ref={(el) => {
                          if (!itemRefs.current.sintese) {
                            itemRefs.current.sintese = [];
                          }
                          itemRefs.current.sintese[index] = el;
                        }}
                        className="border-l-4 border-gold pl-6 py-4 bg-charcoal-light/50 rounded-r-lg hover:border-gold/70 hover:bg-charcoal-light transition-all duration-300 group"
                        style={{
                          opacity: visibleItems.sintese.includes(index) ? 1 : 0,
                          transform: visibleItems.sintese.includes(index) 
                            ? 'translateX(0)' 
                            : 'translateX(-20px)',
                          transition: `opacity 0.6s ease-out ${index * 0.05}s, transform 0.6s ease-out ${index * 0.05}s, border-color 0.3s, background-color 0.3s`
                        }}
                      >
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-charcoal font-bold text-sm">{principio.number}</span>
                          </div>
                          <p 
                            className="text-foreground/90 leading-relaxed flex-1 text-base"
                            style={{ fontFamily: "'Lato', sans-serif" }}
                          >
                            {principio.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Ser Maçom */}
              <TabsContent value="ser-macom" className="space-y-6">
                <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
                  <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8 text-center">
                    Ser Maçom
                  </h2>
                  <div className="space-y-4">
                    {serMacom.map((item, index) => (
                      <div
                        key={item.number}
                        ref={(el) => {
                          if (!itemRefs.current.serMacom) {
                            itemRefs.current.serMacom = [];
                          }
                          itemRefs.current.serMacom[index] = el;
                        }}
                        className="border-l-4 border-gold pl-6 py-4 bg-charcoal-light/50 rounded-r-lg hover:border-gold/70 hover:bg-charcoal-light transition-all duration-300 group"
                        style={{
                          opacity: visibleItems.serMacom.includes(index) ? 1 : 0,
                          transform: visibleItems.serMacom.includes(index) 
                            ? 'translateX(0)' 
                            : 'translateX(-20px)',
                          transition: `opacity 0.6s ease-out ${index * 0.05}s, transform 0.6s ease-out ${index * 0.05}s, border-color 0.3s, background-color 0.3s`
                        }}
                      >
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-charcoal font-bold text-xs">{item.number}</span>
                          </div>
                          <p 
                            className="text-foreground/90 leading-relaxed flex-1 text-base"
                            style={{ fontFamily: "'Lato', sans-serif" }}
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Nossas Finalidades */}
              <TabsContent value="finalidades" className="space-y-6">
                <div className="bg-charcoal p-10 rounded-lg border border-gold/20">
                  <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8 text-center">
                    Nossas Finalidades
                  </h2>
                  <div className="space-y-4">
                    {finalidades.map((item, index) => (
                      <div
                        key={item.number}
                        ref={(el) => {
                          if (!itemRefs.current.finalidades) {
                            itemRefs.current.finalidades = [];
                          }
                          itemRefs.current.finalidades[index] = el;
                        }}
                        className="border-l-4 border-gold pl-6 py-4 bg-charcoal-light/50 rounded-r-lg hover:border-gold/70 hover:bg-charcoal-light transition-all duration-300 group"
                        style={{
                          opacity: visibleItems.finalidades.includes(index) ? 1 : 0,
                          transform: visibleItems.finalidades.includes(index) 
                            ? 'translateX(0)' 
                            : 'translateX(-20px)',
                          transition: `opacity 0.6s ease-out ${index * 0.05}s, transform 0.6s ease-out ${index * 0.05}s, border-color 0.3s, background-color 0.3s`
                        }}
                      >
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-charcoal font-bold text-xs">{item.number}</span>
                          </div>
                          <p 
                            className="text-foreground/90 leading-relaxed flex-1 text-base"
                            style={{ fontFamily: "'Lato', sans-serif" }}
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      <Footer />
    </PageBackground>
  );
};

export default Principios;

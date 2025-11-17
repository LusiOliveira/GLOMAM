import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PerguntasRespostas = () => {
  const faqs = [
    {
      question: "A Maçonaria é uma religião?",
      answer: "A Maçonaria não é uma religião no sentido de ser uma seita, mas é um culto que une homens de bons costumes. A Maçonaria não promove nenhum dogma que deve ser aceito taticamente por todos, mas inculca nos homens a prática da virtude, não oferecendo panacéias para a redenção de pecados. Seu credo religioso consiste apenas em dois artigos de fé que não foram inventados por homens, mas que se encontram neles instintivamente desde os mais remotos tempos da história: A existência de Deus e a Imortalidade da Alma que tem como corolário a Irmandade dos Homens sob a Paternidade de Deus.",
    },
    {
      question: "A Maçonaria é anti-religiosa?",
      answer: "A Maçonaria não é contra qualquer religião. Ela ensina e pratica a tolerância, defendendo o direito de o homem praticar a religião de seu agrado. A Maçonaria não dogmatiza as particularides do credo e da religião. Ela reconhece os benefícios e a bondade assim como a verdade de todas as religiões, combatendo, ao mesmo tempo, as suas inverdades e o fanatismo.",
    },
    {
      question: "A Maçonaria é ateísta ou meramente agnóstica?",
      answer: "A Maçonaria não é ateísta nem agnóstica. O ateu é aquele que diz não acreditar em Deus enquanto o agnóstico é aquele que não pode afirmar, conscientemente, se Deus existe ou não. Para ser aceito e ingressar na Maçonaria, o candidato deve afirmar a crença em Deus.",
    },
    {
      question: "A Maçonaria é um partido político?",
      answer: "A Maçonaria não é um partido político. Ela não tem partido. Em princípio, a maçonaria apóia o amor à Pátria, respeito às leis e à Ordem, propugnando pelo aperfeiçoamento das condições humanas. Os maçons são aconselhados a se tornarem cidadãos exemplares e a se afastarem de movimentos cuja tendência seja a de subverter a paz e a ordem da sociedade, e se tornarem cumpridores das ordens e das leis do país em que estejam vivendo, sem nunca perder o dever de amar o seu próprio país. A maçonaria promove o conceito de que não pode existir direito sem a correspondente prestação de deveres, nem privilégios sem retribuição, assim como privilégios sem responsabilidade.",
    },
    {
      question: "A Maçonaria é uma sociedade de auxílios mútuos?",
      answer: "A Maçonaria não é uma sociedade de auxílios mútuos, ela não garante a ninguém a percepção de uma soma fixa e constante a nenhum de seus membros, na eventualidade de uma desgraça ou calamidade pode reclamar tal auxílio. Entretanto, a Maçonaria se empenha para que nenhum de seus membros sofra necessidades, ou seja, um peso para os outros. O Maçom necessitado recebe de acordo com as condições e as possibilidades dos demais membros da Ordem.",
    },
    {
      question: "A Maçonaria é uma ideologia ou um \"ismo\"?",
      answer: "A Maçonaria nem é uma ideologia, nem um \"ismo\". Ela não se envolve com as sutilezas da filosofia política, religiosa ou social. Mas, ela reconhece que todos os homens têm uma só origem, participam da mesma natureza e tem a mesma esperança e, por conseguinte, devem trabalhar em união para o mesmo objetivo - a felicidade e bem estar da sociedade.",
    },
    {
      question: "Então o que é a Maçonaria?",
      answer: "A Maçonaria é uma organização mundial de homens que, utilizando-se de formas simbólicas dos antigos construtores de templos, voluntariamente se uniram para o propósito comum de se aperfeiçoarem na sociedade. Admitindo em seu seio, homens de caráter, sem consideração à sua raça, cor ou credo, a Maçonaria se esforça para constituir uma liga internacional de homens dedicados a viverem em paz, harmonia e afeição fraternal.",
    },
    {
      question: "Qual é a missão da Maçonaria?",
      answer: "A missão da Maçonaria é a de \"fazer amigos, aperfeiçoar suas vidas, dedicar-se às boas obras, promover a verdade e reconhecer seus semelhantes como homens e irmãos\". A missão da Maçonaria ainda é a prática das virtudes e da caridade, é confortar os infelizes, não voltar às costas à miséria, restaurar a paz de espírito e a paz aos desamparados e dar novas esperanças aos desesperançados.",
    },
    {
      question: "A Maçonaria convida as pessoas para se filiarem a ela?",
      answer: "A Maçonaria não \"convida\" ninguém, mesmo aos mais qualificados para se tornarem um membro da Ordem. Aquele que deseja entrar para ela, deve manifestar esse desejo espontaneamente, declarando que livre e conscientemente deseja participar dela. A Maçonaria não prende nenhum homem a juramentos incompatíveis com sua consciência ou liberdade de pensar.",
    },
    {
      question: "Porque a Maçonaria não inicia mulheres?",
      answer: "Tendo evoluído da Maçonaria Operativa que erguia templos no período da construção de catedrais, a Maçonaria adotou a antiga regulamentação que provia o seguinte: \"As pessoas admitidas como membros de uma Loja devem ser homens bons e de princípios virtuosos, nascidos livres de idade madura, sem vínculos que o privem de pensar livremente, sendo vedada a admissão de mulheres assim como homens de comportamento duvidoso ou imoral. A regularidade da maçonaria se deve ao fato de se ater aos seus princípios básicos e imutáveis regidos por mandamentos, entre os quais se inclui o que acima se disse.",
    },
    {
      question: "Por que são chamados de templos os locais de reunião?",
      answer: "Os lugares onde os maçons se reúnem são chamados de templos porque, embora não sendo uma religião ou reunindo-se em uma igreja, a Maçonaria preserva religiosamente os direitos de cada indivíduo praticar a religião ou credo de sua preferência, mantendo-se eqüidistante das diferentes seitas ou credos. Ela ensina a todos como respeitar e tolerar as religiões diversas de seus membros.",
    },
    {
      question: "A Maçonaria Universal obedece a uma autoridade máxima?",
      answer: "Nem mesmo em um país como os Estados Unidos que agora se compõe de 50 Estados e conta com cerca de quatro milhões de Maçons, obedece a Maçonaria a uma autoridade suprema. A Maçonaria em cada país ou em cada estado de uma Federação é regulada e dirigida por uma Grande Loja independente e soberana.",
    },
    {
      question: "Como faço para entrar na maçonaria?",
      answer: "A Maçonaria é uma Ordem Universal formada de homens de todas as raças, credos e nacionalidades, acolhidos por suas qualidades morais e intelectuais e reunidos com a finalidade de construírem uma Sociedade Humana, fundada no Amor Fraternal, na esperança com amor a Deus, à Pátria, à Família e ao Próximo, com Tolerância, Virtude e Sabedoria e com a constante investigação da Verdade e sob a tríade LIBERDADE, IGUALDADE E FRATERNIDADE, dentro dos princípios da Ordem, da Razão e da Justiça, o mundo alcance a Felicidade Geral e a Paz Universal.",
    },
    {
      question: "A Maçonaria é uma sociedade secreta?",
      answer: "A Maçonaria não é uma sociedade secreta, no sentido como tal termo é geralmente empregado. Uma sociedade secreta é aquela que tem objetivos secretos e ocultos a sua existência assim como as datas e locais de suas sessões. O objetivo e propósito da Maçonaria, suas leis, história e filosofia tem sido divulgados em livros que estão à venda em qualquer livraria. Os únicos segredos que a maçonaria conserva são as cerimônias empregadas na admissão de seus membros e os meios usados pelos Maçons para se conhecerem.",
    },
  ];

  return (
    <PageBackground>
      <Navigation />
      <section className="pt-24 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              Perguntas e Respostas
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gold/20 rounded-lg px-6"
                  style={{ backgroundColor: '#161d34' }}
                >
                  <AccordionTrigger 
                    className="text-foreground hover:text-gold text-left"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent 
                    className="text-foreground/80 pt-2"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <Footer />
    </PageBackground>
  );
};

export default PerguntasRespostas;


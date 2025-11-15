import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PerguntasRespostas = () => {
  const faqs = [
    {
      question: "A Maçonaria é uma religião?",
      answer: "Não, a Maçonaria não é uma religião. Ela é uma instituição filosófica que exige de seus membros a crença em um Ser Supremo, mas não impõe nenhuma religião específica.",
    },
    {
      question: "A Maçonaria é uma sociedade secreta?",
      answer: "A Maçonaria não é uma sociedade secreta, mas sim discreta. Seus membros são conhecidos e suas atividades são públicas, mantendo apenas certos rituais e símbolos em sigilo.",
    },
    {
      question: "Como posso me tornar um maçom?",
      answer: "Para se tornar um maçom, é necessário ser maior de 18 anos, ter boa reputação moral, acreditar em um Ser Supremo e ser recomendado por um maçom. O processo inclui uma petição, sindicância e votação pela loja.",
    },
    {
      question: "A Maçonaria tem relação com política?",
      answer: "A Maçonaria é apolítica e não partidária. Ela não se envolve em questões políticas partidárias, mas seus membros, como cidadãos, têm o direito de participar da vida política do país.",
    },
    {
      question: "Mulheres podem ser maçons?",
      answer: "Na Maçonaria regular (GLOMAM), apenas homens podem ser membros. Existem, no entanto, organizações maçônicas mistas ou femininas que não são reconhecidas pela Maçonaria regular.",
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
                  className="bg-charcoal border border-gold/20 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-foreground hover:text-gold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pt-2">
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


import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import symbolsImage from "@/assets/masonic-symbols.jpg";

const NossaHistoria = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const timelineTitleRef = useRef<HTMLHeadingElement | null>(null);

  const historySections = [
    {
      period: "Século XIX - Origens",
      title: "As Origens da Maçonaria no Amazonas",
      content: "O Amazonas, ao ser elevado à categoria de Província, em 1850, não possuía Loja Maçônica, permanecendo nessa situação até o surgimento, em 1872, da Loja \"Esperança e Porvir\", no Oriente de Manaus. Tal fato, porém, não significava ausência, naquela época, em terras amazônicas, de atividades da Maçonaria Universal. Ao contrário, houve, conforme registram os historiadores, acentuada participação de Maçons brasileiros e estrangeiros, no meritório trabalho de não somente manter a integridade do território nacional, mas também de propiciar condições para a execução de uma correta política de desenvolvimento regional.",
    },
    {
      period: "1884 - Abolição da Escravidão",
      title: "A Campanha Abolicionista",
      content: "Essa Sociedade desenvolveu notável campanha que obteve completo êxito a 10 de julho de 1884, quando o Ir. Teodoreto Carlos de Faria Souto, que exercia o cargo de Governador da Província, decretou a extinção da escravidão no Amazonas.",
    },
    {
      period: "1904 - Fundação",
      title: "A Primeira Grande Loja Brasileira",
      content: "A Grande Loja Maçônica do Amazonas é considerada a primeira das Grandes Lojas Brasileiras com fundação em 22.09.1904, quando surgiu como Potência Maçônica na Amazônia Ocidental, até os dias atuais, e foi denominada de vários modos, a saber:",
    },
    {
      period: "1927 - Soberania",
      title: "A Proclamação da Soberania",
      content: "Com a proclamação, pelo Grão-Mestre Desembargador Gaspar Antônio Vieira Guimarães, a 24.07.1927, no Templo da Loja Maçônica Amazonas, o Grande Oriente do Amazonas e Acre, passou a ter soberania, tendo sido a quinta Grande Loja a receber a Carta Constitutiva do Supremo Conselho da República Federativa do Brasil. Estava, assim, criada a primeira Entidade da Arte Real na Amazônia Ocidental, soberana e independente. Nessa data, existiam na região, vinte e seis Lojas e que passaram a pertencer à nova Potência Maçônica. Essas Oficinas encontravam-se: sete na Capital e oito no Interior do Estado do Amazonas; oito no atual Estado do Acre; duas no atual Estado de Rondônia; e uma na Bolívia.",
    },
  ];

  const nameChanges = [
    { period: "1904 a 1927", name: "Grande Oriente Estadual do Amazonas" },
    { period: "1927 a 1945", name: "Grande Oriente do Amazonas e Acre" },
    { period: "1945 a 1961", name: "Grande Oriente do Amazonas, Acre e demais Territórios Limítrofes" },
    { period: "1961 a 1968", name: "Grande Loja do Amazonas, Acre, Rondônia e Rio Branco" },
    { period: "1968 a 1974", name: "Grande Loja do Amazonas, Acre, Rondônia e Roraima" },
    { period: "1974 a 1980", name: "Grande Loja do Amazonas e Territórios Limítrofes" },
    { period: "1980 a 1985", name: "Grande Loja do Estado do Amazonas - GLEAM" },
    { period: "1985 a 1988", name: "Grande Loja Maçônica do Estado do Amazonas – GLOMAM" },
    { period: "A partir de 1988", name: "Grande Loja Maçônica do Amazonas - GLOMAM" },
  ];

  useEffect(() => {
    // Animação do título ao carregar
    const timer = setTimeout(() => {
      setIsTitleVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Verificar se é a imagem
            if (entry.target === imageRef.current) {
              setVisibleSections((prev) => {
                const imageIndex = historySections.length + nameChanges.length + 1;
                if (!prev.includes(imageIndex)) {
                  return [...prev, imageIndex];
                }
                return prev;
              });
              return;
            }
            
            // Verificar se é o título da timeline
            if (entry.target === timelineTitleRef.current) {
              setVisibleSections((prev) => {
                const timelineTitleIndex = historySections.length + nameChanges.length + 2;
                if (!prev.includes(timelineTitleIndex)) {
                  return [...prev, timelineTitleIndex];
                }
                return prev;
              });
              return;
            }
            
            // Verificar seções normais
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleSections((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: "0px 0px -80px 0px" // Aparece quando está próximo da viewport (80px antes de entrar completamente)
      }
    );

    // Observar todas as seções
    const refs = sectionRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observar imagem
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Observar título da timeline
    if (timelineTitleRef.current) {
      observer.observe(timelineTitleRef.current);
    }

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (timelineTitleRef.current) {
        observer.unobserve(timelineTitleRef.current);
      }
    };
  }, []);

  return (
    <PageBackground>
      <Navigation />
      <section className="pt-24 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-normal uppercase mb-4"
              style={{
                fontFamily: "'Baskerville Old Face', serif",
                background: 'linear-gradient(to right, #e3da98, #d3a54c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: isTitleVisible ? 1 : 0,
                transform: isTitleVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Nossa História
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Imagem com efeito */}
            <div 
              ref={imageRef}
              className="mb-16"
              style={{
                opacity: visibleSections.includes(historySections.length + nameChanges.length + 1) ? 1 : 0,
                transform: visibleSections.includes(historySections.length + nameChanges.length + 1) 
                  ? 'translateY(0)' 
                  : 'translateY(30px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              <div className="relative group max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <img
                  src={symbolsImage}
                  alt="Símbolos Maçônicos"
                  className="relative rounded-lg shadow-elegant w-full h-auto transform rotate-3 group-hover:rotate-6 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Seções históricas */}
            <div className="space-y-12 mb-16">
              {historySections.map((section, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="bg-charcoal/50 p-8 rounded-lg border-l-4 border-gold hover:bg-charcoal/70 transition-all duration-300"
                  style={{
                    opacity: visibleSections.includes(index) ? 1 : 0,
                    transform: visibleSections.includes(index) 
                      ? 'translateY(0)' 
                      : 'translateY(30px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                  }}
                >
                  <div className="text-gold text-sm font-semibold mb-2 tracking-wider">
                    {section.period}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Linha do tempo - Mudanças de nome */}
            <div className="mb-16">
              <h2 
                ref={timelineTitleRef}
                className="text-3xl font-bold text-gold mb-8 text-center"
                style={{
                  opacity: visibleSections.includes(historySections.length + nameChanges.length + 2) ? 1 : 0,
                  transform: visibleSections.includes(historySections.length + nameChanges.length + 2) 
                    ? 'translateY(0)' 
                    : 'translateY(30px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                }}
              >
                Evolução da Denominação
              </h2>
              <div className="space-y-4">
                {nameChanges.map((item, index) => {
                  const globalIndex = historySections.length + index;
                  return (
                    <div
                      key={index}
                      ref={(el) => (sectionRefs.current[globalIndex] = el)}
                      className="bg-charcoal/30 p-6 rounded-lg border border-gold/20 hover:border-gold/50 hover:bg-charcoal/50 transition-all duration-300"
                      style={{
                        opacity: visibleSections.includes(globalIndex) ? 1 : 0,
                        transform: visibleSections.includes(globalIndex) 
                          ? 'translateY(0)' 
                          : 'translateY(20px)',
                        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="text-gold font-semibold text-lg">
                          {item.period}
                        </div>
                        <div className="text-foreground/90 text-lg md:text-right">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Conclusão */}
            <div
              ref={(el) => (sectionRefs.current[historySections.length + nameChanges.length] = el)}
              className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 p-8 rounded-lg border border-gold/30"
              style={{
                opacity: visibleSections.includes(historySections.length + nameChanges.length) ? 1 : 0,
                transform: visibleSections.includes(historySections.length + nameChanges.length) 
                  ? 'translateY(0)' 
                  : 'translateY(30px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              <p className="text-foreground/90 leading-relaxed text-lg text-center italic">
                Os Maçons do Amazonas, ao longo desses anos, realizaram trabalho admirável. Desde sua organização até hoje souberam dignificar nossa Sacrossanta Instituição, mantendo a regularidade, conscientizando-se da necessidade do aprimoramento individual, através dos ensinamentos maçônicos, objetivando viver suas vidas pautadas nos fundamentos que sustentam até hoje a Maçonaria.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageBackground>
  );
};

export default NossaHistoria;


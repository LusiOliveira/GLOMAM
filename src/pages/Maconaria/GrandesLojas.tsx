import { useState, useEffect, useRef, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { ExternalLink } from "lucide-react";

const GrandesLojas = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const regioes = useMemo(() => [
    {
      nome: "Norte",
      lojas: [
        { nome: "Grande Loja Maçônica do Estado do Acre", url: "http://www.gleac.org" },
        { nome: "Grande Loja Maçônica do Pará", url: "http://www.glompa.com" },
        { nome: "Grande Loja Maçônica do Estado de Roraima", url: null },
        { nome: "Grande Loja Maçônica do Amapá", url: null },
        { nome: "Grande Loja Maçônica do Estado de Rondônia", url: "http://www.glomaron.org.br" },
        { nome: "Grande Loja Maçônica do Estado do Tocantins", url: null },
      ],
    },
    {
      nome: "Nordeste",
      lojas: [
        { nome: "Grande Loja Maçônica do Estado do Maranhão", url: "http://www.glema.com.br" },
        { nome: "Grande Loja do Piauí", url: "http://www.glmpi.com.br" },
        { nome: "Grande Loja Maçônica do Estado da Bahia", url: "http://www.gleb.org.br" },
        { nome: "Grande Loja Maçônica do Estado do Ceará", url: "http://www.glomec.org.br" },
        { nome: "Grande Loja Maçônica do Estado do Rio Grande do Norte", url: "http://www.glern.com.br" },
        { nome: "Grande Loja Maçônica do Estado da Paraíba", url: "http://www.grandeloja-pb.org.br" },
        { nome: "Grande Loja Maçônica de Pernambuco", url: "http://www.grlojape.com.br" },
        { nome: "Grande Loja Maçônica do Estado de Alagoas", url: "http://www.glomeal.com.br" },
        { nome: "Grande Loja Maçônica do Estado de Sergipe", url: "http://www.glomes.org.br" },
      ],
    },
    {
      nome: "Centro-Oeste",
      lojas: [
        { nome: "Grande Loja Maçônica do Estado de Mato Grosso do Sul", url: "http://www.grandelojams.org.br" },
        { nome: "Grande Loja Maçônica do Estado de Goiás", url: "http://www.gleg.com.br" },
        { nome: "Grande Loja Maçônica do Distrito Federal", url: "http://www.glmdf.com.br" },
        { nome: "Grande Loja Maçônica do Estado do Mato Grosso", url: "http://www.glemt.org" },
      ],
    },
    {
      nome: "Sul",
      lojas: [
        { nome: "Grande Loja do Paraná", url: "http://www.glp.org.br" },
        { nome: "Grande Loja de Santa Catarina", url: "https://site.mrglsc.org.br/" },
        { nome: "Grande Loja Maçonica do Estado do Rio Grande do sul", url: "http://www.glojars.org.br" },
      ],
    },
    {
      nome: "Sudeste",
      lojas: [
        { nome: "Grande Loja Maçônica do Estado de São Paulo", url: "http://www.glesp.com.br" },
        { nome: "Grande Loja Maçõnica de Minas Gerais", url: "http://www.glmmg.org.br" },
        { nome: "Grande Loja Maçônica do Estado do Espírito Santo", url: "http://www.glmees.org.br" },
        { nome: "Grande Loja Maçônica do Estado do Rio de Janeiro", url: "http://www.glmerj.org.br" },
      ],
    },
  ], []);

  useEffect(() => {
    setIsTitleVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleItems((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const refs = sectionRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
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
              Grandes Lojas
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {regioes.map((regiao, regiaoIndex) => (
              <div
                key={regiaoIndex}
                ref={(el) => (sectionRefs.current[regiaoIndex] = el)}
                className="p-6 md:p-8 rounded-lg border border-gold/20"
                style={{
                  backgroundColor: '#161d34',
                  opacity: visibleItems.includes(regiaoIndex) ? 1 : 0,
                  transform: visibleItems.includes(regiaoIndex) ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease-out ${regiaoIndex * 0.1}s, transform 0.6s ease-out ${regiaoIndex * 0.1}s`
                }}
              >
                <h2
                  className="text-2xl md:text-3xl font-bold text-gold mb-6 pb-4 border-b border-gold/30"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {regiao.nome}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {regiao.lojas.map((loja, lojaIndex) => (
                    <div
                      key={lojaIndex}
                      className="bg-charcoal-light/50 p-4 rounded-lg border border-gold/10 hover:border-gold/40 hover:bg-charcoal-light transition-all duration-300 group"
                    >
                      {loja.url ? (
                        <a
                          href={loja.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start justify-between gap-3 group"
                        >
                          <span
                            className="text-foreground/90 flex-1 group-hover:text-gold transition-colors"
                            style={{ fontFamily: "'Lato', sans-serif" }}
                          >
                            {loja.nome}
                          </span>
                          <ExternalLink className="w-4 h-4 text-gold/60 group-hover:text-gold flex-shrink-0 mt-1 transition-colors" />
                        </a>
                      ) : (
                        <span
                          className="text-foreground/70"
                          style={{ fontFamily: "'Lato', sans-serif" }}
                        >
                          {loja.nome}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </PageBackground>
  );
};

export default GrandesLojas;

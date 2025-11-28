import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/banners/bannerteste.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-charcoal/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-6">
            <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/images/icons/Hero.png" 
                alt="Grande Loja Maçônica"
                fetchPriority="high" 
                className="h-full w-full object-contain"
                loading="eager"
              />
            </div>
          </div>

          <h1 
            className="text-4xl md:text-6xl mb-1 uppercase relative z-20"
            style={{ 
              fontFamily: "'Baskerville Old Face', serif", 
              fontWeight: 'normal',
              background: 'linear-gradient(to right, #e3da98, #d3a54c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2'
            }}
          >
            Grande Loja Maçônica do Amazonas
          </h1>

          <p 
            className="text-base md:text-lg text-white mb-8 max-w-3xl mx-auto leading-relaxed uppercase"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            DESDE 1904, A GRANDE LOJA MAIS ANTIGA DO BRASIL.
          </p>
        </div>
      </div>

      {/* Buttons positioned above scroll indicator */}
      <div className="absolute bottom-24 left-[calc(50%+16px)] -translate-x-1/2 flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a
          href="/glomam/nossa-historia"
          className="px-6 py-3 h-[56px] bg-gradient-to-r from-gold to-gold-light text-charcoal font-black hover:shadow-gold transition-all duration-300 flex flex-col items-center justify-center uppercase whitespace-nowrap"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, borderRadius: '12px' }}
        >
          <span className="text-xs leading-tight font-black">CONHEÇA</span>
          <span className="text-2xl leading-tight font-black">GLOMAM</span>
        </a>
        <a
          href="/intranet"
          className="px-6 py-3 h-[56px] border-2 font-black hover:bg-gold hover:text-charcoal transition-all duration-300 flex items-center justify-center uppercase text-2xl whitespace-nowrap"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, color: '#e3da98', borderColor: '#e3da98', borderRadius: '12px' }}
        >
          INTRANET
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

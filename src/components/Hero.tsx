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

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-gold/20 rotate-12 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-6">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/images/icons/Hero.png" 
                alt="Grande Loja Maçônica" 
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-gold leading-tight"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Grande Loja Maçônica do Amazonas
          </h1>

          <p 
            className="text-lg md:text-xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
          Lorem Ipsum {""}
            <span className="text-gold">Lorem Ipsum</span>,{" "}
            <span className="text-gold">Lorem Ipsum</span> e{" "}
            <span className="text-gold">Lorem Ipsum</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/glomam/nossa-historia"
              className="px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-charcoal font-bold rounded hover:shadow-gold transition-all duration-300 transform hover:scale-105"
            >
              Conheça a GLOMAM
            </a>
            <a
              href="#contato"
              className="px-8 py-4 border-2 border-gold text-gold font-bold rounded hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              Entre em Contato
            </a>
          </div>
        </div>
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

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calcula o offset baseado na posição da seção na viewport
            // Multiplicador reduzido para movimento mais suave e sutil
            const offset = (windowHeight - rect.top) * 0.08;
            setScrollOffset(offset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Calcula a posição inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contato" 
      className="py-12 md:py-16 relative overflow-hidden"
    >
      {/* Background com imagem e movimento oposto ao scroll */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#161d34', // Fallback caso a imagem se mova
        }}
      >
        <div
          className="absolute"
          style={{
            backgroundImage: 'url(/images/banners/fundoMaps.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '150%',
            top: '-30%',
            left: 0,
            transform: `translateY(${scrollOffset}px)`,
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Google Maps Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <h3 
                className="text-3xl md:text-4xl font-bold text-gold mb-6 leading-tight"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                GRANDE LOJA MAÇÔNICA<br />
                DO AMAZONAS - GLOMAM
              </h3>
              
              <div className="space-y-4" style={{ fontFamily: "'Lato', sans-serif" }}>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-foreground/90 text-sm leading-relaxed">
                    Av. Prof. Nilton Lins, 1655 - Flores, Manaus - AM, 69058-030<br />
                    Brasil
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-foreground/90 text-sm">
                    (92) 3622-0034
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-foreground/90 text-sm">
                    glomam@glomam.org.br
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-foreground/90 text-sm">
                    Funcionamento: De Segunda a Sexta-feira. Das 14h às 20h
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Google Maps */}
            <div className="w-full h-[280px] md:h-[320px] rounded-lg overflow-hidden border border-gold/30 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.103695941148!2d-60.01664262413901!3d-3.066950496908758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1a7d57266697%3A0xc4189421d95b3b03!2sGrande%20Loja%20Ma%C3%A7%C3%B4nica%20do%20Amazonas%20Glomam!5e0!3m2!1spt-BR!2sbr!4v1763153246101!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Localização da Grande Loja Maçônica do Amazonas"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

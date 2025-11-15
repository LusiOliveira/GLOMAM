import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#161d34' }}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gold mb-4"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Estamos prontos para responder suas dúvidas e compartilhar mais sobre nossa tradição
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8" style={{ fontFamily: "'Merriweather', serif" }}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-foreground/70">(92) 3622-0034</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <p className="text-foreground/70">glomam@glomam.org.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-foreground/70">
                    Av. Prof. Nilton Lins, 1655 - Flores, Manaus - AM, 69058-030<br />
                      Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-gold pl-6 bg-charcoal/50 p-6 rounded">
              <h4 className="font-bold text-foreground mb-2">Horário de Atendimento</h4>
              <p className="text-foreground/70">
                Segunda a Sexta: 14h às 20h<br />
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal p-8 rounded-lg border-[0.5px] border-gold/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envie uma Mensagem
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-foreground/80 mb-2 font-medium">
                  Nome Completo
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  className="bg-charcoal-light border-gold/30 text-foreground focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-foreground/80 mb-2 font-medium">
                  E-mail
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-charcoal-light border-gold/30 text-foreground focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-foreground/80 mb-2 font-medium">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Como podemos ajudá-lo?"
                  rows={5}
                  className="bg-charcoal-light border-gold/30 text-foreground focus:border-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-gold to-gold-light text-charcoal font-bold relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] py-2 text-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Enviar Mensagem</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </Button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-charcoal p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Nossa Localização
            </h3>
            <div className="w-full h-[450px] md:h-[500px] rounded-lg overflow-hidden border border-gold/30 shadow-lg">
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

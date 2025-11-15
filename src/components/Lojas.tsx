import { MapPin, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Lojas = () => {
  const lojas = [
    {
      name: "Loja Amazonas Nº 1",
      location: "Manaus - Centro",
      founded: "1990",
      members: "80+",
      meeting: "1ª e 3ª Segunda-feira",
    },
    {
      name: "Loja Rio Negro Nº 2",
      location: "Manaus - Zona Sul",
      founded: "1995",
      members: "65+",
      meeting: "2ª e 4ª Terça-feira",
    },
    {
      name: "Loja Solimões Nº 3",
      location: "Manaus - Zona Norte",
      founded: "2000",
      members: "70+",
      meeting: "1ª e 3ª Quinta-feira",
    },
    {
      name: "Loja Tarumã Nº 4",
      location: "Manaus - Zona Oeste",
      founded: "2005",
      members: "55+",
      meeting: "2ª e 4ª Quarta-feira",
    },
    {
      name: "Loja Madeira Nº 5",
      location: "Manaus - Zona Leste",
      founded: "2008",
      members: "60+",
      meeting: "1ª e 3ª Sexta-feira",
    },
    {
      name: "Loja Purus Nº 6",
      location: "Manaus - Zona Central",
      founded: "2012",
      members: "45+",
      meeting: "2ª e 4ª Segunda-feira",
    },
  ];

  return (
    <section id="lojas" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Nossas Lojas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Conheça as lojas maçônicas filiadas à GLOMAM em todo o Amazonas
          </p>
        </div>

        {/* Lojas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {lojas.map((loja, index) => (
            <Card
              key={index}
              className="bg-charcoal-light border-gold/20 hover:border-gold/50 transition-all duration-300 group hover:shadow-gold"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-charcoal">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                  {loja.name}
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-foreground/70">
                  <MapPin className="w-4 h-4 mr-2 text-gold" />
                  <span className="text-sm">{loja.location}</span>
                </div>
                <div className="flex items-center text-foreground/70">
                  <Calendar className="w-4 h-4 mr-2 text-gold" />
                  <span className="text-sm">Fundada em {loja.founded}</span>
                </div>
                <div className="flex items-center text-foreground/70">
                  <Users className="w-4 h-4 mr-2 text-gold" />
                  <span className="text-sm">{loja.members} membros</span>
                </div>
                <div className="pt-3 border-t border-gold/20">
                  <p className="text-foreground/80 text-sm font-semibold">
                    Reuniões:
                  </p>
                  <p className="text-foreground/70 text-sm">{loja.meeting}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Como se Filiar */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-charcoal-light p-10 rounded-lg border border-gold/20">
            <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
              Como Ingressar em uma Loja
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-charcoal">1</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Requisitos</h4>
                <p className="text-foreground/70 text-sm">
                  Ser maior de 21 anos, ter boa reputação e acreditar em um Ser Supremo
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-charcoal">2</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Contato</h4>
                <p className="text-foreground/70 text-sm">
                  Entre em contato com uma loja de sua região ou com a GLOMAM
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-charcoal">3</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Processo</h4>
                <p className="text-foreground/70 text-sm">
                  Passe por entrevistas e sindicância antes da iniciação
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="#contato"
                className="inline-block px-8 py-3 bg-gradient-to-r from-gold to-gold-light text-charcoal font-bold rounded hover:shadow-gold transition-all duration-300"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lojas;

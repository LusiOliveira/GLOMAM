const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-gold/20 py-12" style={{ fontFamily: "'Lato', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo/footer.png" 
                alt="GLOMAM Logo" 
                className="w-auto object-contain transition-transform duration-300 hover:scale-125 cursor-pointer"
                style={{ height: '50px' }}
              />
              <span className="text-gold font-bold text-lg">
                Grande Loja Maçônica do Amazonas
              </span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Uma tradição de séculos dedicada aos princípios de liberdade,
              igualdade e fraternidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["HOME", "NOSSA HISTORIA", "MAÇONARIA", "ADMINISTRAÇÃO", "LOJAS", "DISPENSÁRIO"].map((link) => {
                const href = link === "NOSSA HISTORIA" 
                  ? "/glomam/nossa-historia"
                  : `#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                return (
                  <li key={link}>
                    <a
                      href={href}
                      className="text-foreground/70 hover:text-gold transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Telefone: (92) 3622-0034</li>
              <li>Email: glomam@glomam.org.br</li>
              <li>Segunda a Sexta: 14h às 20h</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gold/20 pt-8 text-center">
          <p className="text-foreground/60 text-sm">
              GLOMAM © {new Date().getFullYear()}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

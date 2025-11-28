const Footer = () => {
  return (
    <footer 
      className="border-t border-white/20 pt-12 pb-0 transition-all duration-500 ease-in-out" 
      style={{ 
        fontFamily: "'Lato', sans-serif", 
        backgroundColor: '#123b61', 
        fontWeight: 400,
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo/footer.png" 
                alt="GLOMAM Logo"
                loading="lazy"
                decoding="async" 
                className="w-auto object-contain transition-transform duration-300 hover:scale-125 cursor-pointer"
                style={{ height: '50px' }}
              />
              <span className="font-bold text-lg" style={{ color: '#e3da98', fontFamily: "'Lato', sans-serif" }}>
                Grande Loja Maçônica do Amazonas
              </span>
            </div>
            <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
              Uma tradição de séculos dedicada aos princípios de liberdade,
              igualdade e fraternidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#e3da98', fontFamily: "'Lato', sans-serif" }}>Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", key: "HOME" },
                { label: "Maçonaria", key: "MAÇONARIA" },
                { label: "Governantes", key: "GOVERNANTES" },
                { label: "Lojas", key: "LOJAS" }
              ].map(({ label, key }) => {
                const href = key === "HOME"
                  ? "/"
                  : key === "GOVERNANTES"
                  ? "/administracao/governantes"
                  : key === "LOJAS"
                  ? "/lojas"
                  : `#${key.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                return (
                  <li key={key}>
                    <a
                      href={href}
                      className="text-white hover:text-white/80 transition-colors text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#e3da98', fontFamily: "'Lato', sans-serif" }}>Contato</h4>
            <ul className="space-y-2 text-sm text-white" style={{ fontFamily: "'Lato', sans-serif" }}>
              <li>Telefone: (92) 3622-0034</li>
              <li>E-mail: glomam@glomam.org.br</li>
              <li>Expediente: De segunda a sexta das 14h às 20h.</li>
              <li>
                <a 
                  href="/glomam/quero-ser-um-macom" 
                  className="hover:text-white/80 transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Declaração de interesse
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 pb-6 text-center" style={{ marginBottom: 0 }}>
          <p className="text-white/60 text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
              GLOMAM © {new Date().getFullYear()}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

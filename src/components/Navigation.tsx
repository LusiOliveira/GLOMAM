import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isFadingOut, setIsFadingOut] = useState<string | null>(null);
  const [isFadingIn, setIsFadingIn] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeOutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeInTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeOutCompleteTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoveredMenuRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevenir scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Estrutura de menus e submenus
  const menuItems = [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "GLOMAM",
      submenus: [
        { label: "NOSSA HISTÓRIA", href: "/glomam/nossa-historia", active: true },
        { label: "PARAMAÇÔNICOS", href: "/glomam/paramaconicos" },
        { label: "AGENDA DO GRÃO MESTRE", href: "/glomam/agenda" },
        { label: "QUERO SER UM MAÇOM", href: "/glomam/quero-ser-um-macom" },
      ],
    },
    {
      label: "MAÇONARIA",
      submenus: [
        { label: "O QUE É", href: "/maconaria/o-que-e" },
        { label: "PRINCIPIOS", href: "/maconaria/principios" },
        { label: "OBJETIVOS", href: "/maconaria/objetivos" },
        { label: "PERGUNTAS E RESPOSTAS", href: "/maconaria/perguntas-respostas" },
        { label: "GRANDES LOJAS", href: "/maconaria/grandes-lojas" },
      ],
    },
    {
      label: "ADMINISTRAÇÃO",
      submenus: [
        { label: "GOVERNANTES", href: "/administracao/governantes" },
        { label: "EXECUTIVO", href: "/administracao/executivo" },
        { label: "LEGISLATIVO", href: "/administracao/legislativo" },
        { label: "JUDICIÁRIO", href: "/administracao/judiciario" },
        { label: "GRANDES COMISSÕES", href: "/administracao/grandes-comissoes" },
      ],
    },
    {
      label: "LOJAS",
      submenus: [
        { label: "BUSCAR LOJAS", href: "/lojas" },
      ],
    },
    {
      label: "DISPENSÁRIO",
      submenus: [
        { label: "QUEM SOMOS", href: "/dispensario/quem-somos" },
      ],
    },
  ];

  const handleMouseEnter = (menuLabel: string) => {
    // Limpar todos os timeouts
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (fadeOutTimeoutRef.current) {
      clearTimeout(fadeOutTimeoutRef.current);
      fadeOutTimeoutRef.current = null;
    }
    if (fadeInTimeoutRef.current) {
      clearTimeout(fadeInTimeoutRef.current);
      fadeInTimeoutRef.current = null;
    }
    if (fadeOutCompleteTimeoutRef.current) {
      clearTimeout(fadeOutCompleteTimeoutRef.current);
      fadeOutCompleteTimeoutRef.current = null;
    }
    
    // Resetar estados
    setIsFadingOut(null);
    
    // Se já está no mesmo menu, não fazer nada
    if (hoveredMenuRef.current === menuLabel) {
      return;
    }
    
    // Configurar novo menu
    hoveredMenuRef.current = menuLabel;
    setIsFadingIn(menuLabel);
    setHoveredMenu(menuLabel);
    
    // Remove fade-in class after animation completes
    fadeInTimeoutRef.current = setTimeout(() => {
      setIsFadingIn(null);
      fadeInTimeoutRef.current = null;
    }, 400);
  };

  const handleMouseLeave = () => {
    // Limpar timeout de fade-in se existir
    if (fadeInTimeoutRef.current) {
      clearTimeout(fadeInTimeoutRef.current);
      fadeInTimeoutRef.current = null;
    }
    
    const currentMenu = hoveredMenuRef.current;
    if (currentMenu) {
      // Delay antes de começar o fade out
      fadeOutTimeoutRef.current = setTimeout(() => {
        // Verificar se ainda é o mesmo menu (evitar race condition)
        if (hoveredMenuRef.current === currentMenu) {
          setIsFadingOut(currentMenu);
          // Tempo da animação de fade out após o delay
          fadeOutCompleteTimeoutRef.current = setTimeout(() => {
            // Verificar novamente antes de remover
            if (hoveredMenuRef.current === currentMenu) {
              hoveredMenuRef.current = null;
              setHoveredMenu(null);
              setIsFadingOut(null);
            }
            fadeOutCompleteTimeoutRef.current = null;
          }, 500);
        }
        fadeOutTimeoutRef.current = null;
      }, 200); // Delay de 200ms antes de começar o fade out
    }
  };

  // Sincronizar ref com state
  useEffect(() => {
    hoveredMenuRef.current = hoveredMenu;
  }, [hoveredMenu]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (fadeOutTimeoutRef.current) {
        clearTimeout(fadeOutTimeoutRef.current);
      }
      if (fadeInTimeoutRef.current) {
        clearTimeout(fadeInTimeoutRef.current);
      }
      if (fadeOutCompleteTimeoutRef.current) {
        clearTimeout(fadeOutCompleteTimeoutRef.current);
      }
    };
  }, []);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gold/20 transition-all duration-300" 
      style={{ 
        backgroundColor: isScrolled ? 'rgba(18, 59, 97, 0.85)' : '#123b61',
        fontFamily: "'Lato', sans-serif"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-1" onClick={handleHomeClick}>
            <div className="w-16 h-16 flex items-center justify-center">
              {logoError ? (
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                  <span className="text-charcoal font-bold text-xl">G</span>
                </div>
              ) : (
                <img 
                  src="/Logo.png" 
                  alt="Grande Loja Maçônica" 
                  className="h-full w-full object-contain"
                  onError={() => setLogoError(true)}
                />
              )}
            </div>
            <span 
              className="text-gold font-bold text-xl hidden md:block"
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              GLOMAM
            </span>
          </Link>

          {/* Desktop Navigation - Centralizado */}
          <div className="hidden lg:flex items-center justify-center space-x-1 flex-1 relative">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className="px-2 py-1 text-foreground hover:text-gold transition-colors duration-300 font-semibold text-sm tracking-wide flex items-center"
                    onMouseEnter={() => item.submenus && handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    onClick={item.href === "/" ? handleHomeClick : undefined}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="px-2 py-1 text-foreground hover:text-gold transition-colors duration-300 font-semibold text-sm tracking-wide flex items-center"
                    onMouseEnter={() => item.submenus && handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                )}
                
                {/* Dropdown Menu */}
                {item.submenus && hoveredMenu === item.label && (
                  <div 
                    className={`absolute top-full left-0 -mt-1 w-64 rounded-lg shadow-lg py-2 z-50 transition-opacity duration-500 ${
                      isFadingOut === item.label 
                        ? 'opacity-0' 
                        : isFadingIn === item.label 
                        ? 'opacity-0 fade-in' 
                        : 'opacity-100'
                    }`}
                    style={{ backgroundColor: '#161d34' }}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.submenus.map((submenu) => (
                      <Link
                        key={submenu.href}
                        to={submenu.href}
                        onClick={() => {
                          setIsOpen(false);
                          setHoveredMenu(null);
                        }}
                        className={`block px-4 py-3 text-sm transition-all duration-300 ${
                          (submenu as any).disabled
                            ? 'text-foreground/40 cursor-not-allowed line-through'
                            : submenu.active
                            ? 'text-gold bg-gold/10 font-semibold'
                            : 'text-foreground hover:text-gold hover:bg-gold/10'
                        }`}
                        onMouseDown={(e) => {
                          if ((submenu as any).disabled) {
                            e.preventDefault();
                          }
                        }}
                      >
                        {submenu.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botão Portal do Membro e Mobile Menu Button */}
          <div className="flex items-center justify-end flex-1">
            <Button
              variant="outline"
              className="hidden lg:flex border-gold bg-gold hover:bg-gold hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] active:scale-95 transition-all duration-300 text-sm relative overflow-hidden group"
              style={{ fontFamily: "'Lato', sans-serif", color: '#161d34' }}
            >
              <span className="relative z-10">INTRANET</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </Button>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gold"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gold/20 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className="block py-3 text-foreground hover:text-gold transition-colors font-semibold"
                    onClick={(e) => {
                      if (item.href === "/") {
                        handleHomeClick(e);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <div className="py-3 text-foreground font-semibold">
                      {item.label}
                    </div>
                    {item.submenus && (
                      <div className="pl-4 space-y-2">
                        {item.submenus.map((submenu) => (
                          <Link
                            key={submenu.href}
                            to={submenu.href}
                            onClick={() => setIsOpen(false)}
                            className={`block py-2 text-sm ${
                              (submenu as any).disabled
                                ? 'text-foreground/40 cursor-not-allowed line-through'
                                : submenu.active
                                ? 'text-gold font-semibold'
                                : 'text-foreground/70 hover:text-gold'
                            }`}
                            onMouseDown={(e) => {
                              if ((submenu as any).disabled) {
                                e.preventDefault();
                              }
                            }}
                          >
                            {submenu.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full mt-4 border-gold text-gold hover:bg-gold hover:text-charcoal"
            >
              Portal do Membro
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login aqui
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <PageBackground>
        <div className="min-h-screen flex items-center justify-center py-20">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rotate-45 hidden lg:block" />
          <div className="absolute bottom-20 right-10 w-40 h-40 border border-gold/20 rotate-12 hidden lg:block" />

          {/* Login Card */}
          <div className="w-full max-w-md px-6 py-8">
            <div className="bg-blue/90 backdrop-blur-sm border border-gold/30 rounded-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] p-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/images/logo/Logo.png" 
                alt="GLOMAM"
                className="h-full w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <h1 
              className="text-3xl font-bold mb-2 uppercase"
              style={{ 
                fontFamily: "'Baskerville Old Face', serif",
                fontWeight: 'normal',
                background: 'linear-gradient(to right, #e3da98, #d3a54c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              GLOMAM
            </h1>
            <p 
              className="text-foreground/70 text-sm"
              style={{ fontFamily: "'Baskerville Old Face', serif" }}
            >
              Portal do Membro
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email/Username Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                <User className="w-4 h-4 text-gold" />
                Email ou Usuario
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="Digite seu email ou usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50 border-gold/30 text-foreground placeholder:text-muted-foreground focus-visible:ring-gold focus-visible:border-gold"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground flex items-center gap-2">
                <Lock className="w-4 h-4 text-gold" />
                Senha
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50 border-gold/30 text-foreground placeholder:text-muted-foreground focus-visible:ring-gold focus-visible:border-gold pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gold/70 hover:text-gold transition-colors"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-foreground/70 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gold/30 bg-background/50 text-gold focus:ring-gold focus:ring-offset-charcoal"
                />
                <span>Lembrar-me</span>
              </label>
              <Link
                to="/esqueci-senha"
                className="text-gold hover:text-gold-light transition-colors"
              >
                Esqueci minha senha
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-gold to-gold-light text-charcoal font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Entrar
            </Button>
          </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-foreground/60 text-sm">
                Nao tem uma conta?{" "}
                <Link
                  to="/cadastro"
                  className="text-gold hover:text-gold-light transition-colors font-semibold"
                >
                  Cadastre-se
                </Link>
              </p>
            </div>

            {/* Back to Home */}
            <div className="mt-4 text-center">
              <Link
                to="/"
                className="text-foreground/70 hover:text-gold transition-colors text-sm"
              >
                Voltar para o site
              </Link>
            </div>
            </div>
          </div>
        </div>
      </PageBackground>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Login;


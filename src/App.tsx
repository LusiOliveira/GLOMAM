import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// GLOMAM Pages - Lazy loaded
const NossaHistoria = lazy(() => import("./pages/Glomam/NossaHistoria"));
const Paramaconicos = lazy(() => import("./pages/Glomam/Paramaconicos"));
const Agenda = lazy(() => import("./pages/Glomam/Agenda"));
const QueroSerUmMacom = lazy(() => import("./pages/Glomam/QueroSerUmMacom"));

// MAÇONARIA Pages - Lazy loaded
const OQueE = lazy(() => import("./pages/Maconaria/OQueE"));
const Principios = lazy(() => import("./pages/Maconaria/Principios"));
const Objetivos = lazy(() => import("./pages/Maconaria/Objetivos"));
const PerguntasRespostas = lazy(() => import("./pages/Maconaria/PerguntasRespostas"));
const GrandesLojas = lazy(() => import("./pages/Maconaria/GrandesLojas"));

// ADMINISTRAÇÃO Pages - Lazy loaded
const Governantes = lazy(() => import("./pages/Administracao/Governantes"));
const Executivo = lazy(() => import("./pages/Administracao/Executivo"));
const Legislativo = lazy(() => import("./pages/Administracao/Legislativo"));
const Judiciario = lazy(() => import("./pages/Administracao/Judiciario"));
const GrandesComissoes = lazy(() => import("./pages/Administracao/GrandesComissoes"));

// LOJAS Pages - Lazy loaded
const Lojas = lazy(() => import("./pages/Lojas/index"));

// DISPENSÁRIO Pages - Lazy loaded
const QuemSomos = lazy(() => import("./pages/Dispensario/QuemSomos"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-charcoal">
    <div className="text-gold text-xl">Carregando...</div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* GLOMAM Routes */}
            <Route path="/glomam/nossa-historia" element={<NossaHistoria />} />
            <Route path="/glomam/paramaconicos" element={<Paramaconicos />} />
            <Route path="/glomam/agenda" element={<Agenda />} />
            <Route path="/glomam/quero-ser-um-macom" element={<QueroSerUmMacom />} />
            
            {/* MAÇONARIA Routes */}
            <Route path="/maconaria/o-que-e" element={<OQueE />} />
            <Route path="/maconaria/principios" element={<Principios />} />
            <Route path="/maconaria/objetivos" element={<Objetivos />} />
            <Route path="/maconaria/perguntas-respostas" element={<PerguntasRespostas />} />
            <Route path="/maconaria/grandes-lojas" element={<GrandesLojas />} />
            
            {/* ADMINISTRAÇÃO Routes */}
            <Route path="/administracao/governantes" element={<Governantes />} />
            <Route path="/administracao/executivo" element={<Executivo />} />
            <Route path="/administracao/legislativo" element={<Legislativo />} />
            <Route path="/administracao/judiciario" element={<Judiciario />} />
            <Route path="/administracao/grandes-comissoes" element={<GrandesComissoes />} />
            
            {/* LOJAS Routes */}
            <Route path="/lojas" element={<Lojas />} />
            
            {/* DISPENSÁRIO Routes */}
            <Route path="/dispensario/quem-somos" element={<QuemSomos />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

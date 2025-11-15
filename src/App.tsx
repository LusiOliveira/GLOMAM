import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// GLOMAM Pages
import NossaHistoria from "./pages/Glomam/NossaHistoria";
import Paramaconicos from "./pages/Glomam/Paramaconicos";
import Agenda from "./pages/Glomam/Agenda";
import QueroSerUmMacom from "./pages/Glomam/QueroSerUmMacom";

// MAÇONARIA Pages
import OQueE from "./pages/Maconaria/OQueE";
import Principios from "./pages/Maconaria/Principios";
import Objetivos from "./pages/Maconaria/Objetivos";
import PerguntasRespostas from "./pages/Maconaria/PerguntasRespostas";
import GrandesLojas from "./pages/Maconaria/GrandesLojas";

// ADMINISTRAÇÃO Pages
import Governantes from "./pages/Administracao/Governantes";
import Executivo from "./pages/Administracao/Executivo";
import Legislativo from "./pages/Administracao/Legislativo";
import Judiciario from "./pages/Administracao/Judiciario";
import GrandesComissoes from "./pages/Administracao/GrandesComissoes";

// LOJAS Pages
import Lojas from "./pages/Lojas/index";

// DISPENSÁRIO Pages
import QuemSomos from "./pages/Dispensario/QuemSomos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

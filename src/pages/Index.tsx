import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Publicidade from "@/components/Publicidade";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      {/* Temporariamente comentado para debug */}
      <Publicidade />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

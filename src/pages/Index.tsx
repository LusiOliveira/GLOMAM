import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <section className="bg-white min-h-[85vh]"></section>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

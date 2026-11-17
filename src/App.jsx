import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import LogoMarquee from "./components/LogoMarquee.jsx";
import About from "./components/About.jsx";
import Values from "./components/Values.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Team from "./components/Team.jsx";
import Faq from "./components/Faq.jsx";
import Blog from "./components/Blog.jsx";
import Careers from "./components/Careers.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <Values />
        <Services />
        <Work />
        <Testimonials />
        <Team />
        <Faq />
        <Blog />
        <Careers />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;

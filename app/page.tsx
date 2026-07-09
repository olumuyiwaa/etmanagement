import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnersStrip from "@/components/PartnersStrip";
import About from "@/components/About";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import Services from "@/components/Services";
import Team from "@/components/Team";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-paper">
      <Header />
      <Hero />
      <PartnersStrip />
      <About />
      <WhyWorkWithUs />
      <Services />
      {/*<Team />*/}
      <HowItWorks />
      <Testimonials />
      <CaseStudies />
      <Faq />
      {/*<Cta />*/}
      <Footer />
    </main>
  );
}

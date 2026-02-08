import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ValueStack from '@/components/sections/ValueStack';
import RiskReversal from '@/components/sections/RiskReversal';
import ProcessSteps from '@/components/sections/ProcessSteps';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueStack />
        <RiskReversal />
        <ProcessSteps />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

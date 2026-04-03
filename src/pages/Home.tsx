import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import ProblemSolution from '../components/ProblemSolution';
import CaseStudies from '../components/CaseStudies';
import Process from '../components/Process';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <Benefits />
      <ProblemSolution />
      <CaseStudies />
      <Process />
      <CTA />
    </>
  );
}

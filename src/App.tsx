/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Benefits from './components/Benefits';
import ProblemSolution from './components/ProblemSolution';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Benefits />
        <ProblemSolution />
        <CaseStudies />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

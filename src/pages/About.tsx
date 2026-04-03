import CTABanner from '../components/CTABanner';
import { ShieldCheck, Users, Trophy } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Rojan Consultancy</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We are Rojan Consultancy, dedicated to making enterprise-grade IT accessible and secure for every Canadian business.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Security First</h3>
              <p className="text-slate-600">SOC 2 Type II certified. We build security into the foundation of everything we do.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Local Experts</h3>
              <p className="text-slate-600">100% Canadian-based support team. No offshore call centers. Real experts, real fast.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Proven Excellence</h3>
              <p className="text-slate-600">Trusted by leading healthcare providers, financial institutions, and enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

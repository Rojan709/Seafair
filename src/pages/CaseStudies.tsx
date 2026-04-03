import CTABanner from '../components/CTABanner';
import CaseStudiesComponent from '../components/CaseStudies';

export default function CaseStudies() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Customer Success Stories</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how Canadian enterprises are scaling securely and eliminating downtime with Rojan Consultancy.
          </p>
        </div>
      </section>

      {/* Reusing the component from the homepage for the grid */}
      <div className="py-12">
        <CaseStudiesComponent />
      </div>

      <CTABanner />
    </div>
  );
}

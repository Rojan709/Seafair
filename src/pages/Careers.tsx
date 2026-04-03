import CTABanner from '../components/CTABanner';
import { ArrowRight } from 'lucide-react';

export default function Careers() {
  const jobs = [
    { title: 'Senior Systems Administrator', type: 'Full-time', location: 'St. John\'s, NL / Hybrid' },
    { title: 'Cybersecurity Analyst (SOC)', type: 'Full-time', location: 'Remote (Canada)' },
    { title: 'Help Desk Technician (Tier 2)', type: 'Full-time', location: 'St. John\'s, NL' }
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Join the Seafair Team</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're looking for passionate IT professionals who want to solve complex problems and build secure infrastructure.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-slate-500">
                    <span>{job.type}</span>
                    <span>&bull;</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center text-blue-600 font-semibold">
                  Apply Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

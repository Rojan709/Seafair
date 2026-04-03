import { Building2, Activity, ShieldCheck, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner';

export default function Solutions() {
  const industries = [
    {
      id: 'healthcare',
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      title: 'Healthcare',
      description: 'PHIA & HIPAA compliant IT solutions for clinics, hospitals, and health tech companies.',
    },
    {
      id: 'finance',
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: 'Financial Services',
      description: 'Ultra-secure, low-latency infrastructure for wealth management and accounting firms.',
    },
    {
      id: 'insurance',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: 'Insurance',
      description: 'Scalable cloud solutions and data protection for insurance brokers and underwriters.',
    },
    {
      id: 'smb',
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: 'SMBs',
      description: 'Enterprise-grade IT support scaled and priced for growing small-to-medium businesses.',
    }
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Industry Solutions</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We don't believe in one-size-fits-all. Discover how Seafair tailors IT strategy and compliance to your specific industry.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <Link 
                key={industry.id} 
                to={`/solutions/${industry.id}`}
                className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all bg-white"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{industry.title}</h2>
                <p className="text-slate-600 mb-8 text-lg">{industry.description}</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Industry Solution <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

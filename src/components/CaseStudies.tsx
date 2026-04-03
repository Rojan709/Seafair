import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      industry: "Healthcare",
      title: "Securing Patient Data & Achieving 100% Compliance",
      metric: "Zero",
      metricLabel: "Downtime Incidents",
      description: "A regional clinic network was struggling with legacy servers and compliance risks. Rojan Consultancy migrated them to a secure cloud environment in 30 days.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
    },
    {
      industry: "Financial Services",
      title: "Scaling IT Infrastructure for Rapid Acquisition Growth",
      metric: "40%",
      metricLabel: "Reduction in IT Costs",
      description: "When a financial firm acquired 3 new offices, they needed to unify their IT. We standardized their network and implemented a centralized help desk.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proven Results for Enterprise</h2>
            <p className="text-lg text-slate-600">
              Don't just take our word for it. See how we've transformed IT operations for organizations across Canada.
            </p>
          </div>
          <button className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700 transition-colors">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group cursor-pointer hover:shadow-md transition-all">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide">
                  {study.industry}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="text-4xl font-black text-blue-600">{study.metric}</div>
                  <div className="text-sm font-semibold text-slate-500 uppercase leading-tight w-24">
                    {study.metricLabel}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="text-blue-600 font-medium text-sm flex items-center gap-2">
                  Read Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

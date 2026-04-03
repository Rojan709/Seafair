import { Zap, ShieldCheck, TrendingUp, Clock } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Lightning Fast Resolution",
      description: "Downtime costs money. Our local Canadian team responds in under 15 minutes, getting your staff back to work immediately."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      title: "Ironclad Security",
      description: "We don't just react to threats; we prevent them. Continuous monitoring and zero-trust architecture keep your data safe."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Scalable Infrastructure",
      description: "From 10 to 1,000 employees, our solutions grow with you. No need to rip and replace systems as your business expands."
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: "Predictable IT Costs",
      description: "Stop paying for break-fix emergencies. Our flat-rate managed services mean you can budget your IT spend with 100% accuracy."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why leading companies choose Rojan Consultancy
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We believe IT should be a growth driver, not a cost center. Our approach shifts your technology from a source of frustration to your competitive advantage.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{benefit.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl transform rotate-3 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
              alt="IT Professionals working" 
              className="rounded-2xl shadow-xl relative z-10 object-cover h-[600px] w-full"
            />
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">99.99%</div>
                <div className="text-sm font-medium text-slate-500">Uptime Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

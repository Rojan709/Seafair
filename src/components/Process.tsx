export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description: "We don't guess. We conduct a comprehensive audit of your current infrastructure, identifying security gaps, bottlenecks, and cost-saving opportunities."
    },
    {
      number: "02",
      title: "Strategic Roadmap",
      description: "You receive a customized IT strategy aligned with your business goals, complete with transparent pricing and a clear implementation timeline."
    },
    {
      number: "03",
      title: "Seamless Onboarding",
      description: "Our dedicated transition team takes over your IT operations with zero downtime, integrating our tools and training your staff."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
          <p className="text-lg text-slate-600">
            Transitioning IT providers shouldn't be painful. Our proven onboarding process ensures a smooth handover without disrupting your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-slate-100 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-8 border-slate-50 shadow-sm flex items-center justify-center mb-6 relative">
                <span className="text-2xl font-black text-blue-600">{step.number}</span>
                {/* Decorative dot */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-200 hidden md:block"></div>
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

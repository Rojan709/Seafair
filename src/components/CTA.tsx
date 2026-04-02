import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to upgrade your IT infrastructure?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8">
              Book a free, no-obligation IT assessment. We'll identify security vulnerabilities and show you exactly how to optimize your technology spend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg">
                Book Free Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="flex items-center justify-center text-blue-200 text-sm font-medium">
                Limited spots available this week.
              </span>
            </div>
          </div>
          
          <div className="lg:w-2/5 w-full max-w-md">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Callback</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Size</label>
                  <select id="company" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                    <option>10-50 Employees</option>
                    <option>51-200 Employees</option>
                    <option>201-500 Employees</option>
                    <option>500+ Employees</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-md transition-colors mt-2">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

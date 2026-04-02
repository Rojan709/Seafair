import { XCircle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Is your current IT holding you back?</h2>
          <p className="text-lg text-slate-400">
            Many businesses tolerate subpar IT support because they think it's normal. It's not.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* The Problem */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold">The Old Way</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Reactive "Break-Fix"</h4>
                  <p className="text-slate-400 text-sm">Waiting for things to break before fixing them, causing massive workflow disruptions.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Slow Response Times</h4>
                  <p className="text-slate-400 text-sm">Submitting a ticket into a black hole and waiting days for a simple password reset.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Unpredictable Costs</h4>
                  <p className="text-slate-400 text-sm">Surprise invoices every time you need help or a server goes down.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* The Solution */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 border border-blue-700/50 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
            
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold">The Seafair Way</h3>
            </div>
            
            <ul className="space-y-6 relative z-10">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Proactive Management</h4>
                  <p className="text-blue-200 text-sm">We monitor your systems 24/7, fixing issues before your team even notices them.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Instant Support</h4>
                  <p className="text-blue-200 text-sm">Direct access to local, certified technicians who answer the phone and solve problems fast.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Flat-Rate Pricing</h4>
                  <p className="text-blue-200 text-sm">One predictable monthly fee covers all your IT needs. No surprises, ever.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

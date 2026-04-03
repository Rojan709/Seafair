import CTABanner from '../components/CTABanner';
import { ArrowRight } from 'lucide-react';

export default function Resources() {
  const posts = [
    { title: 'How to Prepare for SOC 2 Compliance in Canada', category: 'Compliance', date: 'Oct 12, 2025' },
    { title: 'The Hidden Costs of Reactive IT Support', category: 'IT Strategy', date: 'Oct 05, 2025' },
    { title: 'Why Healthcare Needs Zero-Trust Architecture', category: 'Cybersecurity', date: 'Sep 28, 2025' }
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">IT Insights & Resources</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert advice, guides, and whitepapers on cybersecurity, cloud infrastructure, and IT strategy.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="h-48 bg-slate-100 rounded-2xl mb-6 overflow-hidden">
                  {/* Placeholder for blog image */}
                  <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <span className="text-blue-600 font-semibold">{post.category}</span>
                  <span>&bull;</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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

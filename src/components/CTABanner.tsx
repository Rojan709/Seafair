import { ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function CTABanner() {
  const { openModal } = useModal();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
          Ready to upgrade your IT infrastructure?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Book a free, no-obligation IT assessment. We'll identify security vulnerabilities and show you exactly how to optimize your technology spend.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => openModal('General IT Audit')}
            className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            Book Free Assessment
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <p className="mt-4 text-blue-200 text-sm font-medium">Limited spots available this week.</p>
      </div>
    </section>
  );
}

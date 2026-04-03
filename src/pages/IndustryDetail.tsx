import { useParams } from 'react-router-dom';
import { Shield, ArrowRight, Download } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import CTABanner from '../components/CTABanner';

const industryData: Record<string, any> = {
  'healthcare': {
    title: 'Healthcare IT Solutions',
    subtitle: 'PHIA & HIPAA compliant IT solutions for clinics, hospitals, and health tech companies.',
    painPoints: ['Managing legacy EMR/EHR systems', 'Strict compliance audits (PHIA/HIPAA)', 'Patient data security & ransomware threats'],
    solutions: ['Secure cloud hosting for patient records', '24/7 clinic support & help desk', 'Automated compliance reporting'],
    caseStudy: {
      metric: '40 Hours',
      text: 'Saved per month on IT admin for a regional clinic network.'
    }
  }
};

export default function IndustryDetail() {
  const { id } = useParams<{ id: string }>();
  const { openModal } = useModal();
  
  const data = industryData[id || ''] || industryData['healthcare'];

  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h1>
            <p className="text-xl text-slate-300 mb-8">{data.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => openModal(`${data.title} Consultation`)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all"
              >
                Get Industry Consultation
              </button>
              <button 
                onClick={() => openModal(`Download ${data.title} Checklist`)}
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" /> Download Compliance Checklist
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Industry Pain Points</h2>
              <ul className="space-y-4">
                {data.painPoints.map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span className="text-lg text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Tailored Solutions</h2>
              <ul className="space-y-4">
                {data.solutions.map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-lg text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Proven Impact</h2>
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-blue-100">
            <div className="text-5xl font-black text-blue-600 mb-4">{data.caseStudy.metric}</div>
            <p className="text-xl text-slate-700">{data.caseStudy.text}</p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

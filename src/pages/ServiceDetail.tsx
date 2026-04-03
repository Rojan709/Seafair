import { useParams } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import CTABanner from '../components/CTABanner';

const serviceData: Record<string, any> = {
  'cybersecurity': {
    title: 'Zero-Trust Cybersecurity',
    subtitle: 'Enterprise-grade protection against ransomware, phishing, and breaches.',
    problem: 'Ransomware attacks cost Canadian businesses an average of $2M. Legacy antivirus is no longer enough to protect your sensitive data.',
    solution: 'We implement a Zero-Trust architecture, utilizing AI-driven Endpoint Detection and Response (EDR) to stop threats before they execute.',
    features: ['24/7 Security Operations Center (SOC)', 'Phishing Simulation & Training', 'Vulnerability Assessments', 'Compliance Mapping (SOC 2, PIPEDA)'],
    tech: ['CrowdStrike', 'SentinelOne', 'Cisco Meraki']
  },
  'help-desk-support': {
    title: 'Help Desk Support',
    subtitle: '24/7 rapid-response support for your team.',
    problem: 'Waiting days for a simple password reset kills productivity and frustrates your team.',
    solution: 'Direct access to local, certified technicians who answer the phone and solve 85% of problems on the first call.',
    features: ['15-Minute Response SLA', 'Remote & On-Site Support', 'Employee Onboarding/Offboarding', 'Hardware Procurement'],
    tech: ['ConnectWise', 'Zendesk', 'TeamViewer']
  }
  // Other services would be defined here in a real app
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { openModal } = useModal();
  
  // Fallback if service not found in our mock data
  const data = serviceData[id || ''] || serviceData['cybersecurity'];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h1>
            <p className="text-xl text-slate-300 mb-8">{data.subtitle}</p>
            <button 
              onClick={() => openModal(data.title)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all"
            >
              Request {data.title} Audit
            </button>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{data.problem}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Seafair Solution</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{data.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Core Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.features.map((feature: string, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="font-bold text-slate-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

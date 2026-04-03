import { HeadphonesIcon, Shield, Cloud, Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner';

export default function Services() {
  const services = [
    {
      id: 'help-desk-support',
      icon: <HeadphonesIcon className="w-8 h-8 text-blue-600" />,
      title: 'Help Desk Support',
      description: '24/7 rapid-response support for your team. We resolve 85% of tickets on the first call.',
    },
    {
      id: 'managed-it-services',
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: 'Managed IT Services',
      description: 'Comprehensive management of your entire IT infrastructure. We monitor, maintain, and optimize.',
    },
    {
      id: 'cybersecurity',
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Cybersecurity',
      description: 'Enterprise-grade protection against ransomware, phishing, and breaches. Compliance-ready.',
    },
    {
      id: 'cloud-infrastructure',
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: 'Cloud & Infrastructure',
      description: 'Seamless migration and management of AWS, Azure, or hybrid environments.',
    }
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Enterprise IT Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From daily help desk support to complex cloud migrations, Seafair provides the technical backbone your business needs to scale securely.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all bg-white"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h2>
                <p className="text-slate-600 mb-8 text-lg">{service.description}</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Explore Service <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
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

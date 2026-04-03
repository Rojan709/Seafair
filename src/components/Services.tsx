import { HeadphonesIcon, Shield, Cloud, Server } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-blue-600" />,
      title: 'Help Desk Support',
      description: '24/7 rapid-response support for your team. We resolve 85% of tickets on the first call, keeping your workforce productive.',
      features: ['15-minute SLA', 'Remote & On-site', 'Employee Onboarding']
    },
    {
      icon: <Server className="w-6 h-6 text-blue-600" />,
      title: 'Managed IT Services',
      description: 'Comprehensive management of your entire IT infrastructure. We monitor, maintain, and optimize your systems proactively.',
      features: ['Network Monitoring', 'Hardware Lifecycle', 'Vendor Management']
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: 'Cybersecurity',
      description: 'Enterprise-grade protection against ransomware, phishing, and breaches. Compliance-ready for healthcare and finance.',
      features: ['Threat Detection', 'Security Audits', 'Employee Training']
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      title: 'Cloud & Infrastructure',
      description: 'Seamless migration and management of AWS, Azure, or hybrid environments. Scalable architecture for growing businesses.',
      features: ['Cloud Migration', 'Disaster Recovery', 'Architecture Design']
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Enterprise IT, Scaled for You</h2>
          <p className="text-lg text-slate-600">
            Whether you need to augment your existing IT team or outsource entirely, Rojan Consultancy provides the technical backbone your business needs to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-slate-700 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

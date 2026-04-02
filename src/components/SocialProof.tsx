export default function SocialProof() {
  const logos = [
    { name: 'HealthTech NL', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png' },
    { name: 'Marine Finance', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' },
    { name: 'Atlantic Insurance', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png' },
    { name: 'St. John\'s Logistics', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png' },
    { name: 'Provincial Health', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png' },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Trusted by leading Canadian enterprises and healthcare providers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          {/* Using placeholder text since external logos might not load reliably or look cohesive */}
          <div className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-800 rounded-sm"></div>
            HealthTech NL
          </div>
          <div className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-4 border-slate-800"></div>
            Marine Finance
          </div>
          <div className="text-xl font-black text-slate-800 tracking-tighter">
            ATLANTIC INSURE
          </div>
          <div className="text-xl font-serif italic font-bold text-slate-800">
            Provincial Health
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: 'Nurses',
    desc: 'Qualified nursing staff for hospitals, clinics and home care, providing wound care, medication management and post-operative support.',
    image: 'https://images.pexels.com/photos/6129678/pexels-photo-6129678.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Caregivers',
    desc: 'Compassionate caregivers assisting with daily living activities, personal hygiene and companionship for elderly and recovering patients.',
    image: 'https://images.pexels.com/photos/8949908/pexels-photo-8949908.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Patient Care Assistants',
    desc: 'Trained attendants supporting patient mobility, feeding and basic care needs under nursing supervision.',
    image: 'https://images.pexels.com/photos/6753269/pexels-photo-6753269.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Ward Attendants',
    desc: 'Reliable ward attendants for hospital and clinic settings, assisting with patient transport and ward maintenance.',
    image: 'https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function NursingServices() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-surface border-y border-brand-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-sm font-600 text-brand-600 uppercase tracking-widest">Our Services</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-700 text-balance">
            Nursing & Patient Care Services
          </h2>
          <p className="mt-3 text-ink-600 font-500">
            Nurses | Caregivers | Patient Care Assistants | Ward Attendants
          </p>
          <p className="mt-4 text-ink-500">
            Professional healthcare staffing solutions for hospitals, clinics and home care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group rounded-2xl overflow-hidden border border-brand-100 bg-white hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
                <h3 className="absolute bottom-3 left-4 text-lg font-600 text-white">{s.title}</h3>
              </div>
              <p className="p-5 text-sm text-ink-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-900 text-white font-500 hover:bg-brand-700 transition-colors"
          >
            Enquire about staffing
          </a>
        </div>
      </div>
    </section>
  );
}

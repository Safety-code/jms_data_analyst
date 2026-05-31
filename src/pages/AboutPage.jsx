const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Completed' },
  { value: '15+', label: 'Tools Mastered' },
  { value: '98%', label: 'Client Satisfaction' },
]

const expertise = [
  {
    icon: 'insights',
    title: 'Predictive Modeling',
    description:
      'Building and deploying ML models that anticipate business outcomes with precision — from regression to ensemble methods.',
  },
  {
    icon: 'dashboard',
    title: 'Dashboard Design',
    description:
      'Creating executive-ready, interactive dashboards in Tableau and Power BI that turn complex data into instant clarity.',
  },
  {
    icon: 'bar_chart',
    title: 'Statistical Analysis',
    description:
      'Applying rigorous statistical methods — A/B testing, hypothesis testing, time-series — to validate decisions with confidence.',
  },
  {
    icon: 'storage',
    title: 'Data Engineering',
    description:
      'Designing efficient data pipelines and warehouse schemas that ensure clean, reliable, analysis-ready data.',
  },
]

export default function AboutPage() {
  return (
    <main className="page-shell pt-32 pb-section-gap grow">
      <section className="glass-panel mb-section-gap rounded-3xl px-8 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
          <div className="space-y-6 md:col-span-7">
            <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
              About Me
            </p>
            <h1 className="max-w-3xl font-display text-[46px] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#111827] md:text-[52px]">
              Turning complex datasets into <span className="text-[#008ebf]">strategic assets.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              I am a Senior Data Analyst with over 5 years of experience specializing in predictive
              modeling, statistical analysis, and interactive dashboard design. My work bridges the
              gap between raw data and decision-ready business strategy.
            </p>
          </div>

          <div className="flex justify-center md:col-span-5 md:justify-end">
            <div className="relative w-full max-w-100 aspect-4/5 overflow-hidden rounded-[36px] border-4 border-white/80 bg-surface-container-high shadow-level-2">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7wB8RmaTCLzt8_WVNJxMvTYFw28qapj8uDPsj6BtMsHNw88IypwEVEW39xqSnOK6HltYCZ123QSWGRnC2j2NojdaGOZT7iL2J4bsDKLHXnt0I8RvVMIBZi14r6Ouw9yLWblq_5qnqXCKo3_e9kiT8PEHmBfmtG4c2hXHSpIP1JdWbgxfTB43eNQcSDw0PmU3lYZffzxlzWEHHBVsP6ITrWFdZVftbKdf56N4_3-N7Wh74gtElSFF4bx6iYalgNVkWdHYb5X9HTKQ"
                alt="About portrait"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-section-gap grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="card-hover glass-panel rounded-3xl p-8 text-center"
          >
            <p className="font-display text-[52px] leading-none vibrant-text mb-3">
              {s.value}
            </p>
            <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-section-gap">
        <div className="mb-8">
          <h2 className="text-center font-headline-lg text-headline-lg text-on-surface">Areas of Expertise</h2>
          <p className="mx-auto max-w-2xl text-center font-body-md text-body-md text-on-surface-variant mt-4">
            From model development to dashboard storytelling, these are the capabilities that help
            teams move with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="card-hover glass-panel group flex items-start gap-5 rounded-3xl p-8"
            >
              <span className="material-symbols-outlined text-primary text-4xl mt-1">
                {item.icon}
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 transition-colors duration-200 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

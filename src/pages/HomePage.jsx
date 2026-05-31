import { Link } from 'react-router-dom'

const skills = [
  {
    icon: 'code',
    title: 'Languages',
    items: ['Python', 'SQL', 'Go'],
  },
  {
    icon: 'insert_chart',
    title: 'Tools',
    items: ['PowerBI', 'Excel', 'Jupyter'],
  },
  {
    icon: 'library_books',
    title: 'Libraries',
    items: ['Pandas', 'NumPy'],
  },
]

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S.02 4.88.02 3.5 1.14 1 2.5 1s2.48 1.12 2.48 2.5ZM.35 8h4.3v15h-4.3V8Zm7.48 0h4.12v2.05h.06c.57-1.08 1.98-2.22 4.08-2.22 4.36 0 5.16 2.87 5.16 6.6V23h-4.3v-7.6c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.9 1.97-2.9 4V23h-4.3V8Z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.91.58.1.79-.25.79-.56v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.17 1.18A11.03 11.03 0 0 1 12 6.03c.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.42.36.78 1.06.78 2.14v3.16c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },

    {
    name: 'Medium',
    href: 'https://medium.com',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 6.5c-.01-.28.22-.5.5-.5h1.99l3.01 7.39L10.51 6h1.99c.28 0 .51.22.51.5v11c0 .28-.23.5-.51.5h-1.99l-3-7.39L4.51 18H2.01c-.28 0-.5-.22-.5-.5v-11Z" />
      </svg>
    ),
  },
]

export default function HomePage() {
  return (
    <main className="page-shell pt-32 pb-section-gap grow">
      <section className="glass-panel mb-section-gap rounded-3xl px-8 py-12 md:px-12 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 text-center md:flex-row md:text-left">
          <div className="flex-1 order-2 md:order-1">
            <h1 className="mb-7 max-w-3xl font-display text-[46px] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#111827] md:text-[52px]">
              Turning raw data into <br />
              <span className="text-[#008ebf]">actionable insights.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
              I build modern analytics experiences, uncover hidden patterns, and turn complex datasets
              into concise, decision-ready recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                to="/projects"
                className="vibrant-button inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-label-caps text-label-caps text-white transition-all duration-200"
              >
                View Projects
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <button className="rounded-2xl border border-white/70 bg-white/70 px-8 py-4 font-label-caps text-label-caps text-primary shadow-level-1 transition-colors duration-200 hover:bg-white">
                Download Resume
              </button>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 flex w-full flex-col items-center md:items-end">
            <div className="relative h-72 w-72 overflow-hidden rounded-[36px] border-4 border-white/80 shadow-level-2 md:h-88 md:w-88">
              <img
                alt="Professional headshot"
                className="object-cover w-full h-full grayscale transition duration-500 hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLj4s9Qrckdf3PFQI7WXgCM4qa7KDm2caFkt4s8zoC7mdxVXSxg1Abc3B77C3rCH36mlcZORZdtp62hLIYMoSk0kE4AgF1I2Hg25Xyqf7vBEgUZ5DComwknfB_DsZBzxo1gSNasiSLXvShYLKri4rg-212-1JvyjdGtXOY3fVyVef0hZ78th9CHbZPH8p3IFyVC2dpQgA9LQ07q8YMBddgnZmE2BZVXuE458lvQrDcNggM5TDWtRNOzGJSstghrCcw_nYeePj3N7s"
              />
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-end">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/75 text-primary shadow-level-1 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:text-secondary"
                >
                  {social.icon}
                </a>
              ))}
              <Link
                to="/about"
                aria-label="Contact"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/75 text-primary shadow-level-1 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:text-secondary"
              >
                <span className="material-symbols-outlined text-[22px]">mail</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-section-gap">
        <div className="mb-10 text-left">
          <h2 className="font-headline-lg text-[40px] font-extrabold leading-tight text-on-surface md:text-[44px]">Technical Skills</h2>
          <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant mt-4">
            Modern analytics requires a blend of code, visualization, and machine learning workflows.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="card-hover glass-panel rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-[24px] text-[#111827]">{skill.icon}</span>
                <h3 className="font-body-md text-[17px] font-semibold leading-none text-[#111827]">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-2xl border border-[#a9d8f4] bg-[#dff2ff]/70 px-3 py-1 font-body-md text-[16px] font-medium leading-6 text-[#1f2937] shadow-[inset_0_0_0_1px_rgba(219,39,119,0.12)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

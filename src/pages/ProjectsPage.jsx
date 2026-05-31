const projects = [
  {
    id: 1,
    category: 'Machine Learning',
    title: 'Customer Churn Prediction',
    description:
      'Developed an end-to-end ML pipeline using XGBoost to predict customer churn with 91% accuracy. Integrated SHAP explainability to give the business team clear, actionable reasons behind each prediction.',
    tags: ['Python', 'XGBoost', 'SHAP', 'SQL'],
    link: '#',
  },
  {
    id: 2,
    category: 'Business Intelligence',
    title: 'Sales Performance Dashboard',
    description:
      'Built an interactive Power BI dashboard tracking $50M in annual sales across 12 regions. Replaced 14 manual Excel reports with live DAX measures, saving the ops team 8 hours per week.',
    tags: ['Power BI', 'SQL', 'DAX', 'Azure'],
    link: '#',
  },
  {
    id: 3,
    category: 'Data Engineering',
    title: 'Supply Chain Analytics Pipeline',
    description:
      'Designed an Airflow-orchestrated data pipeline processing 2M+ daily transactions on BigQuery. dbt transformations feed a real-time Looker dashboard, reducing stockouts by 35%.',
    tags: ['Python', 'Airflow', 'BigQuery', 'dbt'],
    link: '#',
  },
  {
    id: 4,
    category: 'Statistical Analysis',
    title: 'Marketing Attribution Model',
    description:
      'Built a Markov-chain multi-touch attribution model for $8M of ad spend across 6 channels, reallocating budget away from last-click bias and improving ROAS by 42%.',
    tags: ['R', 'Python', 'SQL', 'Tableau'],
    link: '#',
  },
]

export default function ProjectsPage() {
  return (
    <main className="page-shell pt-32 pb-section-gap grow">
      <header className="glass-panel mx-auto mb-16 max-w-4xl rounded-3xl px-8 py-12 text-center md:px-12">
        <div>
          <p className="font-label-caps text-[25px] font-extrabold uppercase tracking-[0.19em] text-secondary mb-5">
            Analytical Projects
          </p>
          <h1 className="font-display text-display text-on-surface mb-6">
            Analytical projects with measurable business impact.
          </h1>
          <p className="mx-auto max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
            A curated selection of data science and analytics work showing how I transform data
            into strategy through models, dashboards, and engineering pipelines.
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="card-hover glass-panel group flex h-full flex-col rounded-3xl p-8 md:p-10"
          >
            <div className="mb-4">
              <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">
                {project.category}
              </span>
            </div>

            <h2 className="font-headline-md text-headline-md text-on-surface mb-4 transition-colors duration-200 group-hover:text-primary">
              {project.title}
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mb-8 grow">
              {project.description}
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="chip-vibrant rounded-2xl px-3 py-1 font-data-mono text-data-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="mt-auto inline-flex items-center gap-2 font-label-caps text-label-caps text-primary transition-colors duration-200 hover:text-secondary"
            >
              View Case Study
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </article>
        ))}
      </div>
    </main>
  )
}

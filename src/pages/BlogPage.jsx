const posts = [
  {
    id: 1,
    date: 'Apr 12, 2025',
    readTime: '9 min read',
    category: 'Experimentation',
    title: 'Why Your A/B Tests Are Lying to You',
    excerpt:
      'The hidden pitfalls of p-hacking, peeking, and novelty effects — and the sequential testing method that finally solves them for good.',
    link: '#',
  },
  {
    id: 2,
    date: 'Feb 28, 2025',
    readTime: '12 min read',
    category: 'Leadership',
    title: 'Building a Data Culture at a 200-Person Company',
    excerpt:
      'The playbook I used to go from siloed spreadsheets to a self-serve analytics platform — without a big team or a big budget.',
    link: '#',
  },
  {
    id: 3,
    date: 'Jan 15, 2025',
    readTime: '7 min read',
    category: 'SQL',
    title: 'SQL Patterns I Wish I Knew on Day One',
    excerpt:
      'Window functions, CTEs, lateral joins, and other advanced techniques that took me years to master — explained in plain language.',
    link: '#',
  },
]

export default function BlogPage() {
  return (
    <main className="page-shell pt-32 pb-section-gap grow">
      <header className="glass-panel mx-auto mb-12 max-w-4xl rounded-3xl px-8 py-12 text-center md:px-12">
        <div>
          <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary mb-5">
            Analytical Insights
          </p>
          <h1 className="font-display text-display text-on-surface">
            Analytical insights designed for business impact.
          </h1>
          <p className="mx-auto font-body-lg text-body-lg text-on-surface-variant mt-5 max-w-3xl">
            Deep dives into data methodology, SQL optimisation techniques, and the evolving landscape
            of AI in analytics.
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="card-hover glass-panel group animate-fade-in-up flex h-full flex-col rounded-3xl p-8 md:p-10"
          >
            <div className="grow flex flex-col gap-5">
              <div className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">
                {post.category}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-on-surface-variant">
                <span className="font-data-mono text-data-mono text-on-surface-variant">{post.date}</span>
                <span className="text-outline-variant">·</span>
                <span className="font-data-mono text-data-mono text-on-surface-variant">{post.readTime}</span>
              </div>

              <h2 className="font-headline-md text-headline-md text-on-surface transition-colors duration-200 group-hover:text-primary">
                {post.title}
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 grow">
                {post.excerpt}
              </p>
            </div>

            <a
              href={post.link}
              className="mt-8 inline-flex items-center gap-2 font-label-caps text-label-caps text-primary transition-colors duration-200 hover:text-secondary"
            >
              Read Article
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </article>
        ))}
      </div>
    </main>
  )
}

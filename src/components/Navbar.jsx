import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const linkClass = (path) =>
    `h-full flex items-center font-label-caps text-label-caps transition-colors duration-200 ${
      isActive(path)
        ? 'text-primary'
        : 'text-on-surface-variant hover:text-primary'
    }`

  const mobileLinkClass = (path) =>
    `block px-4 py-3 font-body-md text-body-md transition-colors duration-200 rounded-lg ${
      isActive(path)
        ? 'text-primary bg-surface-container'
        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
    }`

  return (
    <nav className="fixed inset-x-0 top-4 z-50">
      <div className="glass-header mx-auto flex h-16 w-[calc(100%-32px)] max-w-container-max items-center justify-between rounded-3xl px-6 md:px-8">
        <Link
          to="/"
          className="font-headline-md text-headline-md text-primary font-extrabold tracking-tight"
        >
          Joseph Mensah
        </Link>

        <div className="hidden md:flex items-center gap-7 h-full">
          <Link className={linkClass('/')} to="/">Home</Link>
          <Link className={linkClass('/about')} to="/about">About</Link>
          <Link className={linkClass('/projects')} to="/projects">Projects</Link>
          <Link className={linkClass('/blog')} to="/blog">Blog</Link>
        </div>

        <div className="hidden md:block">
          <Link to="/about">
            <button className="vibrant-button rounded-2xl px-6 py-3 font-label-caps text-label-caps text-white transition-all duration-200">
              Hire Me
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="glass-panel mx-auto mt-3 w-[calc(100%-32px)] rounded-3xl px-4 py-4 space-y-1 md:hidden">
          <Link className={mobileLinkClass('/')} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className={mobileLinkClass('/about')} to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link className={mobileLinkClass('/projects')} to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link className={mobileLinkClass('/blog')} to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <div className="pt-2 pb-1">
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              <button className="vibrant-button w-full rounded-2xl px-6 py-3 font-label-caps text-label-caps text-white transition-all duration-200">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

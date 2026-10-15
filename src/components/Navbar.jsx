import { useState } from 'react';
import { perfil } from '../data/portfolio';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobremi', label: 'Sobre mí' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-lg border-b border-white/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-2xl font-bold text-brand tracking-wide" style={{ fontFamily: 'Righteous' }}>
          Jhon González
        </a>
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm uppercase tracking-wider text-slate-300 hover:text-brand transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-brand text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>
      {open && (
        <ul className="md:hidden bg-dark-3 px-6 pb-4 space-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block text-slate-300 hover:text-brand py-2 border-b border-white/5">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
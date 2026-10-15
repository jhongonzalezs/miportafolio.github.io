import { perfil } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-white/5">
      <div className="flex gap-6 justify-center mb-4">
        <a href={perfil.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand transition">GitHub</a>
        <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand transition">LinkedIn</a>
      </div>
      <p className="text-xs text-slate-500">© {new Date().getFullYear()} {perfil.nombre}. Hecho con React + Tailwind.</p>
    </footer>
  );
}
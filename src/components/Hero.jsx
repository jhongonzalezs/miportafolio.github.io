import { perfil } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="max-w-3xl text-center">
        <div className="w-40 h-40 mx-auto rounded-full border-4 border-brand overflow-hidden shadow-[0_0_40px_rgba(255,195,0,0.3)] mb-8">
          <img src="/miportafolio.github.io/img/perfil.png" alt="Perfil" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-brand" style={{ fontFamily: 'Righteous' }}>
          {perfil.nombre}
        </h1>
        <h2 className="text-lg md:text-2xl text-slate-300 mb-6">{perfil.titulo}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">{perfil.descripcion}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={perfil.github} target="_blank" rel="noreferrer" className="px-6 py-3 bg-brand text-dark rounded-full font-semibold hover:bg-yellow-300 transition">
            GitHub
          </a>
          <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 border-2 border-brand text-brand rounded-full font-semibold hover:bg-brand hover:text-dark transition">
            LinkedIn
          </a>
          <a href={perfil.cvUrl} download className="px-6 py-3 border-2 border-white/20 text-white rounded-full font-semibold hover:border-brand hover:text-brand transition">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
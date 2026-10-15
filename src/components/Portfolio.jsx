import { proyectos } from '../data/portfolio';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand" style={{ fontFamily: 'Righteous' }}>
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl bg-dark-3 aspect-video">
              <img src={p.imagen} alt={p.titulo} className="w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 to-transparent">
                <span className="text-xs text-brand font-semibold mb-1 uppercase">{p.categoria}</span>
                <h3 className="text-xl font-bold mb-1">{p.titulo}</h3>
                <p className="text-sm text-slate-300">{p.descripcion}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
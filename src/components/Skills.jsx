import { skills } from '../data/portfolio';

function Bar({ nombre, nivel }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-slate-200">{nombre}</span>
        <span className="text-brand font-semibold">{nivel}%</span>
      </div>
      <div className="h-2 bg-dark-3 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-yellow-400 to-brand rounded-full transition-all duration-1000" style={{ width: `${nivel}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand" style={{ fontFamily: 'Righteous' }}>
          Habilidades
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand">Técnicas</h3>
            {skills.tecnicas.map((s) => <Bar key={s.nombre} {...s} />)}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand">Blandas</h3>
            {skills.blandas.map((s) => <Bar key={s.nombre} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
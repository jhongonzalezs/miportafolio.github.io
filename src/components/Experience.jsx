import { experiencia, educacion } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-dark-2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand" style={{ fontFamily: 'Righteous' }}>
          Experiencia y Educación
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand">Experiencia laboral</h3>
            <div className="space-y-6">
              {experiencia.map((exp, i) => (
                <div key={i} className="border-l-2 border-brand pl-6 py-2">
                  <h4 className="text-lg font-bold text-white">{exp.cargo}</h4>
                  <p className="text-brand text-sm font-semibold">{exp.empresa}</p>
                  <p className="text-slate-400 text-xs mb-3">{exp.periodo}</p>
                  <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
                    {exp.logros.map((l, j) => <li key={j}>{l}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand">Educación</h3>
            <div className="space-y-6">
              {educacion.map((edu, i) => (
                <div key={i} className="border-l-2 border-brand pl-6 py-2">
                  <h4 className="text-lg font-bold text-white">{edu.titulo}</h4>
                  <p className="text-brand text-sm font-semibold">{edu.institucion}</p>
                  <p className="text-slate-400 text-xs mb-2">{edu.periodo}</p>
                  <p className="text-sm text-slate-300">{edu.detalle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
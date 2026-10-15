import { perfil, intereses } from '../data/portfolio';

export default function About() {
  return (
    <section id="sobremi" className="py-24 px-6 bg-dark-2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand" style={{ fontFamily: 'Righteous' }}>
          Sobre mí
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand">Datos personales</h3>
            <ul className="space-y-3 text-slate-300">
              <li><span className="text-brand font-semibold inline-block w-32">Teléfono</span> {perfil.telefono}</li>
              <li><span className="text-brand font-semibold inline-block w-32">Email</span> {perfil.email}</li>
              <li><span className="text-brand font-semibold inline-block w-32">Ubicación</span> {perfil.ubicacion}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand">Intereses</h3>
            <div className="grid grid-cols-4 gap-3">
              {intereses.map((i) => (
                <div key={i.label} className="aspect-square flex flex-col items-center justify-center rounded-xl bg-dark-3 hover:bg-brand hover:text-dark transition cursor-default">
                  <span className="text-2xl mb-1">{i.icono}</span>
                  <span className="text-xs">{i.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
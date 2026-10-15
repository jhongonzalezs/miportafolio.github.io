import { perfil } from '../data/portfolio';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const nombre = data.get('name');
    const email = data.get('email');
    const asunto = data.get('subject');
    const mensaje = data.get('message');

    // Opción 1: mailto (simple, sin backend)
    window.location.href = `mailto:${perfil.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`)}`;
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-dark-2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand" style={{ fontFamily: 'Righteous' }}>
          Contacto
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" required placeholder="Tu nombre" className="w-full px-4 py-3 bg-dark-3 border border-white/10 rounded-lg focus:border-brand outline-none text-white" />
            <input name="email" type="email" required placeholder="Tu correo" className="w-full px-4 py-3 bg-dark-3 border border-white/10 rounded-lg focus:border-brand outline-none text-white" />
            <input name="subject" required placeholder="Asunto" className="w-full px-4 py-3 bg-dark-3 border border-white/10 rounded-lg focus:border-brand outline-none text-white" />
            <textarea name="message" required rows="5" placeholder="Mensaje" className="w-full px-4 py-3 bg-dark-3 border border-white/10 rounded-lg focus:border-brand outline-none text-white resize-none" />
            <button type="submit" className="w-full py-3 bg-brand text-dark rounded-lg font-semibold hover:bg-yellow-300 transition">
              Enviar mensaje
            </button>
          </form>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-brand text-xl">📍</span>
              <div><p className="font-semibold">Ubicación</p><p className="text-slate-400 text-sm">{perfil.ubicacion}</p></div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-brand text-xl">📞</span>
              <div><p className="font-semibold">Teléfono</p><p className="text-slate-400 text-sm">{perfil.telefono}</p></div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-brand text-xl">✉️</span>
              <div><p className="font-semibold">Email</p><p className="text-slate-400 text-sm break-all">{perfil.email}</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
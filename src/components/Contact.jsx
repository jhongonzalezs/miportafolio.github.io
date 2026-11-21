import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { perfil } from '../data/portfolio';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('enviando');

    const form = e.target;
    const data = new FormData(form);
    
    const templateParams = {
      name: data.get('name'),
      email: data.get('email'),
      subject: data.get('subject'),
      message: data.get('message'),
    };

    const serviceID = 'service_mmv9b8b';
    const templateID = 'template_w5pdfej';
    const publicKey = 'gpNikvvdbYnqQmxnr';

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus('exito');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        console.error('Error al enviar:', error);
        setStatus('error');
      });
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-dark-2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand" style={{ fontFamily: 'Righteous' }}>
          Contacto
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              name="name" 
              required 
              placeholder="Tu nombre" 
              className="w-full px-4 py-3 bg-dark-3 border border-white/10 rounded-lg focus:border-brand outline-none text-white" 
            />
            <input 
              name="email" 
              type="email" 
              required 
              placeholder="Tu correo" 
              className="w-full px-4 py-3 bg-dark-3 border border-white/10 rounded-lg focus:border-brand outline-none text-white" 
            />
            <input 
              name="subject" 
              required 
              placeholder="Asunto" 
              className="w-full px-4 py-3 bg-dark-3 border border-white/10 rounded-lg focus:border-brand outline-none text-white" 
            />
            <textarea 
              name="message" 
              required 
              rows="5" 
              placeholder="Mensaje" 
              className="w-full px-4 py-3 bg-dark-3 border border-white/10 rounded-lg focus:border-brand outline-none text-white resize-none" 
            />
            
            <button 
              type="submit" 
              disabled={status === 'enviando'}
              className="w-full py-3 bg-brand text-dark rounded-lg font-semibold hover:bg-yellow-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {status === 'exito' && <p className="text-green-500 text-center font-medium">¡Mensaje enviado con éxito!</p>}
            {status === 'error' && <p className="text-red-500 text-center font-medium">Hubo un error. Por favor, intenta de nuevo.</p>}
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
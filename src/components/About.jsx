import { motion } from 'framer-motion';
import { perfil, intereses } from '../data/portfolio';

export default function About() {
  return (
    <section id="sobremi" className="py-24 px-6 bg-dark-2 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand" 
          style={{ fontFamily: 'Righteous' }}
        >
          Sobre mí
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-brand">Datos personales</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-4">
                <span className="text-brand font-semibold inline-block w-32">Teléfono</span> 
                {perfil.telefono}
              </li>
              <li className="flex items-center gap-4">
                <span className="text-brand font-semibold inline-block w-32">Email</span> 
                <a href={`mailto:${perfil.email}`} className="hover:text-brand transition">{perfil.email}</a>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-brand font-semibold inline-block w-32">Ubicación</span> 
                {perfil.ubicacion}
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-brand">Intereses</h3>
            <div className="grid grid-cols-4 gap-3">
              {intereses.map((i, index) => (
                <motion.div 
                  key={i.label} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="aspect-square flex flex-col items-center justify-center rounded-xl bg-dark-3 hover:bg-brand hover:text-dark transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-2xl mb-1">{i.icono}</span>
                  <span className="text-xs font-medium">{i.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
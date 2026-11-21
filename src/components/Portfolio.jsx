import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { proyectos } from '../data/portfolio';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand" 
          style={{ fontFamily: 'Righteous' }}
        >
          Proyectos Destacados
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((p, i) => (
            <motion.a 
              key={i} 
              href={p.link} 
              target="_blank" 
              rel="noreferrer" 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-dark-3 aspect-video border border-white/5 hover:border-brand/50 hover:shadow-[0_0_20px_rgba(255,195,0,0.15)] transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={p.imagen} 
                  alt={p.titulo} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-110 transition duration-700" 
                />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
                <span className="text-xs text-brand font-semibold mb-2 uppercase tracking-wider">
                  {p.categoria}
                </span>
                <h3 className="text-xl font-bold mb-2 text-white flex items-center justify-between">
                  {p.titulo}
                  <FaExternalLinkAlt className="text-brand text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0" />
                </h3>
                <p className="text-sm text-slate-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  {p.descripcion}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
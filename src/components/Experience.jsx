import { motion } from 'framer-motion';
import { experiencia, educacion } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-dark-2 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand" 
          style={{ fontFamily: 'Righteous' }}
        >
          Experiencia y Educación
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-brand border-b border-white/10 pb-2">Experiencia laboral</h3>
            <div className="space-y-8">
              {experiencia.map((exp, i) => (
                <div key={i} className="relative border-l-2 border-brand/30 pl-6 py-2">
                  
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.2 + (i * 0.1), type: "spring", stiffness: 200 }}
                    className="absolute w-3 h-3 bg-brand rounded-full -left-[7px] top-4 shadow-[0_0_10px_rgba(255,195,0,0.8)]"
                  />
                  
                  <h4 className="text-lg font-bold text-white">{exp.cargo}</h4>
                  <p className="text-brand text-sm font-semibold">{exp.empresa}</p>
                  <p className="text-slate-400 text-xs mb-3">{exp.periodo}</p>
                  <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside marker:text-brand">
                    {exp.logros.map((l, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: l }} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-brand border-b border-white/10 pb-2">Educación</h3>
            <div className="space-y-8">
              {educacion.map((edu, i) => (
                <div key={i} className="relative border-l-2 border-brand/30 pl-6 py-2">
                  
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.4 + (i * 0.1), type: "spring", stiffness: 200 }}
                    className="absolute w-3 h-3 bg-brand rounded-full -left-[7px] top-4 shadow-[0_0_10px_rgba(255,195,0,0.8)]"
                  />
                  
                  <h4 className="text-lg font-bold text-white">{edu.titulo}</h4>
                  <p className="text-brand text-sm font-semibold">{edu.institucion}</p>
                  <p className="text-slate-400 text-xs mb-2">{edu.periodo}</p>
                  <p className="text-sm text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: edu.detalle }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
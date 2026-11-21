import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

function Bar({ nombre, nivel, index }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-slate-200 font-medium">{nombre}</span>
        <span className="text-brand font-semibold ml-4">{nivel}%</span>
      </div>
      <div className="h-2 bg-dark-3 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${nivel}%` }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-yellow-400 to-brand rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand" 
          style={{ fontFamily: 'Righteous' }}
        >
          Habilidades
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-brand border-b border-white/10 pb-2">Técnicas</h3>
            <div className="space-y-2">
              {skills.tecnicas.map((s, i) => (
                <Bar key={s.nombre} nombre={s.nombre} nivel={s.nivel} index={i} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-brand border-b border-white/10 pb-2">Blandas</h3>
            <div className="space-y-2">
              {skills.blandas.map((s, i) => (
                <Bar key={s.nombre} nombre={s.nombre} nivel={s.nivel} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
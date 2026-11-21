import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { perfil } from '../data/portfolio';

export default function Hero() {
  const [textoNombre, setTextoNombre] = useState('');
  const [indiceNombre, setIndiceNombre] = useState(0);
  const [textoTitulo, setTextoTitulo] = useState('');
  const [indiceTitulo, setIndiceTitulo] = useState(0);

  const nombreCompleto = perfil.nombre;
  const tituloCompleto = perfil.titulo;

  useEffect(() => {
    if (indiceNombre < nombreCompleto.length) {
      const timeout = setTimeout(() => {
        setTextoNombre((prev) => prev + nombreCompleto[indiceNombre]);
        setIndiceNombre((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (indiceTitulo < tituloCompleto.length) {
      const timeout = setTimeout(() => {
        setTextoTitulo((prev) => prev + tituloCompleto[indiceTitulo]);
        setIndiceTitulo((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [indiceNombre, nombreCompleto, indiceTitulo, tituloCompleto]);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="max-w-3xl text-center z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-40 h-40 mx-auto rounded-full border-4 border-brand overflow-hidden shadow-[0_0_40px_rgba(255,195,0,0.3)] mb-8"
        >
          <img src="public/img/perfil.png" alt="Perfil" className="w-full h-full object-cover" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-brand min-h-[60px] md:min-h-[80px]" style={{ fontFamily: 'Righteous' }}>
          {textoNombre}
          {indiceNombre === nombreCompleto.length && indiceTitulo === 0 && (
            <span className="animate-pulse text-white/70">|</span>
          )}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        >
          <h2 className="text-lg md:text-2xl text-slate-300 mb-6 min-h-[30px] md:min-h-[40px]">
            {textoTitulo}
            {indiceTitulo > 0 && indiceTitulo === tituloCompleto.length && (
              <span className="animate-pulse text-brand/70">|</span>
            )}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">{perfil.descripcion}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href={perfil.github} target="_blank" rel="noreferrer" className="px-6 py-3 bg-brand text-dark rounded-full font-semibold hover:bg-yellow-300 transition transform hover:scale-105">
            GitHub
          </a>
          <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 border-2 border-brand text-brand rounded-full font-semibold hover:bg-brand hover:text-dark transition transform hover:scale-105">
            LinkedIn
          </a>
          <a href={perfil.cvUrl} download className="px-6 py-3 border-2 border-white/20 text-white rounded-full font-semibold hover:border-brand hover:text-brand transition transform hover:scale-105">
            Descargar CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
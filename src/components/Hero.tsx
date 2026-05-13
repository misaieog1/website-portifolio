import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section className="col-span-1 md:col-span-8 bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-zinc-100">
          Mugisha Isaie <br />
          <span className="text-zinc-500">Web Developer & Designer.</span>
        </h1>
        <p className="mt-6 text-zinc-400 max-w-md text-lg leading-relaxed font-medium">
          Crafting functional, aesthetic digital experiences for brands that demand quality.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap gap-4 mt-12"
      >
        <a href="#work" className="px-6 py-3 bg-emerald-500 text-zinc-950 rounded-full font-bold hover:bg-emerald-400 transition-colors inline-block">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 bg-zinc-800 rounded-full font-bold text-zinc-100 border border-zinc-700 hover:bg-zinc-700 transition-colors inline-block shadow-sm">
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}

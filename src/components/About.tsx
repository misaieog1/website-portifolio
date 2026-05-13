import { motion } from "motion/react";
import { MoveRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4">
      {/* Portrait Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="col-span-1 md:col-span-4 bg-zinc-800 border border-zinc-700 rounded-[2rem] relative overflow-hidden min-h-[400px]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10"></div>
        <div className="absolute bottom-8 left-8 z-20">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1">Current Location</p>
          <p className="text-xl font-medium text-zinc-100">Kigali, Rwanda</p>
        </div>
        <div className="absolute inset-0 w-full h-full bg-zinc-700 flex items-center justify-center text-8xl opacity-20">
          👨🏾‍💻
        </div>
      </motion.div>

      {/* Expertise / Stack Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-1 md:col-span-8 bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 flex flex-col"
      >
        <h3 className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-6">Expertise & Approach</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
          <div className="space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">
              I believe that excellent design should not be compromised by technical constraints. As a developer with an eye for design, I specialize in building expressive, accessible, and performant web experiences.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Currently focusing on interactive frontends, smooth animations, and solid design systems.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 justify-center">
            <span className="text-base font-medium flex items-center gap-3 text-zinc-200"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>Frontend Development</span>
            <span className="text-base font-medium flex items-center gap-3 text-zinc-200"><span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>React & Tailwind</span>
            <span className="text-base font-medium flex items-center gap-3 text-zinc-200"><span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span>UI/UX Design</span>
            <span className="text-base font-medium flex items-center gap-3 text-zinc-200"><span className="w-2.5 h-2.5 bg-purple-500 rounded-full"></span>Framer Motion</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center">
          <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Years of Experience</span>
          <span className="text-3xl font-bold text-zinc-100">04+</span>
        </div>
      </motion.div>
    </section>
  );
}

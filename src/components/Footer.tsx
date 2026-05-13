import { motion } from "motion/react";

export function Footer() {
  return (
    <>
      <section id="contact" className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 mb-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-1 border border-zinc-800 bg-zinc-900 rounded-[2rem] p-8 md:p-12 md:col-span-8 flex flex-col justify-center min-h-[300px]"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 max-w-lg mb-6">
            Let's build something extraordinary together.
          </h2>
          <a
            href="mailto:misaieog1@gmail.com"
            className="inline-flex items-center text-emerald-400 font-medium text-xl hover:text-emerald-300 transition-colors w-max"
          >
            misaieog1@gmail.com
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-1 md:col-span-4 bg-emerald-500 rounded-[2rem] p-8 flex flex-col justify-between text-zinc-950 min-h-[300px]"
        >
          <div>
            <h3 className="text-3xl font-black italic uppercase leading-none">Open for<br/>Collaboration</h3>
          </div>
          <div className="space-y-3 mt-12">
            <div className="flex justify-between border-b border-emerald-600/30 pb-2 text-sm font-bold">
              <span>GitHub</span>
              <span>@isaie_m</span>
            </div>
            <div className="flex justify-between border-b border-emerald-600/30 pb-2 text-sm font-bold">
              <span>LinkedIn</span>
              <span>isaie-mugisha</span>
            </div>
            <div className="flex justify-between text-sm font-bold">
              <span>Email</span>
              <span>misaieog1@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="mt-8 mb-6 flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-zinc-600 gap-4">
        <div>© {new Date().getFullYear()} Mugisha Isaie Portfolio</div>
        <div>Designed & Coded with Love</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          All Systems Operational
        </div>
      </footer>
    </>
  );
}

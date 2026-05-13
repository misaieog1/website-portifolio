import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex justify-between items-center mb-2"
    >
      <a href="#" className="flex items-center gap-2 group">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-zinc-950 transition-transform group-hover:scale-105">
          M
        </div>
        <span className="font-medium tracking-tight text-lg hidden sm:block">mugisha.dev</span>
      </a>
      
      <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
        <a href="#work" className="text-zinc-100 hover:text-emerald-400 transition-colors">Work</a>
        <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
        <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        <div className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-300">Available for hire</div>
      </nav>

      <button className="md:hidden p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </motion.header>
  );
}

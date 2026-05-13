import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Experience",
    category: "Web Design & Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1200",
    style: "col-span-12 md:col-span-8",
  },
  {
    id: 2,
    title: "Fintech App UI",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1616143603445-66795493b22b?auto=format&fit=crop&q=80&w=1200",
    style: "col-span-12 md:col-span-4",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    category: "Frontend Dev",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    style: "col-span-12 md:col-span-4",
  },
  {
    id: 4,
    title: "Editorial Blog platform",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    style: "col-span-12 md:col-span-8",
  },
];

export function WorkGrid() {
  return (
    <section id="work" className="pt-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6 px-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          Selected Work
        </h2>
        <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
          A collection of recent projects focusing on UI design and frontend development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {PROJECTS.map((project, index) => (
          <motion.a
            href="#"
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group flex flex-col bg-zinc-900 border border-zinc-800 rounded-[2rem] p-4 sm:p-6 \${project.style} min-h-[360px] relative overflow-hidden`}
          >
            <div className="relative w-full flex-1 rounded-2xl overflow-hidden mb-6 bg-zinc-800">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
            
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-xl font-bold text-zinc-100">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm mt-1">
                  {project.category}
                </p>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 font-medium text-sm transition-transform group-hover:translate-x-1">
                View <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

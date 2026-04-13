import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, Stripe payments, and an admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, kanban boards, and team analytics.",
    tags: ["TypeScript", "Next.js", "Prisma"],
    color: "from-secondary to-card",
  },
  {
    title: "AI Content Studio",
    description: "An AI-powered content generation platform with templates, scheduling, and multi-channel publishing.",
    tags: ["Python", "React", "OpenAI"],
    color: "from-primary/10 to-secondary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
            Selected work
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
              <div className="relative p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 sm:flex-col">
                  <a href="#" className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

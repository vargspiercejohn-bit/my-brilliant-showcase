import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";

const skills = [
  { icon: Code2, title: "Development", description: "React, TypeScript, Node.js, Python — building robust applications from front to back." },
  { icon: Palette, title: "Design", description: "Clean UI/UX with attention to detail, accessibility, and delightful micro-interactions." },
  { icon: Rocket, title: "Performance", description: "Optimized, fast-loading apps with modern tooling and best practices." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
            Crafting digital experiences with purpose
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            With over 5 years of experience, I specialize in building web applications
            that are not only visually stunning but also performant and accessible.
            I believe great software is a blend of thoughtful design and clean code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-colors group"
            >
              <skill.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

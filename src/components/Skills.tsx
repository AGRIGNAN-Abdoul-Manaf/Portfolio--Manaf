const skills = [
  {
    category: "Développement Frontend",
    items: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 70 },
      { name: "Tailwind CSS", level: 70 },
    ],
  },
  {
    category: "Développement Backend",
    items: [
      { name: "Node.js", level: 70 },
      { name: "PHP", level: 75 },
      { name: "Laravel", level: 70 },
      { name: "API REST", level: 65 },
      { name: "MySQL", level: 70 },
    ],
  },
];

const languages = [
  { name: "Français", level: "Courant", percent: 95 },
  { name: "Anglais", level: "Intermédiaire", percent: 60 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Titre */}
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-px bg-gold" />
          <h2 className="font-display text-4xl font-bold">Compétences</h2>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-xl font-bold text-gold mb-6">
                {group.category}
              </h3>

              <div className="space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-body text-xs text-gold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-gold rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Langues */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-bold text-gold mb-6">
            Langues
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 max-w-lg">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="bg-background rounded-lg p-5 border border-border"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-body font-medium">{lang.name}</span>
                  <span className="font-body text-xs text-gold">
                    {lang.level}
                  </span>
                </div>

                <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-gold rounded-full"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outils */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-bold mb-6">
            Outils maîtrisés
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "PHP",
              "Laravel",
              "MySQL",
              "Git",
              "GitHub",
              "WordPress",
              "Figma",
              "Canva",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 border border-gold/30 text-gold text-sm font-body rounded hover:border-gold hover:bg-gold/5 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
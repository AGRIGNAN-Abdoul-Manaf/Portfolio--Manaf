const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-px bg-gold" />
          <h2 className="font-display text-4xl font-bold">À propos</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-body text-muted-foreground leading-relaxed mb-6 text-lg">
              Je suis <span className="text-foreground font-medium">AGRIGNAN Abdou Manaf</span>, 
              <span className="text-gold"> Développeur Fullstack</span> diplômé au Centre ADN (Académie Digitale Numérique) du Golf 1 à Lomé, Togo.
              Passionné par la création d'applications web modernes et performantes, avec un intérêt pour les solutions logicielles innovantes.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Mon parcours atypique — de la sociologie à l'université de Lomé au digital — me confère un esprit analytique
              et une capacité à aborder les problèmes sous différents angles. Je suis également familier avec des outils de design et de création comme **Figma, Canva et WordPress**, 
  ce qui me permet de créer des solutions web complètes, fonctionnelles et esthétiques.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Localisation", value: "Agoè, Lomé — Togo" },
                { label: "Formation", value: "développeur web & web(2025)" },
                { label: "Email", value: "agrignanmanaf6@gmail.com" },
                { label: "Téléphone", value: "+228 79 77 11 47" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-surface rounded-lg p-4 border border-border">
                  <p className="text-xs text-gold uppercase tracking-widest font-body mb-1">{label}</p>
                  <p className="text-sm text-foreground font-body">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold mb-6">Expérience</h3>

            <div className="relative pl-6 border-l border-border space-y-8">
              <div className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-gold border-2 border-background" />
                <p className="text-gold text-sm font-body mb-1">Mars 2025 — Décembre 2025</p>
                <h4 className="font-display text-lg font-bold">développeur web & web</h4>
                <p className="text-muted-foreground text-sm font-body">Centre ADN Golf 1, Lomé</p>
                <p className="text-muted-foreground text-sm font-body mt-2">
HTML, CSS, JavaScript, React,Fliutter, Node.js, API, bases de données, WordPress, Figma, Canva, Git                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-surface-2 border-2 border-border" />
                <p className="text-muted-foreground text-sm font-body mb-1">2020 — Aujourd'hui</p>
                <h4 className="font-display text-lg font-bold">Commerce & Négociation</h4>
                <p className="text-muted-foreground text-sm font-body">Revendeur d'articles technologiques, Lomé</p>
                <p className="text-muted-foreground text-sm font-body mt-2">
                  Vente, négociation commerciale, gestion des stocks, relation clients
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-surface-2 border-2 border-border" />
                <p className="text-muted-foreground text-sm font-body mb-1"></p>
                <h4 className="font-display text-lg font-bold">Licence en Sociologie </h4>
                <p className="text-muted-foreground text-sm font-body">Université de Lomé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

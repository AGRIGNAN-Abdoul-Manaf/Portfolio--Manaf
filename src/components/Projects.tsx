import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string | null;
  details?: string;
  technologies?: string[];
  link?: string;
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "Application mobile et web de vote",
    description: "Vote en ligne avec paiement via TMoney et Flooz.",
    category: "Web / Mobile",
    image: "/vote.png",
    details:
      "Application web et mobile permettant de voter pour des candidats lors d'événements. Chaque vote est payant et l'utilisateur peut voter plusieurs fois sans créer de compte. Développée avec Flutter, ReactJS et Laravel.",
    technologies: ["Flutter", "ReactJS", "Laravel", "TMoney API", "Flooz API"],
    link: null,
  },
  {
    id: 2,
    title: "Site agence communication",
    description: "Site internet d'une agence marketing digital avec WordPress.",
    category: "Web",
    image: "/ecommerce.jpg",
    details:
      "Site vitrine exposant les services de l'agence pour augmenter la clientèle. Développé sur WordPress avec thèmes et plugins personnalisés.",
    technologies: ["WordPress", "SEO", "PHP", "HTML/CSS"],
    link: null,
  },
  {
    id: 3,
    title: "Mini application de vote React + Laravel",
    description: "Lister les candidats et leurs détails.",
    category: "Web",
    image: "/list.png",
    details:
      "Mini application pour afficher une liste de candidats avec nom, prénom, nationalité, âge, poids, taille, descriptions et photo. Développée avec ReactJS et Laravel.",
    technologies: ["ReactJS", "Laravel", "MySQL", "API REST"],
    link: null,
  },
  {
    id: 4,
    title: "Todo List mobile",
    description: "Application mobile pour gérer des tâches.",
    category: "Mobile",
    image: "/todo.png",
    details:
      "Application mobile connectée à une API pour ajouter, modifier et supprimer des tâches.",
    technologies: ["Flutter", "API REST", "SQLite"],
    link: null,
  },
  {
    id: 5,
    title: "Application mobile Quiz",
    description: "Quiz mobile connecté à une API.",
    category: "Mobile",
    image: "/quiz.png",
    details:
      "Application mobile de quiz permettant de répondre à des questions provenant d'une API. Comprend un système de score et classement.",
    technologies: ["Flutter", "API REST", "Dart"],
    link: null,
  },
  {
    id: 6,
    title: "Application Football Laravel",
    description: "Stats des joueurs et scores des matchs.",
    category: "Web",
    image: "/football.png",
    details:
      "Application développée en Laravel pour suivre les caractéristiques et statistiques des joueurs ainsi que les résultats des matchs.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade"],
    link: null,
  },
  {
    id: 7,
    title: "Gestion de stock Laravel",
    description: "CRUD pour gérer les catégories et produits.",
    category: "Web",
    image: "/boutiphone.png",
    details:
      "Application pour enregistrer, lire, modifier et supprimer des catégories et produits en utilisant Laravel et MySQL.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    link: null,
  },
  {
    id: 8,
    title: "Base de données Hôpital",
    description: "Créer une base de données pour gérer les patients.",
    category: "Backend",
    image: "/hopisanté.png",
    details:
      "Mise en place de la base de données après avoir modélisé le diagramme de classes selon le cahier des charges.",
    technologies: ["MySQL", "SQL", "DB Design"],
    link: null,
  },
  {
    id: 9,
    title: "Gestion Bibliothèque",
    description: "Diagramme de cas d'utilisation pour bibliothèque.",
    category: "Backend",
    image: "/bibliotheque.png",
    details:
      "Réalisation du diagramme de cas d'utilisation pour cadrer le projet de la Grande Bibliothèque de Lomé.",
    technologies: ["UML", "DB Design", "Diagrammes"],
    link: null,
  },
];

const Projects = () => {
  const [projects] = useState<Project[]>(defaultProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Titre section */}
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-px bg-gold" />
          <h2 className="font-display text-4xl font-bold">Mes Projets</h2>
        </div>

        {/* Grille des projets */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 hover:shadow-gold cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-52 bg-surface-2 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Aucune image
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-5">
                <span className="text-xs text-gold uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="font-display text-lg font-bold mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="mt-3 text-gold text-xs">Voir les détails →</div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal détails projet */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-surface rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)}>✕</button>
              </div>

              {selectedProject.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              <p className="text-muted-foreground mb-4">{selectedProject.details}</p>

              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {selectedProject.link && (
                <div className="mt-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline"
                  >
                    Voir le projet
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
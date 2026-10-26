import Link from "next/link";
import { Project } from "@/data/portfolio";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-row project-row--${index + 1}`}>
      <div className="project-visual-wrap">
        <Link className={`project-visual project-visual--${project.tone}`} href={`/proyectos/${project.slug}`} aria-label={`Ver proyecto ${project.name}`}>
          <ImagePlaceholder label={project.imageLabel} note={project.imageNote} className="project-image" imageSrc={project.gallery[0].src} />
          <span className="project-open" aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="project-copy">
        <span className="eyebrow">{project.number} / {project.year}</span>
        <h3>{project.name === "Aura Wood" ? <>Aura <em>Wood</em></> : project.name}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-intro">{project.intro}</p>
        <Link className="text-link" href={`/proyectos/${project.slug}`}>Explorar proyecto <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
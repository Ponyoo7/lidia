import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.name} — Lidia Gandia` : "Proyecto — Lidia Gandia" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const isAura = project.slug === "aura-wood";
  return (
    <main className={`project-detail project-detail--${project.tone}`}>
      <section className="detail-intro">
        <Link className="back-link" href="/#proyectos">← Proyectos</Link>
        <div className="detail-hero-layout">
          <div className="detail-gallery" aria-label={`Imágenes del proyecto ${project.name}`}>
            {project.gallery.map((image, index) => (
              <figure className="detail-gallery-item" key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority={index === 0}
                  sizes="(max-width: 760px) 92vw, 58vw"
                />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="detail-copy">
            <div className="detail-title-row"><div><p className="eyebrow">{project.number} / {project.category}</p><h1>{isAura ? <>Aura <em>Wood</em></> : project.name}</h1></div><span className="detail-year">{project.year}</span></div>
            <p className="detail-lede">{project.intro}</p>
          </div>
        </div>
      </section>

      <section className="detail-story" data-reveal>
        <p className="eyebrow">EL CONCEPTO</p>
        <div><h2>{isAura ? <>Natural en<br /><em>movimiento.</em></> : <>Sencillo por<br /><em>diseño.</em></>}</h2><p>{project.description}</p></div>
      </section>

      <section className="detail-materials" data-reveal>
        <div className="detail-material-copy"><p className="eyebrow">CLAVES DEL PROYECTO</p><h2>{isAura ? <>Una presencia<br /><em>serena.</em></> : <>Menos volumen,<br /><em>más posibilidad.</em></>}</h2>
          <ul>{project.principles.map((principle) => <li key={principle}>{principle}<span>↗</span></li>)}</ul>
          {project.materials.length > 0 && <p className="materials-note"><span>Materiales mencionados</span>{project.materials.join(" · ")}</p>}
        </div>
        {project.gallery.length > 1 ? (
          <Image
            className="detail-secondary-image detail-secondary-image--real"
            src={project.gallery[1].src}
            alt={project.gallery[1].alt}
            width={project.gallery[1].width}
            height={project.gallery[1].height}
            sizes="(max-width: 760px) 72vw, 30vw"
          />
        ) : null}
      </section>

      <section className="detail-process" data-reveal><span className="eyebrow">PROCESO Y DESARROLLO</span><div><h2>Ideas que toman<br /><em>forma.</em></h2><p>{project.gallery.length > 1 ? "La infografía muestra el mecanismo de plegado, las formas de apilado y distintas posibilidades de uso." : "El collage reúne bocetos, variantes del difusor y escenas de uso en el interior del automóvil."}</p></div></section>

      <nav className="detail-pagination" aria-label="Navegación entre proyectos">
        <Link href={`/proyectos/${projects[(projects.indexOf(project) + projects.length - 1) % projects.length].slug}`}>← Anterior</Link>
        <Link href="/#proyectos">Todos los proyectos</Link>
        <Link href={`/proyectos/${projects[(projects.indexOf(project) + 1) % projects.length].slug}`}>Siguiente →</Link>
      </nav>
    </main>
  );
}

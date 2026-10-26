import Link from "next/link";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/portfolio";

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title">Lidia<br />Gandia</h1>
            <p className="hero-role">Product Designer</p>
            <p className="hero-description">Diseño de producto · Desarrollo conceptual · Investigación y materiales</p>
            <a className="discover-link" href="#proyectos">Descubrir proyectos <span aria-hidden="true">↓</span></a>
          </div>
          <ImagePlaceholder
            label="Retrato de Lidia Gandia"
            note="Añadir la imagen de referencia como public/images/lidia-hero.jpg."
            variant="portrait"
            className="hero-portrait"
            imageSrc="/images/lidia-hero.png"
          />
        </div>
      </section>

      <section className="projects-section section-pad" id="proyectos" aria-labelledby="projects-title">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow">UNA SELECCIÓN DE PROYECTOS</p><h2 id="projects-title">Diseño con<br /><em>sentido.</em></h2></div>
          <p className="section-aside">Forma, función y materialidad<br />en conversación.</p>
        </div>
        <div className="project-list">{projects.map((project, index) => <div key={project.slug} data-reveal><ProjectCard project={project} index={index} /></div>)}</div>
      </section>

      <section className="about-section" id="sobre-mi" aria-labelledby="about-title" data-reveal>
        <div className="about-image-column">
          <ImagePlaceholder label="Retrato frontal de Lidia Gandia" note="Retrato de presentación de Lidia." variant="portrait" className="about-image" imageSrc="/images/lidia-about.png" />
          <span className="about-image-caption">LIDIA GANDIA · PRODUCT DESIGNER</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">PERFIL</p>
          <h2 id="about-title">Un poco<br />sobre <em>mí.</em></h2>
          <p>Soy Lidia Gandia, diseñadora de producto formada en la EASD de Valencia. Mi experiencia profesional en calcetería ha ampliado mi mirada sobre los procesos, los materiales y las necesidades del día a día.</p>
          <p>Me interesa investigar y encontrar el equilibrio entre una solución funcional y una expresión estética cuidada. Sigo desarrollándome profesionalmente y explorando nuevas maneras de dar forma a las ideas.</p>
          <span className="about-signature">Lidia Gandia</span>
        </div>
      </section>

      <section className="contact-section" id="contacto" aria-labelledby="contact-title">
        <div className="contact-top"><span className="eyebrow">¿TIENES UN PROYECTO EN MENTE?</span><span>VALENCIA · ESPAÑA</span></div>
        <h2 id="contact-title">¿Creamos algo<br /><em>juntos?</em></h2>
        <div className="contact-bottom"><p>Estoy abierta a nuevas oportunidades y conversaciones.</p><span className="contact-placeholder">Añadir correo de contacto del PDF</span></div>
          <footer className="site-footer"><span>Lidia Gandia — Product Designer</span><span>PORTFOLIO</span><Link href="#inicio">Volver arriba ↑</Link></footer>
      </section>
    </main>
  );
}
export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  year: string;
  intro: string;
  description: string;
  materials: string[];
  principles: string[];
  imageLabel: string;
  imageNote: string;
  gallery: { src: string; alt: string; caption: string; width: number; height: number }[];
  tone: "clay" | "sage";
};

export const projects: Project[] = [
  {
    slug: "aura-wood",
    number: "01",
    name: "Aura Wood",
    category: "Diseño de producto · Fragancia para automóvil",
    year: "Diseño de producto",
    intro: "Un ambientador de automóvil que acerca la calma de los materiales naturales al interior del vehículo.",
    description: "La fusión entre la atmósfera y la nobleza de la madera. Aura Wood redefine la experiencia olfativa en el automóvil mediante una combinación de diseño minimalista, elegancia y materiales nobles. Concebido como una pieza de joyería artesanal para el habitáculo, combina un cuerpo de madera maciza cuidadosamente tallada, un delicado frasco de vidrio que resalta la esencia aromática y un discreto sistema de anclaje integrado en las rejillas de ventilación. Su diseño busca transformar un accesorio cotidiano en un elemento decorativo sofisticado, donde cada detalle aporta valor estético y funcional. Una propuesta que equilibra la calidez de la naturaleza, la precisión de sus acabados y la elegancia de un diseño atemporal.",
    materials: ["Madera maciza", "Vidrio"],
    principles: ["Materialidad natural", "Forma minimalista", "Uso funcional"],
    imageLabel: "Aura Wood · imagen principal",
    imageNote: "Añadir aquí el render original de Aura Wood extraído del PDF.",
    gallery: [
      {
        src: "/images/aura-wood-collage.png",
        alt: "Collage de Aura Wood con bocetos del difusor de madera, variantes de materiales y renders dentro del automóvil.",
        caption: "Aura Wood · exploración formal y aplicación en el automóvil",
        width: 1224,
        height: 1285,
      },
    ],
    tone: "clay",
  },
  {
    slug: "ecoflex-jar",
    number: "02",
    name: "EcoFlex Jar",
    category: "Diseño de producto · Recipiente para granel",
     year: "Diseño de producto",
    intro: "Un recipiente flexible y compacto pensado para hacer más práctico el día a día de la compra a granel.",
    description: "La unión entre sostenibilidad, versatilidad y diseño funcional. EcoFlex Jar redefine la experiencia de la compra sostenible y el transporte de alimentos a granel mediante una propuesta innovadora, práctica y minimalista. Diseñado para adaptarse a un estilo de vida activo y respetuoso con el medio ambiente, combina un cuerpo flexible de silicona de grado alimenticio con un sistema de fuelle modular que permite ajustar su capacidad según las necesidades de cada momento. Su diseño busca facilitar el almacenamiento y el transporte de alimentos, optimizando el espacio cuando el recipiente está vacío gracias a su estructura plegable. Además, incorpora un sistema de cierre hermético que garantiza la seguridad y conservación de su contenido. Una propuesta que equilibra sostenibilidad, comodidad y estética, transformando un objeto cotidiano en una solución versátil, compacta y funcional.",
    materials: ["Silicona de grado alimenticio"],
    principles: ["Formato flexible", "Diseño compacto", "Compra a granel"],
    imageLabel: "EcoFlex Jar · imagen principal",
    imageNote: "Añadir aquí el render original de EcoFlex Jar extraído del PDF.",
    gallery: [
      {
        src: "/images/ecoflex-tarros.png",
        alt: "Recipientes EcoFlex Jar ondulados con tapas de colores, mostrados en una cocina y en varios tamaños.",
        caption: "EcoFlex Jar · recipientes y contexto de uso",
        width: 1122,
        height: 1402,
      },
      {
        src: "/images/ecoflex-infografia.png",
        alt: "Infografía del EcoFlex Jar con vistas desplegadas, mecanismo de plegado y apilado, detalles de la correa y diferentes usos.",
        caption: "EcoFlex Jar · sistema de plegado, transporte y almacenamiento",
        width: 1448,
        height: 1086,
      },
    ],
    tone: "sage",
  },
];

export const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Contacto", href: "/#contacto" },
];

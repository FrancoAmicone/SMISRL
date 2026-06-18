export interface Obra {
  slug: string;
  titulo: string;
  descripcion: string;
  fotos: string[]; /* nombres de archivo en public/images/obras/<slug>/ */
}

export const obras: Obra[] = [
  {
    slug: "escalera-tk-agua-reposicion",
    titulo: "Escalera TK Agua Reposición",
    descripcion:
      "Diseño y montaje de escalera de acceso en tanque de agua para reposición de planta industrial.",
    fotos: ["01.svg", "02.svg", "03.svg"],
  },
  {
    slug: "montaje-estructura-metalica-casa-elevada",
    titulo: "Montaje Estructura Metálica — Casa Elevada",
    descripcion:
      "Montaje de estructura metálica para vivienda elevada. Coordinación de logística de transporte y montaje en altura.",
    fotos: ["01.svg", "02.svg", "03.svg"],
  },
  {
    slug: "tolva-balanza-envasadora",
    titulo: "Tolva y Balanza para Envasadora",
    descripcion:
      "Fabricación y montaje de sistema de tolva con balanza integrada para línea de envasado industrial.",
    fotos: ["01.svg", "02.svg", "03.svg"],
  },
  {
    slug: "estructura-acceso-techo-uta",
    titulo: "Estructura Acceso a Techo UTA",
    descripcion:
      "Diseño y montaje de estructura de acceso a techo para unidad de tratamiento de aire (UTA).",
    fotos: ["01.svg", "02.svg", "03.svg"],
  },
  {
    slug: "plataforma-deslizante-calador",
    titulo: "Plataforma Deslizante Calador",
    descripcion:
      "Fabricación e instalación de plataforma deslizante para sistema de calado de producción.",
    fotos: ["01.svg", "02.svg", "03.svg"],
  },
  {
    slug: "movimiento-equipos-wrappeadora",
    titulo: "Movimiento de Equipos y Montaje Wrappeadora",
    descripcion:
      "Coordinación del movimiento de equipos industriales y montaje de máquina wrappeadora en línea productiva.",
    fotos: ["01.svg", "02.svg", "03.svg"],
  },
  {
    slug: "ingenierias-analisis-estructural",
    titulo: "Ingenierías y Análisis Estructural",
    descripcion:
      "Desarrollo de ingenierías y análisis estructural para equipos e instalaciones industriales.",
    fotos: ["01.svg", "02.svg", "03.svg"],
  },
];

export function getObra(slug: string): Obra | undefined {
  return obras.find((o) => o.slug === slug);
}


import { ProblemItem, ServiceItem, ProcessStep, ScopeItem } from './types';

export const PROBLEMS: ProblemItem[] = [
  {
    id: 1,
    title: "Mensajes Confusos",
    description: "Si tu cliente no entiende tu oferta en los primeros 5 segundos, simplemente cerrará la pestaña.",
    icon: "priority_high",
    colorClass: "border-red-400",
    bgClass: "bg-red-50 dark:bg-red-950/30"
  },
  {
    id: 2,
    title: "Falta de Estructura",
    description: "Páginas sin jerarquía visual que confunden al usuario y no guían hacia la llamada a la acción.",
    icon: "format_list_bulleted",
    colorClass: "border-orange-400",
    bgClass: "bg-orange-50 dark:bg-orange-950/30"
  },
  {
    id: 3,
    title: "Baja Conversión",
    description: "Tráfico perdido y dinero desperdiciado en campañas que no generan leads cualificados.",
    icon: "trending_down",
    colorClass: "border-gray-400",
    bgClass: "bg-gray-100 dark:bg-gray-800"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Diseño Custom",
    description: "Identidad visual única y adaptada a tu marca.",
    icon: "palette"
  },
  {
    id: 2,
    title: "Divi Builder",
    description: "Estructuras modulares 100% editables.",
    icon: "architecture"
  },
  {
    id: 3,
    title: "Copywriting",
    description: "Textos persuasivos que guían a la acción.",
    icon: "edit_note"
  },
  {
    id: 4,
    title: "SEO Técnico",
    description: "Optimización de carga y visibilidad.",
    icon: "search_check"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "01",
    title: "Estrategia",
    description: "Investigación profunda de audiencia y definición de objetivos clave. Trazamos el mapa de ruta para maximizar el impacto de cada sección.",
    icon: "target"
  },
  {
    id: "02",
    title: "Diseño Visual",
    description: "Creación de interfaces impactantes con Divi Builder, respetando tu identidad de marca y priorizando la experiencia de usuario (UX).",
    icon: "palette"
  },
  {
    id: "03",
    title: "Conversión",
    description: "Implementación de elementos persuasivos, copy estratégico y CTAs optimizados para transformar visitantes en leads calificados.",
    icon: "nest_cam_magnet_mount"
  },
  {
    id: "04",
    title: "Medición y Optimización",
    description: "Análisis de métricas post-lanzamiento y ajustes continuos mediante A/B testing para asegurar el mejor rendimiento comercial.",
    icon: "leaderboard"
  }
];

export const SCOPE_ITEMS: ScopeItem[] = [
  {
    id: 1,
    title: "1 Landing Page a medida",
    description: "Diseño único adaptado a tu identidad visual y objetivos de negocio."
  },
  {
    id: 2,
    title: "Diseño 100% responsive",
    description: "Visualización perfecta en móviles, tablets y ordenadores."
  },
  {
    id: 3,
    title: "Conversión & Contacto",
    description: "Formularios funcionales, botones de WhatsApp y enlace a agenda.",
    isTop: true
  },
  {
    id: 4,
    title: "Sección de FAQ",
    description: "Resolución de objeciones frecuentes para facilitar la venta."
  },
  {
    id: 5,
    title: "Optimización de Recursos",
    description: "Compresión de imágenes y limpieza de código para carga ultra-rápida."
  },
  {
    id: 6,
    title: "Sitio listo para publicar",
    description: "Ajustes finales de diseño y configuración de servidor.",
    isCheck: true
  }
];

# Propuesta de Landing Pages Premium

## 📋 Descripción

Landing page profesional y moderna diseñada para presentar servicios de diseño y desarrollo web de alto rendimiento. Esta aplicación web interactiva ofrece una experiencia de usuario fluida con navegación por múltiples secciones, animaciones sofisticadas y un diseño responsivo.

## 🎯 ¿Qué Hace?

Este proyecto es una **landing page interactiva premium** que:

- **Presenta problemas de negocio** identificados con los clientes (mensajes confusos, falta de estructura, baja conversión)
- **Muestra servicios ofrecidos** de manera clara y atractiva
- **Detalla el proceso de trabajo** paso a paso
- **Define el alcance** del proyecto y servicios incluidos
- **Presenta información de la empresa/equipo** en una sección "About"
- **Proporciona información de inversión** y planes de precios
- **Navega entre pantallas** con transiciones suaves usando hash-based routing
- **Persiste la última sección visitada** usando localStorage
- **Se adapta a dispositivos móviles y desktop** con diseño completamente responsive

## 🏗️ Estructura del Proyecto

```
components/
├── Header.tsx              # Encabezado con navegación principal
├── TabBar.tsx             # Barra de navegación inferior
└── screens/
    ├── HomeScreen.tsx     # Pantalla de inicio
    ├── OverviewScreen.tsx # Visión general / problemas
    ├── ServicesScreen.tsx # Servicios ofrecidos
    ├── ProcessScreen.tsx  # Proceso de trabajo
    ├── ScopeScreen.tsx    # Alcance del proyecto
    ├── AboutScreen.tsx    # Información de la empresa
    └── InvestmentScreen.tsx # Planes y precios

App.tsx          # Componente principal
types.ts         # Definiciones de tipos TypeScript
constants.ts     # Datos estáticos (problemas, servicios, etc.)
```

## 🛠️ Stack Tecnológico

- **React 18.2** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server de alto rendimiento
- **Framer Motion** - Animaciones avanzadas
- **Tailwind CSS** - Estilos utility-first
- **Tailwind Merge & clsx** - Utilidades para gestión de clases CSS

## 🚀 Funcionalidades Principales

✅ Navegación por hash (#) con sincronización de estado
✅ Persistencia de última pantalla visitada
✅ Animaciones fluidas entre pantallas (Framer Motion)
✅ Tema claro/oscuro (soporte de clases dark)
✅ Diseño responsivo móvil-first
✅ Sistema de notificaciones
✅ Header y TabBar persistentes
✅ SEO-friendly con metadata configurable

## 📦 Ejecutar Localmente

**Requisitos previos:** Node.js 16+

1. Instalar dependencias:
   ```
   npm install
   ```

2. Ejecutar servidor de desarrollo:
   ```
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

3. Compilar para producción:
   ```
   npm run build
   ```

4. Previsualizar build de producción:
   ```
   npm run preview
   ```

## 🔗 Enlaces

- Ver app en AI Studio: https://ai.studio/apps/drive/1m0-CuZ1KqoCUtcgpaTJfj9i1yafVSYcg

## 📝 Notas Técnicas

- El enrutamiento se implementa usando `window.location.hash` en lugar de React Router para mantener simplicidad
- Las animaciones se manejan con Framer Motion para transiciones suaves entre pantallas
- El estado de navegación se persiste en localStorage para mejorar UX
- El proyecto usa TypeScript para mayor seguridad de tipos y mejor mantenibilidad
- Tailwind CSS proporciona utilidades de estilo eficientes y consistentes

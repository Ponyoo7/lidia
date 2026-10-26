# Lidia Gandia — Product Designer

Portfolio personal en Next.js, con portada editorial, proyectos seleccionados y fichas individuales para Aura Wood y EcoFlex Jar.

## Desarrollo

```bash
npm install
npm run dev
```

Abre la URL local que indique Next.js. Para comprobar la versión de producción: `npm run build`.

## Edición

- Textos, categorías, materiales y fichas: `src/data/portfolio.ts`.
- Portada, perfil y contacto: `src/app/page.tsx`.
- Paleta, tipografías, retícula y responsive: `src/app/globals.css`.
- Ficha de proyecto: `src/app/proyectos/[slug]/page.tsx`.
- Retratos: `public/images/lidia-hero.png` se usa en la portada y `public/images/lidia-about.png` en «Sobre mí».
- Imágenes de proyectos: `aura-wood-collage.png`, `ecoflex-tarros.png` y `ecoflex-infografia.png` están en `public/images/` y se gestionan desde la galería de cada entrada en `src/data/portfolio.ts`.

## Material fuente pendiente

El PDF mencionado en el encargo no estaba disponible en el espacio de trabajo. Las imágenes de Aura Wood y EcoFlex Jar proporcionadas posteriormente ya se incorporaron. Tampoco se ha añadido correo ni redes sociales: los datos reales no estaban presentes en los materiales accesibles. El texto del portfolio se limita a la información del encargo; revisa la redacción biográfica contra el PDF antes de publicar.
# 🚀 Landing Pages Pro – Generador de Landings Personalizadas

Proyecto moderno hecho con **Next.js 14**, enfocado en crear **landing pages profesionales** para negocios, tiendas, servicios, restaurantes y más.  
Incluye demos visuales, sección de precios, selector de planes y formulario de contacto conectado por **WhatsApp Cloud API** + **Resend**.

Diseñado para ser rápido, bonito, responsivo y listo para vender.

---

## ✨ Características principales

✔️ Landing pages animadas con **Framer Motion**  
✔️ Galería de demos con **modal de vista ampliada**  
✔️ Sección de precios con redirección automática al contacto  
✔️ Formulario funcional conectado a `/api/contact`  
✔️ Envío por **WhatsApp Cloud API**  
✔️ Envío de correo con **Resend**  
✔️ Diseño 100% responsivo  
✔️ Código limpio, modular y fácil de personalizar  

---

## 🖼 Demos incluidas

- Landing para Restaurantes  
- Landing para Tiendas  
- Landing para Servicios  

Cada demo se puede abrir en un modal para verla completa.

---

## 📦 Tecnologías usadas

| Tecnología | Uso |
|-----------|------|
| **Next.js 14 (App Router)** | Base del proyecto |
| **React** | Construcción de componentes |
| **TailwindCSS** | Estilos rápidos y personalizables |
| **Framer Motion** | Animaciones suaves |
| **Next/Image** | Optimización de imágenes |
| **WhatsApp Cloud API** | Envío de mensajes automáticos |
| **Resend** | Envío de emails a tu bandeja |

---

## 📁 Estructura del proyecto

```bash
/
├── app
│   ├── api
│   │   └── contact
│   │       └── route.ts
│   ├── page.tsx
│   ├── components
│   │   ├── LandingDemo.tsx
│   │   ├── PricesSection.tsx
│   │   └── ContactSection.tsx
├── public
│   ├── demo_restaurante.png
│   ├── demo_tiendas.png
│   ├── demo_servicios.png
├── styles
├── package.json
└── README.md

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


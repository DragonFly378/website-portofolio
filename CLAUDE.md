# Portfolio Website — Project Guidelines

## Stack & Architecture

- React 18 + React Router v6 + Vite
- Styling: Tailwind CSS (tailwind-first, no inline styles)
- Icons: FontAwesome (solid & brands)
- Images: PNG, imported via ES modules
- Component style: functional component + React.memo, no class component

---

## Adding a New Project

### 1. Image Assets

Simpan semua asset gambar project di:
```
src/assets/img/projects/<project-slug>/
```
- Thumbnail/logo untuk card → import di `datas.js`
- Detail images untuk case study page → import di component page-nya

### 2. Register di `datas.js`

Tambah entry baru di array `projects` (urutan = urutan tampil di halaman, project terbaru di paling atas):

```js
import projectImg from "./assets/img/projects/<slug>/thumbnail.png";
import ProjectPage from "./Pages/projects/<ProjectName>";

// di dalam array projects:
{
  title: "Project Name",
  root: "project-slug",          // untuk URL route: /project/<root>
  page: ProjectPage,             // React component untuk detail page
  desc: "Deskripsi singkat project untuk card.",
  img: projectImg,               // thumbnail image
  imgBg: "bg-[#hexcolor]",      // (optional) custom background jika thumbnail transparent
  tags: ["UI/UX", "Frontend"],   // tags yang muncul di card
  actions: [
    {
      title: "View Report",
      link: "/project/project-slug",  // internal route ke detail page
    },
    {
      title: "Visit Site",
      link: "https://example.com",    // (optional) external link
    },
  ],
}
```

### 3. Buat Detail Page Component

Buat file di `src/Pages/projects/<ProjectName>.jsx`

---

## Case Study Page — Storytelling Framework

Gunakan **Design Thinking** sebagai backbone storytelling, tapi JANGAN pakai label literal (Empathize, Define, dll) sebagai heading. Heading harus naratif dan engaging.

### Struktur Wajib

```
1. Header         → Logo/banner, judul, tagline, "The Challenge" (hook question)
2. Meet [Project] → Intro project, metadata (client, deliverable, team, tools, roles)
3. Understanding  → (Empathize) Deep-dive ke ekosistem, stakeholders, content landscape
4. Problem        → (Define) Core tensions/problems yang harus diselesaikan
5. Solution       → (Ideate) Design decisions, visual identity, IA, strategy
6. Showcase       → (Prototype) Screenshots/mockups + live site links
7. Impact         → (Deliver) Outcome, client satisfaction, metrics/stats
8. Takeaway       → (Reflect) Lessons learned, skills gained
9. <AboutContent /> → Footer component (always include)
```

### Tone & Writing Style

- Bahasa Inggris
- Narrative storytelling — bukan laporan akademis
- Hook di awal section (rhetorical question atau bold statement)
- First person ("I", "my") — ini personal portfolio
- Conversational tapi tetap profesional
- Data jadi visual proof point, bukan cuma teks
- JANGAN pakai phase tag/badge (Empathize, Define, dll) — biar ga template

### Component Pattern

```jsx
import React from "react";
import Layout from "../../Layout/Layout";
import { AboutContent } from "../About";

const ProjectName = React.memo(() => {
  return (
    <Layout>
      <section className="work-<slug> my-8 lg:my-16">
        <div className="w-11/12 lg:w-8/12 mx-auto">
          <div className="flex flex-col gap-y-16 lg:gap-y-24">
            {/* sections here */}
            <AboutContent />
          </div>
        </div>
      </section>
    </Layout>
  );
});

ProjectName.displayName = "ProjectName";
export default ProjectName;
```

### Styling Tokens (Tailwind classes yang konsisten)

- Heading project: `text-orange text-2xl lg:text-4xl font-rodetta`
- Body text: `text-light-blue text-base lg:text-lg leading-7 lg:leading-9`
- Card/container: `bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8`
- Quote/highlight: `bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-r-xl p-6 lg:p-8`
- Tag/badge: `px-4 py-2 bg-orange/10 border border-orange/30 rounded-full text-sm lg:text-base`
- Image container: `rounded-xl overflow-hidden shadow-lg shadow-orange/10`
- CTA button: `bg-orange/10 hover:bg-orange text-light-blue hover:text-dark-blue border-2 border-orange px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300`
- Stats number: `text-orange text-2xl lg:text-4xl font-bold`
- All images: tambahkan `loading="lazy"` (kecuali hero → `loading="eager"`)

### Responsive

- Mobile-first: base styles untuk mobile, `lg:` prefix untuk desktop
- Image grid: `grid grid-cols-12` dengan `col-span-12` (mobile) dan `lg:col-span-6` atau `lg:col-span-4` (desktop)

---

## Routing

Routes otomatis di-generate dari `datas.js`:
```
/project/<project.root> → <project.page />
```
Tidak perlu edit `App.jsx` — cukup set `root` dan `page` di datas.js.

---

## Reference Projects

- **CCPHASE** (`src/Pages/projects/CCPHASE.jsx`) — Case study terlengkap, pakai Design Thinking framework sebagai backbone. Jadikan referensi utama untuk project baru.
- **JakTrans** (`src/Pages/projects/JakTrans.jsx`) — Case study detail dengan banyak section UX research. Referensi bagus untuk project yang punya flow UX research lengkap.

---

## Don'ts

- Jangan pakai class component
- Jangan pakai inline style — selalu Tailwind
- Jangan hardcode route di App.jsx — semua lewat datas.js
- Jangan pakai emoji di code kecuali diminta
- Jangan buat file documentation/README kecuali diminta
- Jangan ubah struktur `WorkContent.jsx` tanpa alasan — itu shared component untuk semua project cards

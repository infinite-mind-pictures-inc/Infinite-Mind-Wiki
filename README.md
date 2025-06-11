# Infinite Mind Wiki (Quartz 4)

This is a digital garden built using [Quartz 4](https://quartz.jzhao.xyz), a lightweight static site generator for personal wikis and knowledge management. It supports markdown notes, backlinks, graph views, and easy publishing to GitHub Pages.

---

## 🛠️ Getting Started

### 1. Clone this repository

* Open the **GitHub Desktop** application.
* Click **File → Clone Repository...**
* Enter: `https://github.com/axyl-casc/Infinite-Mind-Wiki.git`
* Choose a local path to clone the project.

### 2. Install dependencies

Make sure you have **Node.js v22+** and **npm v10+** installed. Then in your terminal:

```bash
npm install
```

### 3. Preview the site locally

```bash
npx quartz build --serve
```

Then open [http://localhost:8080](http://localhost:8080) in your browser to preview the site.

---

## 🧠 Writing Notes

* All notes live in the `content/` folder.
* Use standard `.md` (Markdown) files.
* You can link between notes using `[[wiki-links]]`.
* Organize notes in subfolders (like `philosophy/`, `science/`, etc.) to create sidebar categories.
* Every file can have frontmatter:

  ```yaml
  ---
  title: My Note Title
  tags: [tag1, tag2]
  ---
  ```

---

## 🖼️ Sidebar Folders

* Quartz auto-generates sidebar structure based on folder paths.
* You can customize sidebar behavior in `quartz.config.ts`:

  ```ts
  sidebar: {
    style: "nested",
    fullPath: true,
    showIndex: true,
  }
  ```

---

## 🌐 Deployment (GitHub Pages)

This repo uses **GitHub Actions** to auto-deploy Quartz to GitHub Pages whenever you push to `main`.

### URL

> 📎 [https://axyl-casc.github.io/Infinite-Mind-Wiki](https://axyl-casc.github.io/Infinite-Mind-Wiki)

### GitHub Pages is set up to:

* Use `main` as the source branch
* Deploy via GitHub Actions from the `public/` folder
* Use `baseUrl: "axyl-casc.github.io/Infinite-Mind-Wiki"` in `quartz.config.ts`


## 🤖 Deployment Workflow

Found in `.github/workflows/jekyll-gh-pages.yml`:

* Installs Node
* Builds Quartz
* Uploads `public/` as a GitHub Pages artifact
* Deploys with `actions/deploy-pages@v4`

You do **not** need to manage this manually unless customizing.

---

## 💬 Questions?

Issues and feature requests welcome — submit them via the [Issues tab](https://github.com/axyl-casc/Infinite-Mind-Wiki/issues).

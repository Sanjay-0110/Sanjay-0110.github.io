# Sanjay Keerthi — Portfolio

Personal portfolio site built with Next.js, React 19, TypeScript, and Tailwind CSS 4.

## Tech Stack

- **Next.js 15** (App Router) with `output: 'export'` for static generation
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- Deployed to **GitHub Pages** via GitHub Actions

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout (fonts, GA)
│   ├── globals.css         # Design tokens + global styles
│   ├── page.tsx            # Home
│   ├── experience/         # Work history
│   ├── projects/           # Side projects
│   ├── research/           # Research (placeholder)
│   ├── blog/               # Blog listing (links to Substack / Medium)
│   ├── principles/         # Working principles
│   └── contact/            # Contact + CV download
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── SkillRadar.tsx      # Skill map on the home page
├── data/
│   ├── siteData.ts         # ← Edit all content here
│   └── blogPosts.ts        # Blog post list (title, date, tags, external link)
└── public/
    ├── san.jpeg            # Profile photo (400×400)
    ├── icon.png            # Favicon (64×64)
    ├── apple-touch-icon.png  # Home-screen icon (180×180)
    └── cv.pdf              # CV
```

## Getting Started

```bash
npm install
npm run dev
```

Or with Docker (no local Node needed):

```bash
docker compose up
```

After adding or updating a package, rebuild so the container picks it up (otherwise you get "Module not found"):

```bash
docker compose up --build --renew-anon-volumes
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

**All main content** lives in `data/siteData.ts`:
- `profile` — name, role, bio, email, location
- `experience` — work history entries
- `projects` — project cards
- `principles` — working principles list
- `social` — links to GitHub, LinkedIn, etc.

**Blog posts** live in `data/blogPosts.ts`. Each entry has a slug, title, date, tags, summary, reading time, and the `externalUrl` of the published post.

**Static assets:**
- `public/san.jpeg` — keep it a small square image (about 400×400)
- `public/cv.pdf` — replace with your latest CV

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages** → Source: **GitHub Actions**
3. (Optional) Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` as a repository secret under **Settings → Secrets and variables → Actions**
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` will build and deploy automatically

## Custom Domain

Add a `CNAME` file to `/public/` containing your domain:

```
sanjay.dev
```

Then configure your DNS to point to GitHub Pages.

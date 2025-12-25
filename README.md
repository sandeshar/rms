# RMS — Restaurant Management System (CMS) ✅

A lightweight Content Management System (CMS) for restaurants built with **Next.js**, **React**, **Tailwind CSS**, and **MongoDB (Mongoose)**. Use this project to manage site pages (hero sections, menus, offers, tabbed content, etc.) and build an admin UI for editing restaurant pages.

---

## Features

- Page CMS with nested sections (Hero, Menu, Offer, Tabbed, etc.)
- MongoDB + Mongoose for content storage
- Next.js (App Router), Tailwind CSS
- Simple Page model with nested Section schema (see `src/db/PageSchems.ts`)

---

## Quickstart — Local Development

Prerequisites:
- Node.js (v18+ recommended)
- npm (or yarn/pnpm)
- MongoDB instance (local or MongoDB Atlas)

1. Clone the repo

```bash
git clone <repo-url>
cd rms
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the project root and set at least:

```env
MONGODB_URI=<your-mongodb-connection-string>
```

The project uses `src/db/connect.ts` to read `process.env.MONGODB_URI` and establish the Mongoose connection.

4. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Scripts

- `npm run dev` — start development server (Next.js)
- `npm run build` — production build
- `npm run start` — start the built app
- `npm run lint` — run ESLint

(See `package.json` for exact versions and details.)

---

## Database / Models 🔧

Main model: `Page` (defined in `src/db/PageSchems.ts`)

- Page
  - `slug` (string, required, unique) — e.g. `/home`, `/about`
  - `title` (string, required)
  - `sections` (array of Section objects)
  - `createdAt`, `updatedAt` (dates)

- Section
  - `type` (string, required) — e.g., `hero`, `menu`, `offer`, `tabs`
  - `data` (mixed) — flexible content object (heading, image URL, items)
  - `sections` — nested sections allowed
  - `position` (number) — ordering

Use `export default mongoose.models.Page || mongoose.model('Page', PageSchema)` to import the model in server code.

---

## Notes for Developers

- DB connection helper: `src/db/connect.ts` reads `MONGODB_URI`; make sure it is set.
- Add API routes or server actions under `src/app/api` or server components to perform CRUD on pages.
- Authentication / admin UI is not yet implemented — consider adding NextAuth or another auth solution.

---

## Next steps / Roadmap

- Add API endpoints for pages (create/read/update/delete)
- Implement an admin UI for editing pages
- Add seed data & tests
- Add CI (lint, test)

---

## Contributing

Contributions are welcome — open issues or PRs with clear descriptions. Please follow the existing code style and add tests for new features.

---

## License

This project does not currently specify a license — add one if you plan to share the project publicly.

---

If you'd like, I can also:
- create a `docs/` folder with separate pages (Getting Started, API, DB schema), or
- add a basic seed script and a simple API route for creating pages.

Tell me which you'd prefer and I can implement it next. 🔧

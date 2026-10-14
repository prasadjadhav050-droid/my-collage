# Sant Eknath College of Engineering — Student Portal

A modern, responsive, **frontend-only** college information portal for **Sant Eknath College of Engineering, Chhatrapati Sambhajinagar (Aurangabad)**, built from a student's point of view.

> Built with React + Vite, Redux Toolkit, React Router DOM, Bootstrap 5 and custom CSS.
> **This is a demo/portfolio project.** Content marked as *sample* or *to be updated* is demonstration data and does not represent official notices, results or placement statistics. Only verified college facts are stated as official.

---

## Tech Stack

| Area | Technology |
| --- | --- |
| UI library | React 19 (Vite) |
| Routing | React Router DOM v7 |
| Global state | Redux Toolkit + React Redux |
| Forms & validation | React Hook Form + Zod (`@hookform/resolvers`) |
| Styling | Bootstrap 5 CSS + custom CSS (dark blue, white, orange theme) |

---

## Getting Started

```bash
# 1. Go to the project folder
cd vite-project

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the printed URL (usually `http://localhost:5173`).

### Other scripts

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

---

## Pages & Routes

| Route | Page | Description |
| --- | --- | --- |
| `/` | Home | Banner, announcements, quick links, highlights |
| `/about` | About College | History, vision, mission, PEO, approvals |
| `/departments` | Departments | Engineering branches overview |
| `/departments/:id` | Department Detail | Faculty, labs and highlights per branch |
| `/academics` | Academics | Courses, syllabus, timetable, calendar, exams |
| `/student-corner` | Student Corner | Notices, results, holidays, events, support |
| `/facilities` | Facilities | Library, labs, computer centre, sports, transport |
| `/placements` | Placements | Placement cell, training, internships |
| `/gallery` | Gallery | Campus, classrooms, labs and events |
| `/contact` | Contact | Address, contact details and enquiry form |
| `*` | Not Found | 404 page |

---

## Redux State

* **`notices` slice** — notice list, `searchQuery`, `categoryFilter` and a memoised filtered selector. Powers the searchable Notice Board.
* **`ui` slice** — `mobileNavOpen`, `noticeView` (grid/list) and `activeGalleryTag`.

Simple, local interactions (form fields, accordions, lightbox, carousel) use React `useState`.

---

## Project Structure

```
src/
  components/   Reusable UI (Navbar, Footer, NoticeBoard, cards, forms, icons...)
  pages/        Route pages (Home, About, Academics, ...)
  store/        Redux store and slices
  data/         Local JSON/JS mock data (notices, departments, facilities...)
  assets/       Local assets
  index.css     Theme variables + custom styling
```

---

## Forms (frontend-only)

The Contact / Enquiry form uses **React Hook Form** with a **Zod** schema (`zodResolver`) for validation. On submit it shows a demo success message — **no data is sent anywhere** and no backend is connected.

---

## Assets

Official logo and campus photographs bundled in `public/images/` are taken from the college website (http://www.secoengg.org/) for demonstration purposes. Details marked *to be updated* are intentionally left as placeholders to avoid publishing unverified information.

---

## License / Usage

For educational and demonstration use.

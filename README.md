# Digital Indian — GIS & Geospatial Intelligence Platform

A full-stack MERN website for **Digital Indian**, a professional GIS, geospatial, mapping, and location intelligence company.

---

## 🏗️ Project Structure

```
digital-indian/
├── frontend/          # React + Vite + Tailwind CSS
└── backend/           # Node.js + Express + MongoDB
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Cloudinary account
- Gmail account (for Nodemailer)

### 1. Clone and install

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 2. Environment Variables

**frontend/.env**
```env
VITE_API_URL=http://localhost:5000/api
VITE_SITE_URL=http://localhost:5173
```

**backend/.env**
```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/digital-indian
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@digitalindian.in

ANTHROPIC_API_KEY=your_anthropic_key_for_ai_insights

CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### 3. Seed the database

```bash
cd backend
npm run seed
```

### 4. Run development servers

```bash
# Backend (port 5000)
cd backend && npm run dev

# Frontend (port 5173)
cd frontend && npm run dev
```

---

## 🌐 Vercel Deployment

### Frontend (Vercel)
1. Connect the `frontend/` folder to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add all `VITE_*` env variables

### Backend (Vercel Serverless)
1. Connect the `backend/` folder to Vercel
2. The `vercel.json` handles routing
3. Add all backend env variables

---

## 📋 Features

- **8 Public Pages**: Home, About, Services, Industries, Projects, Contact, Careers, Blog
- **Admin Panel**: Full CRUD for all content
- **AI Enquiry Analysis**: Intent classification, priority tagging, suggested replies
- **Email Notifications**: Nodemailer-powered admin + customer emails
- **Cloudinary Media**: Image uploads with CDN delivery
- **JWT Auth**: Secure admin authentication
- **SEO Ready**: Meta tags, OG tags, semantic HTML
- **Responsive**: Mobile-first design

---

## 🗄️ Database Models

| Model | Purpose |
|-------|---------|
| Admin | Admin users with JWT auth |
| Enquiry | Lead capture with AI insights |
| Project | Portfolio with gallery |
| Service | Service pages |
| Blog | Insights & articles |
| Job | Career openings |
| Application | Job applications |

---

## 📞 Default Admin

After seeding:
- Email: `admin@digitalindian.in`
- Password: `Admin@123`

**Change immediately after first login.**

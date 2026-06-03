<div align="center">

<img src="https://img.shields.io/badge/Social%20Hub-v1.0.0-6C63FF?style=for-the-badge&logo=react" alt="Social Hub" />

# 🌐 Social Hub

### A full-stack social media platform to connect, share, and engage.

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Features](#-features) · [Tech Stack](#-tech-stack) · [Project Structure](#-project-structure) · [Getting Started](#-getting-started) · [API Reference](#-api-reference) · [Roadmap](#-roadmap) · [Contributing](#-contributing)

</div>

---

## 📖 Overview

**Social Hub** is a modern, full-stack social media web application that enables users to sign up, log in, create rich posts (text and images), and browse a real-time feed of content from all users. Built with the MERN stack and secured via JWT authentication, Social Hub is designed to be clean, scalable, and developer-friendly.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Secure signup & login with JWT + bcrypt password hashing |
| 📝 **Post Creation** | Create posts with text, images, or both |
| 🖼️ **Image Upload** | Upload and preview images via Multer |
| 📰 **Live Feed** | Browse all users' posts in a unified feed |
| 👤 **User Profiles** | View and manage your own posts |
| 📱 **Responsive UI** | Clean, mobile-friendly interface |
| 🛡️ **Protected Routes** | Middleware-guarded private endpoints |

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — Component-based UI
- **React Router** — Client-side routing
- **Axios** — HTTP requests to the backend
- **Tailwind CSS / Bootstrap** — Responsive styling

### Backend
- **Node.js** — JavaScript runtime
- **Express.js** — REST API framework
- **MongoDB + Mongoose** — NoSQL database & ODM
- **JWT** — Stateless authentication
- **Multer** — Multipart image upload handling
- **Bcrypt.js** — Password hashing
- **Dotenv** — Environment variable management

---

## 📁 Project Structure

```
social-hub/
│
├── client/                         # ⚛️  Frontend (React)
│   ├── public/
│   └── src/
│       ├── components/             # Reusable UI components
│       │   ├── Navbar.js
│       │   ├── PostCard.js
│       │   └── ImageUpload.js
│       ├── pages/                  # Route-level page components
│       │   ├── Home.js
│       │   ├── Login.js
│       │   ├── Signup.js
│       │   └── Profile.js
│       ├── services/               # Axios API service calls
│       │   ├── authService.js
│       │   └── postService.js
│       ├── App.js
│       └── index.js
│
├── server/                         # 🟢 Backend (Node + Express)
│   ├── controllers/                # Request handlers
│   │   ├── authController.js
│   │   └── postController.js  
│   ├── models/                     # Mongoose schemas
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/                     # Express route definitions
│   │   ├── authRoutes.js
│   │   └── postRoutes.js
│   ├── uploads/                    # Stored image files (Multer)
│   └── server.js                   # Entry point
│
├── .env                            # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/social-hub.git
cd social-hub
```

### 2. Configure Environment Variables

Create a `.env` file inside the `server/` directory:

```env
# server/.env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

> ⚠️ **Never commit your `.env` file.** It's listed in `.gitignore` by default.

### 3. Install Dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd ../client
npm install
```

### 4. Run the Application

**Start the backend server:**
```bash
cd server
npm start
```

**Start the frontend (in a new terminal):**
```bash
cd client
npm start
```

The app will be available at:

| Service | URL |
|---|---|
| Frontend | `http://localhost:3000` |
| Backend API | `http://localhost:5000` |

---

## 📡 API Reference

### Auth Routes — `/api/auth`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/register` | Register a new user | ❌ |
| `POST` | `/login` | Log in and receive JWT | ❌ |

### Post Routes — `/api/posts`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `GET` | `/` | Fetch all posts (feed) | ✅ |
| `POST` | `/` | Create a new post | ✅ |
| `GET` | `/user` | Fetch current user's posts | ✅ |
| `DELETE` | `/:id` | Delete a post by ID | ✅ |

> All protected routes require an `Authorization: Bearer <token>` header.

---

## 🖼️ Screenshots

| Page | Description |
|---|---|
| 🔐 Login / Signup | Secure authentication forms with validation |
| 📰 Feed | Live scrolling feed of posts from all users |
| ✏️ Create Post | Text + image upload with live preview |
| 👤 Profile | View and manage your own posts |

---

## 🗺️ Roadmap

User authentication (JWT)
Create & view posts with image support
User profile management
💬 Comments on posts
❤️ Like / reaction system
🔔 Real-time notifications (Socket.io)
👥 Follow / unfollow users


---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how to get started:

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. **Push** to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open** a Pull Request

> For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by Himesh Thakur(https://github.com/your-username)

⭐ Star this repo if you found it helpful!

</div>

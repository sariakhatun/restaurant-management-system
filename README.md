# 🍽️ Restaurant Management Website

A full-stack Restaurant Management system built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**, featuring Firebase Authentication and JWT-based private route protection. This application allows users to explore, order, and manage food items, while restaurant owners can add, update, and track their offerings.

---

## 🌐 Live URL
**Client Live Site:** https://b11a11-sariakhatun.web.app

**Server Live URL:** https://b11a11-server-side-sariakhatun.vercel.app/

---

## 🎯 Purpose
The purpose of this project is to create a fully responsive, visually appealing, and functionally complete restaurant management platform that improves both the customer experience and the restaurant's internal management using modern web technologies.

---

## 🚀 Key Features

### ✅ Public Features
- **Homepage:** Banner, top-selling foods, and attractive additional sections.
- **All Foods Page:** View all food items with search functionality.
- **Single Food Page:** Detailed info about a food item with purchase button.
- **Gallery Page:** 10+ lightbox-enabled static images.

### 🔐 Authenticated Features
- **Authentication System:** Firebase-based login/register using email/password or Google.
- **JWT Authorization:** Token-based protection for all private routes.
- **Add Food:** Restaurant owners can add food items.
- **My Foods:** Users can see, update their added food items.
- **Food Purchase Page:** Buyers can securely purchase foods.
- **My Orders:** Displays user's orders with delete and purchase info.

### 💡 Special Functionalities
- Quantity restriction on purchases (no over-buying or self-buy).
- Real-time search feature for food by name.
- Protected routes using JWT.
- Responsive design across mobile, tablet, and desktop.
- Theme toggle (light/dark).
- Profile image dropdown with navigation links.
- Spinner for loading states.
- Framer Motion animations.
- Secure storage of Firebase & MongoDB credentials using `.env`.

---

## 🛠️ Tech Stack

### Client
- React.js
- React Router 
- Firebase Authentication
- Axios
- SweetAlert2 / React Toastify
- React Hook Form
- Tailwind CSS
- Framer Motion (for animations)
- Yet-Another-React-Lightbox (gallery)
- Moment.js (date formatting)

### Server
- Node.js
- Express.js
- MongoDB & Mongoose
- CORS
- dotenv
- jsonwebtoken (JWT)
- cookie-parser

---

## 📦 NPM Packages Used

### Client-side
react
react-router
react-router-dom
firebase
axios
sweetalert2
react-toastify
react-hook-form
tailwindcss
framer-motion
moment
yet-another-react-lightbox
shell
Copy code

### Server-side
express
cors
mongodb
mongoose
jsonwebtoken
cookie-parser
dotenv

# 🍽️ Restaurant Management Website

## Description

A full-stack Restaurant Management system built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**, enhanced with Firebase Authentication and JWT-based private route protection. It offers customers a smooth experience exploring and ordering food, while restaurant owners can manage their menu items efficiently.

---

## Live Project Links

* **Client:** : https://b11a11-sariakhatun.web.app
* **Server:** : https://b11a11-server-side-sariakhatun.vercel.app

---

## Screenshot

![Restaurant Management Website Screenshot](./path-to-screenshot.png)
*(Replace the path with the actual screenshot path in your repo)*

---

## Project Overview

This dynamic Restaurant Management Website is designed to streamline the entire dining experience by integrating advanced technologies for both customers and restaurant owners. Customers enjoy a seamless and engaging interface to explore diverse menu options, place orders effortlessly, and benefit from real-time updates. Restaurant owners gain comprehensive control over menu management, order tracking, and inventory, enabling efficient operations and improved customer satisfaction. The platform ensures robust security and privacy through Firebase Authentication and JWT-based authorization, delivering a trustworthy and reliable service for all users.



## Technologies Used

### Frontend:

React.js

React Router

Firebase Authentication

Tailwind CSS

Framer Motion

Axios

React Hook Form

SweetAlert2

React Toastify

Moment.js

Yet-Another-React-Lightbox

### Backend:

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token (JWT)

dotenv

cookie-parser

CORS

---

## Core Features

### Public Features

* Homepage with banner, top-selling foods, and attractive sections
* Browse all foods with search functionality
* Single food details page with purchase option
* Gallery page with lightbox-enabled images

### Authenticated Features

* Firebase email/password and Google authentication
* JWT token-based private route protection
* Add new food items (for restaurant owners)
* Manage and update owned food items
* Secure food purchase page with quantity restrictions
* View and manage user orders

### Additional Features

* Real-time food search
* Responsive design (mobile/tablet/desktop)
* Dark/light theme toggle
* Profile dropdown with navigation links
* Loading spinners and animations
* Secure environment variable management

---

## Dependencies

### Client-side

```
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
```

### Server-side

```
express  
cors  
mongodb  
mongoose  
jsonwebtoken  
cookie-parser  
dotenv  
```

---

## How to Run Locally

### Prerequisites

* Node.js installed
* MongoDB instance or cluster (local or cloud)
* Firebase project setup for authentication

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sariakhatun/restaurant-management-system
   cd restaurant-management-system
   ```

2. **Client Setup:**

   ```bash
   cd client
   npm install
   ```

   * Create a `.env` file in `client` directory with your Firebase config and any necessary environment variables.
   * Start the client app:

   ```bash
   npm start
   ```

3. **Server Setup:**

   ```bash
   cd ../server
   npm install
   ```

   * Create a `.env` file in `server` directory with your MongoDB URI, JWT secret, and other secrets.
     Example `.env`:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

   * Start the server:

   ```bash
   npm run dev
   ```


4. **Open the client URL:**
   Visit [http://localhost:3000](http://localhost:3000) to use the app locally.

---

## Additional Resources

* Firebase Console: Configure Authentication
* MongoDB Atlas: Manage your database cluster
* Environment Variables: Keep your secrets secure

---


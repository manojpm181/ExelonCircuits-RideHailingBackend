# Ride-Hailing Platform Backend (Uber/Ola Clone)

This is a scalable backend system for a simple ride-hailing platform built with Node.js, Express, and MongoDB. It supports user authentication, driver management, ride booking, real-time driver-rider matching, and ride history tracking.

---

## 🚗 Project Overview

This project simulates the backend of a ride-hailing service similar to Uber or Ola. It allows:

- Drivers to register, log in, update their location and availability.
- Riders to register, request rides, and be matched with nearby available drivers.
- Both drivers and riders can view their ride history.
- JWT-based secure authentication.
- Real-time location updates and ride status tracking.

---

## ✅ Features

- **User Authentication** (Drivers & Riders)
- **JWT Token-Based Security**
- **Online/Offline Driver Status**
- **Real-time Location Updates**
- **Nearest Driver Matching Algorithm**
- **Ride Request & Tracking**
- **Ride History for Both Parties**
- **RESTful APIs**
- **MongoDB Schema Design**

---

## ⚙️ How to Run the Project Locally

 1. Clone the Repository


git clone https://github.com/your-username/ride-hailing-backend.git
cd ride-hailing-backend
2. Install Dependencies
   npm install


3. Create .env File
   Create a .env file in the root folder and add the following:
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/ride-hailing
    JWT_SECRET=your_jwt_secret_here
4. Run the Server
    npm start
    Server will run at http://localhost:5000


   
📬 How to Import Postman Collection
   Open Postman
   Click on "Import" at the top-left
   
   Choose the file postman_collection.json from this repository
   
   Click "Import"
   
   Use the pre-configured requests to test all APIs
   
   Make sure to set Authorization as Bearer Token using the JWT you get after login.

✨ Tech Stack
    Node.js + Express.js
    MongoDB + Mongoose
    JWT for Authentication
    Postman for API Testing

📁 Folder Structure
        ride-hailing-backend/
        ├── controllers/
        │   └── authController.js
        │   └── driverController.js
        │   └── rideController.js
        ├── models/
        │   └── Driver.js
        │   └── Rider.js
        │   └── Ride.js
        ├── routes/
        │   └── authRoutes.js
        │   └── driverRoutes.js
        │   └── rideRoutes.js
        ├── middlewares/
        │   └── authMiddleware.js
        ├── utils/
        │   └── matchingAlgorithm.js
        ├── config/
        │   └── db.js
        ├── .env
        ├── .gitignore
        ├── app.js
        ├── server.js
        ├── package.json
        ├── README.md
        └── postman_collection.json
            




# Cloud E-commerce Website (MERN)

## Project Overview
This project is a full-stack E-commerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
The website allows users to browse products, search, add items to cart, and sign in.  
The project also demonstrates cloud integration by hosting the database on MongoDB Atlas.

---

## Features Implemented
- **Frontend (React.js)**
  - Product listing  
  - Product search  
  - Cart functionality  
  - User authentication UI (Sign In, Register)  

- **Backend (Node.js + Express)**
  - RESTful API endpoints  
  - JWT-based authentication  
  - API for products and users  

- **Database (MongoDB Atlas – Cloud)**
  - Data stored in MongoDB Atlas cluster  
  - Collections: `users`, `products`, `orders`  
  - Cloud connection string configured in `.env`  

---

## Tech Stack
- Frontend: React.js, Redux, Bootstrap  
- Backend: Node.js, Express.js  
- Database: MongoDB Atlas (Cloud)  
- Authentication: JWT  
- Development Tools: Nodemon, Mongoose  

---

## Setup Instructions

1. Install dependencies:

npm install
cd frontend
npm install


2. Create a .env file in the root with:

NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/proshop
JWT_SECRET=abc123


3. Run the backend server:

npm run server


4. Run the frontend:

cd frontend
npm start


5. Seeder (to populate database with products & users):

node backend/seeder

---

## Screenshots

## HomePage
<img width="1919" height="1031" alt="Image" src="https://github.com/user-attachments/assets/bec8ab77-7d78-4628-a82c-da3ee8e438bd" />

## Cart page
<img width="1919" height="1020" alt="Image" src="https://github.com/user-attachments/assets/d38e75ef-a49d-4913-a141-6c9d789bd744" />

## Sign in page
<img width="1919" height="1011" alt="Image" src="https://github.com/user-attachments/assets/b3b242a1-1d19-43ce-99e9-9a650f57e983" />

## Register page
<img width="1919" height="1017" alt="Image" src="https://github.com/user-attachments/assets/851464b7-b744-43dc-8565-935b2a185d8a" />

---

## Current Status
- Website runs locally with full functionality.
- Database is hosted on MongoDB Atlas (Cloud).
- Latest Products, Users, and Orders are accessible from the cloud database.

---

## Project Summary

Currently, the project is cloud-enabled because the database is hosted on MongoDB Atlas.
The frontend and backend run locally but can later be deployed to the cloud for a fully cloud-deployed solution.

---

## Author
Sanita Gaikwad – Cloud Internship Project at Codec Technologies

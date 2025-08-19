### Cloud E-commerce Website (MERN)

This project is a full-stack E-commerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
The website allows users to browse products, search, add items to cart, and sign in.
The project also demonstrates cloud integration by hosting the database on MongoDB Atlas.

### Features Implemented

- Frontend (React.js)

- Product listing

- Product search

- Cart functionality

- User authentication UI (Sign In, Register)

- Backend (Node.js + Express)

RESTful API endpoints

JWT-based authentication

API for products and users

Database (MongoDB Atlas – Cloud)

Data stored in MongoDB Atlas cluster

Collections: users, products, orders

Cloud connection string configured in .env

Tech Stack

Frontend: React.js, Redux, Bootstrap

Backend: Node.js, Express.js

Database: MongoDB Atlas (Cloud)

Authentication: JWT

Development Tools: Nodemon, Mongoose

Setup Instructions

Clone the repository:

git clone <repo-url>
cd proshop_mern


Install dependencies:

npm install
cd frontend
npm install


Create a .env file in the root with:

NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/proshop
JWT_SECRET=abc123


Run the backend server:

npm run server


Run the frontend:

cd frontend
npm start


Seeder (to populate database with products & users):

node backend/seeder

Screenshots
Homepage

Product Search

Cart

Sign In

(Place your screenshots inside a screenshots/ folder in the repo and replace these placeholders with actual images.)

Current Status

Website runs locally with full functionality.

Database is hosted on MongoDB Atlas (Cloud).

Latest Products, Users, and Orders are accessible from the cloud database.

What’s Next

(Optional) Deploy backend on AWS EC2 / Render / Railway.

(Optional) Deploy frontend on Vercel / Netlify.

(Optional) Add Load Balancer, Auto Scaling, and CloudFront CDN for performance and scalability.

Project Summary

Currently, the project is cloud-enabled because the database is hosted on MongoDB Atlas.
The frontend and backend run locally but can later be deployed to the cloud for a fully cloud-deployed solution.

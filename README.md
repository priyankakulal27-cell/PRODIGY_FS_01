# Secure User Authentication System
#ProdigyInfoTech - Full Stack Web Development Internship (Task 1)

A robust full-stack authentication system built using the MERN stack (MongoDB, Express, React, Node.js). This project implements secure user registration, login, and protected dashboard access using JSON Web Tokens (JWT).

## Features
* User Authentication: Secure Sign-up and Login functionality.
* JWT Security: Implementation of token-based authentication for secure session management.
* Protected Routes: Backend middleware to verify tokens and protect sensitive data.
* Responsive UI: A clean, user-friendly interface for the authentication flow.
* Database Integration: Scalable data storage using MongoDB with Prisma/Mongoose.

## Tech Stack
* Frontend: React.js, Tailwind CSS 
* Backend: Node.js, Express.js
* Database: MongoDB
* Security: JWT (JSON Web Tokens), Bcrypt for password hashing

## Project Structure
* /client: React frontend components and pages.
* /server: Express server, authentication routes, and database models.

## How to Run Locally
1. Clone the repository.
2. Navigate to the /server folder and run npm install.
3. Navigate to the /client folder and run npm install.
4. Create a .env file in the /server folder with your DATABASE_URL and JWT_SECRET.
5. Run npm start in both folders.

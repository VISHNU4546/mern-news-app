 
# MERN News Application

A full-stack **News Application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application allows users to register, log in, view news headlines, and react to them with likes or dislikes.

---

## Features

- **User Authentication**: Secure registration and login using JWT.
- **News Feed**: Logged-in users can view a dynamic list of news headlines.
- **Like/Dislike Reactions**: Users can react to news headlines.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Admin Functionality**: Add news via an API or a frontend form.

---

## Folder Structure

```plaintext
/mern-news-app
  ├── /Frontend/frontend         # React frontend
  │     ├── /src        # React source files
  │     ├── /public     # Static HTML and assets
  │     ├── package.json
  ├── /backend          # Node.js + Express backend
  │     ├── /models     # Mongoose schemas
  │     ├── /routes     # API routes (auth, news)
  │     ├── config      # MongoDB connection
  │     ├── server.js   # Backend entry point
  │     ├── .env        # Environment variables
  │     └── package.json
  ├── README.md         # This file
  ├── .gitignore        # Ignored files


## Technologies Used

### Frontend 
- **React.js**: For building the user interface.
- **Axios**: For making API calls.
- **React Router**: For routing.

### Backend
- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Framework for building backend APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB.
- **JWT**: For secure user authentication.


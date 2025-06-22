# Post-Comments Service (MERN Stack)

This is a full-stack web application that allows users to create posts and add comments. It demonstrates clean API design, modular backend structure, and dynamic frontend rendering using the MERN stack (MongoDB, Express.js, React.js, Node.js).

---

## Tech Stack

| Layer    | Technology                    |
| -------- | ----------------------------- |
| Frontend | React.js (Axios, Material UI) |
| Backend  | Node.js + Express             |
| Database | MongoDB (Mongoose ODM)        |
| Styling  | Material UI                   |

---

## Project Structure

```
post-comments-service/
├── backend/
│   ├── config/             # MongoDB connection setup
│   ├── controllers/        # Logic for handling requests
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API route definitions
│   └── server.js           # Main entry point for backend
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/     # React components (e.g., PostItem.jsx)
│       ├── api.js          # Axios API logic
│       ├── App.js          # Application structure and logic
│       └── index.js        # React DOM root
│
└── README.md               # Project documentation
```

---

## Features

* Create posts with title and content.
* Add multiple comments to each post.
* MongoDB document embedding for post-comment structure.
* Styled using Material UI components.
* Backend communication using Axios.

---

## Requirements

* Node.js v16 or later
* MongoDB (local or cloud via MongoDB Atlas)
* Internet connection for `npm install`
* Recommended IDE: Visual Studio Code

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/post-comments-service.git
cd post-comments-service
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Ensure MongoDB is running locally at:

```
mongodb://127.0.0.1:27017/post_comments_db
```

Start the backend:

```bash
node server.js
```

Expected output:

```
MongoDB connected
Server running on port 5000
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Application runs at:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| POST   | `/posts`              | Create a new post       |
| GET    | `/posts`              | Retrieve all posts      |
| POST   | `/posts/:id/comments` | Add a comment to a post |

All API responses are in JSON.

---

## Architecture Overview

* **Frontend**: React single-page app sending Axios requests to backend.
* **Backend**: Express REST API using Mongoose for MongoDB operations.
* **Data Model**: One-to-many relationship with embedded comments in posts.

Example MongoDB document:

```json
{
  "title": "Sample Post",
  "content": "This is a sample post.",
  "comments": [
    {
      "text": "Interesting post!",
      "createdAt": "2024-06-22T10:00:00Z"
    }
  ]
}
```

---

## Additional Notes

* Update `backend/config/db.js` to use a remote URI if not using localhost.
* Axios base URL is defined in `frontend/src/api.js`.
* Currently, no support for editing or deleting posts/comments.
* Authentication is not yet implemented.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contribution Guidelines

Contributions are welcome. Please:

* Submit issues or pull requests via GitHub
* Follow modular and clean coding practices
* Document new features clearly

---



# 🎬 YouTube Clone Backend API

This is the backend server for the **YouTube Clone application**. It is built using **Node.js, Express, and MongoDB**, and provides REST APIs for authentication, channels, videos, and comments.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* CORS
* dotenv
* Cloudinary (for media uploads)

---

## 📁 Project Structure

```
backend/
├── config/
├── controllers/
├── constants/
├── middleware/
├── models/
├── routes/
├── utils/
├── validators/
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

* Node.js (v18+ recommended)
* MongoDB connection string
* JWT Secret Key
* Cloudinary credentials (optional, for media uploads)

---

## 🛠️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Rahul-Cloud1/youtube_server
cd youtube_server
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file in the root directory**

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. **Run the server**

```bash
npm run dev
```

👉 Server will run at:
`http://localhost:5000`

---

## 📜 Available Scripts

| Command       | Description               |
| ------------- | ------------------------- |
| `npm run dev` | Start server with nodemon |

---

## 🔐 API Routes

### 🧑‍💻 Auth Routes

| Method | Endpoint             | Description    |
| ------ | -------------------- | -------------- |
| POST   | `/api/auth/register` | Register user  |
| POST   | `/api/auth/login`    | Login user     |
| PUT    | `/api/auth/profile`  | Update profile |
| GET    | `/api/auth/test`     | Health check   |

---

### 🎥 Video Routes

| Method | Endpoint                         | Description        |
| ------ | -------------------------------- | ------------------ |
| GET    | `/api/videos`                    | Get all videos     |
| GET    | `/api/videos/:id`                | Get video by ID    |
| GET    | `/api/videos/channel/:channelId` | Get channel videos |
| POST   | `/api/videos`                    | Upload video       |
| PUT    | `/api/videos/:id`                | Update video       |
| DELETE | `/api/videos/:id`                | Delete video       |
| PUT    | `/api/videos/like/:id`           | Like video         |
| PUT    | `/api/videos/dislike/:id`        | Dislike video      |
| PUT    | `/api/videos/view/:id`           | Increment views    |

---

### 💬 Comment Routes

| Method | Endpoint                 | Description    |
| ------ | ------------------------ | -------------- |
| GET    | `/api/comments/:videoId` | Get comments   |
| POST   | `/api/comments/:videoId` | Add comment    |
| PUT    | `/api/comments/:id`      | Update comment |
| DELETE | `/api/comments/:id`      | Delete comment |

---

### 📺 Channel Routes

| Method | Endpoint                      | Description           |
| ------ | ----------------------------- | --------------------- |
| POST   | `/api/channels`               | Create channel        |
| GET    | `/api/channels/:id`           | Get channel           |
| GET    | `/api/channels/:id/videos`    | Channel videos        |
| PUT    | `/api/channels/:id`           | Update channel        |
| DELETE | `/api/channels/:id`           | Delete channel        |
| PUT    | `/api/channels/subscribe/:id` | Subscribe/Unsubscribe |

---

## 🔒 Authentication

Protected routes require:

```
Authorization: Bearer <your_token>
```

---

## 🧠 Notes

* MongoDB connection is configured in `config/db.js`
* Use JWT token for protected APIs
* Cloudinary is used for storing images/videos (optional)

---

## 📌 Repository Link

👉 https://github.com/Narendra1102/Youtube_Clone
---





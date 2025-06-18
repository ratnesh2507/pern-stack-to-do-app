# PERN Stack To-Do App ✅

A simple and functional **To-Do List Application** built using the **PERN Stack** — PostgreSQL, Express.js, React.js, and Node.js. This app lets users **create**, **read**, **update**, and **delete** their daily tasks.

---

## 🚀 Tech Stack

- **Frontend**: React.js (with Vite)
- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL
- **ORM**: node-postgres (pg)
- **Deployment**: _Coming soon_

---

## 📸 Features

- Add a new task
- View all tasks
- Edit an existing task
- Delete a task
- Backend API integration with PostgreSQL

---

## 💠 Getting Started

### Prerequisites

- Node.js and npm
- PostgreSQL

---

## ⚙️ Backend Setup

```bash
# Clone the repository
git clone https://github.com/ratnesh2507/pern-stack-to-do-app.git
cd pern-stack-to-do-app

# Install backend dependencies
npm install

# Create a .env file
touch .env
```

Add your PostgreSQL credentials to `.env`:

```
PG_USER=your_postgres_user
PG_PASSWORD=your_postgres_password
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=your_database_name
```

### Run the server

```bash
node index.js
```

The server will run on: `http://localhost:5000`

---

## 🌐 Frontend Setup

```bash
cd client

# Install frontend dependencies
npm install

# Start the React app
npm run dev
```

The React app will run on: `http://localhost:5173`

---

## 🗂️ Folder Structure

```
pern-stack-to-do-app/
├── client/         # React frontend
├── config/         # DB config (db.js)
├── controllers/    # Controller logic (todoController.js)
├── routes/         # API routes (todoRoutes.js)
├── models/         # DB models (todoModel.js)
├── index.js        # Express server
├── package.json
└── .env
```

---

## 📬 API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| POST   | `/todos`     | Add a new task      |
| GET    | `/todos`     | Get all tasks       |
| GET    | `/todos/:id` | Get task by ID      |
| PUT    | `/todos/:id` | Update a task by ID |
| DELETE | `/todos/:id` | Delete a task by ID |

---

## 🤝 Contributing

Feel free to fork the repo and submit a pull request. All suggestions are welcome!

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Made with ❤️ by [Ratnesh BVK](https://github.com/ratnesh2507)

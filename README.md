# GraphQL Node.js MVC Project

This project is a Node.js MVC application using Apollo Server, Express, Sequelize, and GraphQL for user management.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd graphql-node-mvc
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your database configuration:

```
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_pass
DB_HOST=localhost
DB_DIALECT=mysql # or postgres, sqlite, etc.
PORT=4000
```

### 4. Run Database Migrations (if any)

If you use Sequelize migrations, run:

```bash
npx sequelize-cli db:migrate
```

### 5. Start the Server

```bash
npm start
# or with nodemon for development
npx nodemon src/index.js
```

The server will run at `http://localhost:4000/graphql` by default.

---

## 🧑‍💻 GraphQL API Documentation

### User Type

```graphql
type User {
  id: ID!
  name: String!
  email: String!
}
```

### Queries

#### Get all users

```graphql
query {
  getUsers {
    id
    name
    email
  }
}
```

#### Get a user by ID

```graphql
query {
  getUser(id: ID!) {
    id
    name
    email
  }
}
```

### Mutations

#### Create a user

```graphql
mutation {
  createUser(name: String!, email: String!) {
    id
    name
    email
  }
}
```

#### Update a user

```graphql
mutation {
  updateUser(id: ID!, name: String, email: String) {
    id
    name
    email
  }
}
```

#### Delete a user

```graphql
mutation {
  deleteUser(id: ID!)
}
```

---

## 📝 Example API Requests

You can use [Apollo Studio Explorer](https://studio.apollographql.com/sandbox/explorer) or [Postman](https://www.postman.com/) to test the API at `http://localhost:4000/graphql`.

**Example: Create a User**

```
mutation {
  createUser(name: "John Doe", email: "john@example.com") {
    id
    name
    email
  }
}
```

**Example: Get All Users**

```
query {
  getUsers {
    id
    name
    email
  }
}
```

---

## 📂 Project Structure

```
graphql-node-mvc/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── schema/
│   │   ├── resolvers/
│   │   └── typeDefs/
│   └── utils/
├── package.json
└── README.md
```

---

## 💡 Notes
- Make sure your database is running and accessible.
- Update the `.env` file with your actual credentials.
- For more customization, edit the files in `src/` as needed.

---

## 📬 Issues
If you encounter any issues, please open an issue in this repository.

# Book Rental System

A full-featured web application for managing book rentals. This project includes a React frontend and a Node.js backend with PostgreSQL as the database. The system provides functionalities for users to view, create, update, and delete books, manage book owners, and handle user interactions with a focus on role-based access control.

## Features

- **Frontend (React)**

  - Modular and reusable components using Material UI.
  - Material UI tables for listing entities (Books, Owners, Users).
  - Dialogs for creating new entities.
  - Seamless routing with React Router.
- **Backend (Node.js & Express)**

  - RESTful API endpoints for CRUD operations.
  - Authentication with JSON Web Tokens (JWT).
  - Authorization using CASL for fine-grained access control.
  - Data persistence with PostgreSQL.
- **Database**

  - PostgreSQL schema for storing and managing book, owner, and user data.
- **Validation & Security**

  - Input validation with Zod.
  - Role-based access control with CASL.

## Folder Structure

```
/backend
  /controllers
    bookController.js
    ownerController.js
    userController.js
  /models
    Book.js
    Owner.js
    User.js
    index.js
  /routes
    bookRoutes.js
    ownerRoutes.js
    userRoutes.js
  /config
    database.js
  app.js
  package.json

/frontend
  /src
    /components
      BookList.js
      CreateBook.js
      OwnerList.js
      CreateOwner.js
      CreateUser.js
      UserList.js
    /pages
      BooksPage.js
      OwnersPage.js
      UsersPage.js
    App.js
    index.js
  package.json
```

## Getting Started

### Backend

1. **Install Dependencies:**

   ```bash
   cd backend
   npm install
   ```
2. **Configure the Database:**
   Update the database connection settings in `/backend/config/database.js`.
3. **Run Migrations:**
   Make sure you have PostgreSQL running and execute migrations to set up the database schema.
4. **Start the Server:**

   ```bash
   npm start
   ```

### Frontend

1. **Install Dependencies:**

   ```bash
   cd frontend
   npm install
   ```
2. **Start the Development Server:**

   ```bash
   npm start
   ```
3. **Access the Application:**
   Open your browser and go to `http://localhost:3000`.

## API Endpoints

- **Books:**

  - `GET /api/books` - List all books
  - `POST /api/books/create` - Create a new book
  - `PUT /api/books/:id` - Update a book
  - `DELETE /api/books/:id` - Delete a book
- **Owners:**

  - `GET /api/owners` - List all owners
  - `POST /api/owners/create` - Create a new owner
  - `PUT /api/owners/:id` - Update an owner
  - `DELETE /api/owners/:id` - Delete an owner
- **Users:**

  - `GET /api/users` - List all users
  - `POST /api/users/create` - Create a new user
  - `PUT /api/users/:id` - Update a user
  - `DELETE /api/users/:id` - Delete a user

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the Repository**
2. **Create a New Branch:**
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make Your Changes**
4. **Commit Your Changes:**
   ```bash
   git commit -am 'Add some feature'
   ```
5. **Push to the Branch:**
   ```bash
   git push origin feature/your-feature
   ```
6. **Open a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust the content based on any specific details or instructions for your project.

# Blogsite

A full-stack blogging platform built with Node.js, Express, and MySQL. This project allows users to create accounts, publish posts, and manage their content through a secure, token-based RESTful API.

## Features

- **User Authentication**: Secure user sign-up and login with password hashing using `bcrypt`.
- **JWT-Based Security**: Implements JSON Web Tokens (Access and Refresh Tokens) to protect routes and manage user sessions.
- **RESTful API**: A clean and organized API for all blog-related operations.
- **CRUD for Posts**: Full Create, Read, Update, and Delete functionality for user-specific blog posts.
- **Separation of Concerns**: A well-defined project structure that separates routes, controllers, and database logic.

## Tech Stack

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Relational database for storing user and blog data.
- **jsonwebtoken**: For generating and verifying access and refresh tokens.
- **bcrypt**: For hashing user passwords.
- **ES Modules**: Uses modern JavaScript `import`/`export` syntax.

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for a fast development experience.
- **Zustand**: For better state management.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm
- A running instance of MySQL

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/Blogsite.git
    cd Blogsite/Backend1
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `Backend1` directory and add the following variables. Be sure to use strong, unique secrets.

    ```env
    # Database Configuration
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name

    # JWT Secrets
    PORT=your_port
    ACCESS_TOKEN_SECRET=your_super_secret_access_key
    REFRESH_TOKEN_SECRET=your_super_secret_refresh_key
    ```

4.  **Start the server:**

    ```sh
    npm start
    ```

    The server will start on `http://localhost:5000` (or the port you have configured).

5.  **Set up and run the frontend:**
    ```sh
    # Open a new terminal
    cd ../Frontend1
    npm install
    npm run dev
    ```
    The frontend development server will start on `http://localhost:5173` (or another port specified by Vite).

## API Endpoints

### Authentication (`/api/auth`)

- `POST /signin`: Create a new user account.
- `POST /login`: Log in a user and receive an access token and a refresh token (in an `httpOnly` cookie).
- `POST /refresh`: Obtain a new access token using a valid refresh token.

### User-Specific Blogs (`/api/user/blog`)

_(Requires Authentication)_

- `GET /all`: Get all blogs for the authenticated user.
- `POST /create`: Create a new blog post.
- `PATCH /update`: Update an existing blog post.
- `DELETE /delete/:blogId`: Delete a specific blog post.

### Public Blogs (`/api/blog`)

- `GET /all`: Get all blog posts from all users.

## Project Structure

The backend follows a standard MVC-like pattern to keep the code organized and maintainable.

```
Backend1/
├── controller/   # Business logic
├── database/     # Database connection and schema
├── routes/       # API route definitions
└── index.js      # Main server entry point
```

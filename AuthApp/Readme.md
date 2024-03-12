# Node.js Authentication App with MongoDB

This is a Node.js authentication app with MongoDB as the backend. It provides basic authentication features like user registration, login, and logout.

## Features

- User registration with email and password
- User login with email and password
- Password hashing for security
- JSON Web Token (JWT) based authentication
- Middleware for protecting routes
- User logout functionality

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Bcrypt for password hashing

## Installation

1. **Clone this repository:**

   ```bash
   git clone https://github.com/yourusername/node-authentication-mongodb.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd node-authentication-mongodb
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Start the server:**

   ```bash
   npm start
   ```

   The server should now be running at `http://localhost:3000`.

## Usage

### Register a User

Send a POST request to `/api/register` with the following JSON payload:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

### Login

Send a POST request to `/api/login` with the following JSON payload:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

### Access Protected Route

To access a protected route, include the JWT token obtained during login in the `Authorization` header of your request.

```plaintext
Authorization: Bearer <your_jwt_token>
```

### Logout

Send a POST request to `/api/logout` to logout the user.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

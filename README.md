**Microservice based Login Application with Docker**

**Description:**
This project demonstrates the use of Docker to build, deploy, and manage a microservices-based application. The application is a simple login system consisting of a front-end website and a back-end API connected to a MongoDB database. The entire stack is containerized using Docker, allowing for easy deployment and scalability.


### Prerequisites
- Docker
- Docker Compose
- Node.js and npm (back-end)
- MongoDB
- Git
- Linux (Ubuntu)
- HTML, CSS, Javascript (front-end)
  
### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Priyadharsan16/demoMicroserviceApp.git
   cd demoMicroserviceApp

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Configuration](#configuration)
4. [Features](#features)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)
8. [Acknowledgments](#acknowledgments)

## Installation

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Priyadharsan16/demoMicroserviceApp.git
   cd demoMicroserviceApp
   ```
   
2. **Install dependencies:**
   ```bash
   ```
   
3. **Configure the project:**
   ```bash
   ```
   
4. **Run the project:**
   ```bash
   ```

## Usage

**Building the Docker Images:**

# Build the front-end container
docker build -t my-site .

# Navigate to the backend directory and build the back-end container
cd loginBackend
docker build -t my-backend .
cd ..

**Running the Application:**

# Start the services using Docker Compose
docker-compose up
The front-end will be accessible at http://localhost:8080.
The back-end API will be accessible at http://localhost:3000.


## Configuration

docker-compose.yml defines the services:

Backend Service (my-backend): Runs on port 3000 and connects to MongoDB.
Database Service (db): MongoDB instance running on port 27017.
Front-End Service (my-site): Serves the static front-end files on port 8080.

Environment Variables:

MONGO_URL: Specifies the MongoDB connection URL. Modify this in docker-compose.yml if needed.

Configuration Files:

Modify server.js in the loginBackend directory for backend-specific settings.

## Features

User Registration: Allows users to sign up with a username and password.

User Login: Allows users to log in with their registered credentials.

Persistent Data Storage: User data is stored in a MongoDB database.

Front-End and Back-End Separation: Utilizes Docker containers to separate the front-end and back-end services.


## Contributing

Fork the Repository:
Create a personal copy of the repository on GitHub.

Clone the Repository:
git clone https://github.com/Priyadharsan16/demoMicroservicesApp.git


## License

This project is licensed under the MIT License.

## Contact

For support or inquiries, please contact:

Email: 
sripriyadharsan@gmail.com
rnsanthosh4890@gmail.com
sanx.9702@gmail.com


## Acknowledgments

Docker: For containerizing the application.
MongoDB: For providing the database solution.
CSS: For front-end styling.
Node.js: For the back-end server.

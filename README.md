# 📦 BackIT – Digital Preservation System

BackIT is a fullstack application for uploading, managing, and preserving digital files. Developed as part of a technical challenge, the system includes:

- Backend in NestJS + Prisma + PostgreSQL

- Frontend in Next.js with TailwindCSS

- Docker Compose-based environment

- JWT-based authentication

- File upload and listing features

- Future integration with Archivematica*

# ⚙️ Requirements

- Docker and Docker Compose installed

- NodeJS

- Yarn Package Manager

# 🚀 How to Run the Project

- Clone the repository:

```
git clone https://github.com/lucas-pdnobrega/BackIT.git
cd ./BackIT
```

- Start the application with Docker:

```
docker compose up --build
```

This will start the PostgreSQL database, the NestJS backend, and the Next.js frontend, available at:

- Frontend: http://localhost:3000/home

- Backend: http://localhost:8000

# 🧪 Testing the App

You can:

- Create an account

- Log in

- Log out

# 🧱 About Archivematica Integration

Integration with Archivematica, responsible for digital preservation, was not completed due to its complex setup in Windows environments. Several attempts were made using:

- WSL2 (Windows Subsystem for Linux)

- Custom Docker Compose setup

- Conversion of the original Makefile

Despite progress, the technical challenge environment did not allow for a sufficient integration in time. However, mockup methods prepared for REST API integration exist in the archivematica.service.ts.

# 📂 Project Structure

```
/
├── backend/         # NestJS + Prisma
├── frontend/        # Next.js
├── docker-compose.yml
└── README.md
```

# 👨‍💻 Author

Lucas Palmeira Dantas da Nóbrega

- Internet Systems Student | Trainee Fullstack Developer 
- Contact: lucaspdn04@gmail.com
# Hikari - Illuminate Your Story
<img src="https://github.com/Rohit-Singh-Rawat/Hikari/assets/117940279/51285256-6cef-436c-a4ee-9b6b0affe886" alt="Hikari" style="width:400px;">




Hikari is a minimal web application designed for users to create, manage, and share their personal stories and blogs with ease.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Key Takeaways](#key-takeaways)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Features

- **🔐 User Authentication:** Secure sign-up and login functionality.
- **📖 Story Creation:** Easy-to-use editor for writing and formatting stories.
- **📱 Responsive Design:** Optimized for both desktop and mobile devices.
- **🔗 Story Sharing:** Share stories with others through unique URLs.

## Key Takeaways

Working on the Hikari project has been an enriching experience that provided valuable insights and skills in various areas:

- **Frontend Development**: Gained experience in React and TypeScript.
- **Backend Development**: laerned about prisma acclerate and pooling.
- **State Management**: Implemented efficient state management using React Query and Hooks.
- **Responsive Design**: Improved skills in Tailwind CSS.
- **Backend Development**: Used serverless architecture with Cloudflare Workers.
- **HonoJS, Prisma, NeonDB**: Explored differences from traditional Node.js setups.

### Problems and Solutions:
- **Image Storage**: Learned about Cloudflare Images and R2 for storing images, though faced issues due to lack of credit card for full implementation.
- **Editor Choice**: Preferred NoteBlock over Tiptap and Editor.js for its fast bootstrap. Future projects may use Tiptap for its extensive features.
- **Auth Context**: Initially used AuthContext but switched to a simple useUser hook with React Query for better caching.

This project has not only expanded my technical skills but also strengthened my problem-solving abilities and collaboration techniques.

## Getting Started

### Prerequisites


- [Node.js](https://nodejs.org/) - Make sure you have Node.js installed on your machine.
- [npm](https://www.npmjs.com/) - npm comes with Node.js, so if you have Node.js installed, npm should already be available.


### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Rohit-Singh-Rawat/Hikari.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Hikari
    ```
3. Install dependencies for both client and server:
    ```bash
    npm install
    cd client && npm install
    cd ../server && npm install
    ```

### Configuration

Create a `.env` file in the root directory and add the following variables:


DATABASE_URL="DB_URL_STRING"

add vars to wrangler.toml
DATABASE_URL="PRISMA_ACCLERATE_URL"
JWT_SECRET="JWT_STRING"

### Running the Application

1. Start the development server:
    ```bash
    cd ../server && npm run dev
    ```

2. Start the development client:
    ```bash
    cd client && npm run dev
    ```
3. Open your browser and visit `http://localhost:3000` to view the application.

## Project Structure

```
Hikari/
|── client/      # Frontend code
|── server/      # Backend code
|── common/        # Common Code for zod Type
└── README.md    # Project documentation
```


## Contact

For any inquiries, please contact [Rohit Singh Rawat](mailto:rohitzrawat2003@gmail.com).

---



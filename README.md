# Real-Time Chat Application

A real-time chat application built using React.js, Node.js, Express.js, and Socket.IO. This project enables users to communicate instantly through live messaging with a modern chat interface.

## Features

- Real-time messaging using Socket.IO
- Multi-user chat support
- Username-based chat system
- Live message synchronization
- Message timestamps
- Modern responsive UI
- Sender and receiver message styling

## Technologies Used

### Frontend
- React.js
- CSS

### Backend
- Node.js
- Express.js
- Socket.IO

## Project Structure

mern-chat-app/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── index.js
│   └── package.json

## Installation

### Clone Repository

```bash
git clone https://github.com/adarshadarsh6305-a11y/mern-chat-app.git
```

### Backend Setup

```bash
cd server
npm install
node index.js
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

## Application Workflow

1. User enters username
2. User joins chat
3. Messages are sent using Socket.IO
4. Server broadcasts messages instantly to all connected users

## Future Improvements

- Chat rooms
- Authentication system
- Online user status
- Database integration
- File sharing support

## Author

M Adarsh


import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        author: username,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);

      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, []);

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h2>Join Chat</h2>

          <input
            type="text"
            placeholder="Enter username..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />

          <button
            onClick={() => {
              if (username !== "") {
                setShowChat(true);
              }
            }}
          >
            Join Chat
          </button>
        </div>
      ) : (
        <div className="chatContainer">
          <h2>Real-Time Chat Application</h2>

          <div className="chat-box">
            {messageList.map((msg, index) => {
              return (
                <div
                  className={
                    username === msg.author
                      ? "message own"
                      : "message other"
                  }
                  key={index}
                >
                  <div className="message-content">
                    <p>{msg.message}</p>
                  </div>

                  <div className="message-meta">
                    <p>{msg.time}</p>
                    <p>{msg.author}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="input-area">
            <input
              type="text"
              value={message}
              placeholder="Type message..."
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />

            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
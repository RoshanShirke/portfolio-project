
import { useEffect, useState } from "react";

function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="admin">
      <h1>Admin Dashboard</h1>

      {messages.length === 0 ? (
        <p>No messages found</p>
      ) : (
        messages.map((msg, index) => (
          <div key={index} className="message-card">
            <h3>{msg.name}</h3>
            <p>{msg.email}</p>
            <p>{msg.message}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;
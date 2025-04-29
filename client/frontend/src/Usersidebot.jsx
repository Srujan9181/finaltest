import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles/Usersidebot.module.css'; // your custom CSS

function Usersidebot() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [activate, setActivate] = useState(false);
  const [displayMessages, setDisplayMessages] = useState([]);
  const [userid, setUserid] = useState('');

  useEffect(() => {
    const user_id = localStorage.getItem('userid');
    if (user_id) {
      setUserid(user_id);
      setActivate(true);
      fetchMessages(user_id);
    }
  }, []);

  async function fetchMessages(user_id) {
    try {
      const response = await axios.post("http://localhost:5353/userdetail/post", {
        userid: user_id,
      });
      if (response.data.result) {
        setDisplayMessages(response.data.result);
        localStorage.setItem('messages', JSON.stringify(response.data.result));
      }
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  }

  async function handleUser(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5353/userdetail/post", {
        name,
        mobile,
        email,
      });

      if (response.data.result !== undefined) {
        setDisplayMessages(response.data.result);
        setUserid(response.data.userid);
        localStorage.setItem('userid', response.data.userid);
        localStorage.setItem('messages', JSON.stringify(response.data.result));
        setActivate(true);
      }
    } catch (err) {
      alert("API Error");
    }
  }

  async function sendMessageFromUser() {
    try {
      await axios.post("http://localhost:5353/userdetail/message", {
        sender: userid,
        message: message,
      });

      const newMessage = { sender: userid, message: message, time: new Date().toISOString() };
      const updatedMessages = [...displayMessages, newMessage];
      setDisplayMessages(updatedMessages);
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      setMessage('');
    } catch (err) {
      console.error('Error sending message', err);
    }
  }

  function logout() {
    localStorage.removeItem('userid');
    localStorage.removeItem('messages');
    setUserid('');
    setActivate(false);
    setDisplayMessages([]);
  }

  return (
    <div>
      {!activate ? (
        <form>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          /><br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <button onClick={handleUser}>Thank you</button>
        </form>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessageFromUser}>Send</button>
          <button onClick={logout}>Logout</button>
        </div>
      )}

      <div>
        {displayMessages.length > 0 ? (
          displayMessages.map((item, index) => (
            <div key={index}>
              <p className={item.sender === 'admin' ? styles.admin : styles.user}>
                {item.message}
              </p>
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
    </div>
  );
}

export default Usersidebot;

import { useState } from 'react';
import logo from './assets/farmhub-logo.png';
import './styles.css';

export default function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="app">
      <header>
        <img src={logo} alt="AgTech Farm Hub" className="logo" />
        <h1>Mkulima Connect</h1>
      </header>

      <div className="chat">
        {messages.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
      </div>

      <form className="message-form">
        <input 
          type="text" 
          placeholder="Ask about crop prices..." 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
        }

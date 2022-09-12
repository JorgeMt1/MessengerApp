import '../App.css';
import React, {useState, useEffect} from 'react';
import SendMessage from './SendMessage'
import { db, auth } from '../firebase'
import SignOut from './SignOut'

function ChatRoom() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    db.collection('msgApp').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))  
    }) }, [])
  return (
    <div>
      <header>
        <h1>Messenger</h1>
      </header>
    <SignOut />
    <main>        
        {messages.map(({ id, text, uid }) => (
          <p key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>{text}</p>
        ))}
        <SendMessage />
    </main>
    </div>
  );
}

export default ChatRoom;
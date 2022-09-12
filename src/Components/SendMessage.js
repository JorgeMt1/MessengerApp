import '../App.css';
import React, {useState} from 'react';
import { db, auth } from '../firebase'
import firebase from 'firebase/compat/app'


function SendMessage() {

  const [message, setMessage] = useState('')

  async function sendMessage(e) {

    e.preventDefault();

    if(!message){
 
        return;
      }

      const { uid } = auth.currentUser;
      const id = Math.floor(Math.random() * 1000);

      await db.collection('msgApp').add({

          text: message,
          id,
          uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()

      })
      setMessage('');
  }
  return (
      <div>
          <form onSubmit={sendMessage}>
              <div className="sendMsg">
                  <input placeholder='Message...' type="text" value={message} onChange={e => setMessage(e.target.value)} />
                  <button type="submit">Send</button>
              </div>
          </form>
      </div>
  )
}

export default SendMessage;
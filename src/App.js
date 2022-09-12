import './App.css';
import ChatRoom from './Components/ChatRoom';
import SignIn from './Components/SignIn'
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'


function App() {
  const [user] = useAuthState(auth)
  return (

    <div className="App">
    

      {user ? <ChatRoom /> : <SignIn />} 


    </div>
  );
}

export default App;

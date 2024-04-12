import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    isConnected? <HomePage />: <LoginPage setIsConnected={setIsConnected} />
  )
}

export default App

import React from 'react'
import { Logo } from './components/logo'
import { Dialog } from '@reach/dialog'
import './App.css';

function App() {
  const [openModal, setOpenModal] = React.useState('none')
  return (
    <div>
    <Logo width='80' height='80'/>
      <h1>Bookshelf</h1>
      <button onClick={() => setOpenModal('login')}>Login</button>
      <button onClick={() => setOpenModal('register')}>Register</button>
      <Dialog aria-label='Login Form' isOpen={openModal === 'login'}>
        <div>
          <button onClick={()=>setOpenModal('none')}>Close</button>
          <h3>Login</h3>
        </div>
      </Dialog>
      <Dialog aria-label='Register Form' isOpen={openModal === 'register'}>
        <div>
          <button onClick={()=>setOpenModal('none')}>Close</button>
          <h3>Register</h3>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
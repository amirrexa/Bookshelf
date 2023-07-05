import React from 'react'
import { Logo } from './components/logo'
import { Dialog } from '@reach/dialog'
import './App.css';

function LoginForm({onSubmit, buttonText}) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value
    })
  }

  return(
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' />
        </div>
        <div>
          <button type='submit'>{buttonText}</button>
        </div>
      </form>
  )
}

function App() {
  const [openModal, setOpenModal] = React.useState('none')

  const login = (formData) => console.log(formData)
  const register = (formData) => console.log(formData)

  return (
    <div>
    <Logo width='80' height='80'/>
      <h1>Bookshelf</h1>
      <button onClick={() => setOpenModal('login')}>Login</button>
      <button onClick={() => setOpenModal('register')}>Register</button>
      <Dialog aria-label='Login Form' isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
          <h3>Login</h3>
          <LoginForm onSubmit={login} buttonText='Login'/>
        </div>
      </Dialog>
      <Dialog aria-label='Register Form' isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
          <h3>Register</h3>
          <LoginForm onSubmit={register} buttonText='Register'/>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
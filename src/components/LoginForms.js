import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  async function handleLogin(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3002/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
      
    });
    
    if (response.ok) {
      const user = await response.json();
      console.log(user)
      navigate('/home');
      // Hacer algo con el usuario (por ejemplo, redireccionar a la página de inicio)
    } else {
      const data = await response.json();
      setError(data.message);
      
    }
  }

  return (
    <form onSubmit={handleLogin}>
      {error && <div>{error}</div>}
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  )
};


export default LoginForm;
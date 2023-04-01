import './App.css';
import LoginForm from './components/LoginForms';
import RegisterForm from './components/registerForm';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Home from './components/home';

function App() {
return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
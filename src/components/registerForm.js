import React from 'react';
import './registerForm.css';

class RegisterForm extends React.Component {
  render() {
    return (
      <div className="register-form-container">
        <div className="form-container">
          <h2 className="form-title">Formulario de Registro</h2>
          <form>
            <div className="form-field">
              <label htmlFor="nombre">Nombres:</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-field">
              <label htmlFor="apellidos">Apellidos:</label>
              <input type="text" id="apellidos" name="apellidos" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="contraseña">Contraseña:</label>
              <input type="password" id="contraseña" name="contraseña" minLength={6} required />
            </div>
            <div className="form-field">
              <label htmlFor="confirmar-contraseña">Confirme contraseña:</label>
              <input type="password" id="confirmar-contraseña" name="confirmar-contraseña" minLength={6} required />
            </div>
            <div className="form-field">
              <label htmlFor="rol">Rol:</label>
              <select id="rol" name="rol" required>
              <option value="">Seleccionar rol</option>
              <option value="admin">Administrador</option>
              <option value="worker">Trabajador</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="submit">Registrar</button>
              <p>¿Ya tiene una cuenta? <a href="xxx">Iniciar sesión</a></p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
// src/NeonWeb.js
import React from 'react';
import './index.css'; 

const NeonWeb = () => {
  return (
    <>
      <header>
        <h1 className="neon-text">Neon Web</h1>
      </header>

      <nav>
        <a href="#">Inicio</a>
        <a href="#">Acerca de</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
      </nav>

      <div className="container">
        <aside className="left-aside">
          <p>Contenido del aside izquierdo</p>
        </aside>

        <main className="main-body">
          <div className="neon-border">
            <h2 className="neon-text">¡Bienvenido a Neon Web!</h2>
            <p>Tu contenido aquí...</p>
          </div>
        </main>

        <aside className="right-aside">
          <p>Contenido del aside derecho</p>
        </aside>
      </div>

      <footer>
        <p>&copy; 2024 Neon Web. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default NeonWeb;


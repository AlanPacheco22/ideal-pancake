import Image from "next/image";

export default function Home() {
  return (
    <body>
        <header>
            <div class="container">
                <h1>Neo-Pancake</h1>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Perfil</a></li>
                        <li><a href="#">Notificaciones</a></li>
                        <li><a href="#">Mensajes</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    
        <div class="search-container">
            <form class="search-form">
                <input type="text" placeholder="Buscar..."></input>
                <button type="submit"><i class="fas fa-search"></i>Buscar</button>
            </form>
        </div>
    
        <aside class="left-aside"></aside>
        <aside class="right-aside"></aside>
    
        <div class="container">
            <section class="content">
                <div class="post">
                    <h2>Publicación 1</h2>
                    <p>Contenido de la publicación.</p>
                </div>
                <div class="post">
                    <h2>Publicación 2</h2>
                    <p>Contenido de la publicación.</p>
                </div>
                <div class="post">
                    <h2>Publicación 3</h2>
                    <p>Contenido de la publicación.</p>
                </div>
                <div class="post">
                    <h2>Publicación 4</h2>
                    <p>Contenido de la publicación.</p>
                </div>
                <div class="post">
                    <h2>Publicación 5</h2>
                    <p>Contenido de la publicación.</p>
                </div>
            </section>
        </div>
    
        <footer>
            <div class="container">
                <p>© 2024 Página Neo-Pancake</p>
            </div>
        </footer>
    </body>
   
    
  );
}

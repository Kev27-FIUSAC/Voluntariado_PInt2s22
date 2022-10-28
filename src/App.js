/* eslint-disable react/jsx-pascal-case */
import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap' 
import Instalacion from './Java/Instalacion/Instalacion'
import Ides_Java from './Java/Ides/Ides';
import Basico_java from './Java/Programacion/Nocion/basico-java';
import Clase_java from './Java/Programacion/Clases/clase_java';
import Poo_java from './Java/Programacion/POO/poo_java';
import Componente_java from './Java/Programacion/Interfaz/Componentes/componentes_java';
import Layout_java from './Java/Programacion/Interfaz/Layouts/layout_java';
import { Link, Route, Routes  } from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#3e0d57' }}>
                  <div class="container-fluid">
                      <a class="navbar-brand" href="#">Voluntariado: Guia para estudiantes principiantes</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                          <ul class="navbar-nav">
                              <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                          class="bi bi-filetype-java" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd"
                                              d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.521 15.175a1.321 1.321 0 0 1-.082-.466h.765a.577.577 0 0 0 .073.27.499.499 0 0 0 .454.246c.19 0 .33-.055.422-.164.092-.11.138-.265.138-.466V11.85h.79v2.725c0 .44-.118.774-.357 1.005-.236.23-.564.345-.984.345a1.59 1.59 0 0 1-.568-.094 1.144 1.144 0 0 1-.408-.266 1.139 1.139 0 0 1-.243-.39Zm3.972-.354-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028H5.493Zm1.178-.59-.49-1.616h-.035l-.49 1.617h1.015Zm2.342 1.618h.952l1.327-3.999h-.878l-.888 3.138h-.038L8.59 11.85h-.917l1.34 3.999Zm3.087-1.028-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028H12.1Zm1.178-.59-.49-1.616h-.035l-.49 1.617h1.015Z" />
                                      </svg> Java
                                  </a>
                                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                      <li><a class="dropdown-item" href="/instalacion-java">Instalación</a></li>
                                      <li><a class="dropdown-item" href="/ides-java">IDES</a></li>
                                      <li>
                                          <a class="dropdown-item">
                                              Programación <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                  fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                  <path
                                                      d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                              </svg>
                                          </a>
                                          <ul class="dropdown-menu dropdown-submenu dropdown-menu-dark dropend">
                                              <li>
                                                  <a class="dropdown-item" href="/nocion-java"
                                                      title="Algoritmos &#013Variables y constantes &#013Estructuras de control &#013Metodos y funciones &#013Comentarios &#013Api de Java">Nociones
                                                      Basicas</a>
                                              </li>
                                              <li>
                                                  <a class="dropdown-item" href="/clases-java"
                                                      title="Estructura paquetes y clases &#013Math &#013Scanner &#013Files &#013Gson">Clases</a>
                                              </li>
                                              <li>
                                                  <a class="dropdown-item" href="/poo-java"
                                                      title="Objetos &#013Herencia &#013Polimorfismo &#013Abstracción &#013Encapsulamiento">POO
                                                  </a>
                                              </li>
                                              <li>
                                                  <a class="dropdown-item">Java Swing <svg xmlns="http://www.w3.org/2000/svg"
                                                      width="16" height="16" fill="currentColor" class="bi bi-caret-down"
                                                      viewBox="0 0 16 16">
                                                      <path
                                                          d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                                  </svg> </a>
                                                  <ul class="dropdown-menu dropdown-submenu dropdown-menu-dark">
                                                      <li>
                                                          <a class="dropdown-item" href="/componente-java">Componentes</a>
                                                      </li>
                                                      <li>
                                                          <a class="dropdown-item" href="/layout-java">Layouts</a>
                                                      </li>
                                                  </ul>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
              <div>
                  <div class="container-fluid">
                      <br></br>
                      <Routes>
            <Route path="/instalacion-java" element={<Instalacion />} />
            <Route path="/ides-java" element={<Ides_Java />} />
            <Route path="/nocion-java" element={<Basico_java />} />
            <Route path="/clases-java" element={<Clase_java />} />
            <Route path="/poo-java" element={<Poo_java />} />
            <Route path="/componente-java" element={<Componente_java />} />
            <Route path="/layout-java" element={<Layout_java />} />
          </Routes>
        </div>
      </div>
      </header>
      
    </div>

  );
}

export default App;

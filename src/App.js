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
import Instalacion_python from './Python/Instalacion/instalacion_python';
import Ides_python from './Python/Ides/Ides_python';
import Nocion_python from './Python/Programacion/Nociones/nocion_python';
import { Link, Route, Routes } from 'react-router-dom';

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
                                        <li><Link class="dropdown-item"to="/Voluntariado_PInt2s22/instalacion-java">Instalación</Link></li>
                                        <li><a class="dropdown-item" href="/Voluntariado_PInt2s22/ides-java">IDES</a></li>
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
                                                    
                                                        <Link class="dropdown-item"to="/Voluntariado_PInt2s22/nocion-java">Nociones Básicas</Link>
                                                </li>
                                                <li>
                                                    
                                                        <Link class="dropdown-item"to="/Voluntariado_PInt2s22/clases-java">Clases</Link>
                                                </li>
                                                <li>
                                                    
                                                    <Link class="dropdown-item"to="/Voluntariado_PInt2s22/poo-java">Programacion Orientada a Objetos</Link>
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
                                                      
                                                            <Link class="dropdown-item"to="/Voluntariado_PInt2s22/componente-java">Componentes</Link>
                                                        </li>
                                                        <li>
                          
                                                            <Link class="dropdown-item"to="/Voluntariado_PInt2s22/layout-java">Layout</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-filetype-py" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM0 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H.79v1.342H0V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.227-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H.788v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855l-1.339 2.464Z" />
                                        </svg> Python
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li>
                                        <Link class="dropdown-item"to="/Voluntariado_PInt2s22/instalacion-python">Instalación</Link>
                                        </li>
                                        <li>
                                        <Link class="dropdown-item"to="/Voluntariado_PInt2s22/ides-python">Editores de Texto y IDES</Link>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Programación <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                </svg>
                                            </a>
                                            <ul class="dropdown-menu dropdown-submenu dropdown-menu-dark dropend">
                                                <li>
                                                    
                                                        <Link class="dropdown-item"to="/Voluntariado_PInt2s22/nocion-python">Nociones Basicas</Link>
                                                </li>
                                                <li>
                                                    
                                                        <Link class="dropdown-item"to="/Voluntariado_PInt2s22/reservadas-python">Palabras Reservadas</Link>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="Python/python-flask.html">Flask </a>
                                                    <Link class="dropdown-item"to="/Voluntariado_PInt2s22/flask">Flask</Link>
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
                            <Route exact path='/Voluntariado_PInt2s22/instalacion-java' element={<Instalacion />} />
                            <Route exact path='/Voluntariado_PInt2s22/ides-java' element={<Ides_Java />} />
                            <Route exact path='/Voluntariado_PInt2s22/nocion-java' element={<Basico_java />} />
                            <Route exact path='/Voluntariado_PInt2s22/clases-java' element={<Clase_java />} />
                            <Route exact path='/Voluntariado_PInt2s22/poo-java' element={<Poo_java />} />
                            <Route exact path='/Voluntariado_PInt2s22/componente-java' element={<Componente_java />} />
                            <Route exact path='/Voluntariado_PInt2s22/layout-java' element={<Layout_java />} />
                            <Route exact path='/Voluntariado_PInt2s22/instalacion-python' element={<Instalacion_python />} />
                            <Route exact path='/Voluntariado_PInt2s22/ides-python' element={<Ides_python />} />
                            <Route exact path='/Voluntariado_PInt2s22/nocion-python' element={<Nocion_python />} />

                        </Routes>
                    </div>
                </div>
      </header>
      
    </div>

  );
}

export default App;

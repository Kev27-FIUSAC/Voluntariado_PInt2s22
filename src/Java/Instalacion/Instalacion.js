import React, { Component } from 'react';
import './Instalacion.css';

export default class Instalacion extends Component {
    constructor(p) {
        super(p)
    }


    render() {
        return (
            <div class="div-central container">
                <div class="stater-template">
                    <h1>Instalación de Java - Windows</h1>
                    <h3 class="lead">Guia de Instalacion de java JDK</h3>
                </div>
                <br></br>
                <div class="form-group">
                    <h2>Importante</h2>
                    <label>Para acceder a las descargar de Oracle es importante tener una cuenta registrada, si ya dispones de una cuenta pueder ir al siguienta paso  <a class="button" href="#descargar">Descargar JDK</a></label>
                </div>
                <br></br>
                <div class="form-group">
                    <h3>Crear cuenta Oracle</h3>
                </div>
                <br></br>
                <div>
                    <a class="button" href="https://www.oracle.com/index.html">Ir pagina principal de Oracle</a>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>Estando en la pagina principal de Oracle, dirijase en la barra de navegacion</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/NTFL6Sm/nav-bar.png" alt="nav-bar" border="0" />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>Dar click en el boton "View Accounts"</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/Ytf6KLc/Screenshot-1.png" alt="Screenshot-1" border="0" />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>Seleccione la seccion Oracle Account y presione el boton "Create an Account"</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/WzS0JHV/Screenshot-2.png" alt="Screenshot-2" border="0" />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>Sera dirigido a la pagina de crear cuenta</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/YcFbz1z/Screenshot-3.png" alt="Screenshot-3" border="0" />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>Complete el formulario con sus datos, luego de completarlo presione el boton "Crear una Cuenta"</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/FWmN5cN/Screenshot-4.png" alt="Screenshot-4" border="0" />
                    </div>
                </div>
                <br></br>
                <div class="form-group">
                    <a name="descargar"><h2>Descargar Java JDK</h2></a>
                </div>
                <div class="form-group">
                    <a class="button" href="https://www.oracle.com/java/technologies/downloads/index.html">Ir pagina oficial de descargas Oracle</a>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>Este caso con java, en la pagina oficial de Oracle puedes elegir la version de java que deseas utilizar para programar en java, debe de tomar en cuenta que las ultimas versiones de java solo admiten equipos con processadores y sistemas operativos de 64-bits. </label>
                        <br></br>
                    </div>
                    <div class="col-8">
                        <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">

                                    <img src="https://i.ibb.co/j3Kkm9G/java18.png" alt="java18" class="d-block w-100" />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://i.ibb.co/gZcmJcK/java17.png" class="d-block w-100" alt="java17" />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://i.ibb.co/jbFgKzR/java8.png" alt="java8" class="d-block w-100" />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://i.ibb.co/qsNjQb6/java11.png" alt="java11" class="d-block w-100" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
                <br></br>
                <div class="form-group">
                    <label>Una vez elegida la version que desa instalar proceda con la descarga, se le solicitara que ingrese su cuenta de oracle.</label>
                </div>
                <br></br>
                <div>
                    <a name="Windows"><h2>Instalacion - Windows</h2></a>

                    <div class="row">
                        <div class="col-4">
                            <label>Una vez descargado el instalador, proceda a ejecutarlo</label>
                        </div>
                        <div class="col-8">
                            <img src="https://i.ibb.co/SQpvnDk/instalacion0.png" alt="instalacion0" border="0" />
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>Proceda presionar boton siguiente</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/Zxvv4XQ/instalacion1.png" alt="instalacion1" border="0" />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>En esta ventana verifique la ubicacion donde se instalara java, si quiere cambiar la ubicacion presione el boton change y elija la nueva ubiacion</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/NF66bKY/instalacion2.png" alt="instalacion2" border="0" />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>Espere que la instalacion termine</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/mCNpSCX/instalacion3.png" alt="instalacion3" border="0" />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>Una vez finalizado la instalacion, presione el boton close</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/dDf1k6K/instalacion4.png" alt="instalacion4" border="0" />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>Para comprobar que se haya instalado java, presione la tecla Windows + R para abrir el cuadro dialogo Ejecutar</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/M2RKfm6/instalacion5.png" alt="instalacion5" border="0" />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>Escriba "CMD.exe" para abrir la consola de windows y presione Aceptar o Enter</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/ftNC5RK/instalacion6.png" alt="instalacion6" border="0" />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-4">
                        <label>En la consola, escriba el comando "java -version" para verificar que se haya instalado.</label>
                    </div>
                    <div class="col-8">
                        <img src="https://i.ibb.co/tLJJf3t/instalacion7.png" alt="instalacion7" border="0" />
                    </div>
                </div>
                <br></br>

            </div>
        )
    }
}
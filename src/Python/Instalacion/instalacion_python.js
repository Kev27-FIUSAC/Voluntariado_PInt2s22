import React, { Component } from 'react';
import './instalacion_python.css';

export default class Instalacion_python extends Component {
    constructor(p) {
        super(p)
    }


    render() {
        return (
            <div class="div-central container">
                <div class="stater-template">
                    <h1>Instalación de Python - Windows</h1>
                    <h3 class="lead">Interfaces graficas por medio de Java
                        Teoria y algunos componentes
                    </h3>
                </div>

                <div>
                    <h2>Descargar Python</h2>
                    <label>Advertencia: Las ultimas versiones de Python no admiten sistemas operativos Windows inferiores a Windows 8.1 y Windows Server 2012</label>
                    <br/>
                        <a class="button" href="https://www.python.org/downloads/">Ir pagina descarga</a>


                </div>
                <br/>
                    <div>
                        <img src="https://logos-world.net/wp-content/uploads/2021/10/Python-Logo.png" class="img-fluid" alt="python" />
                    </div>


                    <br/>
                        <div class="row">
                            <div class="col-4">
                                <label>Luego de que se haya terminado la descarga, presione click en la descarga en su navegador Chrome</label>
                            </div>
                            <div class="col-8">
                                <img src="https://i.ibb.co/kXBV611/instalacion01.png" alt="instalacion01" class="img-fluid" border="0"/>
                            </div>
                        </div>
                        <br/>
                            <div class="row">
                                <div class="col-4">
                                    <div>
                                        <label>En la ventana de instalacion, si ya tiene una version anterior instalada de python seleccione la opcion "Upgrade Now"</label>
                                    </div>
                                    <br/>
                                        <div>
                                            <label>De lo contrario, seleccione la opcion "Customize installation"</label>
                                        </div>

                                </div>
                                <div class="col-8">
                                    <img src="https://i.ibb.co/nDvpcG7/python1.png" class="img-fluid" alt="python1" border="0"/>
                                </div>
                            </div>
                            <br/>
                                <div class="row">
                                    <div class="col-4">
                                        <div>
                                            <label>En la ventana de Optional Features, seleccione las opciones que desea que se instale junto la instalacion de Python, el IDE usted puede elegir su preferido, visite  para ver mas IDES para programar Python</label>
                                        </div>
                                        <br/>
                                            <div>
                                                <label>Le recomendamos que deje la opcion seleecionada "pip" ya que es el administrador de paquetes de Python. Sirve para instalar y administrar paquetes de software escritos en</label>
                                            </div>

                                    </div>
                                    <div class="col-8">
                                        <img src="https://i.ibb.co/Y3jTZJK/python2.png" class="img-fluid" alt="python2" border="0"/>
                                    </div>
                                </div>
                                <br></br>
                                <br/>
                                    <div class="row">
                                        <div class="col-4">
                                            <div>
                                                <label>En la ventana de Advanced Opcions, seleccione las opciones que desea que se instale junto la instalacion de Python</label>
                                            </div>
                                            <br/>
                                                <div>
                                                    <label>Le recomendamos que deje las opciones  seleccionadas marcadas en el rectangulo de la imagen. Si ustede desea instalar los archivos binarios seleccionelos, tambien puede cambiar la ubicacion de la instalacion.</label>
                                                </div>

                                        </div>
                                        <div class="col-8">
                                            <img src="https://i.ibb.co/N6hc0zr/python3.png" class="img-fluid" alt="python3" border="0"/>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                        <div class="row">
                                            <div class="col-4">
                                                <div>
                                                    <label>Espere mientras se termine la instalacion de Python.</label>
                                                </div>

                                            </div>
                                            <div class="col-8">
                                                <img src="https://i.ibb.co/s9LsqQQ/python4.png" class="img-fluid" alt="python4" border="0"/>
                                            </div>
                                        </div>
                                        <br/>
                                            <br/>
                                                <div class="row">
                                                    <div class="col-4">
                                                        <div>
                                                            <label>Instalacion finalizada</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-8">
                                                        <img src="https://i.ibb.co/rMFw87g/python5.png" class="img-fluid" alt="python5" border="0"/>
                                                    </div>
                                                </div>
                                                <br/>
                                                <br/>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div>
                                                                <label>Para verificar que se haya instalado python en windows, presione la combinacion de tecla Windows + R para abrir la ventan de ejecutar</label>
                                                            </div>
                                                            <br/>
                                                                <div>
                                                                    <label>En la ventana de ejecutar, escriba "cmd.exe" para ejecutar la consola</label>
                                                                </div>
                                                        </div>
                                                        <div class="col-8">
                                                            <img src="https://i.ibb.co/SBS6TMc/python6.png" class="img-fluid" alt="python6" border="0"/>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <br/>
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <div>
                                                                    <label>En la consola, escriba el comando "py --version" para verficar que se haya instalado python en windows.</label>
                                                                </div>

                                                            </div>
                                                            <div class="col-8">
                                                                <img src="https://i.ibb.co/pnP6bX4/python7.png" class="img-fluid" alt="python7" border="0"/>
                                                            </div>
                                                        </div>



                                                        <br/>
                                                        </div>
                                                        )
    }
}
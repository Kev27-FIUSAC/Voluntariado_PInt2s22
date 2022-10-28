import React, { Component } from 'react';
import './layout.css';

export default class Layout_java extends Component {
    constructor(p) {
        super(p)
    }


    render() {
        return (
            <div class="div-central container">

                <div class="div-master">

                    <div class="row">
                        {/*<!--Sección de minidefiniciones-->*/}
                        <div class="col-3 div-aclaraciones">
                            <div class="card text-dark opacity-75">
                                <div class="card-body text-dark">
                                    <h5 class="card-title text-dark">setSize</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Metodos</h6>
                                    <p class="card-text text-dark">
                                        Este metodo se usa para establecer el tamaño de cualquier componente en pixeles
                                        setSize(ancho,alto);

                                        <b>Ejemplo</b> <br />
                                        setSize(200,100)

                                    </p>
                                </div>
                            </div>
                            <br />
                        </div>
                        <div class="col-9">
                            <div class="stater-template">
                                <h1>Layouts Java Swing</h1>
                                <p class="lead">
                                    La manera fácil de ordenar los componentes
                                </p>
                            </div>

                            <div>
                                <h4>Introducción</h4>
                                Java soporta diferentes tipos de layouts o distribuciones para organizar los componentes, basta con conocer
                                el funcionamiento y algunos metodos de los layouts para poner en marcha una interfaz de usuario con código.
                                Si bien existe el drag and drop, aprender sobre layouts nos permite entender de cerca la lógica detrás de
                                la programación orientada a objetos
                                <br />
                                <br />
                                <h4>FlowLayout</h4>
                                Este layout distribuye los elementos de forma automatica, en función del orden en el que son añadidos al panel
                                y de el tamaño del componente, inicia siempre con el primer componente añadido en el centro, cuando tenga un segundo
                                componente analizará el tamaño del mismo para ver si puede ser insertado al lado del primer componente o debajo, y así
                                sucesivamente.
                                <br />
                                <br />
                                <b>NOTA:</b>
                                <br />JPanel por defecto utiliza FlowLayout
                                <br />
                                <br />
                                Cuando Utilizamos FlowLayout basta con darle el tamaño al componente para que este pueda ser añadido sin problemas.
                                <br />
                                <img src="https://i.ibb.co/6RhVCMg/flowlayout-code.png" class="img-fluid" alt="flowlayout-code" border="0" />
                                <br />
                                <center>
                                    <img src="https://i.ibb.co/5G09m1h/flowlayout-muestra.png" class="img-fluid" alt="flowlayout-muestra" border="0" />
                                </center>
                                <br />
                                Como puedes notar, todos los elementos se ponen en el panel en el orden en el que son añadidos. y considerando
                                el tamaño de los componentes.
                                <br />
                                <br />


                                <h4>BorderLayout</h4>
                                Distribuye los elementos utilizando el sistema de puntos cardinales NORTE, SUR, ESTE y OESTE e incluye la posición CENTRO.
                                Este distribución es especialmente útil para contener otras distribuciones de componentes
                                o layouts dentro de si misma.
                                <br />
                                Veamos el funcionamiento de BorderLayout, y lo haremos a traves de paneles.
                                <br />
                                <img src="https://i.ibb.co/kMvyQx7/Border-Layout-code.png" class="img-fluid" alt="Border-Layout-code" border="0" />
                                <br />
                                Acá vemos muy pequeños en los bordes los paneles coloreados, sin embargo, al agregarles
                                componentes se hacen tan grandes como el compoente lo requiera, pues previamente se le asigna al componente
                                un tamaño con el metodo setSize()
                                <br />
                                <br />
                                <b>NOTA:</b><br />
                                Algo a tener en cuenta es que solo cambiamos la manera en la que el JFrame se distribuye, pero cada JPanel
                                Como lo dijimos anteriormente tiene por defecto FlowLayout y acá lo sigue conservando a menos que decidamos quitarlo.

                                <center>
                                    <img src="https://i.ibb.co/Vwh8wZ0/Border-Layout-muestra.png" class="img-fluid" alt="Border-Layout-muestra" border="0" />
                                </center>
                                <br />
                                Y así luce al agregar botón.
                                <center>
                                    <img src="https://i.ibb.co/qWM21qp/muestra-borderlayout-boton.png" class="img-fluid" alt="muestra-borderlayout-boton" border="0" />
                                </center>
                                <br />
                                <br />

                                <h4>GridBagLayout</h4>
                                Este layout es uno de los mas dificil de comprender pero es de los más poderosos pues permite organizar de cualquier manera
                                los componentes, basandose en un sistema de rejas y muchisimas opciones de redimensión de componentes.
                                <br />   <br />
                                Cuando usamos GridBagLayout es muy util tener un diagrama de como luce la aplicación en nuestra mente. En este caso, haremos
                                un ejemplo sencillo:
                                <center>
                                    <img src="https://i.ibb.co/Ln3jhVS/Croquis-Grid-Bag.png" class="img-fluid" alt="Croquis-Grid-Bag" border="0" />
                                </center>
                                <br />
                                Como podemos notar nuestro sistema tiene 5 columnas, desde 0 hasta 4 y además
                                tiene 10 filas, desde 0 hasta 9. Ahora pasemos al codigo:
                                <br /> <br />
                                <ul class="list-group list-group-flush bg-transparent">
                                    <li class="list-group-item bg-transparent text-light">2 JLabel</li>
                                    <li class="list-group-item bg-transparent text-light">1 JTextArea</li>
                                    <li class="list-group-item bg-transparent text-light">10 JButton</li>
                                    <li class="list-group-item bg-transparent text-light">2 JComboBox</li>
                                </ul>
                                <div class="row" style={{ padding: '20px' }}>
                                    <div class="col-6">
                                        <div class="card text-dark opacity-75">
                                            <div class="card-body text-dark">
                                                <h5 class="card-title text-dark">gridx</h5>
                                                <p class="card-text text-dark">
                                                    Posición del componente en x
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="card text-dark opacity-75">
                                            <div class="card-body text-dark">
                                                <h5 class="card-title text-dark">gridy</h5>
                                                <p class="card-text text-dark">
                                                    Posición del componente en y
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="card text-dark opacity-75">
                                            <div class="card-body text-dark">
                                                <h5 class="card-title text-dark">weighty</h5>
                                                <p class="card-text text-dark">
                                                    1.0 si el componente estira a lo ancho
                                                    0 si no estira
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="card text-dark opacity-75">
                                            <div class="card-body text-dark">
                                                <h5 class="card-title text-dark">weightx</h5>
                                                <p class="card-text text-dark">
                                                    1.0 si el componente estira a lo alto
                                                    0 si no estira
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="card text-dark opacity-75">
                                            <div class="card-body text-dark">
                                                <h5 class="card-title text-dark">insets</h5>
                                                <p class="card-text text-dark">
                                                    Equivalente a "padding" de html, es el que define
                                                    el margen al rededor de un componente, dado en pixeles
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="card text-dark opacity-75">
                                            <div class="card-body text-dark">
                                                <h5 class="card-title text-dark">gridwidth</h5>
                                                <p class="card-text text-dark">
                                                    Cuantas posiciones ocupa el componente en columnas
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="card text-dark opacity-75">
                                            <div class="card-body text-dark">
                                                <h5 class="card-title text-dark">gridheight</h5>
                                                <p class="card-text text-dark">
                                                    Cuantas posiciones ocupa el componente en filas
                                                </p>
                                            </div>
                                        </div>

                                        <br />
                                        <div class="card text-dark opacity-75">
                                            <div class="card-body text-dark">
                                                <h5 class="card-title text-dark">fill</h5>
                                                <p class="card-text text-dark">
                                                    Define la manera en la que los componentes rellenan la celda
                                                    en la que están posicionados

                                                    <br />
                                                    <br />
                                                    <ul class="list-group list-group-flush bg-transparent">
                                                        <li class="list-group-item bg-transparent"> <b>HORIZONTAL:</b> Expande el componente de manera horizontal </li>
                                                        <li class="list-group-item bg-transparent"> <b>VERTICAL:</b> Expande el componente de manera vertical </li>
                                                        <li class="list-group-item bg-transparent"> <b>BOTH:</b> Expande el componente a lo alto y ancho </li>
                                                        <li class="list-group-item bg-transparent"> <b>NONE:</b> No expande</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                Llevando nuestro diagrama a código, luce de la siguiente manera.<br /><br />
                                <img src="https://i.ibb.co/Wp98S8f/Grid-Bag-Layout-code.png" alt="Grid-Bag-Layout-code" class="img-fluid" border="0" />

                                <br />
                                Y nuestra ventana luce de la siguiente manera  <br />
                                <br />
                                <center>
                                    <img src="https://i.ibb.co/sqqCMSt/Grid-Bag-Layout-window.png" class="img-fluid" alt="Grid-Bag-Layout-window" border="0" />
                                </center>
                                <br />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
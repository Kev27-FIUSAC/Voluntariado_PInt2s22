import React, { Component } from 'react';
import './componentes_java.css';

export default class Componente_java extends Component {
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
                            <h5 class="card-title text-dark">Constantes</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Standares</h6>
                            <p class="card-text text-dark">
                                En Java, las constantes se escriben utilizando todas las letras mayusculas<br/>

                                <b>Ejemplo</b><br/>
                                EXIT_ON_CLOSE
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div class="card text-dark opacity-75">
                        <div class="card-body text-dark">
                            <h5 class="card-title text-dark">setBounds</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Metodos</h6>
                            <p class="card-text text-dark">
                                Este método sirve para posicionar elementos dentro de un jframe o un jpanel, además del tamaño de los mismos en pixeles<br/> <br/>
                                setBounds(x,y,ancho,alto); <br/> <br/>

                                <b>Ejemplo</b> <br/>
                                setBounds(20,50,200,100)

                                <b>NOTA:</b>
                                Para poder utilizar este método es necesario utilizar un método extra
                                que sirve para anular la dispocisión por defecto de los componentes en los JPanel.
                                Simplemente se agrega:
                                <br/> <br/>
                                setLayout(null)
                                esto se agrega al panel.
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div class="card text-dark opacity-75">
                        <div class="card-body text-dark">
                            <h5 class="card-title text-dark">setSize</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Metodos</h6>
                            <p class="card-text text-dark">
                                Este metodo se usa para establecer el tamaño de cualquier componente en pixeles <br/> <br/>
                                setSize(ancho,alto); <br/> <br/>

                                <b>Ejemplo</b> <br/>
                                setSize(200,100)

                            </p>
                        </div>
                    </div>
                    <br/>
                    <div class="card text-dark opacity-75">
                        <div class="card-body text-dark">
                            <h5 class="card-title text-dark">setBackground</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Metodos</h6>
                            <p class="card-text text-dark">
                                Le da un color al componente que se le asigne este metodo. <br/> <br/>
                                setBackground(Color color); <br/> <br/>

                                <b>Ejemplo</b> <br/>
                                setBackground(Color.RED)

                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-9">
                    <div class="stater-template">
                        <h1>Componentes Java Swing</h1>
                        <p class="lead">Interfaces graficas por medio de Java,
                            teoria y algunos componentes
                        </p>
                    </div>
                    <div>
                        <h4>Introducción</h4>
                        Java soporta las interfaces gráficas por medio de la librería awt (Abstract Window Toolkit)
                        Nos centraremos en Swing.
                        <br/>
                        <br/>
                        <h4>JFrame</h4>
                        Lo primero que debemos saber es como abrir una ventana, para ello existen dos metodos que varían
                        en función de como prefieras trabajar pero de ambas maneras, debes importar la clase JFrame
                        (import javax.util.swing.JFrame;)
                        una vez importado, veamos como se utiliza:
                        <br/><br/>
                        <h5>JFrame en una clase</h5>
                        Para esto heredamos de la clase JFrame de la siguiente manera:
                        <img src="https://i.ibb.co/DPdHkxM/Java-Components-Frame-Extends.png" class="img-fluid" alt="Java-Components-Frame-Extends" border="0"/>
                        Dentro de la clase creada, insertamos un constructor que contendrá los siguientes metodos:
                        <div class="row" style={{padding: '20px'}}>
                            <div class="col-6">
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">setVisible(boolean)</h5>
                                        <p class="card-text text-dark">
                                            Define si la ventana es visible o no
                                        </p>
                                    </div>
                                </div>
                                <br/>
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">setSize(int, int)</h5>
                                        <p class="card-text text-dark">
                                            Tamaño en pixeles de de la ventana
                                        </p>
                                    </div>
                                </div>
                                <br/>
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">setTitle(String)</h5>
                                        <p class="card-text text-dark">
                                            Titulo de la ventana
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div class="col-6">
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">setDefaultCloseOperation(int)</h5>
                                        <p class="card-text text-dark">
                                            Recibe un entero que define como reaccionará la ventana cuando
                                            presionas el boton de salir.
                                        <ul>
                                            <li><b>DISPOSE_ON_CLOSE:</b> Cierra la ventana actual</li>
                                            <li><b>EXIT_ON_CLOSE:</b> Finaliza la aplicación y cierra la ventana</li>
                                            <li><b>DO_NOTHING_ON_CLOSE:</b> Cancela la función de cerrar ventana</li>
                                            <li><b>HIDE_ON_CLOSE:</b> Esconde la ventana</li>
                                        </ul>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        Se agregan estos metodos al constructor bajo la siguiente logica: el constructor es quien provee
                        los parametros de inicializacion.
                        <img src="https://i.ibb.co/WsZYhqd/Java-Components-Frame-Constructor.png" class="img-fluid" alt="Java-Components-Frame-Constructor" border="0"/>

                        Luego de crear el constructor, basta con inicializar el objeto en la clase main y podrémos ver
                        la ventana
                        vacía.

                        <center>
                        <img src="https://i.ibb.co/PFg9nMj/Jframe-swing.png" class="img-fluid" alt="Jframe-swing" border="0"/>
                        </center>
                        

                        <br/><br/><br/>

                        <h4>JPanel</h4>
                        Un panel puede representarse como una hoja sobre una mesa, donde la mesa es un JFrame.<br/>
                        Cuando escribimos sobre una hoja, esta está apoyada usualmente sobre una mesa.
                        <br/><br/>
                        JPanel es un espacio redimensionable sobre el cual escribir y poner componentes,
                        se le pueden agregar propiedades como posición, color, tamaño, etc.
                        <br/>Puedes agregar todos los paneles que desees a tu JFrame<br/>
                        <br/>
                        <b>Constructores</b>
                        <ol class="bg-transparent text-white w-75 list-group">
                            <li class="list-group-item"><b>JPanel()</b>
                                Constructor vacio, solo es un panel sin configuraciones previas
                            </li>
                            <li class="list-group-item"><b>JPanel(LayoutManager layout)</b> Define la
                                manera en la que se distribuirán los componentes que se le asignen.

                            </li>
                        </ol>
                        <br/>
                        <b>Métodos</b>
                        <div class="row" style={{padding: '20px'}}>
                            <div class="col-6">
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">setBackground(Color bg)</h5>
                                        <p class="card-text text-dark">
                                            Colorea el componente al cual se le agregue este método <br/>
                                        </p>
                                    </div>
                                </div>
                                <br/>
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">setLayout(Color bg)</h5>
                                        <p class="card-text text-dark">
                                            Colorea el componente al cual se le agregue este método <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">add(JComponent componente)</h5>
                                        <p class="card-text text-dark">
                                            Agrega un elemento que haya heredado de JComponent (Todos los componentes en
                                            este tutorial heredan de JComponent)
                                            al JPanel, al JFrame o a cualquier componente que lo soporte.
                                        </p>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        Al agregar el panel al JFrame tenemos lo siguiente: <br/>
                        <br/>
                        <img src="https://i.ibb.co/jyp6YZM/panel-in-frame.png" class="img-fluid" alt="panel-in-frame" border="0"/>
                        <center>
                        <img src="https://i.ibb.co/hgPQ0y2/panelRed.png" class="img-fluid" alt="panelRed" border="0"/>
                        </center>
                        
                        <br/>   <br/> 
                        Posteriormente mostraremos la implementación de varios paneles y la utilidad de los mismos. 

                        <br/>  <br/>   <br/>
                        <h4>JTextField</h4>
                        JTextField son campos de texto de una sola linea. <br/><br/>

                        <b>Constructores</b>
                        <ol class="bg-transparent text-white w-75 list-group">
                            <li class="list-group-item"><b>JTextField(int columns)</b> Cantidad de espacios que ocupará
                                el TextField</li>
                            <li class="list-group-item"><b>JTextField(String text)</b> Texto por defecto</li>
                            <li class="list-group-item"><b>JTextField(String text, int columns)</b> Espacios y texto por
                                defecto</li>
                        </ol>
                        <br/><br/>
                        <b>Métodos</b>

                        <div class="row" style={{padding: '20px'}}>
                            <div class="col-6">
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">getText()</h5>
                                        <p class="card-text text-dark">
                                            Retorna el contenido del JTextField en tipo String
                                        </p>
                                    </div>
                                </div>
                                <br/>
                            </div>
                            <div class="col-6">
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">getColumns()</h5>
                                        <p class="card-text text-dark">
                                            Retorna la cantidad de espacios que utiliza el JTextField
                                        </p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <img src="https://i.ibb.co/419dF4D/txt-Field-En-Panel.png" class="img-fluid" alt="txt-Field-En-Panel" border="0"/>
                        <center>
                        <img src="https://i.ibb.co/jDB2D5Z/muestra-text-Field-In-Panel.png" class="img-fluid" alt="muestra-text-Field-In-Panel" border="0"/>
                        </center>
                        <h4>JLabel</h4>
                        JLabel son etiquetas de texto.
                        <br/> <br/>
                        <b>Constructores</b>
                        <ol class="bg-transparent text-white w-75 list-group">
                            <li class="list-group-item">
                                <b>JLabel(Icon image)</b> Si se inicia este constructor con un objeto de tipo Icon, el Label hará la funcion de 
                                marco para la imagen almacenada en el objeto Icon. 
                            </li>
                            <li class="list-group-item">
                                <b>JLabel(String text)</b> Texto que mostrará la etiqueta
                            </li>
                        </ol>
                        <br/><br/>
                        <b>Métodos</b>

                        <div class="row" style={{padding: '20px'}}>
                            <div class="col-6">
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">getText()</h5>
                                        <p class="card-text text-dark">
                                            Retorna el contenido del JLabel en tipo String
                                        </p>
                                    </div>
                                </div>
                                <br/>
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">setText()</h5>
                                        <p class="card-text text-dark">
                                            Asigna un texto al label
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">setIcon()</h5>
                                        <p class="card-text text-dark">
                                            Asigna un objeto de tipo Icon a el JLabel
                                        </p>
                                    </div>
                                </div>
                                <br/>
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">setBackground()</h5>
                                        <p class="card-text text-dark">
                                            Establece un color de fondo para el JLabel
                                        </p>
                                    </div>
                                </div>
                                <br/>
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">setFont()</h5>
                                        <p class="card-text text-dark">
                                            Estable las propiedades de las letras del JLabel
                                        </p>
                                    </div>
                                </div>
                            </div>    
                        </div>

                        <img src="https://i.ibb.co/Jcb1ffp/label-in-panel.png" class="img-fluid" alt="label-in-panel"/>
                        <center>
                        <img src="https://i.ibb.co/sPpkqVT/label-in-panel-example.png" class="img-fluid" alt="label-in-panel-example" />
                        </center>
                        
                        <br/> <br/> <br/>
                        <h4>JButton</h4>
                        Este componente es un botón para poder realizar acciones.
                        <br/> <br/>
                        <b>Constructores</b>
                        <ol class="bg-transparent text-white w-75 list-group">
                            <li class="list-group-item">
                                <b>JButton(Icon image)</b> Si se inicia este constructor con un objeto de tipo Icon, el Boton hará la funcion de 
                                marco para la imagen almacenada en el objeto Icon. 
                            </li>
                            <li class="list-group-item">
                                <b>JButton(String text)</b> texto que mostrará el botón
                            </li>
                        </ol>
                        <br/>
                        <b>Métodos</b>
                        <div class="row" style={{padding: '20px'}}>
                            <div class="col-6">
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">setText(String str)</h5>
                                        <p class="card-text text-dark">
                                            Establece el texto que mostrará el botón
                                            <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card text-dark opacity-75">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title text-dark">addActionListener(ActionListener oyente)</h5>
                                        <p class="card-text text-dark">
                                            Agrega una acción al botón al momento de ser presionado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        Para poder utilizar esta clase tendremos que implementar una clase llamada ActionListener, se hace de la siguiente manera.

                        <img src="https://i.ibb.co/Xbrv3wt/Button-in-Label.png" class="img-fluid" alt="Button-in-Label"/>
                        <center>
                        <img src="https://i.ibb.co/93h9qVT/boton-muestra-1.png" class="img-fluid" alt="boton-muestra-1" />
                        </center>
                        <br/>
                        <center>
                        <img src="https://i.ibb.co/dgRRktv/boton-muestra-2.png" alt="boton-muestra-2" class="img-fluid" />
                        </center>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
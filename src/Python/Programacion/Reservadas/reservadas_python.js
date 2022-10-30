import React, { Component } from 'react';
import './reservadas_python.css';
import TruePalabra from './img/true_palabra.png'
import NonePalabra from './img/none_palabra.png'
import AndPalabra from './img/and_palabra.png'
import AsPalabra from './img/as_palabra.png'
import BreakPalabra from './img/break_palabra.png'
import ContinuePalabra from './img/continue_palabra.png'
import PassPalabra from './img/pass_palabra.png'
import WhilePalbra from './img/while_palabra.png'
import WithPalabra from './img/with_palabra.png'
import YieldPalabra from './img/yield_palabra.png'
import TryPalabra from './img/try_palabra.png'
import AssertPalabra from './img/assert_palabra.png'
import AsyncioPalabra from './img/asyncio_palabra.png'
import ForPalabra from './img/for_palabra.png'
import ImportPalabra from './img/import_palabra.png'
import GlobalPalabra from './img/global_palabra.png'
import DefPalbra from './img/def_palabra.png'
import DelPalabra from './img/del_palabra.png'
import IfPalabra from './img/if_palabra.png'
import InPalabra from './img/in_palabra.png'
import LambdaPalabra from './img/lambda_palabra.png'
import NonLocalPalabra from './img/nonlocal_palabra.png'
import ClassPalabra from './img/class_palabra.png'
import FinallyPalabra from './img/finally_palabra.png'
import IsPalabra from './img/is_palabra.png'

export default class Reservadas_python extends Component {
    constructor(p) {
        super(p)
    }


    render() {
        return (
            <div class="div-central container">

        <div class="div-master">

            <div class="row">
                

                <div class="col-9">
                    <div class="stater-template">
                        <h1>Palabras Reservadas Python</h1>
                    </div>
                    <h4 id="Math-class-list"></h4>
                        <label>Se puede definir como palabras clave en el cual tiene una función y significado especial que por lo cual no podemos llamar nuestra variable con el mismo nombre que una palabra reservada ya que mostrará y detectará como error.
                            Por eso mismo tenemos el siguiente listado con ejemplos de como interpretar una palabra reservada:</label>
                
                    <br/>
                    <br/>
                    <h3 id="Math-class-list">False y True</h3>
                        <label>Son variables booleanas que solo se puede tomar dos valores (True, Verdadero) y (False, Falso).</label>
                        <center>
                            <img src={TruePalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                    <br/>
                    <br/>
                    <h3 id="Math-class-list">None</h3>
                        <label>La podemos usar en variables que aun no estamos utilizando y no muestre un error.</label>
                        <center>
                            <img src={NonePalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                        <br/>
                    <br/>
                        <h3 id="Math-class-list">And</h3>
                        <label>Es un operador lógico en el cual se puede definir como “a And b" que es igual a decir que “a y b" dependiendo de lo que estemos realizando nos facilita el uso de cada método que estamos utilizando.</label>
                        <center>
                            <img src={AndPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

<br/>
<br/>
                    <h3 id="Math-class-list">As</h3>
                        <label>Se utiliza para crear un alias al momento de importar un módulo en el cual da un nombre diferente definido por el usuario a un módulo mientras lo importa.</label>
                        <center>
                            <img src={AsPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

<br/>
<br/>
                        <h3 id="Math-class-list">Break</h3>
                        <label>Proporciona la oportunidad de cerrar un bucle como el siguiente ejemplo:</label>
                        <center>
                            <img src={BreakPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>


  
<br/>
                    <br/>
                        <h3 id="Math-class-list">Continue</h3>
                        <label>Hace que finalice la iteración actual del bucle  pero no todo el bucle.</label>
                        <center>
                            <img src={ContinuePalabra} class="img-fluid" alt="..." height="600" width="600" />
                        </center>

<br/>
                    <br/>
                    <h3 id="Math-class-list">pass</h3>
                        <label>Es una declaración en Python se utiliza mucho “pass" al momento de programar para no mostrar errores al momento de crear métodos que aún no hemos finalizado.</label>
                        <center>
                            <img src={PassPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                        <h4 id="Math-class-list">return</h4>
                        <label>Es utilizado dentro de una función para salir y devolver cierto valor asignado.</label>
                        <center>
                            <img src="../img/return_palabra.png" class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                        <br/>
                        <br/>
                    <h3 id="Math-class-list">while</h3>
                        <label>Es muy utilizado para los bucles en el cual se continúan ejecutando hasta que el ciclo evalúa un “False" o “break".</label>
                        <center>
                            <img src={WhilePalbra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>
                        <br/><br/>
                        <h3 id="Math-class-list">with</h3>
                        <label>Se utiliza para el momento de la ejecución del código dentro de los métodos ya definidos, de igual forma se complementa para abrir archivos. </label>
                        <center>
                            <img src={WithPalabra} class="img-fluid" alt="..." height="600" width="600" />
                        </center>

                    <br/> <br/>
                    <h3 id="Math-class-list">yield</h3>
                        <label>Es utilizado dentro de una función al igual que “return" a diferencia que “yield" devuelve un generador.</label>
                        <center>
                            <img src={YieldPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                            <br/><br/>
                        <h3 id="Math-class-list">Try, except y raise</h3>
                        <label>Es utilizado para crear algunas excepciones por medio de errores que sugieren que algo salió mal de nuestro programa al ejecutarlo, es como mostrarle al usuario que no siguió ciertos requerimientos de los datos que le estemos pidiendo. </label>
                        <center>
                            <img src={TryPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                    <br/><br/>
                    <h3 id="Math-class-list">assert</h3>
                        <label>Es utilizado para la depuración cuando estamos programando y queremos conocer el estado interno de encontrar errores y va seguido de una condición como el siguiente ejemplo: </label>
                        <center>
                            <img src={AssertPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                        <br/><br/>
                        <h3 id="Math-class-list">async y await</h3>
                        <label>Por medio de la biblioteca “asyncio" por Python y es utilizado para escribir el código concurrente, la palabra clave “async" es utilizado como base de múltiples frameworks asincrónicos que provee el rendimiento de redes y servidores por medio de la web es conocida como biblioteca de conexión de base de datos. </label>
                        <center>
                            <img src={AsyncioPalabra} class="img-fluid" alt="..." height="600"  width="600"/>
                        </center>

                        <br/><br/>
                    <h3 id="Math-class-list">for</h3>
                        <label>Es utilizado para bucles y de igual forma cuando sabemos el número de veces que queremos repetir, lo podemos usar con cualquier tipo de secuencia como una lista o de una cadena.</label>
                        <center>
                            <img src={ForPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                    <br/><br/>
                        <h3 id="Math-class-list">import y from_import</h3>
                        <label>La palabra clave “import" es utilizado para importar módulos de igual forma clases y ciertas librerías de Python, “from_import" se utiliza para importar funciones o atribuciones específicos dentro de nuestra carpeta de Python e interactuar entre archivos. </label>
                        <center>
                            <img src={ImportPalabra} class="img-fluid" alt="..." height="600" width="600" />
                        </center>

                    <br/><br/>
                    <h3 id="Math-class-list">global</h3>
                        <label>Se utiliza para las variables y poder usar en cualquier momento, de igual forma no seria necesario definir la variable dentro de una función ya que pertenecería a todo el archivo de Python.</label>
                        <center>
                            <img src={GlobalPalabra} class="img-fluid" alt="..." height="600"  width="600"/>
                        </center>

                            <br/><br/>
                        <h3 id="Math-class-list">Def</h3>
                        <label>Se utiliza para definir una función definida por el usuario, es una función que puede realizar tareas específicas en el cual podemos crear bastantes funciones y solo mandarlas al llamar cuando sea necesario. </label>
                        <center>
                            <img src={DefPalbra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                    <br/><br/>
                    <h3 id="Math-class-list">Del</h3>
                        <label>Es utilizada para eliminar un objeto en Python de igual forma eliminar una referencia de una variable. </label>
                        <center>
                            <img src={DelPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                        <br/> <br/>
                        <h3 id="Math-class-list">if, elif, else</h3>
                        <label>Son utilizadas para la reafirmación condicional o más bien la toma de decisiones de ciertas opciones que estamos utilizando o que si cumple los requerimientos se puede interpretar como “Si, si no, entonces". </label>
                        <center>
                            <img src={IfPalabra} class="img-fluid" alt="..." height="600"  width="600"/>
                        </center>

                    <br/><br/>
                    <h3 id="Math-class-list">in</h3>
                        <label>Es utilizado para probar si 2 variables se refieren al mismo objeto que devuelva un “Verdadero"(True) si el valor esta presente si no que devuelva un “Falso"(False).</label>
                        <center>
                            <img src={InPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                        <h4 id="Math-class-list">lambda</h4>
                        <label>Se utiliza para crear una función sin nombre, consiste en que una expresión que se evalua y devuelve como en el siguiente ejemplo: </label>
                        <center>
                            <img src={LambdaPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                    <br/><br/>
                    <h3 id="Math-class-list">nonlocal</h3>
                        <label>Es una palabra clave y es muy similar a “global" solo que únicamente “nonlocal" se usa para declarar que una variable dentro de una función anidad (ósea una función dentro de una función) no sea local para esa función por lo cual que se encuentra en la función externa.</label>
                        <center>
                            <img src={NonLocalPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                        <br/><br/>
                        <h3 id="Math-class-list">and, or, not</h3>
                        <label>Son operadores lógicos de Python en la cual "and" resulta ser "True" si solo ambos operadores son "True", "or" será resultado "True" si alguno de sus operadores es "True", "not" Se utiliza unicamente para invertir el valor de "True" a "False" y viceversa.</label>
                        <center>
                            <img src={AndPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                    <br/><br/>
                    <h3 id="Math-class-list">class</h3>
                        <label>Se utiliza para definir una nueva clase que tendra funciones dentro de esa clase, es una colección de atributos y métodos. Es usado fundamentalmente para POO (Programación Orientada a Objetos)</label>
                        <center>
                            <img src={ClassPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>


                    <h4 id="Math-class-list">finally</h4>
                        <label>Es utilizado junto con "try, except, else" para bloquear y cerrar recursos entre los archivos por el cual garantiza que el código se ejecute incluyendo con o sin la excepción.</label>
                        <center>
                            <img src={FinallyPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>

                    <h4 id="Math-class-list">is</h4>
                        <label>Es utilizado junto con "try, except, else" para bloquear y cerrar recursos entre los archivos por el cual garantiza que el código se ejecute incluyendo con o sin la excepción.</label>
                        <center>
                            <img src={IsPalabra} class="img-fluid" alt="..." height="600" width="600"/>
                        </center>
                </div>
            </div>

        </div>
    </div>
        )
    }
}



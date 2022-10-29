import React, { Component } from 'react';
import './nocion_python.css';

export default class Nocion_python extends Component {
    constructor(p) {
        super(p)
    }


    render() {
        return (
            <div class="div-central container">

        <div class="div-master">

            <div class="row">
               
                <div class="col-3 div-aclaraciones">
                    



                </div>

                <div class="col-9">
                    <div class="stater-template">
                        <h1>Nociones Basicas Python</h1>
                      <p class="lead">¡Aprende Python!

                        </p>
                    </div>
                    <h5>
                        <center>VARIABLES Y CONSTANTES (PYTHON)</center>
                    </h5>
                    <br/>
                    <br/>
                    <p>
                        <h4>Variables en Python</h4>
                    </p>
                    <p>
                        En Programación, las variables están asociadas a variables concretos. Además, cada lenguaje de programación tiene su forma de implementar el concepto de variable, por lo que lo que se explica a continuación es válido para muchos lenguajes de programación, aunque otros lenguajes de programación permiten otras posibilidades.
                    </p>
                    <p>
                    <ul>
                        <li> Las variables en Python son locales por defecto. Esto quiere decir que las variables definidas y utilizadas en el bloque de código de una función, sólo tienen existencia dentro de la misma, y no interfieren con otras variables del resto del código.</li>
                        <li> En caso de que sea conveniente o necesario, una variable local puede convertirse en una variable global declarándola explícitamente como tal con la sentencia global. </li>
                        <li> A su vez, las variables existentes fuera de una función, no son visibles dentro de la misma. </li>
                        
                    </ul>
                    </p>
                    
                    <br/>
                    <br/>
                    <p>
                        <h4>Curiosidades de las Variables</h4>
                    </p>
                    <p>
                        <ul>
                            <li>Como inicializar variables</li>
                            <div align="center"><img src="https://i.ibb.co/mDX5wSK/varpyt-inicializar.png" class="img-fluid" alt="varpyt-inicializar" border="0"/></div>
                            <li>Guarda el mismo valor </li>
                            <div align="center"><img src="https://i.ibb.co/4RRWjZr/varpyt-sameval.png" alt="varpyt-sameval" class="img-fluid" border="0"/></div>
                        </ul>
                    </p>
                    <br/>
                    <br/>
                    <p>
                        <h4>Formas Correctas e Incorrectas de declarar Variables</h4>
                    </p>
                    <p>
                        <ul>
                            <li>Forma Valida</li>
                            <div align="center"><img src="https://i.ibb.co/WV3D9rC/varpyt-namesvalidos.png" class="img-fluid" alt="varpyt-namesvalidos" border="0"/></div>
                            <li>Forma Invalida </li>
                            <div align="center"><img src="https://i.ibb.co/7V9mCkM/varpyt-namesinvalidos.png" class="img-fluid" alt="varpyt-namesinvalidos" border="0"/></div>
                        </ul>
                    </p>
                    <br/>
                    <br/>
                    <p>
                        <h4>Ejemplos de variables en Python</h4>
                    </p>

                    <p>
                        <ul>
                            <li>Tipo String</li>
                            <div align="center"><img src="https://i.ibb.co/B22g5Jq/varpyt-string.png" class="img-fluid" alt="varpyt-string" border="0"/></div>
                            <li>Tipo Entero </li>
                            <div align="center"><img src="https://i.ibb.co/mTY0wX2/varpyt-int.png" class="img-fluid"  alt="varpyt-int" border="0"/></div>
                            <li>Tipo Float </li>
                            <div align="center"><img src="https://i.ibb.co/hZ5MxbD/varpyt-float.png" class="img-fluid"  alt="varpyt-float" border="0"/></div>
                            <li>Tipo Booleano</li>
                            <div align="center"><img src="https://i.ibb.co/Wz8H8g6/varpyt-boolean.png" class="img-fluid" alt="varpyt-boolean" border="0"/></div>
                            
                        </ul>
                    </p>
                    <br/>
                    <br/>
                    <h5>
                        <center>Bloques de Codigo y Estructuras de Control</center>
                    </h5>
                    <br/>
                    <p>
                        <h4>Blqoues de codigo</h4>
                    </p>
                    <p>
                        Bloques de código son grupos de sentencias que se utilizan donde se esperan sentencias individuales. Los bloques de código pueden seguir a cualquiera de las sentencias siguientes: if, elif, else, for, while, try, except, def y class. Estas sentencias introducen el bloque de código con el carácter de dos puntos (:).
                    </p>
                    <br/>
                    <br/>
                    <p>
                        <h4>Identación</h4>
                    </p>
                    <p>
                        En un lenguaje informático, la identación es lo que la sangría al lenguaje humano escrito (a nivel formal). Así como para el lenguaje formal, cuando uno redacta una carta, debe respetar ciertas sangrías, los lenguajes informáticos, requieren una identación.
                        No todos los lenguajes de programación, necesitan de una identación, aunque sí, se estila implementarla, a fin de otorgar mayor legibilidad al código fuente. Pero en el caso de Python, la identación es obligatoria, ya que de ella, dependerá su estructura.
                        
                    </p>
                    <div align="center"><img src="https://i.ibb.co/ckfsk8L/py-identacion.png" class="img-fluid" alt="py-identacion" border="0"/></div>
                    <br/>
                    <br/>
                    <p>
                        <h4>Estructuras de Control</h4>
                    </p>
                    <p>
                        Una estructura de control, es un bloque de código que permite agrupar instrucciones de manera controlada.
                    </p>

                    <p>
                        <ul>
                            <li>Sentencia if-else</li>
                            <div align="center"><img src="https://i.ibb.co/QQzmDZT/py-if-else.png" class="img-fluid" alt="py-if-else" border="0"/></div>
                            <li>Sentencia elif </li>
                            <div align="center"><img src="https://i.ibb.co/LQxYWb9/py-elif.png" class="img-fluid" alt="py-elif" border="0"/></div>
                            <li>Bucle for </li>
                            <div align="center"><img src="https://i.ibb.co/mRPq704/py-for-inrange.png" class="img-fluid" alt="py-for-inrange" border="0"/></div>
                            <li>Bucle While</li>
                            <div align="center"><img src="https://i.ibb.co/xFbQnJW/py-buclewhile.png" class="img-fluid" alt="py-buclewhile" border="0"/></div>
                            
                        </ul>
                    </p>
                    <br/>
                    <br/>
                    <p>
                        <h4>Operadores</h4>
                    </p>
                    <p>
                    Los operadores son símbolos que le indican al intérprete que realice una operación específica, como aritmética, comparación, lógica, etc.
                    </p>

                    <p>
                        <ul>
                            <li>Operadores Logicos</li>
                            <p>
                                Los operadores lógicos o logical operators nos permiten trabajar con valores de tipo booleano. Un valor booleano o bool es un tipo que solo puede tomar valores True o False. Por lo tanto, estos operadores nos permiten realizar diferentes operaciones con estos tipos, y su resultado será otro booleano. Por ejemplo, True and True usa el operador and, y su resultado será True.
                            </p>
                            <div align="center"><img src="https://i.ibb.co/6bLzF01/py-operadores-logicos.png" class="img-fluid" alt="py-operadores-logicos" border="0"/></div>
                            <li>Operadores Relacionales </li>
                            <p>
                                Un operador relacional se emplea para comparar y establecer la relación entre ellos. Devuelve un valor booleano (true o false) basado en la condición.
                            </p>
                            <div align="center"><img src="https://i.ibb.co/TRk6sHp/py-operadores-relacionales.png" class="img-fluid" alt="py-operadores-relacionales" border="0"/></div>
                            
                        </ul>
                    </p>
                    <br/>
                    <br/>
                    <h5>
                        <center>METODOS Y FUNCIONES (PYTHON)</center>
                    </h5>
                    <br/>
                    <p>
                    <h4>Funciones en Python</h4>
                    </p>
                    <p>Una función no es más que una porción o bloque de código reutilizable que se encarga de
                        realizar una determinada tarea. Porque no es necesario reescribir ese código cada vez que
                        nos enfrentamos a dicha tarea. Tan solo, llamar a la función.</p>
                    <p>En Python hay funciones que pueden requerir o no parámetros, como por ejemplo, la función
                        help(), que ofrece la ayuda del sistema sobre determinado comando, la función abs(), que
                        devuelve el valor absoluto de un número etc…</p>
                    <p>Ejemplos: Función help() y abs() </p>
                    <img src="https://i.ibb.co/kSvszb8/Funcion-Help.png" class="img-fluid" alt="Funcion-Help" border="0"/>
                    <img src="https://i.ibb.co/y8g07NJ/Funcion-abs.png" class="img-fluid" alt="Funcion-abs" border="0"/>
                    <br/>
                    <br/>
                    <h4>¿Cómo Crear Funciones en Python?</h4>
                    <label>
                        <p>Primero la declaramos con def (nombre función), y luego definimos su contenido (código
                            indentado dentro de la función).</p>
                        <p>Ejemplo de Función en Python:</p>
                        <img src="https://i.ibb.co/sCwqKcZ/Crear-Funci-n.png" class="img-fluid" alt="Crear-Funci-n" border="0"/>
                        <img src="https://i.ibb.co/9gFLR3C/Ejemplo-1-Funci-n.png" class="img-fluid" alt="Ejemplo-1-Funci-n" border="0"/>
                        <p>Este es un ejemplo de una función recursiva en python. Este tipo de funciones tiene que
                            ir dentro de una clase, dentro de un método y posteriormente poder ser llamada al
                            (main.py) o de la clase principal para poder ser corrida.</p>
                            <img src="https://i.ibb.co/L8ggThJ/Ejemplo-2-Funci-n.png" class="img-fluid" alt="Ejemplo-2-Funci-n" border="0"/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        <h4>Métodos en Python</h4>
                        <p>Para su principal desarrollo se implementa en clases y objetos. Las clases son los
                            modelos sobre los cuáles se construirán nuestros objetos, mientras que los objetos son
                            instancias de esa clase.</p>
                        <p>Ejemplo de un Objeto en Python:</p>
                        <img src="https://i.ibb.co/1RsrjZZ/Ejemplo-POO.png" class="img-fluid" alt="Ejemplo-POO" border="0"/>
                        <p>Los métodos son acciones o funciones que puede realizar un objeto. También pone a nuestra
                            disposición un conjunto de métodos ya creados. Estos métodos dependen del tipo de objeto
                            con el que estemos trabajando.</p>
                        <p>Los objetos en Python pueden ser de distintos tipos:</p>
                        <p>• cadena de caracteres (string)</p>
                        <p>• booleanos (boolean)</p>
                        <p>• números enteros (int)</p>
                        <p>• números decimales (float)</p>
                        <p>• listas (list)</p>
                        <p>También hay métodos ya creados para otro tipo de objetos, como listas, diccionarios,
                            tuplas, sets o incluso ficheros. Si no nos sirve ninguno para nuestro objetivo, siempre
                            podemos crearlo nosotros mismos, como ocurre con las funciones.</p>
                        <p>Ejemplos de Métodos: Estructura</p>
                        <img src="https://i.ibb.co/xgvkRFR/Estructura-Metodo.png" class="img-fluid" alt="Estructura-Metodo" border="0"/>
                        <p>Ejemplo #1: Método en Python</p>
                        <img src="https://i.ibb.co/7zhZWRC/Ejemplo-1-Metodo.png" class="img-fluid" alt="Ejemplo-1-Metodo" border="0"/>
                        <p>Ejemplo #2: Método en Python</p>
                        <img src="https://i.ibb.co/87rRqb2/Ejemplo-2-Metodo.png" class="img-fluid" alt="Ejemplo-2-Metodo" border="0"/>
                        <p>Ejemplo #3: Método en Python</p>
                        <img src="https://i.ibb.co/pZzTrN6/Ejemplo-3-Metodo.png" class="img-fluid" alt="Ejemplo-3-Metodo" border="0"/>
                    </label>
                    <div class="form-group">
                        <br/>
                        <br/>
                        <h5>
                            <center>COMO COMENTAR EN PYTHON</center>
                        </h5>
                        <label>
                            Para comentar en PYTON se puede realizar de dos maneras, se puede realizar un comentario
                            de una solo linea o uno de tipo multilinea.
                            <img src="https://i.ibb.co/jz129x8/Comentario-Python.png" class="img-fluid" alt="Comentario-Python" border="0"/>
                            <p>
                            <h5>Comentario Simple</h5> El comentario de una sola linea sirve para identificar partes
                            importante en nuestro código fuete, ya sea la funcionalidad de una sentencia "if",
                            "for", "while", etc... Y para realizar dicha ación basta con colocar el signo "#" para
                            luego escribir el comentario que queremos realizar.</p>
                            <p>
                            <h5>Comentario Multilinea</h5> El comentario multilinea se utiliza para documentar el
                            codigo fuete ya sea una pequeña descripción incial de lo que vamos a programar o
                            simplemente documentar los datos de programdor al inicio del código fuente. Para
                            realizar el comentario multilinea basta con colocar tres comillas (''') y luego python
                            lo autocompleta colocando las otras tres comillas al final.</p>
                            <p>Este es un ejemplo de como comentar el código fuete: En este ejeplo se utliza el
                                comentario de una linea(simple) y el comentario multilinea. </p>
                                <img src="https://i.ibb.co/rxJ89Wx/Comentario-Python-Ejemplo.png" class="img-fluid" alt="Comentario-Python-Ejemplo" border="0"/>
                        </label>
                    </div>



                </div>


            </div>
        </div>

        <div class="div-master">

        </div>
    </div>
        )
    }
}
import React, { Component } from 'react';
import './basico-java.css';

export default class Basico_java extends Component {
    constructor(p) {
        super(p)
    }


    render() {
        return (
            <div class="div-central container scrollspy-example" data-spy="scroll" data-target="#list-example">
            <div class="div-master">
                <div class="row">
                    {/*<!--Sección de minidefiniciones-->*/}
                    <div class="col-3">
    
                    </div>
    
                    {/*<!--Sección de minidefiniciones-->*/}
    
    
                    <div class="col-6">
                        <div class="stater-template">
                            <h1>Nociones Básicas</h1>
                            <p class="lead">
                            </p>
                        </div>
    
                        <h3 id="Algoritmo-JavaNotions-list">Algoritmos</h3>
                        <p>
                            Un algoritmo es un procedimiento (método) para resolver problemas. Este procedimiento puede ser
                            matemático o lógico. El método permite dividir el problema en una serie de pasos sencillos. </p>
    
    
                        <p>
                            <br/>
                        <h3>Características de un algoritmo</h3>
                        </p>
                        <ul>
                            <li><b>Preciso:</b> esto es debido a que se indica el orden en que se debe realizar cada paso
                                del algoritmo.</li>
                            <li><b>Definido:</b> esto es debido a que si el algoritmo se sigue dos veces, se obtendrá el
                                mismo resultado siempre. </li>
                            <li><b>Finito:</b> esto es debido a que el algoritmo debe poder terminar en algún momento. </li>
                        </ul>
                        <br/>
                        <p>
                        <h3>Lenguajes Algorítmicos</h3>
                        </p>
    
                        <ul>
                            <li><b>Gráficos:</b> Es la representación gráfica de las operaciones que realiza un algoritmo
                                (diagrama de flujo).</li>
                            <li><b>No Gráficos:</b>Representa en forma descriptiva las operaciones que debe realizar un
                                algoritmo (pseudocódigo).</li>
                        </ul>
    
                        <br/>
                        <p>
                        <h3>Diagramas de flujo</h3>
                        </p>
                        <p>
                            Un diagrama de flujo es un diagrama que describe un proceso, sistema o algoritmo informático. Se
                            usan ampliamente en numerosos campos para documentar, estudiar, planificar, mejorar y comunicar
                            procesos que suelen ser complejos en diagramas claros y fáciles de comprender.
                        </p>
                        <img src="https://i.ibb.co/f1Bfbn5/diagramaflujo.jpg" class="img-fluid" alt="diagramaflujo"/>
                        <br/>
                        <br/>
                        <p>
                        <h3>Pseudocodigo</h3>
                        </p>
                        <p>
                            El pseudocódigo es una forma de expresar los distintos pasos que va a realizar un programa, de
                            la forma más parecida a un lenguaje de programación. Su principal función es la de representar
                            por pasos la solución a un problema o algoritmo, de la forma más detallada posible, utilizando
                            un lenguaje cercano al de programación. El pseudocódigo no puede ejecutarse en un ordenador ya
                            que entonces dejaría de ser pseudocódigo, como su propio nombre indica, se trata de un código
                            falso (pseudo = falso), es un código escrito para que lo entienda el ser humano y no la máquina
                        </p>
                        <img src="https://i.ibb.co/NrqH0tf/pseudocodigo.png" class="img-fluid" alt="pseudocodigo" border="0"/>
                        <br/>
                        <br/>
                        <p>
                        <h3>Sintaxis basica en JAVA</h3>
                        </p>
                        <p>
                            Identificadores: Un identificador es un nombre que identifica a una variable, a un método o
                            función miembro, a una clase. Todos los lenguajes tienen ciertas reglas para componer los
                            identificadores:
                            Identificadores: Un identificador es un nombre que identifica a una variable, a un método o
                            Todos los identificadores han de comenzar con una letra, el carácter subrayado ( _ ) o el
                            carácter dólar ( $=).
                        <ul>
                            <li>Puede incluir, pero no comenzar por un número. </li>
                            <li>No puede incluir el carácter espacio en blanco. </li>
                            <li>Distingue entre letras mayúsculas y minúsculas. </li>
                            <li>No se pueden utilizar las palabras reservadas como identificadores. </li>
                        </ul>
                        </p>
                        <br/>
                        <p>
                        <h3>Operadores de incermento y decremento</h3>
                        </p>
                        <p>
                            Java tiene un operador que permite abreviar la tan necesaria instrucción de incrementar o
                            decrementar una variable en 1, y es a través del uso de los operadores ++ (para incrementar) y —
                            (para decrementar).
                        </p>
    
                        <img src="https://i.ibb.co/h8P3ySL/operador1.png" class="img-fluid" alt="operador1" border="0"/>
                        <img src="https://i.ibb.co/fMnN8Xx/operador2.png" class="img-fluid" alt="operador2" border="0"/>
                        <img src="https://i.ibb.co/2j6vtxh/operador3.png" class="img-fluid" alt="operador3" border="0"/>
                        <br/>
                        <br/>
                        <p>
                        <h3>Operadores Relacionales</h3>
                        </p>
                        <p>
                            Los operadores relacionales son símbolos que se usan para comparar dos valores. Si el resultado
                            de la comparación es correcto la expresión considerada es verdadera, en caso contrario es falsa.
                        </p>
                        <img src="https://i.ibb.co/170HDTs/operador4.png" class="img-fluid" alt="operador4" border="0"/>
                        <br/>
                        <br/>
                        <p>
                        <h3>Operadores Logicos</h3>
                        </p>
                        <p>
                            Son los operadores que funcionan con valores booleanos; los valores son verdaderos o falsos.
                        </p>
                        <img src="https://i.ibb.co/TwBd99M/operador5.png" class="img-fluid" alt="operador5" border="0"/>
                        <br/>
                        <br/>
                        <p>
                            <h3>Variables y constantes</h3>
                        </p>
                        <p>
                            Los datos procesados ​​en el programa toman dos formas comunes: constantes y variables.
                            Constante se refiere a los datos cuyo valor no puede cambiar durante la ejecución del programa,
                            mientras que el valor de la variable puede cambiar y representa la unidad de almacenamiento
                            básica en un programa Java. Cualquier dato en el programa pertenece a un tipo específico, y el
                            tipo determina su representación, rango de valores y operaciones disponibles. Los diferentes
                            tipos de constantes tienen diferentes métodos de representación, y las variables también deben
                            indicar su tipo antes de su uso.
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <h3>Constantes</h3>
                        </p>
                        <p>
                            En Java, se utiliza la palabra clave final para indicar que una variable debe comportarse como
                            si fuese constante, significando con esto que no se permite su modificación una vez que haya
                            sido declarada e inicializada.
    
                            Como es una constante, se le ha de proporcionar un valor en el momento en que se declare, por
                            ejemplo:
                        </p>
                        <img src="https://i.ibb.co/x7NjDZ9/java-constante.png" class="img-fluid" alt="java-constante" border="0"/>
                        <br/>
                        <br/>
                        <p>
                            <h3>Ambito de una variable</h3>
                        </p>
                        <p>
                            Los bloques de sentencias compuestas en Java se delimitan con dos llaves. Las variables de Java sólo son válidas desde el punto donde están declaradas hasta el final de la sentencia compuesta que la engloba. Se pueden anidar estas sentencias compuestas, y cada una puede contener su propio conjunto de declaraciones de variables locales. Sin embargo, no se puede declarar una variable con el mismo nombre que una de ámbito exterior.
                        </p>
                        <img src="https://i.ibb.co/72TQspr/java-ambito.png" class="img-fluid" alt="java-ambito" border="0" />
                        <br/>
                        <br/>
                        <h3>Tipos de Variables</h3>
                        <img src="https://i.ibb.co/9WnTtFz/java-variables.png" class="img-fluid" alt="java-variables" border="0" />
                        <br/>
                        <br/>
                        <h3>Como se decalara una variable </h3>
                        <img src="https://i.ibb.co/SdhG30w/java-variables-declaradas.png" class="img-fluid" alt="java-variables-declaradas" border="0"/>
                        <br/>
                        <h3>Estructuras de control</h3>
                        <p>
                            Las estructuras de control en java las emplearemos para modificar el flujo secuencial de un
                            programa. Esto es, el orden en el que se van ejecutando las instrucciones de este.
    
                            En un programa, las instrucciones se ejecutan de arriba abajo, y de izquierda a derecha, según
                            el orden en que aparezcan las mismas. Los distintos bloques de instrucciones de nuestro
                            programa, seguirán este flujo secuencial para ejecutar las instrucciones. Los bloques de
                            instrucciones, estarán delimitados por corchetes.
                        </p>
                            <br/>
                        <br/>
                        <p>
                        <h3>If-else</h3>
                        </p>
                        <img src="https://i.ibb.co/CwVF9Db/java-if-else.png" class="img-fluid" alt="java-if-else" border="0" />
                        <br/>
                        <p>
                        <h3>If-else if</h3>
                        </p>
                        <img src="https://i.ibb.co/wcSFS2W/java-If-else-if.png" class="img-fluid" alt="java-If-else-if" border="0"/>
                        <br/>
                        <p>
                        <h3>For</h3>
                        </p>
                        <img src="https://i.ibb.co/DM2zspD/java-for.png" class="img-fluid" alt="java-for" border="0"/>
                        <br/>
                        <p>
                        <h3>Switch</h3>
                        </p>
                        <img src="https://i.ibb.co/qDYH0Sy/java-switch.png" class="img-fluid" alt="java-switch" border="0"/>
                        <br/>
                        <p>
                        <h3>While</h3>
                        </p>
                        <img src="https://i.ibb.co/SfRZ93z/java-while.png" class="img-fluid" alt="java-while" border="0"/>
                        <br/>
                        <p>
                        <h3>Do - While</h3>
                        </p>
                        <img src="https://i.ibb.co/gw7gxVY/js-do-while.png" class="img-fluid" alt="js-do-while" border="0"/>
    
    
                        <br/>
                        <h3 id="MyF-JavaNotions-list">Metodos y funciones</h3>
                        <p>
                        <div class="form-group">
                            <h4> ¿Qué es una función?</h4>
                            <label><p>Las funciones son diseñadas para realizar tareas específicas: toman una lista de valores
                                llamados argumento y devuelven un único valor.</p></label>
                        </div>
                        <br></br>
                        <div class="form-group">
                            <h4 class="text-white bg-dark">FUNCIONES EN JAVA</h4>
                            <h5>Declaración de funciones: </h5>
                            <label><p>Una función como tal sub-algoritmo o sub-programa tiene una constitución similar a los
                                algoritmos, por consiguiente, constará de una cabecera que comenzará con el tipo del valor
                                devuelto por la función, seguido de la palabra función y del nombre y argumentos de dicha
                                función.</p></label>
                                <img src="https://i.ibb.co/Z13PQ0H/Funcion-1.png" class="img-fluid" alt="Funcion-1" border="0"/>
                            <p>La sentencia devolver (return) termina inmediatamente la función en la cual se ejecuta.</p>
                            <br/>
                            <h5>Invocación a las funciones: </h5>
                            <label><p>Cada vez que se llama a una función desde el algoritmo principal se establece
                                automáticamente una correspondencia entre los parámetros formales y los parámetros actuales.
                                Debe haber exactamente el mismo número de parámetros actuales que de parámetros formales en
                                la declaración de la función y se presupone una correspondencia uno a uno de izquierda a
                                derecha entre los parámetros formales y los actuales. Una función puede ser llamada de la
                                forma siguiente:</p></label>
                                <img src="https://i.ibb.co/R0GwYd9/LLamado-Funcion-1.png" class="img-fluid" alt="LLamado-Funcion-1" border="0"/>
                            <br/>
                            <h5 class="text-white bg-dark">METODOS EN JAVA</h5>
                            <label><p>Los métodos son subrutinas que manipulan los datos definidos por la clase y, en muchos
                                casos, brindan acceso a esos datos. En la mayoría de los casos, otras partes de tu programa
                                interactuarán con una clase a través de sus métodos.</p></label>
                            <br/>
                            <h5>¿Cómo se escribe un método?</h5>
                            <label><p>Un método tendrá paréntesis después de su nombre. Por ejemplo, si el nombre de un método
                                es carro, mensaje, comida, etc. Se escribirá mensaje (), carro (), comida (), cuando su
                                nombre se usa en una sentencia. Esta notación lo ayudará a distinguir los nombres de las
                                variables de los nombres de los métodos.</p><p>La forma general de un método se muestra a
                                continuación:</p></label>
                                <img src="https://i.ibb.co/DCyhc2g/Metodo-1.png" class="img-fluid" alt="Metodo-1" border="0"/>
                            <label><p>• Aquí, tipo-retorno especifica el tipo de datos devueltos por el método. Puede ser
                                cualquier tipo válido, incluidos los tipos de clase que cree. Si el método no devuelve un
                                valor, su tipo de devolución debe ser void.</p><p>• El nombre del método se especifica por
                                nombre. Puede ser cualquier identificador legal que no sea el que ya utilizan otros
                                elementos dentro del alcance actual.</p>
                                <p>• La lista de parámetros es una secuencia de tipos e identificadores separados por
                                comas. Los parámetros son esencialmente variables que reciben el valor de los argumentos
                                pasados al método cuando se llama. Si el método no tiene parámetros, la lista de parámetros
                                estará vacía.</p></label>
                            <br/>
                            <h5>LLamado del método a la clase principal:</h5>
                            <img src="https://i.ibb.co/Vptp1q7/LLamado-M-todo-1.png" class="img-fluid" alt="LLamado-M-todo-1" border="0"/>
                            <h2>Otro tipo de método muy comun en la programación es la siguiente:</h2>
                            <img src="../img/Metodo_2.png" class="img-fluid" alt="..."/>
                            <br/>
                            <h5>Ejemplo de un programa utilizando metodos y funciones:</h5>
                            <label><p>Este ejercicio concistio en crear funciones las cuales contendran operaciones suma, resta
                                y multiplicación. Se creeara un método donde se ejecutaran e imprimiran los resultados de
                                dichas funciones.</p></label>
                                <img src="https://i.ibb.co/LCJDTT4/Ejercicio-M-todo-Funci-n.png" class="img-fluid" alt="Ejercicio-M-todo-Funci-n" border="0"/>
    
                        </div>
                        <br></br>
                        </p>
                        <h3 id="Comentarios-JavaNotions-list">Comentarios</h3>
                        <p>
                        <div class="form-group">
                            <h4> ¿Qué es un comentario?</h4>
                            <label>Conocido también como documentación interna es la que se acompaña en el código o programa
                                fuente y se realiza a base de comentarios significativos. <p>Estos comentarios se
                                    representan con diferentes notaciones, según el tipo de lenguaje de programación: </p>
                            </label>
                        </div>
                        <br></br>
                        <div class="form-group">
                            <h4 class="text-white bg-dark">TIPOS DE COMENTARIOS</h4>
                            <h5>Visual Basic 6 / VB .NET</h5>
                            <label><p>1. Los comentarios utilizan un apóstrofe simple y el compilador ignora todo lo que viene
                                después de ese carácter.</p></label>
                                <img src="https://i.ibb.co/MPBZBpd/Comentario-VB.png" class="img-fluid" alt="Comentario-VB" border="0"/>
    
                            <br/>
                            <h5>C/C++ y C#</h5>
                            <label><p>Existen dos formatos de comentarios en los lenguajes C/C# y C++:</p><p>1. Comentarios de una
                                línea (comienzan con el carácter //)</p><p>2. Comentarios multilínea (comienzan con los
                                caracteres /* y terminan con los caracteres */, todo lo encerrado entre ambos juegos de
                                caracteres son comentarios)</p></label>
                                <img src="https://i.ibb.co/51293yW/Comentario-C.png" class="img-fluid" alt="Comentario-C" border="0" />
                            <br/>
                            <h5>Java</h5>
                            <label><p>Existen 3 forma de cometar en Java, la que es por documentación, una sola linea y
                                multilinea:</p><p>1. Comentarios por documentación de clases: Esta parte es donde va el nombre
                                del autor (@author Name) del programa en java.</p><p>2. Comentarios de una sola línea: Es para
                                documentar dentro del código.</p><p>3. Comentarios por multilínea: Sirve para documentar textos
                                o instrucciones dentro del código.</p></label>
                                <img src="https://i.ibb.co/TmCMHzt/Comentario-Java.png" class="img-fluid" alt="Comentario-Java" border="0"/>
    
                        </div>
                        <br></br>
                        </p>
                        <h4>Api Java</h4>
                        <p>
                        <div class="form-group">
                            <label>
                                Los Paquetes contienen Clases<br></br>
                                Las Clases contienen atributos y metodos.
                                <br></br>
                                <br></br>
                            </label>
                            <img src="https://i.ibb.co/thTg6fk/par-Class-Met.png"  class="img-fluid" alt="par-Class-Met" border="0"/>
                            <br></br>
                            <br></br>
                            <label>
                                Entendiendo esta distribución podemos entender un poco mas a fondo la <a
                                    href="https://docs.oracle.com/javase/7/docs/api/" class="link-warning">Api de Java</a>
                            </label>
                            <br></br>
                            <br></br>
                            <img src="https://i.ibb.co/kct9xdr/api-explicada.png" class="img-fluid rounded" alt="api-explicada" border="0"/>
                            <br></br>
                            <br></br>
                            <h5>Ejemplo - Clase Scanner</h5>
                            <br></br>
                            <label>La clase Scanner pertenece al paquete Java.util por lo cual buscamos en la sección de
                                paquetes: </label>
                            <br></br>
                            <br></br>
                            <img src="https://i.ibb.co/SRVYrnv/api-paq.png" class="img-fluid rounded" alt="api-paq" border="0"/>
                            <br></br>
                            <br></br>
                            <label>Vamos a la sección de Clases, donde nos aparecerán todas las clases pertenecientes al
                                paquete Java.util y seleccionamos</label>
                            <br></br>
                            <br></br>
                            <img src="https://i.ibb.co/wykqJgF/api-class.png" class="img-fluid rounded" alt="api-class" border="0"/>
                            <br></br>
                            <br></br>
                            <label>Y se muestra la explicación de la clase, su funcionamiento, todos sus metodos y sus
                                atributos listos para ser utilizados</label>
    
                            <br></br>
                            <br></br>
                            <img src="https://i.ibb.co/2qmstVt/api-result.png" class="img-fluid rounded" alt="api-result" border="0"/>
                            <br></br>
                            <br></br>
                            <label>Al llegar al area del Resumen de los métodos, vemos el tipo de dato que retornan los
                                metodos a la izquierda, y el nombre y una descripción del metodo a la derecha</label>
                            <br></br>
                            <br></br>
                            <img src="https://i.ibb.co/wR6dKgL/api-met.png" class="img-fluid rounded" alt="api-met" border="0"/>
                            <br></br>
                            <br></br>
                            <label>Tras esta breve explicación y algo de práctica podrás manejar Java y su api de manera
                                fluida</label>
                        </div>
                        </p>
    
    
    
    
    
                    </div>
                    </div>
                </div>
    
    
            </div>
        )
    }
}

    
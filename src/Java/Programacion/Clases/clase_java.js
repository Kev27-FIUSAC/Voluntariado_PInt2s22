import React, { Component } from 'react';
import './clase_java.css';

export default class Clase_java extends Component {
    constructor(p) {
        super(p)
    }


    render() {
        return (
            <div class="div-central container scrollspy-example" data-spy="scroll" data-target="#list-example">

            <div class="div-master">
                <div class="row">
                    {/*<!--Sección de minidefiniciones-->*/}
                    <div class="col-3 div-aclaraciones">
                        <div class="card text-dark opacity-75" >
                            <div class="card-body text-dark">
                                <h5 class="card-title text-dark">Clase</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Definición</h6>
                                <p class="card-text text-dark">
                                    Es la definición del conjunto de atributos y metodos que componen a un objeto<br></br>
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <div class="card text-dark opacity-75" >
                            <div class="card-body text-dark">
                                <h5 class="card-title text-dark">Objeto</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Definición</h6>
                                <p class="card-text text-dark">
                                    Un objeto es el producto de una clase.
                                    En java obtenemos un objeto de una clase de la suguiente manera:
    
                                <div id="exp-de-codigo" class="text-center">Clase nombreDelObjeto = <span
                                        class="text-danger">new</span> Clase();</div>
    
                                <br></br>
                                despues de <span class="text-danger">new</span> se escribe el constructor de la clase.
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <div class="card text-dark opacity-75" >
                            <div class="card-body text-dark">
                                <h5 class="card-title text-dark">Json</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Definición</h6>
                                <p class="card-text text-dark">
                                    Tipo de archivo que almacena en su interior un objeto Javascript, es el sustituto
                                    de XML, que y está compuesto por atributo y valores.
    
                                    <img src="https://i.ibb.co/TM7JXRT/json-Example.png" class="img-fluid" alt="json-Example" border="0"/>
    
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <div class="card text-dark opacity-75" >
                            <div class="card-body text-dark">
                                <h5 class="card-title text-dark">Constructor</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Definición</h6>
                                <p class="card-text text-dark">
                                    El constructor de una clase es el <span class="text-primary">Método</span> que se
                                    encarga de construir o <span class="text-primary">inicializar</span>
                                    un objeto. Puede tener diversidad de atributo dentro de los parentesis, e incluso puede
                                    estar vacío con valores
                                    por defecto.
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <div class="card text-dark opacity-75" >
                            <div class="card-body text-dark">
                                <h5 class="card-title text-dark">Inicializar</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Definición</h6>
                                <p class="card-text text-dark">
                                    Darle un valor a una variable que solo fue creada, pero no se le asignó un valor.
                                    <br></br>
                                <div class="text-primary">
                                    //Variable creada sin su valor<br></br>
                                    int edad;<br></br>
                                    //Inicialización de variable<br></br>
                                    edad = 25;
                                </div>
    
    
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <div class="card text-dark opacity-75" >
                            <div class="card-body text-dark">
                                <h5 class="card-title text-dark">Jar</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Definición</h6>
                                <p class="card-text text-dark">
                                    Un jar es un tipo de archivo ejecutable que permite ejecutar
                                    tanto aplicaciones como herramientas escritas en lenguaje Java
                                </p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-9">
                        <div class="stater-template">
                            <h1>Clases Java</h1>
                            <p class="lead">Un pequeño listado sobre algunas clases importantes de Java
                            </p>
                        </div>
    
    
                        <h4 id="EPC-class-list">Estructura Paquetes y clases</h4>
                        <p>
                        <img src="https://i.ibb.co/thTg6fk/par-Class-Met.png" class="img-fluid" alt="par-Class-Met" border="0"/>
                        </p>
                        <h4 id="Math-class-list">CLASE MATH</h4>
                        <p>
    
    
                            <label>Se relaciona con las matemáticas especialmente con números irracionales como por ejemplo
                                (π = 3.14159265358979323846), (e = 2.7182818284590452354). La clase math nos ayuda a como
                                ingresar los decimales que deseamos o manejar todos nuestros cálculos con cierta
                                aproximación de todo cálculo que deseemos, en el cual nos mostrará todos los decimales que
                                estemos haciendo para nuestras aproximaciones.
                        </label>
                        
    
                        <img src="https://i.ibb.co/ng50Qwd/Clase-Math.png" class="img-fluid" alt="Clase-Math" border="0"/>
                       
    
    
    
    
                        <h4 id="Math-class-list">CLASE MATH EN FUNCIONES TRIGONOMETRICAS</h4>
                        <label>De igual forma para lo que es las funciones trigonométricas como pasar de radianes a grados o
                            de grados a radianes utilizando lo que es la clase math podemos calcular “cos, sen y tan”, en el
                            siguiente ejemplo se muestra de como pasar de grados a radianes como bien sabemos para pasar a
                            radianes se debe multiplicar el grado que tenemos por ( π/180) o también (2π/360).</label>
                        
                            <img src="https://i.ibb.co/g6m5zhx/Clase-math-angulos.png" class="img-fluid" alt="Clase-math-angulos" border="0"/>                 
    
    
                        <h4 id="Math-class-list">CLASE MATH EXPONENCIALES Y LOGARITMICAS</h4>
                        
                        <img src="https://i.ibb.co/hyLQymW/Clase-math-logaritmos.png" class="img-fluid" alt="Clase-math-logaritmos" border="0"/>
                       
    
                        <h4 id="Math-class-list">CLASE MATH EN POTENCIA Y RAIZ CUADRADA</h4>
                        <label>De igual forma nos ayuda para a elevar un número a cualquier número como al cuadrado de igual
                            forma sacar la raíz de un número, únicamente usando funciones como “Math.pow” para potenciar un
                            número y “Math.sqrt” para sacar la raíz cuadrada de un número. </label>
                        
                            <img src="https://i.ibb.co/2jzPJny/Clase-math-Potencia-raiz.png" class="img-fluid" alt="Clase-math-Potencia-raiz" border="0"/>
                       
    
                        <h4 id="Math-class-list">CLASE MATH EN APROXIMACION</h4>
                        <label>Para expresar un número y aproximar un número a los decimales que nosotros deseemos se
                            utiliza la siguiente función “around”, de igual forma de como de elegir cuantos decimales
                            queremos sin la necesidad de aproximar se utiliza la función “floor” como por ejemplo:
                            </label>
                        
                            <img src="https://i.ibb.co/Nx6FxnJ/Clase-math-Aproximacion.png" class="img-fluid" alt="Clase-math-Aproximacion" border="0"/>
                        
    
                        <h4 id="Math-class-list">CLASE MATH EN NUMEROS RANDOM</h4>
                        <label>De igual forma la clase Math nos permite por medio de una función llamada “Random” en el cual
                            como lo dice su nombre para implementar números variados como por ejemplo: </label>
                        
                            <img src="https://i.ibb.co/CKRH4cR/Clase-math-random.png" class="img-fluid" alt="Clase-math-random" border="0"/>
                        
    
    
    
                        </p>
                        <h4 id="Scanner-class-list">CLASE SCANNER</h4>
                        <p>
    
                            <label>El uso de esta clase es fundamental cuando estamos empezando a programar ya que estamos
                                interactuando con el usuario pidiendo cierta información como lo es su nombre, edad,
                                celular… entre muchas otras cosas que el usuario tendrá que escribir desde el teclado y
                                almacenando la información que ingrese el usuario, siempre teniendo en cuenta que tipo de
                                información le estaremos solicitando como lo es su nombre declarar la variable donde estará
                                almacenada como de tipo “String” o números en este caso “int”, de igual forma si son notas
                                de sus clases ya declarar de tipo “Double”. Para llamar esta clase primero debemos importar
                                la librería Scanner como “import java.util.Scanner” y se debe de crear un objeto donde
                                tendrán los tipos de datos que le pediremos al usuario como por ejemplo:
                        </label>
                        
    
                        <img src="https://i.ibb.co/4gdkvdw/Clase-Scanner.png" class="img-fluid" alt="Clase-Scanner" border="0"/>
                        
    
                       
    
                        <h4 id="Gson-class-list">CLASE CALENDAR</h4>
                        <p>
                            <label>Principalmente para usar esta clase debemos de importar la siguiente librería “import
                                java.util.Calendar” y como es una clase abstracta no necesariamente debe iniciar con “new”
                                porque no tiene un cuerpo como tal como los objetos y es un método que no será ejecutado
                                únicamente hace referencia a otros métodos de las subclases, como por ejemplo crearemos
                                métodos “SimpleDateFormat(“dd-MMM-yyyy”)” para ya tener una estructura y otros método que
                                usaremos es el “GregorianCalendar()” para obtener la información de la fecha actual,
                                recordande que el tipo Calendar contiene el Date para obtener la información con “Date fecha
                                = calendar.getTime” por el set obtiene los valores en el date y getTime obtener la fecha de
                                igual forma recordando que los meses en java empiezan en 0 por lo cual “0 = Enero”. Ejemplo:
                        </label>
                     
    
                        <img src="https://i.ibb.co/yP2Xxtq/Clase-Calendar.png" class="img-fluid" alt="Clase-Calendar" border="0"/>
                        
    
                        </p>
    
                        <h4 id="Files-class-list">CLASE FILES</h4>
                        <p>
    
                            <label>Representa un fichero, nos proporciona información acerca de los archivos de los
                                atributos y directorios, de igual forma la clase File tiene constructores que son los
                                siguientes: “File(String path)”, “File(String path, String name)”, “File(File dir, String
                                name)” de igual forma parámetros como “String getName()”, “String getPath()”, “String
                                getAbsolutePath()” son los mas usados principalmente cuando manejamos la clase File, el
                                parámetro “Path” indica el camino hacia el directorio donde se encuentre el archivo, “name”
                                indica el nombre del archivo.
                        </label>
                        
    
                        <img src="https://i.ibb.co/4Vv9CFw/Clase-File.png" class="img-fluid" alt="Clase-File" border="0"/>
                        
    
                        </p>
    
                        <h4 id="Gson-class-list">CLASE SIMPLE JSON</h4>
                        <p>
                            Simple Json es una libreria que se encarga de convertir objetos Java a objetos Json, esto lo
                            realiza generando
                            un archivo que posee un formato especifico; puedes ver el formato en las tarjetas de definición
                            scrolleando hasta arriba.
    
                            Esta libreria no es propia de Java, por lo cual no viene por defecto en el paquete de Java, por
                            lo cual, para poder utilizar la librería debemos investigar y realizar los siguentes pasos:
                        </p>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value=""/>
                            <label class="form-check-label" for="defaultCheck1">
                                Descargar Simple Json Jar
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value=""/>
                            <label class="form-check-label" for="defaultCheck1">
                                ¿Como instalar jar externos en el IDE que hayas elegido?
                            </label>
                        </div>
                        <br></br>
                        <br></br>
                        Una vez tengas hecho lo anterior, veamos como usarlo:
                        <img src="https://i.ibb.co/L5GNjRX/Json-Simple.png"  class="img-fluid" alt="Json-Simple" border="0"/>
                        Analizar este codigo es la oportunidad perfecta de entender un poco 
                        la programación orientada a objetos:<br></br>
                        <br></br>
                        La variable jsonData contiene toda la información que el archivo json tiene. Y es de tipo 
                        String, podemos pensar la variable jsonData como si fuese una hoja fisica con la información
                        que necesitamos.<br></br><br></br>
                        El objeto trad, es un traductor, podemos imaginar que este traductor es una maquina
                        que se encarga de leer el documento anterior y convirte su contenido en un objeto fisico con las
                        descripciones que obtuvo leyendo el documento. <br></br><br></br>
                        El objeto array es un listado de objetos que podemos imaginar como una estantería, en la cual
                        almacenar nuestra colección de objetos que convertimos con nuestro traductor. 
                        <br></br>
                        La clase Persona utilizada para este ejemplo es la siguiente:
                        <img src="https://i.ibb.co/LSLLHzC/Clase-Persona.png" class="img-fluid" alt="Clase-Persona" border="0"/>
                        Observa el constructor de la clase Persona y también observa como utilizamos 
                        ese constructor dentro del ejemplo de Json Simple, se encuentra hasta abajo de la imagen.<br></br>
                        
                        Adémas, el array Clientes[] es simplemente un array de tipo Persona. Cuando 
                        creas una clase en java, puedes utilizarla como si fuera un tipo de dato tanto en 
                        arrays, como en funciones.
                        
                        <br></br>
                        <br></br>
                        El modelo de Json utilizado para este ejemplo es el siguiente:
                        <img src="../img/json_example_for_jsonSimple.png" class="img-fluid w-75"/>
                        <br></br>
                        Nota: La versión de Simple Json utilizada es 1.1.1
                        </p>
    
                    </div>
                </div>
    
    
    
    
    
            </div>
        </div>
        )
    }
}
import React, { Component } from 'react';
import './poo_java.css';
import LibroPortada from './img/LibroPortadaD.png'
import AbstraccionEjemplo from './img/Abstraccion_Ejemplo.png'
import EncapsulamientoEjemplo from './img/Encapsulamiento_Ejemplo.png'
import HerenciaEjemplo from './img/Herencia_Ejemplo.png'
import PolimorfismoEjemplo from './img/Polimorfismo_Ejemplo.png'
import PooClase from './img/POO_Clase.png'
import PooClase1 from './img/POO_Clase1.png'
import PooClase2 from './img/POO_Clase2.png'
import PooInstancia from './img/POO_instancia.png'
import PooInstancia1 from './img/POO_instancia1.png'
import PooEjecucionPrograma from './img/POO_Ejecucion programa.png'

export default class Poo_java extends Component {
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
                        <div class="card text-dark opacity-75" >
                            <div class="card-body text-dark">
                                <h5 class="card-title text-dark">Bibliografía </h5>
                                <h6 class="card-subtitle mb-2 text-muted">Libros</h6>
                                <p class="card-text text-dark">
                                    A continuación puedes acceder a una carpeta con diversos libros que hemos recolectado a lo largo de los años, los cuales son de mucha utilidad para entender estos temas a profundidad.</p>
    
                                    <p><img src={LibroPortada} class="img-fluid" alt="Libro-Portada-D" border="0"/></p>
                                    <a href="https://drive.google.com/drive/folders/1LvPYdOH4i4wIoK0kTm1_SVSZmRfi4cLy?usp=sharing" class="btn btn-outline-success btn-sm">Ver libros</a>
    
                               
                            </div>
                        </div>
                    </div>
        
                    <div class="col-9">
        
                        <div class="stater-template">
                            <h1>Programación Orientada a Objetos</h1>
                            <p class="lead">También conocido como POO o como OOP por sus siglas en ingles (Object Oriented Programming)
                            </p>
                        </div>
                        <div class="container">
                            <div class="form-group">
                                <h2> ¿Qué es POO?</h2>
                                <p>Es un paradigma, donde los programas se modelan en base a objetos del mundo real, los cuales
                                    tienen diferentes caracteristicas y funcionalidades. Permite construir programas complejos a partir
                                    de entidades de software más simples llamadas objetos, que son instancias reales o muestras de
                                    clases, lo cual permite heredar datos y códigos de aplicaciones existentes. Esto ayuda a los
                                    programadores trabajar de una manera más eficiente y permite la reutilización de las clases para
                                    optimizar el trabajo. </p>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <h2 class="text-white">Objetos</h2>
                                Los objetos son los elementos que se necesitan para la construcción de un programa en especifico,
                                    los cuales se identifican por tener características y comportamientos.
                                    En la programación un objeto tiene características en uno o más atributos, además las acciones o
                                    comportamientos del mismo se implementan en métodos o funciones. Por ejemplo: <br></br>
    
                                    <ul>
                                        <li>Automóvil</li>
                                        <li>Ventana</li>
                                        <li>Libro</li>
                                        <li>Persona</li>
                                        <li>Perro o Gato</li>
                                    </ul>
    
                                    En java los objetos se definen con la utilización de las clases y las clases son plantillas en las
                                    cuales se definen los metodos, funciones y atributos (características) del objeto. Cada vez que se
                                    necesite crear un objeto a este se le atribuye el nombre de instancia de una clase. Por
                                    ejemplo: <br></br>
                                    Si tenemos un objeto Persona debemos saber sus atributos los cuales pueden ser de forma general:
                                    nombre, edad, altura, color de cabello, color de ojos, peso, nacionalidad, estado civil, etc. <br></br>
                                    También debemos saber que acciones tendrá ese objeto persona los cuales en forma general pueden ser:
                                    caminar, correr, nadar, hablar, comer, saltar, etc. <br></br>
                
                                    
                                    <br></br>
                
                                <h2 class="text-white">Pilares del POO</h2>
                                <p>En la programación orientada a objetos existen 4 pilares los cuales son: Abstracción,
                                    Encapsulamiento, Polimorfismo y Herencia.
                                    </p>
                                <h2>Abstracción</h2>
                                <p>Es un proceso en el cual debemos interpretar y reconocer las características esenciales de un
                                    objeto, y por lo tanto ignorar lo que resulta no esencial. <br></br> <br></br>
    
                                    <ul>
                                        <li>Definir las características especificas del objeto, las cuales hagan distinción de otros
                                            objetos.</li>
                                        <li>Se debe tomar en cuenta que es exactamente el objeto y que es lo que realiza, porque de esta
                                            manera se decide de una mejor manera la implementación del mismo.</li>
                                        <li>Se hace énfasis en el qué hace el objeto en vez de en el cómo lo hace.</li>
                                    </ul>
                                    
                                    </p><br></br>
                                    <img src={AbstraccionEjemplo} class="img-fluid" alt="Abstracci-n-Ejemplo" border="0"/>
                                <br/>
                                <br/>
                                <h2>Encapsulamiento</h2>
                                <p>Es una propiedad que nos permite ocultar la información de un objeto al mundo exterior. <br/>
                                    Se agrupan las características (atributos) del objeto con acceso privado y los comportamientos
                                    (métodos) con acceso público, dentro de una clase. <br/> <br/>
                                    Se accede o modifica los atributos o miembros de la clase por medio de sus métodos, los tipos de acceso son:
                                    <ul>
                                        <li>private: solamente la clase puede acceder a la propiedad o método.</li>
                                        <li>protected: las clases del mismo paquete y que heredan de la clase pueden acceder a la propiedad o
                                            método.</li>
                                        <li>public: la propiedad o método es accesible desde cualquier método de otra clase.</li>
                                    </ul>
                                    package private (valor por defecto si no se indica ninguno de los anteriores): solo las clases en
                                    el mismo paquete pueden acceder a la propiedad o método.
                                    </p><br/>
                                    <img src={EncapsulamientoEjemplo} class="img-fluid" alt="Encapsulamiento-Ejemplo" border="0"/>
                                    <br/>
                                    <br/>
                                <h2>Herencia</h2>
                                <p>Es una propiedad que permite crear clases a partir de otras ya existentes, obteniendo
                                    características (métodos y atributos) similares a los ya existentes.
                                    En otras palabras la nueva clase (subclase, clase derivada o también llamada clase hija) puede
                                    utilizar la misma implementación de su superclase (clase base o también llamada clase padre) o
                                    especificar una nueva implementación.
                                    <ul>
                                        <li>Nos permite compartir automáticamente métodos y datos entre clases, subclases y objetos.</li>
                                        <li>Es un mecanismo que nos permite crear clases derivadas a partir de clases base.</li>
                                    </ul>
                                    </p> <br/> <br/>
                                    <img src={HerenciaEjemplo} alt="Herencia-Ejemplo" border="0"/>
                                    <br/> <br/>
                                <h2>Polimorfismo</h2>
                                <p>Son comportamientos diferentes, asociados a objetos distintos, pueden compartir el mismo nombre;
                                    al llamarlos por ese nombre se utilizará el comportamiento correspondiente al objeto que se esté
                                    usando. <br/>
                                    Por ejemplo: si tenemos un método comunicar() en la clase Animal, sabemos que cada animal se
                                    comunica de diferente manera, entonces si tenemos un objeto perro y queremos llamar al método
                                    comunicar() y también creamos un objeto gato y llamamos al método comunicar(), estaremos utilizando
                                    dos veces el mismo método pero para diferentes objetos lo cual nos permite diferenciar la forma en
                                    que se comunica cada uno de los animales,
                                    ya que el perro dice "Guau!" y el gato "Miau!".<br/>
                                    </p><br/>
                                    <img src={PolimorfismoEjemplo} class="img-fluid" alt="Polimorfismo-Ejemplo" border="0"/>
    
                            <br/>
                            <p class="text-white ">Esta es la clase Persona con sus atributos y metodos.<br/></p>
                            <img src={PooClase} class="img-fluid" alt="POO-Clase" border="0"/>
                            <br/><br/>
                            <img src={PooClase1} class="img-fluid" alt="POO-Clase1" border="0"/>
                            <br/><br/>
                            <img src={PooClase2} class="img-fluid" alt="POO-Clase2" border="0"/>
                            <br/>
                            <br/>
                            <p class="text-white ">Esta es la forma en la que se declaran las instancias para crear un
                                objeto.</p>
                                <img src={PooInstancia} class="img-fluid" alt="POO-instancia" border="0"/>
                            <br/><br/>
                            <img src={PooInstancia1} class="img-fluid" alt="POO-instancia1" border="0"/>
                            </div>
                            <br/>
                            <br/>
                            <p class="text-white ">El resultado del programa anterior se muestra en la siguiente imagen, en la cual la Persona 1 hace referencia a la forma de trabajar las primeras instancias y la Persona 2 hace referencia a otra forma de trabajar las instancias y en cada caso el resultado será el mismo pero con diferentes datos.</p>
                            <br/>
                            <img src={PooEjecucionPrograma} alt="POO-Ejecuci-n-programa" border="0"/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
        
        
                    </div>
                </div>
            </div>
            
            
        </div>
        )
    }
}
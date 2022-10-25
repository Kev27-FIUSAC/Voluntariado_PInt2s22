import React, { Component } from 'react';
import './Ides.css';

export default class Ides_Java extends Component {
    constructor(p) {
        super(p)
    }

    render() {
        return(
            <div class="div-central container">

        <div class="stater-template">
            <h1>IDES</h1>
            <h3 class="lead">IDES recomendables para desarollar Java</h3>
        </div>
        <div class="container">
            <div class="form-group">
               <h2> ¿Qué es un IDE?</h2>
            <label>Entorno de Desarrollo Integrado, Es el entorno digital empleado para desarrollar aplicaciones de distintos tipos en una sola interfaz de usuario gráfica (GUI). Su objetivo es apoyar a un desarrollador en la construcción de aplicaciones de software con una configuración y todos los instrumentos necesarios. La selección del IDE excelente está determinada por variables como la asistencia lingüística, los requisitos del sistema operativo y los gastos, etc. Java es un buen lenguaje de programación. Al ser un lenguaje de propósito general orientado a objetos podemos orientar nuestros proyectos a múltiples usos. Podemos encontrarlo en multitud de plataformas diferentes y es ampliamente usado en la industria. Hace que la tarea del programador sea más sencilla, gracias a las herramientas que tiene incorporadas, como compiladores, depuradores o bibliotecas, y esto se traduce en un aumento de la productividad. Es seguro que un IDE incluye muchas más funciones que también tienen una curva de aprendizaje, estas funciones terminan siendo más poderosas y útiles si se utilizan a diario.</label>  
            </div>
            <br></br>
            <div >
                <h2>Características</h2>
                <div>
                   
                   <dl class="row">
                     <dt class="col-sm-3">Depurador o debugger</dt>
                     <dd class="col-sm-9">
                         <label>Un programa que permite probar y buscar errores en otros programas.</label>
                     </dd>              
                     <dt class="col-sm-3">Editor de código</dt>
                     <dd class="col-sm-9">
                       <label>Se trata de un editor de texto creado exclusivamente para trabajar con el código fuente de programas informáticos.</label>      
                     </dd>                              
                     <dt class="col-sm-3">Refactorización de código</dt>
                     <dd class="col-sm-9">
                       <label>Proceso en el que se recurre a funciones como el reformateo o la encapsulación para mejorar el código fuente.</label>          
                     </dd>
                               
                   <dt class="col-sm-3">Compilador</dt>
                   <dd class="col-sm-9">
                     <label>Un programa encargado de traducir las instrucciones en código fuente, escritas en lenguaje de programación, a código objeto, el único lenguaje que el ordenador entiende.</label>       
                   </dd>
                
                   <dt class="col-sm-3">Linker</dt>
                   <dd class="col-sm-9">
                     <label>Es la herramienta con la que combinar diferentes archivos de código fuente para convertirlos en un único fichero ejecutable.</label>
                 
                   </dd>
                   
                   <dt class="col-sm-3">Multiplataforma </dt>
                   <dd class="col-sm-9">
                     <label>La mayoria de IDES estna disponibles para distintos sistemas operativos.</label>          
                   </dd>
                   
                   <dt class="col-sm-3">Sistema para control de versiones</dt>
                   <dd class="col-sm-9">
                     <label>Multiples IDES tiene integrado git, el control de versiones mas utilizado en la programacion.</label>
                 
                   </dd>
                   </dl>
                 </div>
            </div>
   
            <div class="form-group">
                <h2>IDES recomendables</h2>
                
                <section id="gallery">
                    <div class="container">
                      <div class="row">
                      <div class="col-lg-4 mb-4">
                      <div class="card">
                        <img src="https://victomanolo.files.wordpress.com/2018/01/logo.png" alt="" class="card-img-top"/>
                        <div class="card-body">
                          <h5 class="card-title">Netbeans 8.2</h5>
                          <p class="card-text">Fue la última versión de Netbeans antes su integración con Apache y la versión Java 8. Permite desarrollar rápida y fácilmente aplicaciones Java de escritorio, móviles y web, así como aplicaciones HTML5 con HTML, JavaScript y CSS.</p>
                         <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                          
                        </div>
                       </div>
                      </div>
                    <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="https://www.andreszsogon.com/wp-content/uploads/logo_apache_netbeans_cordova.png" alt="" class="card-img-top"/>
                        <div class="card-body">
                          <h5 class="card-title">Apache Netbeans 12</h5>
                          <p class="card-text">Apache NetBeans es mucho más que un editor de texto. Resalta el código fuente sintáctica y semánticamente, le permite refactorizar fácilmente el código, con una gama de herramientas útiles y potentes.                                                                                                            </p>
                         <a href="https://netbeans.apache.org/" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                          
                        </div>
                        </div>
                      </div>
                      <div class="col-lg-4 mb-4">
                      <div class="card">
                        <img src="https://www.pngkit.com/png/detail/223-2231671_eclipse-is-one-of-the-most-popular-and.png" alt="" class="card-img-top"/>
                        <div class="card-body">
                          <h5 class="card-title">Eclipse</h5>
                          <p class="card-text">Es un entorno de desarrollo software multi-lenguaje construido alrededor de un workspace al que pueden incluirse un gran número de plug-ins que proporcionan funcionalidades concretas relacionadas con lenguajes específicos o con la interacción con otras herramientas implicadas en el desarrollo de una aplicación</p>
                         <a href="https://www.eclipse.org/downloads/" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                         
                        </div>
                       </div>
                      </div>
                      <div class="col-lg-4 mb-4">
                        <div class="card">
                          <img src="https://daviddelatorre.me/wp-content/uploads/2017/06/intellij.png" alt="" class="card-img-top" />
                          <div class="card-body">
                            <h5 class="card-title">IntelliJ Idea</h5>
                            <p class="card-text">IntelliJ IDEA es un IDE inteligente y sensible al contexto para trabajar con Java y otros lenguajes JVM como Kotlin, Scala y Groovy en todo tipo de aplicaciones. IDEA también integra herramientas de construcción, ejecución de pruebas unitarias y herramientas de verificación de cobertura, y una ventana de terminal incorporada</p>
                           <a href="https://www.jetbrains.com/idea/" class="btn btn-outline-success btn-sm">Ir a pagina principal</a>
                            
                          </div>
                         </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                              <img src="data:image/png;base64,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" alt="" class="card-img-top" />
                              <div class="card-body">
                                <h5 class="card-title">SlickEdit</h5>
                                <p class="card-text">SlickEdit tiene las funciones de Java más potentes disponibles, incluido un amplio conjunto de funciones de navegación y análisis de símbolos, compilaciones/compilaciones integradas, integración de control de versiones potente, depurador de Java, embellecedor, embellecer mientras se escribe, expansión de sintaxis, sangría de sintaxis, SmartPaste®, coloreado de símbolos, fuente diferencia, y mucho más.</p>
                               <a href="https://www.slickedit.com/" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                                
                              </div>
                             </div>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <div class="card">
                                  <img src="https://aspiringcoders.com/wp-content/uploads/2020/11/JCreator-logo-1024x284.jpeg" alt="" class="card-img-top" />
                                  <div class="card-body">
                                    <h5 class="card-title">JCreator</h5>
                                    <p class="card-text">JCreator es un IDE de Xinox Software que le permite manejar archivos de proyectos de Java.  Tiene herramientas sofisticadas para editar código, compilar y correr código ejecutable. JCreator Limited Edition es Freeware. Este IDE tiene plantillas de código para ahorrarte tiempo escribiendo, un cómodo debug integrado y se encarga de la configuración de Classpath.</p>
                                   <a href="http://www.cs.cornell.edu/courses/cs211/2005sp/Software/JCreator/installation.htm" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                                    
                                  </div>
                                 </div>
                                </div>
                        <div class="col-lg-4 mb-4">
                        <div class="card">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqL54R6-cBBz0fGvjQkLmrDN0QkyZHDxkggA&usqp=CAU" alt="" class="card-img-top" />
                          <div class="card-body">
                            <h5 class="card-title">BlueJ</h5>
                            <p class="card-text">BlueJ proporciona un entorno de enseñanza fácil de usar que ayuda a los estudiantes de primer año a aprender el lenguaje de programación Java y luego los ayuda a hacer la transición a un IDE mundial. El entorno de desarrollo integrado es muy interactivo y fomenta la experimentación y la exploración.</p>
                           <a href="https://www.bluej.org/" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                            
                          </div>
                         </div>
                        </div>
                         <div class="col-lg-4 mb-4">
                        <div class="card">
                          <img src="https://startupbeat.com/wp-content/uploads/2013/03/codenvy_logo.jpg" alt="" class="card-img-top" />
                          <div class="card-body">
                            <h5 class="card-title">Codenvy</h5>
                            <p class="card-text">Es un IDE en línea de uso gratuito que admite varios lenguajes de programación y hace la vida más fácil para los desarrolladores en todo el mundo. El sitio web proporciona a sus usuarios un IDE general que lo ayuda a desarrollar en la nube. La versión gratuita del sitio soporta solo proyectos públicos. Para proyectos privados, tendrá que obtener un plan pagado, que comienza en $ 9.</p>
                           <a href="https://chrome.google.com/webstore/detail/codenvy/lefigjbiimiemfhjmibbgemkpenelmag?hl=es" class="btn btn-outline-success btn-sm">Extension Chrome</a>
                            
                          </div>
                         </div>
                        </div>
                        
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                              <img src="https://i0.wp.com/www.filehippofile.com/wp-content/uploads/2019/01/jGRASP.jpg?resize=473%2C142&ssl=1" alt="" class="card-img-top" />
                              <div class="card-body">
                                <h5 class="card-title">jGRASP</h5>
                                <p class="card-text">Es un entorno de desarrollo ligero, creado específicamente para proporcionar la generación automática de visualizaciones de software para mejorar la comprensibilidad del software. jGRASP produce diagramas de estructura de control (CSD) para Java, C, C++, Objective-C, Python, Ada y VHDL; gráficos de perfil de complejidad (CPG) para Java y Ada; diagramas de clases UML para Java; y tiene visores de objetos dinámicos y un lienzo de visor que funcionan junto con un depurador integrado y un banco de trabajo para Java.</p>
                               <a href="https://www.jgrasp.org/" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                               
                              </div>
                             </div>
                            </div>
                    </div>
                  </div>
                  </section>

            </div>
           <br></br>
            <div class="form-group">
                <h3>    Referencias</h3>
                <a href="https://es.education-wiki.com/6889327-best-java-ide"><label>https://es.education-wiki.com/6889327-best-java-ide</label></a>
                <br></br>
                <a href="https://ifgeekthen.nttdata.com/es/los-ide-mas-usados-en-programacion-java"><label>https://ifgeekthen.nttdata.com/es/los-ide-mas-usados-en-programacion-java</label></a>         
            </div>
        </div>
    </div>
        )
    }

}
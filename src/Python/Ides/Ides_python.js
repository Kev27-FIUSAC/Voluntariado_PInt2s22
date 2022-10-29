import React, { Component } from 'react';
import './Ides_python.css';

export default class Ides_python extends Component {
    constructor(p) {
        super(p)
    }


    render() {
        return (
            <div class="div-central container">

        <div class="stater-template">
            <h1>IDES</h1>
            <h3 class="lead">IDES recomendables para desarollar Python</h3>
        </div>
        <div class="form-group">
            <h2> ¿Qué es un IDE?</h2>
         <label>Entorno de Desarrollo Integrado, Es el entorno digital empleado para desarrollar aplicaciones de distintos tipos en una sola interfaz de usuario gráfica (GUI). Su objetivo es apoyar a un desarrollador en la construcción de aplicaciones de software con una configuración y todos los instrumentos necesarios. La selección del IDE excelente está determinada por variables como la asistencia lingüística, los requisitos del sistema operativo y los gastos, etc. Podemos encontrarlo en multitud de plataformas diferentes y es ampliamente usado en la industria. Hace que la tarea del programador sea más sencilla, gracias a las herramientas que tiene incorporadas, como compiladores, depuradores o bibliotecas, y esto se traduce en un aumento de la productividad. Es seguro que un IDE incluye muchas más funciones que también tienen una curva de aprendizaje, estas funciones terminan siendo más poderosas y útiles si se utilizan a diario.</label>  
         </div>
         <br/>
         <br/>
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
        <br/>
        <br/>
        <div class="form-group">
            <h2>IDES recomendables</h2>
            
            <section id="gallery">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="card">
                          <img src="https://www.python.org/static/community_logos/python-logo-master-v3-TM.png" alt="" class="card-img-top"/>
                          <div class="card-body">
                            <h5 class="card-title">IDLE</h5>
                            <p class="card-text">Entorno de desarrollo integrado para Python, Es un entorno gráfico de desarrollo elemental que permite editar y ejecutar programas en Python. IDLE es también un entorno interactivo en el que se pueden ejecutar instrucciones sueltas de Python. IDLE es también un editor de programas elemental, que permite redactar programas, guardarlos en archivos y ejecutarlos.</p>
                           <a href="https://docs.python.org/3/library/idle.html" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                            
                          </div>
                         </div>
                        </div>
                  <div class="col-lg-4 mb-4">
                  <div class="card">
                    <img src="data:image/jpeg;base64,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" alt="" class="card-img-top"/>
                    <div class="card-body">
                      <h5 class="card-title">PyCharm</h5>
                      <p class="card-text">PyCharm está diseñado por programadores y para programadores, con el fin de proporcionarle todas las herramientas que necesita para un desarrollo de Python productivo. PyCharm ofrece una gran compatibilidad con marcos de trabajo de desarrollo web moderno como Django, Flask, Google App Engine, Pyramid y web2py</p>
                      <a href="https://www.jetbrains.com/es-es/pycharm/" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                      
                    </div>
                   </div>
                  </div>
                <div class="col-lg-4 mb-4">
                <div class="card">
                    <img src="https://cdn.nearsoft.com/uploads/2018/01/how-to-install-packages-in-atom-lede.jpg" alt="" class="card-img-top"/>
                    <div class="card-body">
                      <h5 class="card-title">Atom</h5>
                      <p class="card-text">Atom es un editor de texto muy completo especializado en programación. Compatible con Python, permite escribir código y programar cómodamente desde tu PC con Windows o Linux o desde tu Mac con macOS. Junto a un buen editor de código no puede faltar unn Terminal como el que integra Platformio-IDE-Terminal en Atom. Además del terminal, integra API y PlatformIO IDE.</p>
                     <a href="https://atom.io/" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                      
                    </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-4">
                  <div class="card">
                    <img src="https://comparecamp.com/media/uploads/2019/04/kdevelop-logo.png" alt="" class="card-img-top"/>
                    <div class="card-body">
                      <h5 class="card-title">KDevelop</h5>
                      <p class="card-text">KDevelop es un IDE extensible de complementos lleno de funciones para C/C++ y tambien compatible con Python. Las plataformas compatibles incluyen Linux, Solaris, FreeBSD, macOS y otras versiones de Unix, así como Microsoft Windows. Se basa en la plataforma KDevelop (kdevplatform), los marcos de KDE y las bibliotecas Qt. Está en desarrollo desde 1998.</p>
                     <a href="https://www.kdevelop.org/" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                     
                    </div>
                   </div>
                  </div>
                  <div class="col-lg-4 mb-4">
                    <div class="card">
                      <img src="https://warehouse-camo.ingress.cmh1.psfhosted.org/dad5e80211d6735fea520f289c600ff924ac84aa/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f7370796465722d6964652f7370796465722f6d61737465722f6272616e64696e672f6c6f676f2f7370796465725f726561646d655f62616e6e65722e706e67" alt="" class="card-img-top"/>
                      <div class="card-body">
                        <h5 class="card-title">Spyder Python</h5>
                        <p class="card-text">Es un software ligero, escrito en Python y disponible de forma gratuita bajo licencia del MIT. Algunas de las características básicas de Spyder Python son su editor de varios lenguajes, la consola interactiva, el visor de documentación, el explorador de variables, el explorador de archivos , etc. Spyder IDE tiene versiones para Windows, Mac o Linux. Además de todo ello, puede ser utilizado como una biblioteca de extensión PyQt y puede ser incorporado en aplicaciones PyQt.</p>
                       <a href="https://pypi.org/project/spyder/#downloads" class="btn btn-outline-success btn-sm">Ir a pagina principal</a>
                        
                      </div>
                     </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="card">
                          <img src="https://www.pngkit.com/png/detail/223-2231671_eclipse-is-one-of-the-most-popular-and.png" alt="" class="card-img-top"/>
                          <div class="card-body">
                            <h5 class="card-title">PyDev para Eclipse</h5>
                            <p class="card-text">Es un plugin open source que se ejecuta en Eclipse. Las principales características que hacen de Pydev una apuesta segura es la depuración integrada de Django, el autocompletado de código, soporte multilingüe, depuración integrada de Python, análisis de código, plantillas de código, marcado de errores o la integración de control de código.</p>
                           <a href="https://www.pydev.org/download.html" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                            
                          </div>
                         </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                              <img src="data:image/png;base64,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" alt="" class="card-img-top"/>
                              <div class="card-body">
                                <h5 class="card-title">Wing IDE</h5>
                                <p class="card-text">Es un entorno de desarrollo integrado comercial para el lenguaje de programación Python. Wing proporciona a los desarrolladores un editor de código fuente con todas las funciones, un depurador, un navegador de código y muchas otras herramientas diseñadas específicamente para su uso con Python. Wing funciona con todas las formas de Python, ya sea que se ejecute como una aplicación independiente, en un servidor web o en un entorno de secuencias de comandos integrado personalizado. Se admiten varias capas de GUI (wxPython, PyQt, PyGTK y Tkinter), al igual que Zope y mod_python para el desarrollo web y pygame para el desarrollo de juegos.</p>
                               <a href="http://wingide.com/" class="btn btn-outline-success btn-sm">Ir pagina principal</a>
                                
                              </div>
                             </div>
                            </div>
   </div>
              </div>
              </section>

        </div>

        <br/>
            <div class="form-group">
                <h3>    Referencias</h3>
                <a href="https://geekflare.com/es/best-python-ide/"><label>Los 11 mejores IDE de Python para potenciar el desarrollo y la depuración</label></a>
                <br/>
                <a href="https://openwebinars.net/blog/los-5-mejores-editores-python/"><label>Los 5 mejores editores Python</label></a>      
                <br/>
                <a href="https://ciberninjas.com/mejores-ide-python/"><label>11 Mejores Editores de Código de Python o entornos de desarrollo IDE 2021</label></a> 
                <br/>
                <a href="https://www.mclibre.org/consultar/python/otros/python-idle.html"><label>IDLE, entorno de desarrollo de Python</label></a>  
            </div>

    </div>
        )
    }
}
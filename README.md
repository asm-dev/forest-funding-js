# Reforestación en Galicia - Interactividad con JS

_Pino Quemado_ es una iniciativa de micromecenazgo desarrollada como parte de una actividad sobre programación asíncrona en el Máster de Desarrollo Web y Aplicaciones de la Universidad Europea de Madrid (UEM).  
El objetivo del proyecto es recaudar fondos para la recuperación de los bosques de Galicia tras los incendios, utilizando un modelo de donaciones altruistas.

> En este proyecto sólo encontrarás datos ficticios. Se trata de una prueba de concepto o proyecto de fines educativos, por lo que no realiza ningún tratamiento de datos reales.

&nbsp;

Si te gustaría conocer más sobre los detalles técnicos detrás de la estructura HTML o el diseño CSS del sitio, te invito a saber más en estos repositorios: web forma parte del programa de actividades de un Máster en Desarrollo Web de la UEM. Si quieres saber más sobre su HTML o CSS, podrás encontrar información en los siguientes repositorios:

1. [Saber más sobre el HTML](https://github.com/asm-dev/forest-funding-html)
2. [Acerca del CSS](https://github.com/asm-dev/forest-funding-css)

&nbsp;

## Detalles técnicos

El proyecto sigue una **arquitectura modular**, lo que significa que cada funcionalidad está encapsulada en su propio archivo dentro de `src/modules/`. Este enfoque garantiza una clara separación de responsabilidades, lo que mejora la claridad, mantenibilidad, escabilidad y reutilización del código.

### Funcionalidades

Para probar las siguientes funcionalidades que se detallan en la tabla puedes navegar metiante el menú principal, haciendo _scroll_ o desde el botón flotante "Salva el bosque de Crescente" hasta la sección "Salvemos Crecente".

|           Funcionalidad           |                                   Objetivo principal                                   |                         Fichero relacionado                          |
| :-------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------: |
| Gestión de eventos en formularios |                                        objetivo                                        |                     pendiente de implementación                      |
|  Barra de progreso de donaciones  | Permitir al usuario conocer en tiempo real el total recaudado para una acción concreta | [`src/modules/donation-tracker.js`](src/modules/donation-tracker.js) |
|       Carrusel de imágenes        |                  Aumentar la interactividad y dinamismo de la página                   |         [`src/modules/carousel.js`](src/modules/carousel.js)         |
|         Cuenta regresiva          | Generar sensación de urgencia, posibilitando con ello un incremento en el total donado |        [`src/modules/countdown.js`](src/modules/countdown.js)        |

### Ejemplos de uso

|                     Acción                     | Visualización |
| :--------------------------------------------: | :-----------: |
| _Actualización automática del tiempo restante_ |      c1       |
|        _Cambio en la barra de progreso_        |      c2       |
|            _Envío de ayuda directa_            |      c3       |
|            _Se alcanza el objetivo_            |      c4       |

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

|           Funcionalidad           |                                                      Objetivo                                                       |                         Fichero relacionado                          | Ejemplo de uso | Visualización |
| :-------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------: | :------------: | :-----------: |
| Gestión de eventos en formularios |                                                         obj                                                         |                                 arch                                 |      ejem      |      vis      |
|  Barra de progreso de donaciones  | Incentivar las donaciones al permitir al usuario conocer en tiempo real el total recaudado para una acción concreta | [`src/modules/donation-tracker.js`](src/modules/donation-tracker.js) |      ejem      |      vis      |
|                obj                |                                                        arch                                                         |                                 ejem                                 |      vis       |
|                obj                |                                                        arch                                                         |                                 ejem                                 |      vis       |

---

### Barra de progreso de donaciones

> _Archivo relacionado_:

Permite a los usuarios conocer el estado de cumplimiento del objetivo de recaudación para una acción concreta. Ver el progreso acumulado debería incentivar las donaciones.

- **Características**:
  - Un botón flotante anima al usuario a participar.
  - Al realizar un donativo, la barra de progreso se actualiza dinámicamente y muestra el porcentaje alcanzado.
  - Implementa validación básica para evitar entradas no válidas.

---

### Carrusel de imágenes

> _Módulo relacionado_: [`src/modules/carousel.js`](src/modules/carousel.js)

El carrusel muestra imágenes relevantes del proyecto y es adaptable a diferentes tamaños de pantalla.

- **Características**:
  - Soporte para navegación hacia adelante y atrás mediante botones.
  - Diseño responsive: ajusta el número de imágenes visibles según el tamaño de la ventana.
  - Optimización dinámica del ancho de las imágenes para una transición fluida.

---

### Cuenta regresiva

> _Fichero relacionado_: [`src/modules/countdown.js`](src/modules/countdown.js)

Muestra un temporizador en tiempo real que indica cuánto tiempo queda para completar la recaudación.

- **Características**:
  - Actualización automática cada minuto para mostrar los días, horas y minutos restantes.
  - Integra información de donaciones, como el objetivo total y el progreso logrado.
  - Gestión de eventos para detener el temporizador cuando se alcance el objetivo.

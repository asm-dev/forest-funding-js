# Reforestación en Galicia - Interactividad con JS

Pino Quemado es una iniciativa de micromecenazgo desarrollada como parte de una actividad sobre programación asíncrona del Máster de Desarrollo Web y Aplicaciones de la Universidad Europea de Madrid (UEM). El objetivo del proyecto es recaudar fondos para la recuperación de los bosques de Galicia tras los incendios, utilizando un modelo de donaciones altruistas.

> En este proyecto sólo encontrarás datos ficticios. Se trata de una prueba de concepto o proyecto de fines educativos, por lo que no realiza ningún tratamiento de datos reales.



&nbsp;

## Detalles técnicos

Si te gustaría conocer más sobre la estructura HTML o el diseño CSS del sitio, te invito a saber más en estos repositorios: [HTML](https://github.com/asm-dev/forest-funding-html) y [CSS](https://github.com/asm-dev/forest-funding-css). 

En cuanto a lo que JavaScript refiere, he decidido seguir una **arquitectura modular** para la aplicación. Este enfoque garantiza una clara separación de responsabilidades, lo que mejora la claridad, mantenibilidad, escabilidad y reutilización del código.

Para probar las principales **funcionalidades** implementadas puedes navegar mediante el menú principal, haciendo _scroll_ o desde el botón flotante "Salva el bosque de Crescente" hasta la sección "Salvemos Crecente".

&nbsp;

|           Funcionalidad           |                                   Descripción                                   |                         Fichero relacionado                          | Visualización |
| :-------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------: | :------------: |
| Gestión de eventos en formularios |                                        x                                        |                     pendiente de implementación                      |x
|  Barra de progreso de donaciones  | Permite al usuario conocer en tiempo real el total recaudado para una acción concreta | [`src/modules/donation-tracker.js`](src/modules/donation-tracker.js) | ![image](https://github.com/user-attachments/assets/1d8a133a-fe9d-4514-a984-84b1ddd8349b) Al alcanzar el objetivo ![image](https://github.com/user-attachments/assets/881774bc-bf0a-411a-9685-441f8077324d) |
|       Carrusel de imágenes        |                  Aumenta la interactividad y el dinamismo de la página                   |         [`src/modules/carousel.js`](src/modules/carousel.js)         | ![image](https://github.com/user-attachments/assets/6e4bf34c-a8e1-42f3-ad39-80ce9b70b918) |
|         Cuenta regresiva          | Detalla cuantos días horas y minutos quedan hasta el fin de la acción |        [`src/modules/countdown.js`](src/modules/countdown.js)        | 16:49 del 23/01/2024 ![image](https://github.com/user-attachments/assets/d2a04bb4-56bf-4000-8698-0a5b80051986)  Un minuto después ![image](https://github.com/user-attachments/assets/4df14a04-6057-4176-af25-b7d4d9210b6b) |
| (_Bonus track_) Envío rápido de ayuda directa | Donar directamente a la acción en un solo click | [`src/modules/donation-tracker.js`](src/modules/donation-tracker.js) | ![image](https://github.com/user-attachments/assets/6e0b5bec-fd0f-4ef9-8cab-275e5521c459) ![image](https://github.com/user-attachments/assets/c5ea9ceb-7bbc-4492-abe2-66f10dcdcd8c) Validaciones ![image](https://github.com/user-attachments/assets/53ce54a2-97cd-462b-aaa2-386eb436add9) ![image](https://github.com/user-attachments/assets/522ca725-0b15-4a50-a66f-26874e2e970c) |

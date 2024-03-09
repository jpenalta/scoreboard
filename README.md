# Basketball Scoreboard

Marcador simple con cronómetro. 

![ScoreBoard](img/scoreboard.png)

Se puede utilizar directamente desde el siguiente enlace:

[https://jpenalta.github.io/scoreboard/](https://jpenalta.github.io/scoreboard/ "ScoreBoard")


## Funcionamiento
Moviendo el cursor a la parte inferior de la pantalla aparece una barra con botones.

![menú](img/barraMenu.png)

Esta barra permite:

* **+1 Local**  y **-1 Local**: aumentar y disminuir el valor del marcador local.
* **+1 Visitante**  y **-1 Visitante**: aumentar y disminuir el valor del marcador local.
* **Iniciar Cronómetro** y **Parar Cronómetro** : arrancar y parar el cronómetro.
* **Fijar Cronómetro**: modificar el valor del cronómetro al valor que se desee.

También es posible controlar el marcador desde el **teclado** con las siguientes teclas:

* **a** : aumentar el marcador local
* **s** : disminuir el marcador local
* **k** : aumentar el marcador visitante
* **l** : disminuir el marcador visitante
* **espacio**: arrancar y parar el cronómetro

## Logos e imagen de fondo
Por defecto muestra como logos de los equipos dos imagenes, 'local.jpg' y 'visitante.jpg', que están en la carpeta *img*. 

Es posible indicar por parámetros de la url las imagenes a utilizar, para ello se utilizan los parámetros **localLogoUrl** y **visitanteLogoUrl**.

La siguiente url usa como logos los del Obra y el Breo:

[https://jpenalta.github.io/scoreboard/?visitanteLogoUrl=https://static.acb.com/logos/1718/breogan_00.png&localLogoUrl=https://static.acb.com/img/www/clubes2023/MonbusObradoiro-2023-LogoPos.png](https://jpenalta.github.io/scoreboard/?visitanteLogoUrl=https://static.acb.com/logos/1718/breogan_00.png&localLogoUrl=https://static.acb.com/img/www/clubes2023/MonbusObradoiro-2023-LogoPos.png)

También es posible indicar una imagen de fondo pasando como parámetro **backgroundImageUrl**. La siguiente url fija como fondo una imagen de pixabay:

[https://jpenalta.github.io/scoreboard/?backgroundImageUrl=https://cdn.pixabay.com/photo/2017/08/07/22/24/hobbies-2608561_960_720.jpg](https://jpenalta.github.io/scoreboard/?backgroundImageUrl=https://cdn.pixabay.com/photo/2017/08/07/22/24/hobbies-2608561_960_720.jpg)

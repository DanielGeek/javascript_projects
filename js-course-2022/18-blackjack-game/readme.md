# Temas puntuales de la sección
# Temas de la sección
# En esta sección tocaremos los siguientes temas:

# Trabajar con arreglos

# Mezclar los valores de los arreglos

# Introducción a la manipulación del DOM

# Eventos

# Crear imágenes en la página

# Realizar la lógica para implementar un competidor de cartas.

# Esta sección es bien divertida (al menos eso espero), haremos un juego que nos enseñará muchas cosas de JavaScript.

# Tengan presente que el código que haremos en esta sección es potencialmente inseguro, (lo explico en la siguiente sección), por lo que puede ser modificado por usuarios y hacer trampa... pero eso es algo que cubriremos en la siguiente sección

# comandos para manipular el DOM
`document.querySelector('img');`
`document.querySelectorAll('img');`
`document.querySelector('img').src`
`document.querySelector('img').src = 'file:///Users/daniel.barreto/Desktop/Github/javascript_projects/js-course-2022/18-blackjack-game/assets/cartas/5H.png'`
`document.querySelector('small')`
`document.querySelector('small').innerText = 10;`
`document.querySelector('small').innerText = '<b>Hola Mundo</b>'`
`document.querySelector('small').innerHTML = '<b>Hola Mundo</b>'`
`document.getElementById('computadora-cartas');`
`document.querySelector('#computadora-cartas');`
`document.querySelector('.carta');`
`document.querySelectorAll('.carta');`
`document.getElementsByClassName('carta');`
`document.querySelector('.titulo').innerText = 'Daniel Black Jack';`
`document.querySelector('header').innerText = 'Daniel Barreto';`
`const titulo = document.querySelector('.titulo');`
`titulo.innerText = 'Hola Mundo';`
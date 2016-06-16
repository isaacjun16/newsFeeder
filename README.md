# newsFeeder
Codigo para un feeder de noticias

Para conectar a un servidor real el codigo cambiar el script en el archivo index.html de:

<script type="text/javascript" src="js/apps/service/NewsServiceDummy.js" defer></script>

A:

<script type="text/javascript" src="js/apps/service/NewsService.js" defer></script>

Y en el archivo NewService.js cambiar:

"/URL/to/server/news/service"

Por la URL del servidor deseado.

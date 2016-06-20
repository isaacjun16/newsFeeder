# newsFeeder
Codigo para un feeder de noticias

Para conectar a un servidor real el codigo cambiar el SRC del script en el archivo index.html de:

`<script type="text/javascript" src="js/apps/service/NewsServiceDummy.js" \>`

A:

`<script type="text/javascript" src="js/apps/service/NewsService.js" \>`

Y en el archivo **NewService.js** cambiar:

`/URL/to/server/news/service`

Por la URL del servidor deseado, el formato esperado en respuesta del servidor es un JSON con la estructura:

`
[
  {
    "id": ID_NOTICIA,
    "title": "TITULO_NOTICIA",
    "content": "CONTENIDO_NOTICIA",
    "image": "URL_IMAGEN"
  }
]
`

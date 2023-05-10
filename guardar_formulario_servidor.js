const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {
  if (req.method === 'post' && req.url === '/guardar-peticion') {
    let cuerpo = '';

    req.on('data', (chunk) => {
      cuerpo += chunk.toString();
    });

    req.on('end', () => {
      const datos = JSON.parse(cuerpo);

      const archivo = 'peticion-' + new Date().toISOString() + '.json';

      fs.createFile('./bbdd/' + archivo, JSON.stringify(datos) + '\n', (error) => {
        if (error) {
          console.error(error);
          res.statusCode = 500;
          res.end('Ha ocurrido un error al intentar guardar los datos');
        } else {
          res.statusCode = 200;
          res.end('Los datos se han guardado exitosamente');
        }
      });
    });
  } else {
    res.statusCode = 404;
    res.end('No se encontró la página solicitada');
  }
});

servidor.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

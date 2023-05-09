function guardarFormulario() {
  const formulario = document.getElementById('formulario');

  // Obtener los valores del formulario
  const nombre = formulario.getElementById('nombre').value;
  const apellidos = formulario.getElementById('apellidos').value;
  const correo = formulario.getElementById('correo').value;
  const entrenamiento = formulario.getElementById('entrenamiento').value;
  const comentario = formulario.getElementById('comentario').value;
  
  // Crear un objeto JSON
  const peticion = {
    nombre: nombre,
    apellidos: apellidos,
    correo: correo,
    entrenamiento: entrenamiento,
    comentario: comentario
  };
  
  // Convertir el objeto JSON a una cadena JSON
  const JSON = JSON.stringify(peticion);

  // Definir el nombre de archivo dinámico
  const nombreArchivoJSON = 'peticion-' + new Date().toISOString() + '.json';

  // Escribir la cadena JSON en un archivo con nombre dinámico
  fs.writeFile('./bbdd/' + nombreArchivoJSON, JSON, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('La petición ' + nombreArchivoJSON + ' se ha guardado exitosamente');
    }
  });
}

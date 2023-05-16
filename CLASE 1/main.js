const personaje = []

const URL = 'https://animechan.vercel.app/api/random/anime?title=one%20Piece'


fetch(URL)
    .then(res => res.json ())
    .then(data => {
      //leer la class card__title para ingresar el personaje
      const nombre = document.querySelector(".card__title")
      console.log(data.character)
      nombre.innerText  = data.character;//agregar el nombre dentro del contenido
      
      //leer la class card__title para ingresar el personaje
      const frase = document.querySelector(".card__descr")//leer elemento P
      console.log(data.quote)
      frase.innerText  = data.quote;//agregar la frase dentro del contenido
      personaje.nombre = encodeURIComponent(data.character);

      //url para imagen
      const URL1 = `https://api.jikan.moe/v4/characters?q=${personaje.nombre}&filter[manga]=13`
      console.log(URL1);
      
      image_url (); 
        function image_url () {
          fetch(URL1)
            .then(res => res.json ())
            .then(data2 => {
                const img = document.querySelector(".card__img img")//leer elemento P
                console.log(data2.data[0])
                personaje.url = data2.data[0].images.webp.image_url
                console.log(personaje.url)
                
              
                img.src  = personaje.url;
               
                
            })
            .catch(error => {
              console.log("Error en img:", error);
            });
        }
    });
    






/**
 * ! con try 
 
const buscarPersonaje = async (nombre) => {
  try {
    const respuesta = await fetch(`https://api.jikan.moe/v3/search/character?q=${nombre}`);
    const datos = await respuesta.json();

    // Verificar si se encontraron resultados
    if (datos.results.length > 0) {
      // Acceder a los datos del primer resultado
      const resultado = datos.results[0];

      // Imprimir información del personaje
      console.log('Nombre:', resultado.name);
      console.log('URL de imagen:', resultado.image_url);
      console.log('Anime:', resultado.anime[0].name);
    } else {
      console.log('No se encontraron resultados');
    }
  } catch (error) {
    console.error('Error al realizar la búsqueda:', error);
  }
};

// Realizar la búsqueda del personaje "Roronoa Zoro"
buscarPersonaje('Roronoa Zoro'); */

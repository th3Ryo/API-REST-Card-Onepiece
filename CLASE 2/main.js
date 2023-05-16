const personaje = [];

/**
 * !sugerencia para agregar los queryparametres
const querystring = [
  '?',
  'limit=3',
  '&order=Desc',
].join('');

const URL = `https://api.thecatapi.com/v1/images/search${querystring}`; */



const URL_API = "https://animechan.vercel.app/api/random/anime?title=one%20Piece";
// se agrega el fetch
async function recarga() {
  const res = await fetch(URL_API);
  const data = await res.json();
      //leer la class card__title para ingresar el personaje
      const nombre = document.querySelector(".card__title");
      console.log(data.character);
      nombre.innerText = data.character; //agregar el nombre dentro del contenido

      //leer la class card__title para ingresar el personaje
      const frase = document.querySelector(".card__descr"); //leer elemento P
      console.log(data.quote);
      frase.innerText = data.quote; //agregar la frase dentro del contenido
      personaje.nombre = encodeURIComponent(data.character);

      //url para imagen 
      /**
       * !metodo sugerido para meter los query */
      const URL_API1= [
        `https://api.jikan.moe/v4/characters?q=`,
        personaje.nombre,
        `&filter[manga]=13`,
      ];
      //`https://api.jikan.moe/v4/characters?q=${personaje.nombre}&filter[manga]=13`;
      console.log(URL_API1);

      image_url();
      async function image_url() {
        fetch(URL_API1)
        const res2 = await fetch(URL_API1);
        const data2 = await res2.json();
          
            const img = document.querySelector(".card__img img"); //leer elemento P
            console.log(data2.data);
            personaje.urlImg = data2.data[0].images.webp.image_url;

            const linkPagina = document.querySelector(".link.pagina");
            personaje.urlPagina = data2.data[0].url;
            console.log(personaje.urlPagina);

            img.src = personaje.urlImg;
            linkPagina.href = personaje.urlPagina;
      }
    };

recarga()
const clickCard = document.querySelector("body div");
clickCard.addEventListener("click",recarga);

/* // Obtener el elemento en el que se producirá el clic
const elemento = document.querySelector(".card");

// Agregar el evento de escucha al elemento
elemento.addEventListener("click", miFuncion); */

// Definir la función que se ejecutará cuando se produzca el clic
function miFuncion() {
  // Código a ejecutar cuando se produce el clic
  console.log("Se ha hecho clic en el elemento");
}



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

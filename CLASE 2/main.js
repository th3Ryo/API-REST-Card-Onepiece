const personaje = [];

/**
 * !sugerencia para agregar los queryparametres
const querystring = [
  '?',
  'limit=3',
  '&order=Desc',
].join('');

const URL = `https://api.thecatapi.com/v1/images/search${querystring}`; */


function recarga () {


  var randomNumero = [];

  function aleatorio(numero) {
    for (let i = 0; i < numero; i++) {
      randomNumero[i] = Math.floor(Math.random() * 100) + 1;
    }
  }
  aleatorio(3);

  randomNumero = randomNumero.join(",");
  const URL_API1 = `https://rickandmortyapi.com/api/character/${randomNumero}`;

  //`https://api.jikan.moe/v4/characters?q=${personaje.nombre}&filter[manga]=13`;
  console.log(URL_API1);

  /**
   *! codigo mejorado se conservan etiquetas 
    async function image_url() {
    fetch(URL_API1);
    const res2 = await fetch(URL_API1);
    const data2 = await res2.json();

    const nombre1 = document.querySelector(".card__title.nombre1"); //leer elemento P nombre
    const nombre2 = document.querySelector(".card__title.nombre2"); //leer elemento P nombre
    const nombre3 = document.querySelector(".card__title.nombre3"); //leer elemento P nombre

    const img1 = document.querySelector(".img1"); //leer elemento P imagen
    const img2 = document.querySelector(".img2"); //leer elemento P imagen
    const img3 = document.querySelector(".img3"); //leer elemento P imagen

    const linkPagina1 = document.querySelector(".link.url1");
    const linkPagina2 = document.querySelector(".link.url2");
    const linkPagina3 = document.querySelector(".link.url3");

    console.log(data2);
    //personaje.urlImg = data2.data[0].images.webp.image_url;
    nombre1.innerText = data2[0].name;
    nombre2.innerText = data2[1].name;
    nombre3.innerText = data2[2].name;

    img1.src = data2[0].image;
    img2.src = data2[1].image;
    img3.src = data2[2].image;

    linkPagina1.href = data2[0].url;
    linkPagina2.href = data2[1].url;
    linkPagina3.href = data2[2].url;

  }
  image_url()*/


  async function image_url() {
    const res = await fetch(URL_API1);
    const data = await res.json();
    //lee todos las clases card por tener el all en este caso 3
    const cards = document.querySelectorAll(".card");
    console.log(cards)
    for (let i = 0; i < cards.length; i++) {
      //crea una costante card donde almacena el valor de cards en la posicion 1
      const card = cards[i];
      console.log(card)
      //lee lo que tiene el titulo de card
      const nombre = card.querySelector(".card__title");
      //lee lo que tiene la img
      const img = card.querySelector(".card__img img");
       //lee lo que tiene de link
      const linkPagina = card.querySelector(".card__links .link");
      
      console.log(data[i].name)
      //asigna el nombre en el p mediante el inner
      nombre.innerText = data[i].name;
      console.log(data[i].image)
      //asigna el link de la img
      img.src = data[i].image;
      console.log(data[i].url)
      //asigna el link de la API
      linkPagina.href = data[i].url;
    }
  }
  
  image_url();
  
 
  } 

  
  

  
recarga();

const clickCard = document.querySelector("body div");
clickCard.addEventListener("click", recarga);

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



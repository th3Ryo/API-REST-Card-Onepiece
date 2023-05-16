const personaje = [];

const URL = "https://animechan.vercel.app/api/random/anime?title=one%20Piece";
function recarga() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
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
      const URL1 = `https://api.jikan.moe/v4/characters?q=${personaje.nombre}&filter[manga]=13`;
      console.log(URL1);

      image_url();
      function image_url() {
        fetch(URL1)
          .then((res) => res.json())
          .then((data2) => {
            const img = document.querySelector(".card__img img"); //leer elemento P
            console.log(data2.data);
            personaje.urlImg = data2.data[0].images.webp.image_url;

            const linkPagina = document.querySelector(".link.pagina");
            personaje.urlPagina = data2.data[0].url;
            console.log(personaje.urlPagina);

            img.src = personaje.urlImg;
            linkPagina.href = personaje.urlPagina;
          })
          .catch((error) => {
            console.log("Error en img:", error);
          });
      }
    });
}
recarga()
const clickCard = document.querySelector("body div");
clickCard.addEventListener("click",recarga);


function miFuncion() {
  // Código a ejecutar cuando se produce el clic
  console.log("Se ha hecho clic en el elemento");
}


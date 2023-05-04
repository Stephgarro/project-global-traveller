// API Endpoints
let destinationsAPI_URL = "https://6417924da2944e82bd8cfe0d.mockapi.io/Destinies";
let hotelsAPI_URL = "https://6417924da2944e82bd8cfe0d.mockapi.io/Hotels";

// Containers
let HTML_indexResponse = document.getElementById("destinationsContent");
let HTML_indexHotels = document.getElementById("hotelsCarousel");
let HTML_indexDestinations = document.getElementById("destinationsCarousel");

// Functions
function HTML_indexDestination(index) {
  index = parseInt(index);
  index--;
  fetch(destinationsAPI_URL)
    .then((response) => response.json())
    .then((Destinations) => {
      let destinationTemplate = `
    <main>
    <h2 class="titles">${Destinations[index].destinyName}</h2>
    <div class="tabs">
      <div role="tablist" aria-labelledby="tablist-1" class="automatic">
        <button id="tab-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-1">
          <span class="focus">Details</span>
        </button>
        <button id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1">
          <span class="focus">Hotels</span>
        </button>
      </div>

      <div id="tabpanel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
        <p class="text">${Destinations[index].destinyInfo}
        </p>
        <div class="imgGeneralConteiner--rows">
          <div class="prueba">
            <div class="imgConteiner"><img class="imgConteiner--img" src="${Destinations[index].destinyGalleryImage}" alt=""></div>
            <div class="imgConteiner"><img class="imgConteiner--img" src="${Destinations[index].destinyGalleryImage}" alt=""></div>
            <div class="imgConteiner"><img class="imgConteiner--img" src="${Destinations[index].destinyGalleryImage}" alt=""></div>
          </div>
          <div class="prueba">
            <div class="imgConteiner"><img class="imgConteiner--img" src="${Destinations[index].destinyGalleryImage}" alt=""></div>
            <div class="imgConteiner"><img class="imgConteiner--img" src="${Destinations[index].destinyGalleryImage}" alt=""></div>
            <div class="imgConteiner"><img class="imgConteiner--img" src="${Destinations[index].destinyGalleryImage}" alt=""></div>
          </div>
        </div>
      </div>
      <div id="tabpanel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2">
          <div class="carousel">
            <button class="carousel__arrow--previous"><span class="visually-hidden">Previous</span></button>
            <button class="carousel__arrow--next"><span class="visually-hidden">Next</span></button>
            <div class="carousel__container" id="hotelsCarousel">

            </div>
        </div>
      </div>
    </div>

  </main>
    `
      HTML_indexResponse.innerHTML = destinationTemplate;
    });

}



fetch(destinationsAPI_URL)
  .then((response) => response.json())
  .then((Destinations) => {
    for (let i = 0; i < Destinations.length; i++) {
      let cardTemplate = `<div class="card">
    <div class="card__image">
      <img class="card__img" src="${Destinations[i].destinyCardImage}" alt="">
    </div>
    <div class="card__info">
      <p class="card__info--name">${Destinations[i].destinyName}</p>
      <p class="card__info--description">${Destinations[i].destinyCardInfo}</p>
    </div>
    <a href="destiny.html?id=${Destinations[i].id}"class="card__cta"><span class="visually-hidden">See Hotel</span></a>
  </div>`;
      HTML_indexDestinations.insertAdjacentHTML(
        "afterbegin",
        `${cardTemplate}`
      )
    }
  });
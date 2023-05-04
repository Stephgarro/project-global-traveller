// API Endpoints
let destinationsAPI_URL = "https://6417924da2944e82bd8cfe0d.mockapi.io/Destinies";
let hotelsAPI_URL = "https://6417924da2944e82bd8cfe0d.mockapi.io/Hotels";

// Containers
let HTML_indexResponse = document.getElementById("indexContent");
let HTML_indexHotels = document.getElementById("hotelsCarousel");
let HTML_indexDestinations = document.getElementById("destinationsCarousel");

//Page structure

HTML_indexResponse.innerHTML = `    
<h2 class="titles">Destinies</h2>
    <div class="carousel">
      <button class="carousel__arrow--previous"><span class="visually-hidden">Previous</span></button>
      <button class="carousel__arrow--next"><span class="visually-hidden">Next</span></button>
      <div class="carousel__container" id="destinationsCarousel">
      </div>
    </div>
    <h2 class="titles">Hotels</h2>
    <div class="carousel">
      <button class="carousel__arrow--previous"><span class="visually-hidden">Previous</span></button>
      <button class="carousel__arrow--next"><span class="visually-hidden">Next</span></button>
      <div class="carousel__container" id="hotelsCarousel">
      </div>
    </div>`;

// Containers
HTML_indexDestinations = document.getElementById("destinationsCarousel");
HTML_indexHotels = document.getElementById("hotelsCarousel");


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



fetch(hotelsAPI_URL)
  .then((response) => response.json())
  .then((Hotels) => {
    for (let i = 0; i < Hotels.length; i++) {
      let cardTemplate = `<div class="card">
      <div class="card__image">
        <img class="card__img" src="${Hotels[i].hotelCardImage}" alt="">
      </div>
      <div class="card__info">
        <p class="card__info--name">${Hotels[i].hotelName}</p>
        <p class="card__info--description">${Hotels[i].hotelCardInfo}</p>
      </div>
      <a href="hotelPage.html?id=${Hotels[i].id}"class="card__cta"><span class="visually-hidden">See Hotel</span></a>
    </div>`;
      HTML_indexHotels.insertAdjacentHTML(
        "afterbegin",
        `${cardTemplate}`
      )
    }

  });
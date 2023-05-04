// API Endpoints
let destinationsAPI_URL = "https://6417924da2944e82bd8cfe0d.mockapi.io/Destinies";
let hotelsAPI_URL = "https://6417924da2944e82bd8cfe0d.mockapi.io/Hotels";

// Containers
let HTML_indexResponse = document.getElementById("hotelsContent");
let HTML_indexHotels = document.getElementById("hotelsCarousel");
let HTML_indexDestinations = document.getElementById("destinationsCarousel");

//desglosar url
const getUrl = new URLSearchParams(window.location.search)
let id = getUrl.get('id');
id = parseInt(id);
id--;


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



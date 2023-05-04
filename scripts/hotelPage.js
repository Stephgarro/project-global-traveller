// API Endpoints
let destinationsAPI_URL = "https://6417924da2944e82bd8cfe0d.mockapi.io/Destinies";
let hotelsAPI_URL = "https://6417924da2944e82bd8cfe0d.mockapi.io/Hotels";

// Containers
let HTML_hotelResponse = document.getElementById("hotelContent");
let HTML_indexHotels = document.getElementById("hotelsCarousel");
let HTML_indexDestinations = document.getElementById("destinationsCarousel");

// Variables

//desglosar url
const getUrl = new URLSearchParams(window.location.search)
let id = getUrl.get('id');
id = parseInt(id);
id--;

HTML_hotelResponse.innerHTML = `
  <main>
  <div id="hotelName"></div>
  <div class="tabs">
    <div role="tablist" aria-labelledby="tablist-1" class="automatic">
      <button id="tab-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-1">
        <span class="focus">Details</span>
      </button>
      <button id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1">
        <span class="focus">Form</span>
      </button>
    </div>

    <div id="tabpanel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
      <div id="hotelInfo">

      </div>
      <div>
        <div class="carousel">
          <button class="carousel__arrow--previous"><span class="visually-hidden">Previous</span></button>
          <button class="carousel__arrow--next"><span class="visually-hidden">Next</span></button>
          <div class="carousel__container" id="roomsCarousel">
          </div>
        </div>
      </div>
    </div>
    <div id="tabpanel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" class="is-hidden">
      <form class="inquiryForm" action="https://formsubmit.co/oscar.corella15@gmail.com" method="POST">
        <div class="inquiryForm__area">
          <div class="inquiryForm__container">
            <label for="name" class="inquiryForm-label">Name:</label>
            <input class="inquiryForm__input" placeholder="Write your name here" type="text" id="name" name="subject"
            required>

            <label for="phone" class="inquiryForm-label">Phone:</label>
            <input class="inquiryForm__input" placeholder="+111 000 888" type="tel" id="phone" name="phone">

            <label for="email" class="inquiryForm-label">Email:</label>
            <input class="inquiryForm__input" placeholder="example@email.com" type="email" id="email" name="email"
            required>
          </div>

          <div class="inquiryForm__container inquiryForm__distribution">
            <label for="query" class="inquiryForm-label">Query:</label>
            <textarea class="inquiryForm__input inquiryForm__edit" placeholder="Write your query here" id="query"
              name="body" required></textarea>
          </div>
        </div>
        <section class="inquiryForm__buttonArea">
          <button class="inquiryForm__button" type="submit">Submit</button>
        </section>
      </form>
    </div>
  </div>
</main>
  `;

fetch(hotelsAPI_URL)
  .then((response) => response.json())
  .then((Hotels) => {
    let HTML_indexRooms = document.getElementById("roomsCarousel");
    HTML_hotelResponse.insertAdjacentHTML(
      "beforebegin",
      `<img class = "HeroImg" src="${Hotels[id].hotelHeroImage}" alt="">`
    );
    for (let i = 0; i < Hotels[id].rooms.length; i++) {
      if (Hotels[id].rooms[i].boolean == 0) {
        let roomCard = `<div class="card">
    <div class="card__image">
      <img class="card__img" src="${Hotels[id].rooms[i].roomImage}" alt="">
    </div>
    <div class="card__info">
      <p class="card__info--name">${Hotels[id].rooms[i].roomName}</p>
      <p class="card__info--description">${Hotels[id].rooms[i].roomInfo}</p>
    </div>
    <div class="card__info--price">
    <p class="price-discount">$${Hotels[id].rooms[i].roomPrice}</p>
    </div>
    <a class="card__cta" href="#"><span class="visually-hidden">See Hotel</span></a>
  </div>`;
        HTML_indexRooms.insertAdjacentHTML(
          "afterbegin",
          `${roomCard}`
        )
      }
      else{
        let offertValue = Hotels[id].rooms[i].roomOffert;
        let priceValue = Hotels[id].rooms[i].roomPrice;
        let finalPrice = priceValue - (priceValue*offertValue/100);
        console.log(priceValue,offertValue);
        let roomCard = `<div class="card">
        <div class="card__image">
          <img class="card__img" src="${Hotels[id].rooms[i].roomImage}" alt="">
        </div>
        <div class="card__info">
          <p class="card__info--name">${Hotels[id].rooms[i].roomName}</p>
          <p class="card__info--description">${Hotels[id].rooms[i].roomInfo}</p>
        </div>
        <div class="card__info--price">
        <p class="price">$${Hotels[id].rooms[i].roomPrice}</p>
        <p class="price-discount">$${finalPrice}</p>
        </div>
        <a class="card__cta" href="#"><span class="visually-hidden">See Hotel</span></a>
      </div>`;
            HTML_indexRooms.insertAdjacentHTML(
              "afterbegin",
              `${roomCard}`
            )
      }
    }
    
    let hotelNameContainer = document.getElementById("hotelName");
    let hotelInfoContainer = document.getElementById("hotelInfo");

    hotelNameContainer.innerHTML = `<h2 class="titles">${Hotels[id].hotelName}</h2>`;
    hotelInfoContainer.innerHTML = `
      <p class="text">
      ${Hotels[id].hotelInfo}
    </p>
    <h2 class="subtitles">Rooms</h2>
      `
  });
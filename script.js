let menuButton = document.querySelector(".menu-button");
let formLink = document.querySelector(".formLink");
let form = document.getElementById("form-area");
let productLink = document.querySelector(".productLink")
let body = document.getElementsByTagName("body")

//products

productLink.addEventListener("click", hideProducts);

function hideProducts() {
    cards.classList.toggle("hide")
}

//menu
menuButton.addEventListener("click", displayMenu);

function displayMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

menuButton.addEventListener("click", leftCards);

function leftCards() {
    cards.classList.toggle("mleft")
}

//form
formLink.addEventListener("click", showForm);

function showForm() {
    form.classList.toggle("active2")
}

//console
let nameInput = document.getElementById('name');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(nameInput.value);
});

let phoneInput = document.getElementById('phone');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(phoneInput.value);
});

let addressInput = document.getElementById('address');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(addressInput.value);
});

//fetch
let cards = document.querySelector(".cards");
let searchInput = document.querySelector(".search-input");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
        const datas = data.filter(el => el.id < 16);
        htmlCards(datas);

        searchInput.addEventListener("keyup", (e) => {
            searchData = datas.filter(el => el.title.includes(e.target.value))
            newHtmlCards(searchData);
        })
    });

const htmlCards = (datas) => {
    datas.forEach(element => {
        cards.innerHTML += `<div class="box"><img src="https://picsum.photos/id/78/210/100">${element.title.toUpperCase()} <br><br>${element.body} <button class="btn">Click</button> </div>`
    })
}

const newHtmlCards = (datas) => {
    cards.innerHTML = "";
    datas.forEach(element => {
        cards.innerHTML += `<div class="box"><img src="https://picsum.photos/id/78/210/100">${element.title.toUpperCase()} <br><br>${element.body} <button class="btn">Click</button> </div>`
    })
}
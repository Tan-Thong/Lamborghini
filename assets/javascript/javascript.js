var images = [
    "./assets/img/urus_s.webp",
    "./assets/img/urus_performante.webp",
    "./assets/img/aventador_ultimae.webp",
    "./assets/img/aventador_ultimae_roadster.webp",
    "./assets/img/huracan_sterrato.webp",
    "./assets/img/huracan_evo_spyder.webp",
    "./assets/img/huracan_sto.webp",
    "./assets/img/huracan_tecnica.webp",
];

var title = [
    "URUS S",
    "URUS PERORMANTE",
    "AVENTADOR LB 780-4 ULTIMAE",
    "AVENTADOR LB 780-4 ULTIMAE <br> ROADTER",
    "HURACÁN STERRATO",
    "HURACÁN EVO SPYDER",
    "HURACÁN STO",
    "HURACÁN TECNICA",
];

var link = [
    "./Detail-Urus-s.html",
    "./Detail-Urus-Perormante.html",
    "./Detail-Aventador-Ultimate.html",
    "./Detail-Aventador-Roadster.html",
    "./Detail-Huracan-Sterrato.html",
    "./Detail-Huracan-Spy.html",
    "./Detail-Huracan-Sto.html",
    "./Detail-Huracan-Tecnica.html"
];

// URUS
var numUrus = 0;
function nextUrus() {
    var slider = document.getElementById("img-type");
    var subTitle = document.getElementById("link-dt");
    numUrus++;
    if(numUrus > 1) {
        numUrus = 0;
    }
    slider.src = images[numUrus];
    subTitle.innerHTML = title[numUrus];
    subTitle.href = link[numUrus];
}

function prevUrus() {
    var slider = document.getElementById("img-type");
    var subTitle = document.getElementById("link-dt");
    numUrus--;
    if(numUrus < 0) {
        numUrus = 1;
    }
    slider.src = images[numUrus];
    subTitle.innerHTML = title[numUrus];
    subTitle.href = link[numUrus];
}

// AVENTADOR
var numAven = 2;
function nextAven() {
    var slider = document.getElementById("img-type");
    var subTitle = document.getElementById("link-dt");
    numAven++;
    if(numAven > 3) {
        numAven = 2;
    }
    slider.src = images[numAven];
    subTitle.innerHTML = title[numAven];
    subTitle.href = link[numAven];
}

function prevAven() {
    var slider = document.getElementById("img-type");
    var subTitle = document.getElementById("link-dt");
    numAven--;
    if(numAven < 2) {
        numAven = 3;
    }
    slider.src = images[numAven];
    subTitle.innerHTML = title[numAven];
    subTitle.href = link[numAven];
}

// HURACÁN
var numHura = 4;
function nextHura() {
    var slider = document.getElementById("img-type");
    var subTitle = document.getElementById("link-dt");
    numHura++;
    if(numHura > 7) {
        numHura = 4;
    }
    slider.src = images[numHura];
    subTitle.innerHTML = title[numHura];
    subTitle.href = link[numHura];
}

function prevHura() {
    var slider = document.getElementById("img-type");
    var subTitle = document.getElementById("link-dt");
    numHura--;
    if(numHura < 4) {
        numHura = 7;
    }
    slider.src = images[numHura];
    subTitle.innerHTML = title[numHura];
    subTitle.href = link[numHura];
}
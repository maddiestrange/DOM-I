const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Help",
    "nav-item-8": "Our Story",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


let navbar = document.querySelectorAll('a');
navbar[0].textContent = (siteContent["nav"]["nav-item-1"]);
navbar[1].textContent = (siteContent["nav"]["nav-item-2"]);
navbar[2].textContent = (siteContent["nav"]["nav-item-3"]);
navbar[3].textContent = (siteContent["nav"]["nav-item-4"]);
navbar[4].textContent = (siteContent["nav"]["nav-item-5"]);
navbar[5].textContent = (siteContent["nav"]["nav-item-6"]);

let nav = document.querySelector('nav');

let newNav1 = document.createElement('a');
newNav1.textContent = (siteContent["nav"]["nav-item-7"]);
newNav1.style.color = 'green';

let newNav2 = document.createElement('a');
newNav2.textContent = (siteContent["nav"]["nav-item-8"]);
newNav2.style.color = 'green';

nav.appendChild(newNav1);
nav.prepend(newNav2);

navbar.forEach( function(currentvalue){
  currentvalue.style.color = 'green';
});

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let H1 = document.querySelector('h1');
var str = (siteContent["cta"]["h1"]);
var breaks = [];
var breaks = str.split(" ");
H1.innerHTML = (breaks.join("<br>"));


let btn = document.querySelector('button');
btn.textContent = (siteContent["cta"]["button"])

let H4 = document.querySelectorAll('h4');
H4[0].textContent = (siteContent["main-content"]["features-h4"]);
H4[1].textContent = (siteContent["main-content"]["about-h4"]);
H4[2].textContent = (siteContent["main-content"]["services-h4"]);
H4[3].textContent = (siteContent["main-content"]["product-h4"]);
H4[4].textContent = (siteContent["main-content"]["vision-h4"]);
H4[5].textContent = (siteContent["contact"]["contact-h4"]);

var str = (siteContent["contact"]["address"]);
var br = [];
var br = str.split("Street");


let P = document.querySelectorAll('p');
P[0].textContent = (siteContent["main-content"]["features-content"]);
P[1].textContent = (siteContent["main-content"]["about-content"]);
P[2].textContent = (siteContent["main-content"]["services-content"]);
P[3].textContent = (siteContent["main-content"]["product-content"]);
P[4].textContent = (siteContent["main-content"]["vision-content"]);
P[5].innerHTML = (br.join(" Street<br> "));
P[6].textContent = (siteContent["contact"]["phone"]);
P[7].textContent = (siteContent["contact"]["email"]);
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//Adding nav bar

const navigation = document.querySelectorAll('a')

navigation.forEach((link, index) => {
  link.textContent = siteContent["nav"][`nav-item-${index+1}`];
});

//Adding nav content
const parentNav = document.querySelector('nav');

parentNav.append("Learn");
parentNav.prepend("Home")

//Styling nav
for ( let link of navigation) {
  link.style.color = 'green';
}


//Adding page top content

//Adding h1 and button
const topHeaderText = document.querySelector('.cta-text h1');

topHeaderText.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector('button');

ctaButton.textContent = siteContent["cta"]["button"];

//Adding image
const ctaImg = document.querySelector('#cta-img');

ctaImg.src = siteContent["cta"]["img-src"];

//Adding main content

//Features
const featuresHeader = document.querySelector('.text-content:first-child h4')
const featuresText = document.querySelector('.text-content:first-child p');

featuresHeader.textContent = siteContent["main-content"]["features-h4"];

featuresText.textContent = siteContent["main-content"]["features-content"];

//About
const aboutHeader = document.querySelector('.text-content:nth-child(2) h4')
const aboutText = document.querySelector('.text-content:nth-child(2) p');

aboutHeader.textContent = siteContent["main-content"]["about-h4"];

aboutText.textContent = siteContent["main-content"]["about-content"];

//Middle image
const middleImg = document.querySelector('#middle-img');

middleImg.src = siteContent["main-content"]["middle-img-src"];

//Services
const servicesHeader = document.querySelector('.bottom-content .text-content h4')
const servicesText = document.querySelector('.bottom-content .text-content p');

servicesHeader.textContent = siteContent["main-content"]["services-h4"];

servicesText.textContent = siteContent["main-content"]["services-content"];

// //Product
const productHeader = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
const productText = document.querySelector('.bottom-content .text-content:nth-child(2) p');

productHeader.textContent = siteContent["main-content"]["product-h4"];

productText.textContent = siteContent["main-content"]["product-content"];

// //Vision
const visionHeader = document.querySelector('.bottom-content .text-content:nth-child(3) h4')
const visionText = document.querySelector('.bottom-content .text-content:nth-child(3) p');

visionHeader.textContent = siteContent["main-content"]["vision-h4"];
visionText.textContent = siteContent["main-content"]["vision-content"];

//Contact
const contactHeader = document.querySelector('.contact h4');
const contactAddress = document.querySelector('.contact p:nth-child(2)');
const contactPhone = document.querySelector('.contact p:nth-child(3)');
const contactEmail = document.querySelector('.contact p:nth-child(4)');

contactHeader.textContent = siteContent["contact"]["contact-h4"];

contactAddress.textContent = siteContent["contact"]["address"];

contactPhone.textContent = siteContent["contact"]["phone"];

contactEmail.textContent = siteContent["contact"]["email"];

//Footer
document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];


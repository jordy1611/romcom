// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagLine1 = document.querySelector('.tagline-1');
var coverTagLine2 = document.querySelector('.tagline-2');
var showRandomButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
// Needs to call random picture, title and descriptors from precreated arrays...
//Display


// Add your event listeners here 👇
window.addEventListener('load', randomizeCover);
showRandomButton.addEventListener('click', randomizeCover);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomizeCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTagline1 = descriptors[getRandomIndex(descriptors)];
  var randomTagline2 = descriptors[getRandomIndex(descriptors)];
  coverImage.src = randomCover;
  coverTitle.innerText = randomTitle;
  coverTagLine1.innerText = randomTagline1;
  coverTagLine2.innerText = randomTagline2;
  currentCover = new Cover(randomCover, randomTitle, randomTagline1, randomTagline2);
};

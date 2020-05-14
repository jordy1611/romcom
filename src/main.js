// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagLine1 = document.querySelector('.tagline-1');
var coverTagLine2 = document.querySelector('.tagline-2');
var showRandomButton = document.querySelector('.random-cover-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var makeUserCoverButton = document.querySelector('.create-new-book-button');
var homeButton = document.querySelector('.home-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedCoversView = document.querySelector('.saved-view');
var userCoverImage = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userTagLine1 = document.querySelector('.user-desc1');
var userTagLine2 = document.querySelector('.user-desc2');

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
makeNewCoverButton.addEventListener('click', showFormPage);
viewSavedCoversButton.addEventListener('click', showSavedCoversPage);
homeButton.addEventListener('click', showHomePage);
makeUserCoverButton.addEventListener('click', createCover);

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

function toggleDefault() {
  showRandomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
}

function showFormPage(event) {
  event.preventDefault();
  toggleDefault();
  formView.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
}

function showSavedCoversPage(event) {
  event.preventDefault();
  toggleDefault();
  formView.classList.add('hidden');
  savedCoversView.classList.remove('hidden');
}

function showHomePage(event) {
  event.preventDefault();
  homeView.classList.remove("hidden");
  formView.classList.add('hidden');
  savedCoversView.classList.add('hidden');
  showRandomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
}

function saveUserData() {
  covers.push(userCoverImage.value);
  titles.push(userTitle.value);
  descriptors.push(userTagLine1.value);
  descriptors.push(userTagLine2.value);
}

function createCover(event) {
  event.preventDefault();
  showHomePage(event);
  saveUserData();
  coverImage.src = userCoverImage.value;
  coverTitle.innerText = userTitle.value;
  coverTagLine1.innerText = userTagLine1.value;
  coverTagLine2.innerText = userTagLine2.value;
  currentCover = new Cover(userCoverImage.value, userTitle.value, userTagLine1.value, userTagLine2.value);
}

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
var savedCoversSection = document.querySelector('.saved-covers-section');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


window.addEventListener('load', randomizeCover);
window.addEventListener('click', clickHandler);
savedCoversSection.addEventListener('dblclick', deleteCover);


function clickHandler(event) {
  if (event.target.classList.contains('random-cover-button')) {
    randomizeCover();
  } else if (event.target.classList.contains('make-new-button')) {
    showFormPage();
  } else if (event.target.classList.contains('view-saved-button')) {
    showSavedCoversPage();
  } else if (event.target.classList.contains('home-button')) {
    showHomePage();
  } else if (event.target.classList.contains('create-new-book-button')) {
    createCover(event);
  } else if (event.target.classList.contains('save-cover-button')) {
    saveCover();
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayCover(cover) {
  coverImage.src = cover.cover;
  coverTitle.innerText = cover.title;
  coverTagLine1.innerText = cover.tagline1;
  coverTagLine2.innerText = cover.tagline2;
}

function randomizeCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTagline1 = descriptors[getRandomIndex(descriptors)];
  var randomTagline2 = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(randomCover, randomTitle, randomTagline1, randomTagline2);
  displayCover(currentCover);
};

function toggleDefault() {
  showRandomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
}

function showFormPage() {
  toggleDefault();
  formView.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
}

function showSavedCoversPage() {
  savedCoversSection.innerHTML = "";
  displaySavedCovers();
  toggleDefault();
  formView.classList.add('hidden');
  savedCoversView.classList.remove('hidden');
}

function showHomePage() {
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
  showHomePage();
  saveUserData();
  currentCover = new Cover(userCoverImage.value, userTitle.value, userTagLine1.value, userTagLine2.value);
  displayCover(currentCover);
}

// array prototype?
function noDuplicates() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (currentCover.id === savedCovers[i].id) {
      return false;
    }
  }
  return true;
}

function saveCover() {
  if (noDuplicates()) {
    savedCovers.push(currentCover);
  }
}

function displaySavedCovers() {
  for (var i = 0; i < savedCovers.length; i++) {
    var minicover = `
      <div class= "mini-cover" data-id=${savedCovers[i].id}>
      <img class="cover-image" src=${savedCovers[i].cover}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      </div>`;
    savedCoversSection.insertAdjacentHTML("afterbegin", minicover);
  }
}

function deleteCover(event) {
  if (event.target.closest('.mini-cover')) {
    var coverToDelete = event.target.closest('.mini-cover');
    for (var i = 0; i < savedCovers.length; i++) {
      if (coverToDelete.dataset.id == savedCovers[i].id) {
        savedCovers.splice(i, 1);
        savedCoversSection.innerHTML = '';
        displaySavedCovers();
      }
    }
  }
}

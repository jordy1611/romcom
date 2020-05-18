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

function randomizeCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTagline1 = descriptors[getRandomIndex(descriptors)];
  var randomTagline2 = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(randomCover, randomTitle, randomTagline1, randomTagline2);
  displayCover(currentCover);
}

function displayCover(cover) {
  var coverImage = document.querySelector('.cover-image');
  var coverTitle = document.querySelector('.cover-title');
  var coverTagLine1 = document.querySelector('.tagline-1');
  var coverTagLine2 = document.querySelector('.tagline-2');
  coverImage.src = cover.cover;  // turn into function?
  coverTitle.innerText = cover.title;
  coverTagLine1.innerText = cover.tagline1;
  coverTagLine2.innerText = cover.tagline2;
}

function displayElement(className) {
  document.querySelector(`.${className}`).classList.remove('hidden');
}

function hideElement(className) {
  document.querySelector(`.${className}`).classList.add('hidden');
}

function showHomePage() {
  displayElement('random-cover-button');
  displayElement('save-cover-button');
  hideElement('home-button');
  displayElement('home-view');
  hideElement('form-view');
  hideElement('saved-view')
}

function hideHomePage() {
  displayElement('home-button');
  hideElement('random-cover-button');
  hideElement('save-cover-button');
  hideElement('home-view');
}

function showFormPage() {
  hideHomePage();
  displayElement('form-view');
  hideElement('saved-view');
}

function showSavedCoversPage() {
  savedCoversSection.innerHTML = "";
  hideHomePage();
  hideElement('form-view');
  displayElement('saved-view');
  displaySavedCovers();
}

function createCover(event) {
  event.preventDefault();
  var userCoverImage = document.querySelector('.user-cover');
  var userTitle = document.querySelector('.user-title');
  var userTagLine1 = document.querySelector('.user-desc1');
  var userTagLine2 = document.querySelector('.user-desc2');
  currentCover = new Cover(userCoverImage.value, userTitle.value, userTagLine1.value, userTagLine2.value);
  saveUserData(currentCover);
  displayCover(currentCover);
  showHomePage();
}

function saveUserData(cover) {
  covers.push(cover.cover);
  titles.push(cover.title);
  descriptors.push(cover.tagline1);
  descriptors.push(cover.tagline2);
}

function saveCover() {
  if(noDuplicates()) {
    savedCovers.push(currentCover);
  }
}

function noDuplicates() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (currentCover.id === savedCovers[i].id) {
      return false;
    }
  }
  return true;
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

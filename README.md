
# RomCom
Mod 1 Pair-Project
Leigh Larson: https://github.com/leighlars;
Jordy Shryock: https://github.com/jordy1611;
Instructor Scott Ertmer: https://github.com/sertmer

## Objective

In this paired project, we will write clean, DRY JavaScript to store our data; use a provided class by creating object instances using the `new` keyword; manipulate the page after it has loaded; add, remove, and update elements on the DOM; demonstrate understanding of event bubbling and use event delegation on dynamic elements, and begin to understand how to write effective, clean HTML & CSS.

## Overview

People say that romance novels are formulaic. Well ... maybe that's true. We're going to make an app that generates romance novel covers!

## Planning
This pair project will use Atom as a text editor, GitHub projects as the project management tool (https://github.com/users/jordy1611/projects/1), MDN and lesson plans as references, and the employment of mentors for code feedback, guidance, and the "rubber duck" code comprehension method.

This is a 6-day project. The estimated timeline is:
* Tuesday: DTR, review spec and set up guidelines, Begin Iteration 0
* Wednesday: Iteration 0 completed
* Thursday: Iteration 1 completed
* Friday: Iteration 2 completed
* Saturday: Iteration 3 completed
* Sunday: Iteration 4 completed
* Monday: Iteration 5 completed
* Tuesday: Extensions and Project Refinement

## Progression

**5/12/2020**
Set-up project. Filled out DTR, created private slack channel, forked and cloned repo, initialized README, and initialized GitHub projects.

**5/13/2020**
Completed Iteration 0: Added document.querySelector variables, created window listening event for page load, created functionality to randomize cover on page load, created readme-images directory to store screenshot progressions.

Completed Iteration 1: Added doc.querySelector variable for show random button. On this variable, we attached an event listener that listened for "click" and ran the randomizeCover function from Iteration 2. We modified this function to instantiate a Cover object and added variables for readability.

![gif of random cover on page load and click](/readme-images/it-0-and-1.gif)
*Random cover on page load (Iteration 0) and 'random' button click (Iteration 1)*

**5/14/2020**
Completed Iteration 2: We created functionality for the various buttons that toggled elements for switching views. We did so by adding event listeners of click and the respective functions to the appropriate buttons. We then DRY-d (spelling?) up our showFormView and showSavedCoversView functions, as well as renamed some variables for readability. We alternated driver/navigator for this iteration. We will seek out a mentor for additional refactoring insights. We also removed the screenshots of the functioning iterations and used two gifs: one to demonstrate the randomize function used on load listener and on the showRandomButton listener, and one gif to demonstrate button functionality and toggling views / elements.

![gif of buttons changing views](/readme-images/it2.gif)
*Switching views based on button click (Iteration 2)*

Completed Iteration 3: Added functionality to the create cover inputs and button. User can now input image, title and 2 descriptors to generate custom cover. Adjusted code to update DOM and data model with user inputs.

![gif of custom user cover on click](/readme-images/Explosive-passions1.gif)
*Creating user custom cover using user inputs (Iteration 3)*

Completed Iteration 4: Added functionality to Save Cover button to save the currently displayed cover to the data model (savedCovers array) with duplication prevention. We then added a function called displaySavedCovers that displays the saved covers in the Saved Covers View. We enlisted help of Ryan Barnett for refactoring guidance. We tested the app several times to find bugs. We then considered additional code for form validation, but will implement that if we have time.

![gif of saving and displaying saved covers](/readme-images/it4.gif)
*Saving and displaying covers (Iteration 4)*

**5/15/2020**
Completed Iteration 5: Added functionality to delete saved covers. While in the saved covers view, a user can now double click a miniaturized image of the cover in order to delete that cover from the window and the data model. We created a function called deleteCover which identifies the saved cover by its id associated with Date.now() and removes it from the data set. We enlisted the help of Geoff Wright for guidance.

![gif of deleting saved covers](/readme-images/Deleting-gif.gif)
*Deleting saved covers (Iteration 5)*

**5/18/2020**
Significantly cleaned up code. Eliminated most of the global variables by either making the variables local (when only used once) inside their assigned functions or using functions to adhere to DRY and SRP guidelines. The displayElement and hideElement functions removed the need for most of the global variables and allowed the code to be easier to read.

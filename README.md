
## RomCom
Mod 1 Pair-Project
Leigh Larson: https://github.com/leighlars
Jordy Shryock: https://github.com/jordy1611
Instructor Scott Ertmer: https://github.com/sertmer

# Objective

In this paired project, we will write clean, DRY JavaScript to store our data; use a provided class by creating object instances using the `new` keyword; manipulate the page after it has loaded; add, remove, and update elements on the DOM; demonstrate understanding of event bubbling and use event delegation on dynamic elements, and begin to understand how to write effective, clean HTML & CSS.

# Overview

People say that romance novels are formulaic. Well ... maybe that's true. We're going to make an app that generates romance novel covers!

# Planning
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

# Progression

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

'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickName = document.querySelector('#nickname');
const favFood = document.querySelector('#fav-food');
const homeTown = document.querySelector('#hometown');
const li = document.querySelectorAll('li');

nickName.textContent = 'Melisa';
favFood.textContent = 'kisir';
homeTown.textContent = 'Adana';

for (let i = 0; i < li.length; i++) {
  li[i].classList.add('list-item');
}

// Create an app that lets users choose to display between 1 and 50 random dog images,
//  then prints the results to the console. The app should feature a form with a required
//   input where users indicate the number of images to retrieve, and the input should
//    default to 3. Use the endpoint described in the "DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION" 
//    section of this page of the DogAPI docs.



'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
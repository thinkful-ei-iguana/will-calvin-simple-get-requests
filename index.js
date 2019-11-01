'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      displayResults(responseJson);
      console.log(responseJson);
    });    
}





//return a single random dog breed image
function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}





//return 1-50 random images
// function displayResults(responseJson) {
  
//   console.log(responseJson);
//   for (let i = 0; i < responseJson.message.length; i++) { 
//     $('.results').append(`<img src="${responseJson.message[i]}" class="results-img">`); 
//     $('.results').removeClass('hidden');
//   }

// console.log(responseJson.message);
// //display the results section
// $('.results').removeClass('hidden');
// }




//   Create an app that loads a single random image for a specific breed, based on a user input. 
//   This app should account for the happy case when the breed is found, as well as the unhappy case when it is not. 
//   Use the endpoint described in the "RANDOM IMAGE FROM A BREED COLLECTION" section of this page of the DogAPI docs. 
//   Note that the API will return an HTTP status code of 404 along with a JSON object with info 
//   about the error if a request is made for a breed that can't be found.













function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userNumber = $('#userFillable').val()
    getDogImage(userNumber);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
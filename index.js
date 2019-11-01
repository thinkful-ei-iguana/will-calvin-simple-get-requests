'use strict';

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => {
      displayResults(responseJson);
      console.log(responseJson);
    });    
}



function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $('.results').removeClass('hidden');
}


// function pushUserRequest() {
//   document.getElementById('userFillable').value = 
// }

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
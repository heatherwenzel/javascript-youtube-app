"use strict";

const apikey = "AIzaSyBZbA1M4VUqo2Hu0RmeQnGso0Zut-3S9qE";
let searchResults = [];
let videoIDs = [];
let query = document.getElementById("userSearch").value;
let searchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoEmbeddable=true&key=${apikey}`;

//need to run searchYouTube function on init to load 5 movie trailers

function searchYouTube() {
  event.preventDefault();
  fetch(searchURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      searchResults = data.items;
      
      for (let i = 0; i < searchResults.length; i++) {
        videoIDs.push(searchResults[i].id.videoId);
      }

      return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIDs[0]}&key=${apikey}`)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log("Request failed:", error);
    });

  // fetch(searchURL)
  //   .then(response => response.json())
  //   .then(data => {
  //     searchResults = data.items;
  //     for (let i = 0; i < searchResults.length; i++) {
  //       videoIDs.push(searchResults[i].id.videoId);
  //     }
  //     console.log(searchResults);
  //     console.log(videoIDs);
  //   });
}

// function updateDetails() {
//   fetch(
//     `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIDs[0]}&key=${apikey}`
//   )
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     });
//   document.getElementById("title").innerHTML = searchResults[0].snippet.title;
//   document.getElementById("description").innerHTML = searchResults[0].snippet.description;
//   // document.getElementById("views").innerHTML =
//   // document.getElementById("likes").innerHTML =
//   // document.getElementById("dislikes").innerHTML =
// }

"use strict";

const apikey = "AIzaSyBZbA1M4VUqo2Hu0RmeQnGso0Zut-3S9qE";
let searchResults = [];
let videoIDs = [];
let videoData = "";

//need to run searchYouTube function on init to load 5 movie trailers

function searchYouTube() {
  event.preventDefault();
  let query = document.getElementById("userSearch").value;
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoEmbeddable=true&key=${apikey}`)
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
      videoData = data.items[0].statistics;
      updateDetails();
    })
    .catch(function(error) {
      console.log("Request failed:", error);
    });
}

function updateDetails() {
  document.getElementById("iframe").setAttribute('src', `https://www.youtube.com/embed/${videoIDs[0]}`);
  document.getElementById("title").innerHTML = searchResults[0].snippet.title;
  document.getElementById("description").innerHTML = searchResults[0].snippet.description;
  document.getElementById("views").innerHTML = videoData.viewCount;
  document.getElementById("likes").innerHTML = videoData.likeCount;
  document.getElementById("dislikes").innerHTML = videoData.dislikeCount;
}

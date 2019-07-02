"use strict";

//holds the api key
const apikey = "AIzaSyBZbA1M4VUqo2Hu0RmeQnGso0Zut-3S9qE";
//holds the response from the api search call in an array
let searchResults = [];
//holds the ids from the api search call in an array
let videoIDs = [];
//holds the response from the api video data call
let videoData = "";

//makes the initial search and video data API calls when the page loads
// window.onload = loadYouTube();

function loadYouTube() {
  //makes the YouTube search API call and returns the data in JSON format
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=amazon%20studios%20trailer&type=video&videoEmbeddable=true&key=${apikey}`
  )
    .then(function(response) {
      return response.json();
    })
    //initializes the searchResults array to the response from the search API call
    .then(function(data) {
      searchResults = data.items;
      console.log(searchResults);

      //pushes each of the IDs from the API response into the videoIDs array
      for (let i = 0; i < searchResults.length; i++) {
        videoIDs.push(searchResults[i].id.videoId);
      }
      console.log(videoIDs);

      //makes the YouTube video data API call and returns the data in JSON format
      return fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${
          videoIDs[0]
        }&key=${apikey}`
      );
    })
    .then(function(response) {
      return response.json();
    })
    //initializes the videoData variable to the response from the video data API call
    .then(function(data) {
      videoData = data.items[0].statistics;
      console.log(videoData);

      //calls the function to update the initial video's details in the video player div
      updateDetails();
    })
    //shows an error if the API call returns one
    .catch(function(error) {
      console.log("Request failed:", error);
    });
}

//updates the initial video, title, description, views, likes and dislikes in the video player div
function updateDetails() {
  //sets the video shown in the iframe to the first video in the videoIDs array
  document
    .getElementById("iframe")
    .setAttribute("src", `https://www.youtube.com/embed/${videoIDs[0]}`);
  //sets the title shown to the first video in the searchResults array
  document.getElementById("title").innerHTML = searchResults[0].snippet.title;
  //sets the description shown to that of the first video in the searchResults array
  document.getElementById("description").innerHTML =
    searchResults[0].snippet.description;
  //sets the views shown to that of the selected video
  document.getElementById("views").innerHTML = `Views: ${videoData.viewCount}`;
  //sets the likes shown to that of the selected video
  document.getElementById("likes").innerHTML = `Likes: ${videoData.likeCount}`;
  //sets the dislikes shown to that of the selected video
  document.getElementById("dislikes").innerHTML = `Dislikes: ${videoData.dislikeCount}`;
}

//calls on the YouTube search and video data API based on the user's input
function searchYouTube() {
  //prevents the page from refreshing when the form is submitted
  event.preventDefault();
  //empties the videoIDs array
  videoIDs = [];
  //sets the search parameter to the user's input
  let query = document.getElementById("text-field-hero-input").value;
  console.log(document.getElementById("text-field-hero-input").value);
  
  //makes the YouTube search API call using the user's input and returns the data in JSON format
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoEmbeddable=true&key=${apikey}`
  )
    .then(function(response) {
      return response.json();
    })
    //initializes the searchResults array to the response from the search API call
    .then(function(data) {
      searchResults = data.items;
      console.log(searchResults);

      //pushes each of the IDs from the API response into the videoIDs array
      for (let i = 0; i < searchResults.length; i++) {
        videoIDs.push(searchResults[i].id.videoId);
      }
      console.log(videoIDs);

      //makes the YouTube video data API call and returns the data in JSON format
      return fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${
          videoIDs[0]
        }&key=${apikey}`
      );
    })
    .then(function(response) {
      return response.json();
    })
    //initializes the videoData variable to the response from the video data API call
    .then(function(data) {
      videoData = data.items[0].statistics;
      console.log(videoData);

      //calls the function to update the initial video's details in the video player div
      updateDetails();
    })
    //shows an error if the API call returns one
    .catch(function(error) {
      console.log("Request failed:", error);
    });
}

function showVideoOne() {
  fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${
      videoIDs[0]
    }&key=${apikey}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      videoData = data.items[0].statistics;
      document
        .getElementById("iframe")
        .setAttribute("src", `https://www.youtube.com/embed/${videoIDs[0]}`);
      document.getElementById("title").innerHTML =
        searchResults[0].snippet.title;
      document.getElementById("description").innerHTML =
        searchResults[0].snippet.description;
      document.getElementById("views").innerHTML = videoData.viewCount;
      document.getElementById("likes").innerHTML = videoData.likeCount;
      document.getElementById("dislikes").innerHTML = videoData.dislikeCount;
    });
}

function showVideoTwo() {
  fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${
      videoIDs[1]
    }&key=${apikey}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      videoData = data.items[0].statistics;
      document
        .getElementById("iframe")
        .setAttribute("src", `https://www.youtube.com/embed/${videoIDs[1]}`);
      document.getElementById("title").innerHTML =
        searchResults[1].snippet.title;
      document.getElementById("description").innerHTML =
        searchResults[1].snippet.description;
      document.getElementById("views").innerHTML = videoData.viewCount;
      document.getElementById("likes").innerHTML = videoData.likeCount;
      document.getElementById("dislikes").innerHTML = videoData.dislikeCount;
    });
}

function showVideoThree() {
  fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${
      videoIDs[2]
    }&key=${apikey}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      videoData = data.items[0].statistics;
      document
        .getElementById("iframe")
        .setAttribute("src", `https://www.youtube.com/embed/${videoIDs[2]}`);
      document.getElementById("title").innerHTML =
        searchResults[2].snippet.title;
      document.getElementById("description").innerHTML =
        searchResults[2].snippet.description;
      document.getElementById("views").innerHTML = videoData.viewCount;
      document.getElementById("likes").innerHTML = videoData.likeCount;
      document.getElementById("dislikes").innerHTML = videoData.dislikeCount;
    });
}

function showVideoFour() {
  fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${
      videoIDs[3]
    }&key=${apikey}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      videoData = data.items[0].statistics;
      document
        .getElementById("iframe")
        .setAttribute("src", `https://www.youtube.com/embed/${videoIDs[3]}`);
      document.getElementById("title").innerHTML =
        searchResults[3].snippet.title;
      document.getElementById("description").innerHTML =
        searchResults[3].snippet.description;
      document.getElementById("views").innerHTML = videoData.viewCount;
      document.getElementById("likes").innerHTML = videoData.likeCount;
      document.getElementById("dislikes").innerHTML = videoData.dislikeCount;
    });
}

function showVideoFive() {
  fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${
      videoIDs[4]
    }&key=${apikey}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      videoData = data.items[0].statistics;
      document
        .getElementById("iframe")
        .setAttribute("src", `https://www.youtube.com/embed/${videoIDs[4]}`);
      document.getElementById("title").innerHTML =
        searchResults[4].snippet.title;
      document.getElementById("description").innerHTML =
        searchResults[4].snippet.description;
      document.getElementById("views").innerHTML = videoData.viewCount;
      document.getElementById("likes").innerHTML = videoData.likeCount;
      document.getElementById("dislikes").innerHTML = videoData.dislikeCount;
    });
}

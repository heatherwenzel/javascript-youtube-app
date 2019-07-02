"use strict";

const apikey = "AIzaSyBZbA1M4VUqo2Hu0RmeQnGso0Zut-3S9qE";
let searchResults = [];
let videoIDs = [];
let videoData = "";

// window.onload = loadYouTube();

function loadYouTube(){
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=amazon%20studios%20trailer&type=video&videoEmbeddable=true&key=${apikey}`)
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
      
      videoData = data.items[0].statistics;
      updateDetails();
    })
    .catch(function(error) {
      console.log("Request failed:", error);
    });
}

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

function showVideoOne() {
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIDs[0]}&key=${apikey}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    videoData = data.items[0].statistics;
    console.log(videoData);
  });
  document.getElementById("iframe").setAttribute('src', `https://www.youtube.com/embed/${videoIDs[0]}`);
  document.getElementById("title").innerHTML = searchResults[0].snippet.title;
  document.getElementById("description").innerHTML = searchResults[0].snippet.description;
  document.getElementById("views").innerHTML = videoData.viewCount;
  document.getElementById("likes").innerHTML = videoData.likeCount;
  document.getElementById("dislikes").innerHTML = videoData.dislikeCount;
}

function showVideoTwo() {
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIDs[1]}&key=${apikey}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    videoData = data.items[1].statistics;
    console.log(videoData);
  });
  document.getElementById("iframe").setAttribute('src', `https://www.youtube.com/embed/${videoIDs[1]}`);
  document.getElementById("title").innerHTML = searchResults[1].snippet.title;
  document.getElementById("description").innerHTML = searchResults[1].snippet.description;
  document.getElementById("views").innerHTML = videoData.viewCount;
  document.getElementById("likes").innerHTML = videoData.likeCount;
  document.getElementById("dislikes").innerHTML = videoData.dislikeCount;
}

function showVideoThree() {
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIDs[2]}&key=${apikey}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    videoData = data.items[2].statistics;
    console.log(videoData);
  });
  document.getElementById("iframe").setAttribute('src', `https://www.youtube.com/embed/${videoIDs[2]}`);
  document.getElementById("title").innerHTML = searchResults[2].snippet.title;
  document.getElementById("description").innerHTML = searchResults[2].snippet.description;
  document.getElementById("views").innerHTML = videoData.viewCount;
  document.getElementById("likes").innerHTML = videoData.likeCount;
  document.getElementById("dislikes").innerHTML = videoData.dislikeCount;
}

function showVideoFour() {
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIDs[3]}&key=${apikey}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    videoData = data.items[3].statistics;
    console.log(videoData);
  });
  document.getElementById("iframe").setAttribute('src', `https://www.youtube.com/embed/${videoIDs[3]}`);
  document.getElementById("title").innerHTML = searchResults[3].snippet.title;
  document.getElementById("description").innerHTML = searchResults[3].snippet.description;
  document.getElementById("views").innerHTML = videoData.viewCount;
  document.getElementById("likes").innerHTML = videoData.likeCount;
  document.getElementById("dislikes").innerHTML = videoData.dislikeCount;
}

function showVideoFive() {
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIDs[4]}&key=${apikey}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    videoData = data.items[4].statistics;
    console.log(videoData);
  });
  document.getElementById("iframe").setAttribute('src', `https://www.youtube.com/embed/${videoIDs[4]}`);
  document.getElementById("title").innerHTML = searchResults[4].snippet.title;
  document.getElementById("description").innerHTML = searchResults[4].snippet.description;
  document.getElementById("views").innerHTML = videoData.viewCount;
  document.getElementById("likes").innerHTML = videoData.likeCount;
  document.getElementById("dislikes").innerHTML = videoData.dislikeCount;
}
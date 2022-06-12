// Create a function to change the hash 
// value of the page and reload it
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }
    
  // Define the language reload anchors
  const lang_enUS = require("./en-US.json");
  const lang_viVN = require("./vi-VN.json");
    
  // Check if a hash value exists in the URL
  // subdomain window location
  if (window.location.hash) {
    
    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#en") {
        document.querySelector(".title").textContent = lang_enUS.welcome.title;
    } else if (window.location.hash == "#vi") {
        document.querySelector(".title").textContent = lang_viVN.welcome.title;
    }
  }
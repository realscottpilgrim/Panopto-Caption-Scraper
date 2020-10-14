(function() {
let list = document.querySelectorAll("div.index-event-row");
let tempText = "";
let captionsArray = [];

list.forEach( 
  function(currentValue) { 
    tempText = currentValue.querySelector("div.event-text").getElementsByTagName("span")[0].innerHTML;
    captionsArray.push(tempText);
  });

let captionsJSON = JSON.stringify(captionsArray);
// send the page title as a chrome message
chrome.runtime.sendMessage(captionsJSON);
})();
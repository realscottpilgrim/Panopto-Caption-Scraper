// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

let captionText = "";
// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (jsonArray) {
	let parsedJson = JSON.parse(jsonArray);
	for (var i = 0; i < parsedJson.length; i++) {
		captionText = captionText + parsedJson[i] + "<br/>"
	}
	document.getElementById('pagetitle').innerHTML = captionText
});



function copyTextToClipboard(){
    var copyText = captionText;
    copytext.select();
    document.execCommand("copy");
    alert("Copied to clipboard)");
}

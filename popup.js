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



function saveTextAsFile()
{
    //inputTextToSave--> the text area from which the text to save is
    //taken from
    var textToSave = captionText;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"}); //google chrome not enjoying this
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "PCS.txt"; 
    
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

function copyTextToClipboard(){
    var copyText = captionText;
    copytext.select();
    document.execCommand("copy");
    alert("Copied to clipboard)");
}

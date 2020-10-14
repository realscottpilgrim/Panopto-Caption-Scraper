var captions = document.getElementById("pagetitle").value;

function saveTextAsFile()
{
    //inputTextToSave--> the text area from which the text to save is
    //taken from
    var textToSave = captions;
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
    var copyText = captions;
    copytext.select();
    document.execCommand("copy");
    alert("Copied to clipboard)");
}


const endpoint = "https://miscella.github.io/txt/"

function loadTextContent(textId) {
    var url = endpoint + textId + ".txt";
    var xhttp;
    /*
    var urlParts = url.replace(".txt","").split("/");
    var fileId = urlParts[urlParts.length-1];
    console.log(fileId);
    */

    /* console.log(urlParts.length); */
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(textId).innerText = xhttp.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.overrideMimeType("text/plain");
    xhttp.send();
}

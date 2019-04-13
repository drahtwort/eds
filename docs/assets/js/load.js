/* const endpoint = "https://miscella.github.io/txt/" */
const endpoint = "https://drahtwort.github.io/plain/"

function loadTextContent(textId) {
    var dir = textId.substr(0,textId.length-4).replace(/\./g,"/") + "/";
    /* var file = textId.split(".")[textId.split(".").length-1];
    var url = endpoint + dir + file + ".txt"; */
    var url = endpoint + dir + textId + ".txt";
    console.log(url);
    var xhttp;
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

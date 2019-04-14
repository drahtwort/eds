/* const endpoint = "https://miscella.github.io/txt/" */
const endpoint = "https://drahtwort.github.io/plain/"

function loadTextContent(textId) {
    document.getElementById(textId).onclick = '';
    var spanId = textId.split(".").slice(0,2).join(".");
    var dir = spanId.replace(/\./g,"/") + "/";
    /* var file = textId.split(".")[textId.split(".").length-1];
    var url = endpoint + dir + file + ".txt"; */
    var url = endpoint + dir + textId + ".txt";
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var text = document.createElement("span");
            text.innerHTML = xhttp.responseText;
            text.setAttribute("id",spanId+".txt");
            text.setAttribute("class","text");
            /* document.getElementById(spanId).parentElement.innerHTML += text; */
            document.getElementById(spanId).parentElement.appendChild(text);
            /* document.getElementById(spanId).innerHTML += xhttp.responseText; */
        }
    };
    xhttp.open("GET", url, true);
    xhttp.overrideMimeType("text/plain");
    xhttp.send();
}

function showText(element) {
    element.removeAttribute("onclick");
    document.getElementById("edition").onclick = function() {window.location.href = "./"};
    var span = element.parentElement;
    var parent = span.parentElement;
    parent.innerHTML = '\n';
    span.innerHTML += '\n\n';
    parent.innerHTML += span.outerHTML;
    loadTextContent(element.id);
}

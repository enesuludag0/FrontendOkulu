let value;

value = document;
value = document.URL;
value = document.location;
value = document.location.hostname;
value = document.scripts[0].getAttribute("src");
value = document.links;
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].classList;

// ID ile element seçimi
value = document.getElementById("title");
value = document.getElementById("title").innerText;
value = document.getElementById("title").classList;

// Class ile element seçimi
value = document.getElementsByClassName("link");
value = document.getElementsByClassName("link")[0];

// Tag ile element seçimi
value = document.getElementsByTagName("a");
value = document.getElementsByTagName("a")[2];
value = document.getElementsByTagName("a")[2].innerText;

// QuerySelector ile element seçimi
value = document.querySelector("#title");
value = document.querySelector(".link");
value = document.querySelector("a");
value = document.querySelector("a").innerText;

// QuerySelectorAll ile element seçimi
value = document.querySelectorAll("a");
value = document.querySelectorAll("a")[2];
value = document.querySelectorAll("a")[2].innerText;

const button = document.createElement("a");
button.id = "denemeButton";
button.className = "btn btn-primary";
button.innerText = "Bana Tıkla";
button.href = "https://www.google.com.tr";
button.target = "_blank";
const div = document.getElementById("denemeDiv");
div.appendChild(button);

console.log(value);

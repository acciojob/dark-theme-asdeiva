var button = document.querySelector("button");
var container = document.querySelector("main");

function swap(){

    if (container.getAttribute("class") != "night") {
        container.setAttribute("class", "night");
        button.setAttribute("class","button_night")
      }
      else {
        container.setAttribute("class", "day");
        button.setAttribute("class","button_day")
  }
}

button.onclick = swap;
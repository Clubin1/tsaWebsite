// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    document.getElementById("navBar").style.height = "4.5rem";
    document.getElementById("navBar").style.setProperty("background-color", "rgba(0, 0, 0, .7)", "important");
  } else {
    document.getElementById("navBar").style.height = "6rem";
    document.getElementById("navBar").style.setProperty("background-color", "rgba(0, 0, 0, .17)", "important");
  }
}
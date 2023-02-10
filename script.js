// initializes variale
const search = document.getElementById('search');

// changes text
function mouseOn() {
  search.placeholder = "Search!";
  

};
// changes text back
function mouseOff() {
  search.placeholder = "search";

};


  // event Listeners
search.addEventListener('mouseover', mouseOn);

search.addEventListener("mouseleave", mouseOff);
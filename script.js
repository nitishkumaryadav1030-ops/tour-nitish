// Mobile Menu

function toggleMenu() {

  const menu =
    document.querySelector(".nav-links");

  menu.classList.toggle("active");

}


// Destination Details

function showDetails(place) {

  alert(
    "Welcome to " +
    place +
    "! More tour details will be available soon."
  );

}


// Booking Form

function bookTour(event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value;

  const destination =
    document.getElementById("destination").value;

  alert(
    "Thank you " +
    name +
    "!\n\nYour tour booking for " +
    destination +
    " has been received."
  );

}
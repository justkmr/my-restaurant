

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
navbar.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {
navbar.classList.remove("active");
});
});



const filterBtns = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterBtns.forEach(btn => {

btn.addEventListener("click", () => {



filterBtns.forEach(button => {
  button.classList.remove("active");
});

btn.classList.add("active");

const filterValue = btn.dataset.filter;

menuCards.forEach(card => {

  const category = card.dataset.category;

  if (
    filterValue === "all" ||
    category === filterValue
  ) {

    card.style.display = "block";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "scale(1)";
    }, 50);

  } else {

    card.style.opacity = "0";
    card.style.transform = "scale(.9)";

    setTimeout(() => {
      card.style.display = "none";
    }, 200);

  }

});


});

});



const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

if (window.scrollY > 300) {
scrollBtn.style.display = "flex";
} else {
scrollBtn.style.display = "none";
}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});



window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if (window.scrollY > 50) {
header.classList.add("scrolled");
} else {
header.classList.remove("scrolled");
}

});

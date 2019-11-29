let tl = new TimelineMax();

// nav fade

let scrollpos = window.scrollY;
const header = document.getElementById("navbar");
const header_height = header.offsetHeight;
/* (function x(h) {
  console.log(h);
})(header_height); */
const add_class_on_scroll = () => header.classList.add("fade-in");
const remove_class_on_scroll = () => header.classList.remove("fade-in");
window.addEventListener("scroll", function() {
  scrollpos = window.scrollY;
  if (scrollpos >= 881) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

//sticla

tl.from("#wine-bottle", 0.8, { x: "1000", opacity: 0, ease: Power1.easeOut });

// pahar
tl.from(
  "#wine-glass",
  0.8,
  { x: "500", opacity: 0, ease: Power1.easeOut },
  "-=.3"
);

//struguri
tl.from("#grape", 0.8, { y: "800", opacity: 0, ease: Power1.easeOut }, "-=.3");

//bg
tl.from(
  "#bg-wine-left",
  0.9,
  { x: "800", y: "1200", opacity: 0, ease: Power2.easeOut },
  "-=.8"
);

tl.from(
  "#bg-wine-right",
  0.9,
  { x: "1500", opacity: 0, ease: Power2.easeOut },
  "-=.9"
);

tl.from(
  ".wine-text",
  0.6,
  { y: "250", opacity: 0, ease: Power1.easeOut },
  "-=0.5"
);

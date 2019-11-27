let tl = new TimelineMax();

// from -> to  -- vine de unde il pui
// to -> from   -- pleaca de unde e catre unde ii indici

// bowl
tl.from("#bowl", 1, { x: "-80", opacity: 0, ease: Power1.easeOut });

//sushi
tl.from(
  "#sushi1",
  1,
  {
    y: "-250",
    opacity: 0,
    rotation: 20,
    transformOrigin: "50% 50%",
    ease: Bounce.easeOut
  },
  "-=.4"
);

tl.from(
  "#sushi2",
  1,
  {
    y: "-250",
    opacity: 0,
    rotation: 100,
    transformOrigin: "50% 50%",
    ease: Bounce.easeOut
  },
  "-=.7"
);

//sticks

tl.from(
  "#chopstick1",
  0.6,
  {
    y: "-250",
    opacity: 0,
    rotation: 20,
    transformOrigin: "50% 50%",
    ease: Power1.easeOut
  },
  "-=.7"
);

tl.from(
  "#chopstick2",
  0.6,
  {
    y: "-300",
    opacity: 0,
    rotation: 100,
    transformOrigin: "50% 50%",
    ease: Power1.easeOut
  },
  "-=.6"
);

//bg

tl.from("#bg1", 0.8, { x: "1500", opacity: 0, ease: Power1.easeOut }, "-=.5");
tl.from("#bg2", 0.8, { x: "200", opacity: 0, ease: Power1.easeOut }, "-=.6");

tl.from(
  ".sushi-text",
  0.8,
  { y: "250", opacity: 0, ease: Power1.easeOut },
  "-=1"
);

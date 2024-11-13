

var slider = tns({
  container: ".image__slider",
  items: 6,
  speed: 200,
  slideBy: "1",
  autoplay: true,
  controlsContainer: "#controls",
  nextButton: ".next",
  prevButton: ".prev",
  
  // nav: false,
  responsive: {
    1250: {
      items: 6,
    },
    200: {
      items: 1,
    },
  },
});
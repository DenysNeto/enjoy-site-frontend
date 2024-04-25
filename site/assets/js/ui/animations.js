document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        let attr = entry.target.getAttribute("animation");
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", attr); // Add your desired Animate.css classes
        } else {
          //  entry.target.classList.remove("animate__animated", attr);
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold as needed
  );

  const targetElements = document.querySelectorAll("[animation]");

  targetElements.forEach((element) => {
    observer.observe(element);
  });
});

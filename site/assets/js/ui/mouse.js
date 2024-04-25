function throttle(func, wait) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
}

const userAgent = navigator.userAgent;

let isDesktop = true;

if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(userAgent)) {
  // Tablet device detected
  console.log("Tablet device detected");
  isDesktop = false;
} else if (
  /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk|Opera Mini/i.test(
    userAgent
  )
) {
  isDesktop = false;
  console.log("Mobile device detected");
}

// create div for mouse

if (window.innerWidth >= 768) {
  var cursorEl = document.createElement("div");
  cursorEl.id = "custom-cursor";
  document.body.appendChild(cursorEl);

  document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.getElementById("custom-cursor");

    function updateCursor(e) {
      window.lastscrollY = window.scrollY;
      const x = e.clientX - 25;
      const y = e.clientY - 25 + window.scrollY; // Adjust for scroll-y
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    }

    function updateScroll() {
      let temp = cursor.style.top;

      cursor.style.top =
        +temp.replace("px", "") + window.scrollY - window.lastscrollY + "px";

      window.lastscrollY = window.scrollY;
    }

    function createParticles(x, y) {
      for (var i = 0; i < 10; i++) {
        var particle = document.createElement("div");
        particle.className = "particle";
        cursorEl.appendChild(particle);
        animateParticle(particle, x, y);
      }
    }

    function animateParticle(particle, x, y) {
      var duration = Math.random() * 1.5 + 0.5;
      var angle = Math.random() * Math.PI * 2;
      var distance = Math.random() * 100;

      var startX = 25;
      var startY = 25;

      var startTime = Date.now();

      function update() {
        var elapsed = (Date.now() - startTime) / 1000;

        if (elapsed < duration) {
          var currentX =
            startX + (distance * Math.cos(angle) * elapsed) / duration;
          var currentY =
            startY + (distance * Math.sin(angle) * elapsed) / duration;

          particle.style.transform =
            "translate(" + currentX + "px, " + currentY + "px)";
          particle.style.opacity = 1 - elapsed / duration;
          requestAnimationFrame(update);
        } else {
          particle.remove();
        }
      }

      update();
    }

    document.addEventListener("click", function (event) {
      createParticles(event.clientX, event.clientY);
    });

    document.addEventListener(
      "mousemove",
      throttle((ev) => {
        requestAnimationFrame(() => updateCursor(ev));
        requestAnimationFrame(() => createParticles(ev.clientX, ev.clientY));
      }, 16),
      { passive: true }
    );

    window.addEventListener("scroll", updateScroll);
  });

  // particles
  document.addEventListener("DOMContentLoaded", function () {});
}

/* star-rating on click */

const stars = document.querySelectorAll(".stars__star");

stars.forEach((star) => {
  star.addEventListener("click", function (e) {
    const fillColor = e.target.getAttribute("fill");

    if (fillColor == "#666666") {
      e.target.setAttribute("fill", "#f3cd03");
    } else {
      e.target.setAttribute("fill", "#666666");
    }
  });
});

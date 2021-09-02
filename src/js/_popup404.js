const nonexistentLinks = document.querySelectorAll('a[href="#"]');

nonexistentLinks.forEach((nonexistentLink) => {
  nonexistentLink.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Popup404");
    alert(`
		This is a popup 404
		Thank you for your click
		This link is under development`);
  });
});

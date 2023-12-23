// Profile Links 
let profileLinks = document.querySelectorAll(".profile-links li");

profileLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		profileLinks.forEach((link) => {link.classList.remove("clicked")});
		e.target.classList.add("clicked");
	});
});
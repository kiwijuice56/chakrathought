function toggle_popup(id) {
	document.getElementById(id).classList.toggle("show");
	document.getElementById("root").classList.toggle("locked");
}

var checkpoint = 0;

window.addEventListener("scroll", function() {
	var elementTarget = document.getElementById("checkpoint_a");
	if (checkpoint == 0 && window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
		toggle_popup("popup_a");
		checkpoint++;
	}
	
	elementTarget = document.getElementById("checkpoint_b");
	if (checkpoint == 1 && window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
		toggle_popup("popup_b");
		checkpoint++;
	}
});
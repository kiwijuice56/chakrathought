function show_popup(id) {
	var popup = document.getElementById(id);
	popup.classList.toggle("show");
	
	document.getElementById("root").classList.toggle("locked");
}


window.onscroll = function(event) {
    show_popup("popup_a");
};
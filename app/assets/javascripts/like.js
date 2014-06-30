function increment() {
	element = document.getElementById("like_num");
	var text = element.textContent;
	if (text == "") {
		element.innerHTML = ("+1")
	} else {
		var num = parseInt(text.substring(1, text.length));
		num++;
		element.innerHTML = ("+" + num);
	}
};
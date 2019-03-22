var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

function addColor() {
	body.style.background="linear-gradient(to right,"+ color1.value+ ","+ color2.value,")";
	if (color1.value != "#d9f442" && color2.value != "#5cf441") {
		document.querySelector("p").innerHTML = "Successfully changed";
	}
}

color1.addEventListener("input",addColor);
color2.addEventListener("input",addColor);


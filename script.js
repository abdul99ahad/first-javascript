var input = document.getElementById("userinput");
var btn = document.getElementById("button");
var ul = document.querySelector("ul");

function addEvent() {
		if (input.value.length > 0) {
			var li = document.createElement("li");
			ul.appendChild(li);
			li.appendChild(document.createTextNode(input.value))
			input.value=""
	}
}

btn.addEventListener("click",addEvent);
input.addEventListener("keypress",function(event)
	{
		if (input.value.length > 0 && event.keyCode===13) {
			var li = document.createElement("li");
			ul.appendChild(li);
			li.appendChild(document.createTextNode(input.value))
			input.value=""
	}
})

function replaceList() {
	var li = document.querySelector("li");
	var item = document.createTextNode("Water")
	ul.replaceChild(item, li);
	}
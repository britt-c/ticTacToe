window.onload = function() {
	const allBoxes = document.querySelectorAll("button.btn")

	allBoxes.forEach(function(boxes){
		boxes.addEventListener("click", onClick)
		boxes.addEventListener("dblclick", onDblClick)
	})

function onClick() {
	let box = event.currentTarget
	box.innerText = "X"
}


function onDblClick() {
	let box = event.currentTarget
	box.innerText = "O"
}

}

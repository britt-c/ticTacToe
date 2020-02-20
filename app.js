window.onload = function() {
	const allBoxes = document.querySelectorAll("button.btn")
	document.getElementById("output").addEventListener("mouseover", easterEgg)
	document.getElementById("output").addEventListener("mouseout", displayHeader)
	document.getElementById("restart").addEventListener("click", restart)
	
	allBoxes.forEach(function(boxes){
		boxes.addEventListener("click", onClick)
		boxes.addEventListener("dblclick", onDblClick)
	})

function onClick() {
	let box = event.currentTarget
	box.innerText = "X"
	box.style.color = "white"
	box.style.background = "black"
}


function onDblClick() {
	let box = event.currentTarget
	box.innerText = "O"
	box.style.color= "black"
	box.style.background = "red"
}

function displayHeader(){
	const header = "Tic Tac Toe"
	const output = document.querySelector("#output")
	output.innerText = header

}

displayHeader()

function easterEgg(){
	const egg = "Rock Paper Scissors"
	const output = document.querySelector("#output")
	output.innerText = egg
}

function restart(){
	allBoxes.forEach(function(boxes){
		boxes.innerText = ""
		boxes.style = "none"
	})
}

}

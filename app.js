window.onload = function() {
	const allBoxes = document.querySelectorAll("button.btn")

	allBoxes.forEach(function(boxes){
		boxes.addEventListener("click", function(event){
			let box = event.currentTarget
			console.log(box)
		})
	})
	 
}

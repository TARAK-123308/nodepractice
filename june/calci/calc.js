const inputTxt = document.querySelector('#inputTxt');

const btns = document.querySelectorAll('.btn');
Array.from(btns).forEach((btn)=>{
	btn.addEventListener('click',(e)=>{
		let input = e.target.innerHTML;
		if(input === "="){
			inputTxt.value = eval(inputTxt.value)
		} else if (input === "AC") {
			inputTxt.value = ""
		} else if (input === "Del") {
			inputTxt.value = inputTxt.value.slice(0,-1)
		} else {
			inputTxt.value += input
		}
	})  
})

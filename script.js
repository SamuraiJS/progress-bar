let progressCircle = document.querySelector('.progress-circle');
let value = document.querySelector('.value');
let input = document.querySelector('input');
let buttonSetPercentage = document.querySelector('button');
let start = 0;

buttonSetPercentage.addEventListener('click', progressOfBar);

function progressOfBar() {
	if(input.value < 0 || input.value > 100) {
		alert('Lo valores deben estar entre 0 y 100');
		return;
	}
	let intervalProgress = setInterval(() => {

		if(start < input.value) {
			start++;
		} else {
			start--;
		}

		value.innerText = start + '%'
		progressCircle.style.background = `conic-gradient(#ef3620 ${360 * (start/100)}deg, #ededed 0deg)`;

		if(start == input.value) {
			clearInterval(intervalProgress);
			input.value = "";
		}
	}, 10)
}
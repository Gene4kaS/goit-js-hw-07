const input = document.getElementById('validation-input');
	input.addEventListener('blur', OnInputBlur);

function OnInputBlur() {
	var correctLength = this.dataset.length; //правильное количество
	var inputDataLength = this.value.length; //вбитое в инпут количество
	if(correctLength == inputDataLength){
		this.classList = 'valid';
	} else {
		this.classList = 'invalid';
	}
}


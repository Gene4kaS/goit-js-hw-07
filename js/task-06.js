


const input = document.getElementById("validation-input");
    input.addEventListener("blur", OnInputBlur);

    function OnInputBlur() {
        var correctLength = Number(this.dataset.length);
        var inputDataLength = this.value.length;
        if (correctLength === inputDataLength) {
            this.classList = 'valid';
        } else {
            this.classList = 'invalid';
        } 
    }

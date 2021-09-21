

const input = document.getElementById("validation-input");

const addRemoveColor = (remove, add) => {
  input.classList.remove(`${remove}`);
  input.classList.add(`${add}`);
};

const OnInputBlur = (e) => {
  if (Number(input.dataset.length) === e.currentTarget.value.length) {
    addRemoveColor("invalid", "valid");
  } else {
    addRemoveColor("valid", "invalid");
  }
};

input.addEventListener("blur", OnInputBlur);
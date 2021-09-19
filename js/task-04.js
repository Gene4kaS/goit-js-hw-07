const button = {
    plus: document.querySelector("[data-action='increment']"),
    minus: document.querySelector("[data-action='decrement']"),
    counter: document.querySelector('#value'),
  };
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
    // document.getElementById('value').textContent = counterValue;
    button.counter.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
    // document.getElementById('value').textContent = counterValue;
    button.counter.textContent = counterValue;
  };

  button.plus.addEventListener('click', increment);
  button.minus.addEventListener('click', decrement);
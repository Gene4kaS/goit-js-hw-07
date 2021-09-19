const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listEl = document.getElementById('ingredients');

  const ingredientsEl = ingredients.map(ingredient => {
    const items = document.createElement('li');
    items.textContent = ingredient;
    return items;
  })

  // console.log(ingredientsEl);
  listEl.append(...ingredientsEl);


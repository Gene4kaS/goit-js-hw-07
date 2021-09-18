const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  let listEl = document.getElementById('ingredients');
  const ingredientsEl = ingredients.forEach(ingredient => {
    let items = document.createElement('li');
    items.innerHTML = ingredient;
    listEl.append(items);
    
  })
  

const allCategories = document.querySelectorAll(".item");
console.log(`В списке ${allCategories.length} категории.`)

const namesCategories = document.querySelectorAll('#categories > li');
namesCategories.forEach(elName => {
    console.log(`Категория: ${elName.firstElementChild.textContent} 
Количество элементов: ${elName.lastElementChild.children.length}`);
})   
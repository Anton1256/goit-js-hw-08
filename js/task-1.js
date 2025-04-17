const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Категорій: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
    const title = item.querySelector('h2').textContent;
    console.log(`Категорія: ${title}`)
});
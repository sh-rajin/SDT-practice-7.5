const loadAllMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(res => res.json())
        .then(data => {
            displayProduct(data.meals);
        });
};

const displayProduct = (meals) => {
    const mealContainer = document.getElementById('meal-container');

    mealContainer.innerHTML = '';
    if(meals && meals.length>0){
        meals.forEach(meal => {
            const div = document.createElement('div');
            div.className = 'card';
    
            div.innerHTML = `
                <img class = "card-img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h4>Name: ${meal.strMeal}</h4>
                <h3>Id: ${meal.idMeal}</h3>
                <h5>Category: ${meal.strCategory}</h5>
            `;
    
            mealContainer.appendChild(div);
        });
    }
    else{
        mealContainer.innerHTML = '<h2 class = "no-found" >No meals found</h2>';
    }
};


const handlesearch = () => {
    let inputvalue = document.getElementById('search-input').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`)
        .then(res => res.json())
        .then(data => {
            displayProduct(data.meals)
        });
        document.getElementById('search-input').value = '';
};


loadAllMeal();
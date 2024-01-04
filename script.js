// Amazing.
let inputText = document.querySelector('.inputText');
let inputNumber = document.querySelector('.inputNumber');
let productSelector = document.querySelector('.selectProducts');
let buttonAdd = document.querySelector('.buttonAdd');
let productsList = [];
let listOfCart = document.querySelector('.listCart');
let clearForm = document.querySelector('.buttonClearForm');
let clearList = document.querySelector(`.clearCart`);
let clearCartText = document.querySelector(`.clearCart`);
let productObj = {}
let tableBody = document.querySelector(`.tbody`)

// if (localStorage.getItem('productsList')) {
//     // productsList = JSON.parse(localStorage.getItem('productsList'));
//     showCart();
// }

buttonAdd.addEventListener('click', function () {
    productObj = {
        name: inputText.value,
        price: inputNumber.value,
        category: productSelector.value
    };
    productsList.push(productObj);
    // saveToLocalStorage();
    //Aluf!!
    showCart(productObj);
    //GOOD!!!
    clearFormFields();
});
// I would call this clearFormButtun//
clearForm.addEventListener('click', function () {
    clearFormFields();
});

// function saveToLocalStorage() {
//     localStorage.setItem('productsList', JSON.stringify(productsList));
// }

function clearFormFields() {
    inputText.value = '';
    inputNumber.value = '';
    productSelector.value = '';
}

function showCart(productObj) {

    let createTrElement = document.createElement(`tr`);
    //instead of 1,2,3,4 use the names like trName, trPrice etc..
    let td1 = document.createElement(`td`);
    let td2 = document.createElement(`td`);
    let td3 = document.createElement(`td`);
    let td4 = document.createElement(`td`);
    td1.textContent = productObj.name;
    td2.textContent = productObj.price;
    td3.textContent = productObj.category;
    createTrElement.appendChild(td1);
    createTrElement.appendChild(td2);
    createTrElement.appendChild(td3);
    document.querySelector('.tbody').appendChild(createTrElement)
}


function addImage() {
    // why not up there with all of the getElements?
    let imageUrlInput = document.getElementById('imageUrlInput');
    let imageUrl = imageUrlInput.value;
    
    let imageElement = document.createElement('img');

    imageElement.src = imageUrl;

    //ALUF!!!!
    imageElement.style.width = '100px';
    imageElement.style.height = '100px';

    let imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous content
    imageContainer.appendChild(imageElement);

    imageUrlInput.value = '';
}



document.addEventListener("DOMContentLoaded", () => {
  var notyf = new Notyf();
function addToCart(item,name){
if(localStorage.getItem(name) == null){
  localStorage.setItem(name,JSON.stringify(item));
  notyf.success("Success");
}else{
  notyf.error("Already in Cart");
}
}




const quantityMinusButtons = document.querySelector('.quantity-minus');
  const quantityPlusButtons = document.querySelector('.quantity-plus');


  quantityMinusButtons.addEventListener('click', () => {
      const productId = quantityMinusButtons.getAttribute('data-id');
      const quantityInput = document.getElementById(`quantity-${productId}`);
      let quantity = parseInt(quantityInput.value);
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
      }
    });


    quantityPlusButtons.addEventListener('click', () => {
      const productId = quantityPlusButtons.getAttribute('data-id');
      const quantityInput = document.getElementById(`quantity-${productId}`);
      let quantity = parseInt(quantityInput.value);
      quantity++;
      quantityInput.value = quantity;
    });
  

const add_to_cart_buttons = document.querySelector('.add_to_cart');


add_to_cart_buttons.addEventListener('click', async() => {

const options = document.querySelectorAll('.opt');

const ProductName = document.querySelector('.box-title').textContent
let optionsObject = {};
optionsObject[ProductName] = [];
options.forEach(option => {
  const optionName = option.querySelector('h4').textContent;
  const selectedOption = option.querySelector('input[type="radio"]:checked');
  const selectedValue = selectedOption ? selectedOption.nextElementSibling.textContent : null;

optionsObject[ProductName].push({optionName,selectedValue})

});

const quantity = document.querySelector('input[name="quantity"]').value
const ExtraComments = document.getElementById('extracomments').value
optionsObject[ProductName].push({quantity})
optionsObject[ProductName].push({ExtraComments})
const productData = {
  ProductName,
  options: optionsObject[ProductName]
};
const FetchedData =  await fetch('/view_product',{method : 'get'});
if(FetchedData.ok && FetchedData.status == 200){
addToCart(productData,ProductName);
}else{
  notyf.error("Error log in");
}
});

});
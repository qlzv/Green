document.addEventListener("DOMContentLoaded", () => {
  const CartData = JSON.parse(localStorage.getItem('cart')) || {}
  let ToBeAdded = ``;
  let TotalPrice = 0;
  for (let crt in CartData) {
    if (CartData.hasOwnProperty(crt)) {
      const product = CartData[crt];
      const options = product.options;
      const quantity = options.find(option => option.hasOwnProperty('quantity')).quantity;
      const finalPrice = options.find(option => option.hasOwnProperty('finalPrice')).finalPrice;

      ToBeAdded += `
        <div class="row">
          <div class="row main align-items-center">
            <div class="col-2"><img class="img-fluid" src="../assests/img/FG0051-A-Iced-Snapich-Latte-1.webp"></div>
            <div class="col">
              <div class="row text-muted">${crt}</div>
              ${options.map(option => {
                if (option.optionName && option.selectedValue) {
                  return `<div class="row">${option.optionName} : ${option.selectedValue}</div>`;
                }
                return '';
              }).join('')}
            </div>
            <div class="col edit-quantity">
              <a href="javascript:void(0);" class="quantity-minus" data-name="${crt}">-</a>
              <strong class="border">${quantity}</strong>
              <a href="javascript:void(0);" class="quantity-plus" data-name="${crt}">+</a>
            </div>
            <div class="col"><span  data-name="${crt}" class = "to_pay">$ ${finalPrice} </span><span class="close" data-name="${crt}">&#10005;</span></div>
          </div>
        </div>`;
      TotalPrice += parseInt(finalPrice);
    }
  }
document.getElementById("items").innerHTML = ToBeAdded
document.getElementById("items_count").innerText = Object.keys(CartData).length + " items";
document.getElementById("total_to_pay").innerText = "$ " +TotalPrice
  
function updateCart() {
  localStorage.setItem('cart', JSON.stringify(CartData));
}
function updateTotalPrice() {
  let totalPrice = 0;
  for (let crt in CartData) {
    if (CartData.hasOwnProperty(crt)) {
      const product = CartData[crt];
      const finalPrice = product.options.find(option => option.hasOwnProperty('finalPrice')).finalPrice;
      totalPrice += parseInt(finalPrice);
    }
  }
  document.getElementById('total_to_pay').innerText = `$${totalPrice}`;
}
function addQuantity(productName) {
  const product = CartData[productName];
  const quantityOption = product.options.find(option => option.hasOwnProperty('quantity'));
  const finalPriceOption = product.options.find(option => option.hasOwnProperty('finalPrice'));
  if (quantityOption.quantity < 5) {
    quantityOption.quantity++;
    finalPriceOption.finalPrice = parseInt(finalPriceOption.finalPrice) + (parseInt(finalPriceOption.finalPrice) / (quantityOption.quantity - 1));
    updateCart();
    document.querySelector(`.quantity-minus[data-name="${productName}"]`).nextElementSibling.textContent = quantityOption.quantity;
    document.querySelector(`.to_pay[data-name="${productName}"]`).textContent ="$ "+ finalPriceOption.finalPrice;
    updateTotalPrice();
  } else {
    alert("Can't Add More");
  }
}


function removeQuantity(productName) {
  const product = CartData[productName];
  const quantityOption = product.options.find(option => option.hasOwnProperty('quantity'));
  const finalPriceOption = product.options.find(option => option.hasOwnProperty('finalPrice'));
  if (quantityOption.quantity > 1) {
    quantityOption.quantity--;
    finalPriceOption.finalPrice = parseInt(finalPriceOption.finalPrice) - (parseInt(finalPriceOption.finalPrice) / (quantityOption.quantity + 1));
    updateCart();
    document.querySelector(`.quantity-minus[data-name="${productName}"]`).nextElementSibling.textContent = quantityOption.quantity;
    document.querySelector(`.to_pay[data-name="${productName}"]`).textContent = "$ " +finalPriceOption.finalPrice;
    updateTotalPrice();
  } else {
    delete CartData[productName];
    updateCart();
    document.querySelector(`.quantity-minus[data-name="${productName}"]`).parentElement.parentElement.remove();
    updateTotalPrice();
  }
}

const edit_quantity = document.querySelectorAll(".edit-quantity a");
  edit_quantity.forEach((key, index) => {
    key.addEventListener("click", () => {
      const what = key.textContent;
      const element = key.getAttribute('data-name')
      if (what === "+") {
        addQuantity(element)
      } else if (what === "-") {
       removeQuantity(element)
      }
    });
  });


  const remove = document.querySelectorAll(".close");
  remove.forEach((key, index) => {
    key.addEventListener("click", () => {
      key.parentElement.parentElement.parentElement.remove();
 const element = key.getAttribute('data-name');
      delete CartData[element];
      updateCart();
      updateTotalPrice();
    });
  });

const checkout = document.querySelector('.checkout');
checkout.addEventListener('click',()=>{
const payment_method = document.getElementById("payment_method").value;
const value = {payment_method,CartData}
fetch('/cart',{
method : 'POST',
headers :{
"Content-Type": "application/json",
},
body : JSON.stringify(value)
}).then(res => res.json()).then(result =>{
if(result.msg == "success"){
if(payment_method === "CLIQ"){
  window.location.href = "/cliq-pay";
}else{
  window.location.href = "/";
}
}else{
  alert("Error processing cart"); 
}
}).catch(error => {
  console.error("Error:", error);
  alert("Error processing cart");
});
})
});

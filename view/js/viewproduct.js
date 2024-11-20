document.addEventListener("DOMContentLoaded", () => {
  var notyf = new Notyf();

  function addToCart(item, name) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (!cart[name]) {
      cart[name] = item;
      notyf.success("Added to Cart");
    } else {
      notyf.error("Already in Cart");
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const quantityMinusButton = document.querySelector('.quantity-minus');
  const quantityPlusButton = document.querySelector('.quantity-plus');

  quantityMinusButton.addEventListener('click', () => {
    const productId = quantityMinusButton.getAttribute('data-id');
    const quantityInput = document.getElementById(`quantity-${productId}`);
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
    }
  });

  quantityPlusButton.addEventListener('click', () => {
    const productId = quantityPlusButton.getAttribute('data-id');
    const quantityInput = document.getElementById(`quantity-${productId}`);
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
  });

  const add_to_cart_button = document.querySelector('.add_to_cart');

  add_to_cart_button.addEventListener('click', async () => {
    const options = document.querySelectorAll('.opt');
    const ProductName = document.querySelector('.box-title').textContent;
    const quantity = document.querySelector('input[name="quantity"]').value;
    const ExtraComments = document.getElementById('extracomments').value;

    let optionsObject = {};
    optionsObject[ProductName] = [];

    options.forEach(option => {
      const optionName = option.querySelector('h4').textContent;
      const selectedOption = option.querySelector('input[type="radio"]:checked');
      const selectedValue = selectedOption ? selectedOption.nextElementSibling.textContent : null;

      optionsObject[ProductName].push({ optionName, selectedValue });
    });
const Price = document.querySelector(".product_price").textContent.replace('$','').trim();


    optionsObject[ProductName].push({ quantity });
    optionsObject[ProductName].push({ ExtraComments });
    const finalPrice =(parseInt(Price)*parseInt(quantity));
    console.log(finalPrice)
optionsObject[ProductName].push({finalPrice})

    const productData = {
      ProductName,
      options: optionsObject[ProductName]
    };

    const FetchedData = await fetch('/view_product', { method: 'get' });
    if (FetchedData.ok && FetchedData.status == 200) {
      addToCart(productData, ProductName);
    } else {
      notyf.error("Error log in");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const add_to_cart_buttons = document.querySelector('.add_to_cart');
    

    add_to_cart_buttons.addEventListener('click', () => {
      
        const options = document.querySelectorAll('.opt');
        
        options.forEach(option => {
          const optionName = option.querySelector('h4').textContent;
          const selectedOption = option.querySelector('input[type="radio"]:checked');
          const selectedValue = selectedOption ? selectedOption.nextElementSibling.textContent : null;
          
          console.log(`Option: ${optionName}, Selected Value: ${selectedValue}`);
        });
      });

  });
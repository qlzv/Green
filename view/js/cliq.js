function readURL(input) {
  if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
          document.getElementById("imageResult").setAttribute("src", e.target.result);
      };
      sendRequest(input.files[0]);

      reader.readAsDataURL(input.files[0]);
  }
}

function sendRequest(input) {
  const Cart = JSON.parse(localStorage.getItem('cart')) || {};
  if (Object.keys(Cart).length === 0) return false;

  const form = new FormData();
  form.append('image', input);
  form.append('cart', JSON.stringify(Cart));

  fetch('/cliq-pay', {
      method: 'POST',
      body: form
  }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}


let input = document.getElementById( 'upload' );
let infoArea = document.getElementById( 'upload-label' );
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("upload").addEventListener('change',()=>{
    readURL(input)
    })
    document.getElementById("submit").addEventListener('click',()=>{
  if(!document.getElementById("imageResult").getAttribute("src")){
    alert("upload")
  }else{
    console.log(document.getElementById("imageResult").getAttribute("src"))
    
  }
    })
})
input.addEventListener( 'change', showFileName );
function showFileName( event ) {
  let input = event.srcElement;
  let fileName = input.files[0].name;
  infoArea.textContent = 'File name: ' + fileName;
}

function showalert(){
    alert("hola, esta es una alerta de js")
}
const form = document.getElementById('myForm')

function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            validateForm();
          });

function validateForm() {
  const input = document.getElementById("email")
  const inputValue =input.value

  if (!validateEmail (inputValue)) {
    alert("Por favor ingrese un correo valido")
  } else {
    alert("correo electronico enviado correctamente")
  }
}
form.addEventListener("submit", function(lala){
  lala.preventDefault()
  validateForm();
})

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function(){
  document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
}
)

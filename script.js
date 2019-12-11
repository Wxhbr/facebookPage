//Regex E-mail

function validateEmail(email) {
    var resultado = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return resultado.test(email);
  }

function validateTelefone(telefone){
    var resultado = /\d{4,5}-\d{4}/g;
    return resultado.test(telefone);
}


let botaoEnviar = document.getElementsByClassName('submitLogin')[0]


botaoEnviar.addEventListener('click', function() {
    event.preventDefault();
    campoEmailTelefone = document.getElementsByTagName('input')[0].value
    if (validateEmail(campoEmailTelefone) == true || validateTelefone(campoEmailTelefone) == true){
        alert("Login realizado com sucesso");
    } else {
        alert("Você não inseriu um e-mail ou número de telefone válido");
    }
})

document.querySelector('#datePicker').DatePickerX.init({format:'dd/mm/yyyy'});

// $('#datepicker').datepicker({
//     uiLibrary: 'bootstrap4'
// })



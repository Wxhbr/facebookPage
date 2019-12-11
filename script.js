//Regex E-mail

function validateEmail(email) {
    var resultado = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return resultado.test(email);
}

//Regex Telefone

function validateTelefone(telefone) {
    var resultado = /\d{4,5}-\d{4}/g;
    return resultado.test(telefone);
}


let botaoEnviar = document.getElementsByClassName('submitLogin')[0]

// Verificação de Login

botaoEnviar.addEventListener('click', function () {
    event.preventDefault();
    campoEmailTelefone = document.getElementsByTagName('input')[0].value
    campoSenha = document.querySelectorAll('.loginItem')[1].querySelectorAll('input')[0].value
    if (campoSenha !== "" && validateEmail(campoEmailTelefone) == true || validateTelefone(campoEmailTelefone) == true) {
        // if (campoSenha == "") {
            alert("Login realizado com sucesso");
        // }
    } else {
        alert("Você não inseriu um e-mail ou número de telefone válido e/ou o campo senha está vazio");
    }
})

document.querySelector('#datePicker').DatePickerX.init({
    format: 'dd/mm/yyyy'
});

// $('#datepicker').datepicker({
//     uiLibrary: 'bootstrap4'
// })


// Regex Nome

function validateNome(nome) {
    var resultado = /^[A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+$/
    return resultado.test(nome)
}

// Regex Sobrenome

function validateNomeSobrenome(nomeSobrenome) {
    var resultado = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    return resultado.test(nomeSobrenome)
}

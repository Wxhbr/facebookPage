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
        alert("Login realizado com sucesso");
    } else {
        alert("Você não inseriu um e-mail ou número de telefone válido e/ou o campo senha está vazio");
    }
})

document.querySelector('#datePicker').DatePickerX.init({
    format: 'dd/mm/yyyy'
});

// Regex Nome

function validateNome(event) {
    let nomeValue = event.target.value
    var resultado = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+(\s{0,1})*$/;
    if (resultado.test(nomeValue) == true) {
        let bordaNome = document.querySelectorAll('.form-group')[0].querySelectorAll('.form-control')[0]
        bordaNome.style.borderColor = 'greenyellow'
    } else if (resultado.test(nomeValue) !== true && nomeValue == "") {
        let bordaNome = document.querySelectorAll('.form-group')[0].querySelectorAll('.form-control')[0]
        bordaNome.style.borderColor = 'red'
    }
}

// Regex Sobrenome

function validateNomeSobrenome(nomeSobrenome) {
    let nomeValue = event.target.value
    var resultado = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    if (resultado.test(nomeValue) == true) {
        let bordaSobrenome = document.querySelectorAll('.form-group')[1].querySelectorAll('.form-control')[0]
        bordaSobrenome.style.borderColor = 'greenyellow'
    } else if (resultado.test(nomeValue) !== true && nomeValue == "") {
        bordaSobrenome.style.borderColor = 'red'
    }
}


// Verifica Nome

let bordaNome = document.querySelectorAll('.form-group')[0].querySelector('.form-control')

// Eventos no Nome do Formulário

bordaNome.addEventListener('click', validateNome)
bordaNome.addEventListener('keypress', validateNome)
bordaNome.addEventListener('keydown', validateNome)
bordaNome.addEventListener('keyup', validateNome)
bordaNome.addEventListener('changes', validateNome)

// Verifica Sobrenome

let bordaSobrenome = document.querySelectorAll('.form-group')[1].querySelectorAll('.form-control')[0]

// Eventos no Sobrenome do Formulário

bordaSobrenome.addEventListener('click', validateNomeSobrenome)
bordaSobrenome.addEventListener('keypress', validateNomeSobrenome)
bordaSobrenome.addEventListener('keydown', validateNomeSobrenome)
bordaSobrenome.addEventListener('keyup', validateNomeSobrenome)
bordaSobrenome.addEventListener('changes', validateNomeSobrenome)

// Verifica Email

bordaEmail = document.querySelectorAll('.form-group')[2].querySelectorAll('.form-control')[0]

// Eventos no E-mail e Celular



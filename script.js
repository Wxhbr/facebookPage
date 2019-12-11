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

botaoEnviar.addEventListener('click', function campoLogin() {
    event.preventDefault();
    campoEmailTelefone = document.getElementsByTagName('input')[0].value
    campoSenha = document.querySelectorAll('.loginItem')[1].querySelectorAll('input')[0].value
    if (campoSenha !== "" && validateEmail(campoEmailTelefone) == true || validateTelefone(campoEmailTelefone) == true) {
        alert("Login realizado com sucesso");
    } else {
        alert("Você não inseriu um e-mail ou número de telefone válido(xxxxx-xxxx) e/ou o campo senha está vazio");
    }
})

document.querySelector('#datePicker').DatePickerX.init({
    format: 'dd/mm/yyyy'
});

// Regex Nome

function validateNome(nome) {
    let nomeValue = event.target.value.trim()
    const resultado = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (resultado.test(nomeValue) == true) {
        event.target.style.borderColor = 'greenyellow'
        event.target.value = nomeValue;
        return true
    } else if (resultado.test(nomeValue) !== true || nomeValue === "") {
        event.target.style.borderColor = 'red';
    }
}


// Regex Sobrenome

function validateNomeSobrenome(event) {
    let nomeValue = event.target.value.trim()
    const resultado = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (resultado.test(nomeValue) == true) {
        event.target.value = nomeValue;
        event.target.style.borderColor = 'greenyellow';
        return true
    } else if (resultado.test(nomeValue) !== true || nomeValue == "") {
        event.target.value = nomeValue;
        event.target.style.borderColor = 'red';
    }
}

function validateEmailTelefoneForm(event) {
    //debugger
    const emailValue = event.target.value.trim()
    const resultadoEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const resultadoTelefone = /\d{4,5}-\d{4}/g;
    const emailValidation = resultadoEmail.test(emailValue);
    const telefoneValidation = resultadoTelefone.test(emailValue);
    if ((emailValidation || telefoneValidation) === true) {
        event.target.value = emailValue
        event.target.style.borderColor = 'greenyellow'
        return true
    } else {
        event.target.value = emailValue
        event.target.style.borderColor = 'red'
    }
}

function validateData(event) {
    dataValue = event.target.value.trim();
    if (dataValue === '') {
        event.target.style.borderColor = 'red';
    } else {
        event.target.style.borderColor = 'greenyellow'
        return true
    }
}

function verificaSenhaForm() {
    const evento = event.target;
    const eventoValue = event.target.value;
    if (eventoValue !== "") {
        evento.style.borderColor = 'greenyellow';
        return true
    } else {
        evento.style.borderColor = 'red';
    }
}

const verificaGender = () => {
    caminhoGender.forEach(element => {
        if (element.checked !== true) {
            element.style.borderColor = 'red'
        } else {
            element.style.borderColor = 'none'
            return true
        }
    })
};


// Verifica Nome

let bordaNome = document.querySelectorAll('.form-group')[0].querySelector('.form-control')

// Eventos no Nome do Formulário

bordaNome.addEventListener('blur', validateNome)

// Verifica Sobrenome

let bordaSobrenome = document.querySelectorAll('.form-group')[1].querySelectorAll('.form-control')[0]

// Eventos no Sobrenome do Formulário

bordaSobrenome.addEventListener('blur', validateNomeSobrenome)

// Verifica Email

const bordaEmail = document.querySelectorAll('.form-group')[2].querySelectorAll('.form-control')[0]

// Eventos no E-mail e Celular

bordaEmail.addEventListener('blur', validateEmailTelefoneForm)

// Verifica Data

const bordaData = document.querySelector('#datePicker');

// Eventos na Data

bordaData.addEventListener('blur', validateData)
bordaData.addEventListener('change', validateData)



// Verifica Senha Formulário

const campoSenhaValue = document.querySelector('.novaSenha')


// Eventos na senha

campoSenhaValue.addEventListener('blur', verificaSenhaForm)

// Verifica Gender

const caminhoGender = document.querySelectorAll('.form-group')

// Verifica Botao

botaoCadastrar = document.querySelector('.buttonContent')

botaoCadastrar.addEventListener('click', validaTodosCampos)

function validaTodosCampos() {
    if (validateNomeTudo(bordaNome) === true && validateNomeSobrenomeTudo(bordaSobrenome) === true && validateEmailTelefoneFormTudo(bordaEmail) === true && validateDataTudo(bordaData) === true && verificaSenhaFormTudo(campoSenhaValue) === true){
        alert('Cadastro Realizado Com Sucesso!!!')
    } else {
        alert('Deu ruim')
    }
}


// Regex Nome

function validateNomeTudo() {
    let bordaNome = document.querySelectorAll('.form-group')[0].querySelector('.form-control').value
    const resultado = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (resultado.test(bordaNome) == true) {
        return true
    } else {
        return false
    }
}


// Regex Sobrenome

function validateNomeSobrenomeTudo() {
    let bordaSobrenome = document.querySelectorAll('.form-group')[1].querySelectorAll('.form-control')[0].value
    const resultado = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (resultado.test(bordaSobrenome) == true) {
        return true
    } else {
        return false
    }
}

function validateEmailTelefoneFormTudo() {
    //debugger
    const bordaEmail = document.querySelectorAll('.form-group')[2].querySelectorAll('.form-control')[0].value
    const resultadoEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const resultadoTelefone = /\d{4,5}-\d{4}/g;
    const emailValidation = resultadoEmail.test(bordaEmail);
    const telefoneValidation = resultadoTelefone.test(bordaEmail);
    if ((emailValidation || telefoneValidation) === true) {
        return true
    } else {
        return false
    }
}

function validateDataTudo() {
    const bordaData = document.querySelector('#datePicker').value;
    if (dataValue !== '') {
        return true
    } else {
        return false
    }
}

function verificaSenhaFormTudo() {
    const campoSenhaValue = document.querySelector('.novaSenha').value
    if (campoSenhaValue !== "") {
        return true
    } else {
        return false
    }
}

// const verificaGenderTudo = () => {
//     caminhoGender.forEach(element => {
//         if (element.checked == true) {
//             return true
//         } else {
//            return false
//         }
//     })
// };

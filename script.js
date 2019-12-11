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
        alert("Você não inseriu um e-mail ou número de telefone válido(xxxxx-xxxx) e/ou o campo senha está vazio");
    }
})

document.querySelector('#datePicker').DatePickerX.init({
    format: 'dd/mm/yyyy'
});

// Regex Nome

function validateNome(event) {
    let nomeValue = event.target.value.trim()    
    //var resultado = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+(\s{0,1})*$/;
    const resultado = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (resultado.test(nomeValue) == true) {
        //let bordaNome = document.querySelectorAll('.form-group')[0].querySelectorAll('.form-control')[0]
        event.target.style.borderColor = 'greenyellow'
        event.target.value = nomeValue;
        alert (event.target.style.borderColor);
        //alert(nomeValue);
        //bordaNome.style.borderColor = 'greenyellow'
    } else if (resultado.test(nomeValue) !== true || nomeValue === "") {
       // let bordaNome = document.querySelectorAll('.form-group')[0].querySelectorAll('.form-control')[0]
       // bordaNome.style.borderColor = 'red'
       event.target.style.borderColor = 'red';
       //alert(nomeValue);
    }
}

// Regex Sobrenome

function validateNomeSobrenome(event) {
    let nomeValue = event.target.value.trim()
    //var resultado = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    const resultado = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (resultado.test(nomeValue) == true) {
        //let bordaSobrenome = document.querySelectorAll('.form-group')[1].querySelectorAll('.form-control')[0]
        //bordaSobrenome.style.borderColor = 'greenyellow'
        event.target.value = nomeValue;
        event.target.style.borderColor = 'greenyellow';
    } else if (resultado.test(nomeValue) !== true || nomeValue == "") {
        //let bordaSobrenome = document.querySelectorAll('.form-group')[1].querySelectorAll('.form-control')[0]
        //bordaSobrenome.style.borderColor = 'red'
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
      //const bordaEmailTelefone = document.querySelectorAll('.form-group')[2].querySelectorAll('.form-control')[0]
      //bordaEmailTelefone.style.borderColor = 'greenyellow'
      event.target.value = emailValue
      event.target.style.borderColor = 'greenyellow'
  } else {        
      //const bordaEmailTelefone = document.querySelectorAll('.form-group')[2].querySelectorAll('.form-control')[0]
      //bordaEmailTelefone.style.borderColor = 'red'
      alert('entrou 1')
      event.target.value = emailValue
      event.target.style.borderColor = 'red'
  }
}

function validateData(event) {
  dataValue = event.target.value.trim();  
  if (dataValue === '') {
    event.target.style.borderColor = 'red';
  } else {
      event.target.style.borderColor = 'yellowgreen'
  }
}


// Verifica Nome

let bordaNome = document.querySelectorAll('.form-group')[0].querySelector('.form-control')

// Eventos no Nome do Formulário

//bordaNome.addEventListener('click', validateNome)
//bordaNome.addEventListener('change', validateNome)
bordaNome.addEventListener('blur', validateNome, true)

// Verifica Sobrenome

let bordaSobrenome = document.querySelectorAll('.form-group')[1].querySelectorAll('.form-control')[0]

// Eventos no Sobrenome do Formulário

//bordaSobrenome.addEventListener('click', validateNomeSobrenome)
//bordaSobrenome.addEventListener('change', validateNomeSobrenome)
bordaSobrenome.addEventListener('blur', validateNomeSobrenome)

// Verifica Email

const bordaEmail = document.querySelectorAll('.form-group')[2].querySelectorAll('.form-control')[0]

// Eventos no E-mail e Celular

//bordaEmail.addEventListener('click', validateEmailTelefoneForm)
//bordaEmail.addEventListener('change', validateEmailTelefoneForm)
bordaEmail.addEventListener('blur', validateEmailTelefoneForm)

// Verifica Data

const bordaData = document.querySelector('#datePicker');

// Eventos na Data

//bordaEmail.addEventListener('click', validateEmailTelefoneForm)
//bordaEmail.addEventListener('change', validateEmailTelefoneForm)
bordaData.addEventListener('change', validateData)

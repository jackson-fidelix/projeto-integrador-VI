
var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
})


document.querySelector('#signin').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  // Verifica se o e-mail e a senha correspondem
  var email = document.querySelector('#signin input[type="text"]').value;
  var password = document.querySelector('#signin input[type="password"]').value;

  if (email === 'jack_tech@gmail.com' && password === '123456789#') {
    // Exibe um alerta de sucesso
    alert('Login bem-sucedido! Redirecionando para a página de usuários PRO.');

    // Redireciona para a página desejada após um pequeno intervalo
    setTimeout(function() {
      window.location.href = 'logado.html';
    }, 1000); // Tempo em milissegundos (1000ms = 1 segundo)
  } else {
    // Exibe uma mensagem de alerta para informar que o login falhou
    alert('E-mail ou senha incorretos');
  }
});



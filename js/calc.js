$(document).ready(function() {
    $('#calcular-btn').click(function() {
        var tvConsumo = parseFloat($('#tv').val() || 0);
        var geladeiraConsumo = parseFloat($('#geladeira').val() || 0);
        var arCondicionadoConsumo = parseFloat($('#ar-condicionado').val() || 0);
        var maqRoupaConsumo = parseFloat($('#maq-roupa').val() || 0);
        var chuveiroConsumo = parseFloat($('#chuveiro').val() || 0);
        var microOndasConsumo = parseFloat($('#micro-ondas').val() || 0);

        // Calcula a demanda total somando o consumo de todos os equipamentos
        var demandaTotal = tvConsumo + geladeiraConsumo + arCondicionadoConsumo + maqRoupaConsumo + chuveiroConsumo + microOndasConsumo;

        // Calcula o número de placas solares necessárias, assumindo que uma placa gera cerca de 300W
        var numeroPlacas = Math.ceil(demandaTotal / 300);

        // Exibe o resultado na div com id "resultado"
        $('#resultado').text('Você precisaria de aproximadamente ' + numeroPlacas + ' placas solares.');
    });
});

// Funções JavaScript atualizadas
function insert(num) {
    var numero = document.getElementById('resultado_calc_').innerHTML;
    document.getElementById('resultado_calc_').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado_calc_').innerHTML = ""; // Limpa para 0
}

function back() {
    var resultado = document.getElementById('resultado_calc_').innerHTML;
    document.getElementById('resultado_calc_').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcule() {
    var result = document.getElementById('resultado_calc_').innerHTML;
    if (result.trim() !== '') {
        document.getElementById('resultado_calc_').innerHTML = eval(result);
    } else {
        document.getElementById('resultado_calc_').innerHTML = 'Entrada Inválida!';
    }
}


/* ------------------------------------TELA DE LOGIN - INDEX ------------------------------------ */
document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin');
    const signupForm = document.getElementById('signup');
    const btnSignin = document.getElementById('btnSignin');
    const btnSignup = document.getElementById('btnSignup');
    const btnColor = document.querySelector('.btnColor'); // Selecionar o elemento btnColor
  
    // Mostra o formulário de login ao clicar no botão "Login"
    btnSignin.addEventListener('click', function() {
      signupForm.style.left = '450px';
      signinForm.style.left = '25px';
      btnColor.style.left = '0px'; // Ajustar o estilo do btnColor
    });
  
    // Mostra o formulário de registro ao clicar no botão "Register"
    btnSignup.addEventListener('click', function() {
      signinForm.style.left = '-450px';
      signupForm.style.left = '25px';
      btnColor.style.left = '110px'; // Ajustar o estilo do btnColor
    });
  
    // Validação e ação do formulário de login
    signinForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Previne o envio padrão do formulário
  
      const email = signinForm.querySelector('input[type="text"]').value;
      const password = signinForm.querySelector('input[type="password"]').value;
  
      // Aqui você deve realizar a validação do login
      if (email.trim() === 'jackson@gmail.com' && password.trim() === '1234') {
        // Login bem-sucedido, redirecionar para outra página
        window.location.href = 'logado.html';
      } else {
        alert('Credenciais inválidas. Por favor, verifique e tente novamente.');
        signinForm.reset(); // Limpa o formulário após o envio
      }
    });
});

/* ------------------------------------ BOTÕES DE AUDIO E VOZ - INDEX E LOGADO ------------------------------------ */

function startSpeechRecognition() {
    let isExpectingPassword = false;

    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'pt-BR';
        recognition.start();

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript.trim().toLowerCase();
            console.log('Transcrição:', transcript);

            if (!isExpectingPassword) {
                const emailField = document.getElementById('email');
                if (emailField) {
                    emailField.value = transcript;
                    isExpectingPassword = true;
                    console.log('isExpectingPassword:', isExpectingPassword);

                    // Após preencher o e-mail, mudamos para esperar a senha
                    recognition.stop(); // Interrompe o reconhecimento atual
                    setTimeout(() => {
                        recognition.start(); // Reinicia o reconhecimento para a senha
                    }, 1000); // Espera 1 segundo antes de reiniciar o reconhecimento
                }
            } else {
                const passwordField = document.getElementById('password');
                if (passwordField) {
                    passwordField.value = transcript;
                    isExpectingPassword = false;
                    console.log('isExpectingPassword:', isExpectingPassword);
                }
            }
        };

        recognition.onerror = function(event) {
            console.error('Erro no reconhecimento de voz:', event.error);
        };
    } else {
        alert('Este navegador não suporta reconhecimento de voz.');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Configuração para o botão de fala do índice
    setupSpeechSynthesis('speakIndex', 'Olá! Sejam Bem-Vindos ao SOL - Sistema de Otimização de Luz. Navegue em nosso site para conhecer melhor nossa solução!', 'pt-BR');

    // Configuração para o botão de fala da Galeria
    setupSpeechSynthesis('speakGaleria', 'Agora você chegou na tela de Galeria, aqui você encontrará nossa proposta de solução, incluindo acessibilidade e sustentabilidade. Estamos juntos nessa luta!', 'pt-BR');
    // Configuração para o botão de fala de Sobre Nós
    setupSpeechSynthesis('speakSobreNos', 'Essa é a aba "Sobre Nós", Conheça um pouco da nossa história e da nossa equipe. Estamos felizes por termos vocês conosco!', 'pt-BR');

    // Configuração para o botão de Index - Logado
    setupSpeechSynthesis('speakIndexLogado', 'Em primeiro lugar, queremos agradecer por acreditar em nosso trabalho e se tornar um apoiador(a). Seja BEM-VINDO à área de membros. Espero que aproveite ao máximo todas as funcionalidades do nosso sistema!', 'pt-BR');

    // Função genérica para configurar botão de fala
    function setupSpeechSynthesis(speakButtonId, messageText, lang) {
        const speakButton = document.getElementById(speakButtonId);

        // Evento de clique no botão "Falar"
        speakButton.addEventListener('click', () => {
            const message = new SpeechSynthesisUtterance(messageText);
            message.lang = lang; // Define o idioma da mensagem

            // Defina a voz padrão aqui
            const defaultVoice = speechSynthesis.getVoices().find(voice => voice.lang === lang);
            if (defaultVoice) {
                message.voice = defaultVoice;
                speechSynthesis.speak(message);
            } else {
                console.error('Voz padrão não encontrada para o idioma:', lang);
            }
        });
    }
});



/* ------------------------------------TELA DE DADOS - LOGADO------------------------------------ */

document.getElementById('problem-btn').addEventListener('click', function() {
    var frame = document.getElementById('problem-frame');

    if (frame.style.display === 'none') {
        frame.style.display = 'block'; // Mostra o iframe se estiver oculto
    } else {
        frame.style.display = 'none'; // Oculta o iframe se estiver visível
    }
});

document.getElementById('geladeira-btn').addEventListener('click', function() {
    var frame = document.getElementById('geladeira-frame');

    if (frame.style.display === 'none') {
        frame.style.display = 'block'; // Mostra o iframe se estiver oculto
    } else {
        frame.style.display = 'none'; // Oculta o iframe se estiver visível
    }
});

document.getElementById('ar-btn').addEventListener('click', function() {
    var frame = document.getElementById('ar-condicionado-frame');

    if (frame.style.display === 'none') {
        frame.style.display = 'block'; // Mostra o iframe se estiver oculto
    } else {
        frame.style.display = 'none'; // Oculta o iframe se estiver visível
    }
});

document.getElementById('maq-lavar-btn').addEventListener('click', function() {
    var frame = document.getElementById('maq-lavar-frame');

    if (frame.style.display === 'none') {
        frame.style.display = 'block'; // Mostra o iframe se estiver oculto
    } else {
        frame.style.display = 'none'; // Oculta o iframe se estiver visível
    }
});

document.getElementById('tv-btn').addEventListener('click', function() {
    var frame = document.getElementById('tv-frame');

    if (frame.style.display === 'none') {
        frame.style.display = 'block'; // Mostra o iframe se estiver oculto
    } else {
        frame.style.display = 'none'; // Oculta o iframe se estiver visível
    }
});

document.getElementById('chuveiro-btn').addEventListener('click', function() {
    var frame = document.getElementById('chuveiro-frame');

    if (frame.style.display === 'none') {
        frame.style.display = 'block'; // Mostra o iframe se estiver oculto
    } else {
        frame.style.display = 'none'; // Oculta o iframe se estiver visível
    }
});

document.getElementById('micro-ondas-btn').addEventListener('click', function() {
    var frame = document.getElementById('micro-ondas-frame');

    if (frame.style.display === 'none') {
        frame.style.display = 'block'; // Mostra o iframe se estiver oculto
    } else {
        frame.style.display = 'none'; // Oculta o iframe se estiver visível
    }
});


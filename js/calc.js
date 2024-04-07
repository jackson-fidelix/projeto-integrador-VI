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

/* ------------------------------------TELA DE DADOS - LOGADO------------------------------------ */

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
// Função para validar texto vazio
function validarTexto(mensagem) {

    let texto = prompt(mensagem);

    // Continua pedindo enquanto estiver vazio
    while (texto === null || texto.trim() === "") {
        alert("Entrada inválida. Tente novamente.");
        texto = prompt(mensagem);
    }

    return texto;
}

// Função para validar números
function validarNumero(mensagem) {

    let numero = parseInt(prompt(mensagem));

    // Continua pedindo enquanto não for número válido
    while (isNaN(numero) || numero < 0) {
        alert("Digite um número válido.");
        numero = parseInt(prompt(mensagem));
    }

    return numero;
}

// Função para verificar a situação do estoque 
function verificarEstoque(quantidadeEstoque) {

    if (quantidadeEstoque < 5) {
        return "Estoque baixo";
    }

    else {
        return "Estoque OK";
    }
}

// Função para classificar o vinho
function classificarVinho(safraVinho) {

    if (safraVinho >= 2020) {
        return "Vinho Jovem";
    }

    else if (safraVinho >= 2015) {
        return "Vinho Amadurecido";
    }

    else {
        return "Vinho Antigo";
    }
}

// Função para mostrar os dados do vinho
function mostrarDados(
    nomeVinho,
    tipoVinho,
    safraVinho,
    classificacao,
    quantidadeEstoque,
    situacaoEstoque
) {

    alert("As informações do vinho foram exibidas no console.");

    console.log("===== VINHO CADASTRADO =====");
    console.log(`Nome: ${nomeVinho}`);
    console.log(`Tipo: ${tipoVinho}`);
    console.log(`Safra: ${safraVinho}`);
    console.log(`Classificação: ${classificacao}`);
    console.log(`Quantidade em estoque: ${quantidadeEstoque}`);
    console.log(`Situação do estoque: ${situacaoEstoque}`);
    console.log("============================");
}

// Controle do sistema
let continuarCadastro = true;

// Contadores
let totalCadastros = 0;
let totalEstoqueBaixo = 0;

// Controle do vinho mais antigo
let vinhoMaisAntigo = "";
let safraMaisAntiga = 9999;

// Mensagem inicial
alert("Seja bem-vindo à Vinheria Agnello");

// Loop principal
while (continuarCadastro) {

    // Cadastro do vinho
    let nomeVinho = validarTexto("Digite o nome do vinho:");

    let tipoVinho = validarTexto(
        "Digite o tipo do vinho (Tinto, Branco ou Rosé):"
    );

    let safraVinho = validarNumero(
        "Digite a safra do vinho:"
    );

    let quantidadeEstoque = validarNumero(
        "Digite a quantidade em estoque:"
    );

    // Processamento
    let classificacao = classificarVinho(safraVinho);

    let situacaoEstoque = verificarEstoque(quantidadeEstoque);

    // Soma cadastro
    totalCadastros++;

    // Verifica estoque baixo
    if (quantidadeEstoque < 5) {
        totalEstoqueBaixo++;
    }

    // Verifica vinho mais antigo
    if (safraVinho < safraMaisAntiga) {

        safraMaisAntiga = safraVinho;

        vinhoMaisAntigo = nomeVinho;
    }

    // Mostra dados
    mostrarDados(
        nomeVinho,
        tipoVinho,
        safraVinho,
        classificacao,
        quantidadeEstoque,
        situacaoEstoque
    );

    // Pergunta se deseja continuar
    let resposta = validarTexto(
        "Deseja cadastrar outro vinho? (S/N)"
    );

    // Encerra sistema
    if (resposta.toUpperCase() !== "S") {
        continuarCadastro = false;
    }
}

// Resumo final
console.log("===== RESUMO FINAL =====");
console.log(`Total de cadastros: ${totalCadastros}`);
console.log(`Vinhos com estoque baixo: ${totalEstoqueBaixo}`);
console.log(`Vinho mais antigo: ${vinhoMaisAntigo}`);
console.log(`Safra do vinho mais antigo: ${safraMaisAntiga}`);
console.log("========================");

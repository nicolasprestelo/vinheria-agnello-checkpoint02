// Função para verificar a situação do estoque
function verificarEstoque(quantidadeEstoque) {

    // Se a quantidade for menor que 5, o estoque está baixo
    if (quantidadeEstoque < 5) {
        return "Estoque baixo";
    }

    // Caso contrário, o estoque está normal
    else {
        return "Estoque OK";
    }
}

// Função para classificar o vinho de acordo com a safra
function classificarVinho(safraVinho) {

    // Vinhos mais novos
    if (safraVinho >= 2020) {
        return "Vinho Jovem";
    }

    // Vinhos intermediários
    else if (safraVinho >= 2015) {
        return "Vinho Amadurecido";
    }

    // Vinhos mais antigos
    else {
        return "Vinho Antigo";
    }
}

// Variável para controlar se o sistema continua rodando
let continuarCadastro = true;

// Contador de vinhos cadastrados
let totalCadastros = 0;

// Contador de vinhos com estoque baixo
let totalEstoqueBaixo = 0;

// Armazena o nome do vinho mais antigo
let vinhoMaisAntigo = "";

// Armazena a safra mais antiga encontrada
let safraMaisAntiga = 9999;

// Mensagem inicial do sistema
alert("Seja bem-vindo à Vinharia Agnello");

// Enquanto o usuário quiser continuar cadastrando
while (continuarCadastro) {

    // Coleta das informações do vinho
    let nomeVinho = prompt("Digite o nome do vinho:");

    let tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");

    let safraVinho = parseInt(prompt("Digite a safra do vinho:"));

    let quantidadeEstoque = parseInt(prompt("Digite a quantidade em estoque:"));

    // Chama as funções para obter classificação e situação do estoque
    let classificacao = classificarVinho(safraVinho);

    let situacaoEstoque = verificarEstoque(quantidadeEstoque);

    // Soma +1 no total de cadastros
    totalCadastros++;

    // Verifica se o estoque está baixo
    if (quantidadeEstoque < 5) {
        totalEstoqueBaixo++;
    }

    // Verifica se a safra atual é mais antiga
    if (safraVinho < safraMaisAntiga) {

        // Atualiza a safra mais antiga
        safraMaisAntiga = safraVinho;

        // Guarda o nome do vinho mais antigo
        vinhoMaisAntigo = nomeVinho;
    }

    //Avisa o usuário que as informações estão no console
    alert("As informações do vinho foram exibidas no console.");


    // Exibe as informações do vinho no console
    console.log("===== Vinho Cadastrado =====");
    console.log(`Nome: ${nomeVinho}`);
    console.log(`Tipo: ${tipoVinho}`);
    console.log(`Safra: ${safraVinho}`);
    console.log(`Classificação: ${classificacao}`);
    console.log(`Quantidade: ${quantidadeEstoque}`);
    console.log(`Estoque: ${situacaoEstoque}`);
    console.log("============================");

    // Pergunta se o usuário deseja continuar
    let resposta = prompt("Deseja cadastrar outro vinho? (S/N)");

    // Se a resposta for diferente de S, encerra o sistema
    if (resposta.toUpperCase() != "S") {
        continuarCadastro = false;
    }
}

// Exibe o resumo final no console
console.log("===== RESUMO FINAL =====");
console.log(`Total de cadastros: ${totalCadastros}`);
console.log(`Vinhos com estoque baixo: ${totalEstoqueBaixo}`);
console.log(`Vinho mais antigo: ${vinhoMaisAntigo}`);
console.log(`Safra do vinho mais antigo: ${safraMaisAntiga}`);
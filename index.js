
/**
* Calcula o saldo de vitórias e o nível de um jogador, com validação de dados e uma estrutura de configuração para os níveis.
@param {number} vitorias - O número total de vitórias do jogador.
@param {number} derrotas - O número total de derrotas do jogador.
@returns {{saldo: number|string, nivel: string}} Um objeto com o saldo e o nível. */



function calcularRankingAprimorado(vitorias, derrotas) {
  // VALIDAÇÃO DOS DADOS DE ENTRADA ---
  // Verifica se os valores são números e se não são negativos.
  if (typeof vitorias !== 'number' || typeof derrotas !== 'number' || vitorias < 0 || derrotas < 0) {
    return {
      saldo: 'N/A',
      nivel: 'Erro: Forneça apenas números positivos para vitórias e derrotas.'
    }
  }

 // Calcula o saldo, agora que sabemos que os dados são válidos.
  const saldoVitorias = vitorias - derrotas;

// ESTRUTURA DE CONFIGURAÇÃO PARA OS NÍVEIS ---
// Define os níveis e as vitórias mínimas necessárias para alcançá-los.
  const configsDeNivel = [
    { nome: 'Ferro', vitoriasMin: 0 },
    { nome: 'Bronze', vitoriasMin: 11 },
    { nome: 'Prata', vitoriasMin: 21 },
    { nome: 'Ouro', vitoriasMin: 51 },
    { nome: 'Diamante', vitoriasMin: 81 },
    { nome: 'Lendário', vitoriasMin: 91 },
    { nome: 'Imortal', vitoriasMin: 101 }
  ];

  let nivelFinal = 'Ferro'; // Um valor padrão seguro

  // Itera sobre a configuração para encontrar o nível correto.
  // Começamos de trás para frente, pois é mais eficiente.
  for (let i = configsDeNivel.length - 1; i >= 0; i--) {
    const nivelAtual = configsDeNivel[i];
    if (vitorias >= nivelAtual.vitoriasMin) {
      nivelFinal = nivelAtual.nome;
      break; // Encontramos o nível mais alto aplicável, então podemos parar.
    }
  }

  // Retorna o resultado final.
  return {
    saldo: saldoVitorias,
    nivel: nivelFinal
  };
}

// Exemplo de uso da função calcularRankingAprimorado

// 1. Aqui, chamamos a função com valores de exemplo para vitórias e derrotas.
const heroi = calcularRankingAprimorado(85, 10); // Usando 85 vitórias e 10 derrotas como exemplo

// 2. Exibimos o resultado no console.
console.log(`O Herói tem saldo de ${heroi.saldo} e está no nível de ${heroi.nivel}`);



// --- ÁREA DE TESTES ---

console.log("--- Testando Diferentes Cenários ---");

// Teste 1: Um jogador Ouro
const heroiOuro = calcularRankingAprimorado(75, 20);
console.log(`Resultado 1: O Herói tem saldo de ${heroiOuro.saldo} e está no nível de ${heroiOuro.nivel}`);

// Teste 2: Um jogador Imortal no limite
const heroiImortal = calcularRankingAprimorado(101, 30);
console.log(`Resultado 2: O Herói tem saldo de ${heroiImortal.saldo} e está no nível de ${heroiImortal.nivel}`);

// Teste 3: Dados inválidos (número negativo)
const heroiInvalido1 = calcularRankingAprimorado(50, -10);
console.log(`Resultado 3: ${heroiInvalido1.nivel}`); // A validação entra em ação

// Teste 4: Dados inválidos (texto)
const heroiInvalido2 = calcularRankingAprimorado("cem", 50);
console.log(`Resultado 4: ${heroiInvalido2.nivel}`); // A validação entra em ação
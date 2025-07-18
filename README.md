# 🏆 Calculadora de Partidas Rankeadas

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## 📖 Sobre o Projeto

Este projeto consiste em um script de console que calcula o saldo de vitórias e derrotas de um jogador de videogame e determina o seu nível de ranking com base na quantidade de vitórias. Foi desenvolvido como uma solução para um desafio de programação, focando em boas práticas, lógica clara e código de fácil manutenção.

---

## ✨ Funcionalidades Principais

-   **Cálculo de Saldo:** Calcula o saldo final subtraindo as derrotas das vitórias.
-   **Classificação de Nível:** Atribui um nível ao jogador (Ferro, Bronze, Prata, Ouro, Diamante, Lendário ou Imortal) com base em regras pré-definidas.
-   **Estrutura Configurável:** A lógica de níveis é baseada em um array de configuração, permitindo que os requisitos para cada nível sejam alterados facilmente sem modificar a lógica principal.
-   **Validação de Entrada:** O script valida os dados de entrada para garantir que sejam números positivos, retornando uma mensagem de erro clara em caso de dados inválidos.

---

## 🛠️ Tecnologias Utilizadas

-   **JavaScript:** Linguagem principal utilizada para toda a lógica do programa.
-   **Node.js:** Ambiente de execução para o script fora de um navegador.

---

## 🚀 Como Usar

Para executar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

É necessário ter o **[Node.js](https://nodejs.org/en/)** instalado na sua máquina.

### Execução

1.  **Faça o download do código:**
    Salve o arquivo do script (ex: `index.js`) em uma pasta de sua preferência.

2.  **Abra o terminal:**
    Abra o seu terminal (CMD, PowerShell, Terminal, etc.) e navegue até a pasta onde você salvou o arquivo.
    ```bash
    cd caminho/para/a/pasta
    ```

3.  **Execute o script:**
    Use o Node.js para rodar o arquivo.
    ```bash
    node index.js
    ```

4.  **Personalize os valores:**
    Para testar com diferentes valores de vitórias e derrotas, edite as seguintes linhas no final do arquivo `index.js`:
    ```javascript
    // --- ÁREA DE TESTES ---
    // Altere estes valores para testar diferentes cenários
    const vitoriasDoHeroi = 85;
    const derrotasDoHeroi = 10;
    
    // O restante do código executará com base nos valores que você definir acima
    const heroi = calcularRankingAprimorado(vitoriasDoHeroi, derrotasDoHeroi);
    console.log(`O Herói tem saldo de ${heroi.saldo} e está no nível de ${heroi.nivel}`);
    ```

---

## 📂 Estrutura do Código

O código está contido em um único arquivo e é dividido em duas partes principais:

1.  **A Função `calcularRankingAprimorado(vitorias, derrotas)`**:
    -   Recebe o número de vitórias e derrotas.
    -   Contém toda a lógica de validação, cálculo e classificação.
    -   Retorna um objeto com o saldo e o nível do jogador.

2.  **A Área de Testes**:
    -   Localizada no final do arquivo.
    -   É onde a função é chamada com valores de exemplo e o resultado é impresso no console.

---

## ✍️ Autor

Projeto desenvolvido por **[Seu Nome ou Nickname aqui]** com a assistência e parceria do Gemini.

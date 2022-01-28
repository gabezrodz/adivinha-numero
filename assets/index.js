// Gerando número aleatório
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Selecionando campo de mensagem
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Convertendo valor do input em número
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
})

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Exibindo mensagem quando o input está vazio
  if (!guess) {
    displayMessage('Nenhum número!');

    //Quando o jogador vence
  } else if (guess === secretNumber) {
    displayMessage('Acertou! (☞ﾟヮﾟ)☞');
    document.querySelector('.number').textContent = secretNumber;

    // Mudano a cor da página após a vitória
    document.querySelector('body').style.backgroundColor = '#48bd24';
    document.querySelector('.number').style.width = '150px';

    // Definindo a maior pontuação após vencer
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Exibindo dica de valor alto
      displayMessage(
        guess > secretNumber ? 'Muito alto! ಠ_ಠ' : 'Tá baixo... (¬_¬ )'
      );
      // Diminuindo número de tentativas
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // Exibindo mensagem em caso de derrota
      displayMessage('Você perdeu! (╯°□°）╯︵ ┻━┻');
      document.querySelector('.score').textContent = 0;
    }
  }
});
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
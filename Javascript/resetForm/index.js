document.getElementById('contato-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const mensagem = document.getElementById('mensagem-sucesso');
  mensagem.style.display = 'block';

  setTimeout(() => {
    mensagem.style.display = 'none';
  }, 5000);
});

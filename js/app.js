
// Iniciar funçao de compra 
function comprar() {
  const tipo = document.getElementById('tipo-ingresso').value;
  const quantidade = parseInt(document.getElementById('qtd').value);

  //Efetuar bloqueio caso selecione uma quantidade 0 ou negativa 
  if (!quantidade || quantidade <= 0) {
    alert('Informe uma quantidade válida!');
    return;
  }

  // selecionar a quantidade por tipo de ingresso via id do ingresso 
  const spanQtd = document.getElementById(`qtd-${tipo}`);
  const qtdDisponivel = parseInt(spanQtd.textContent);

  //verificar se a quantidade selecionada  esta disponivel 
  if (quantidade > qtdDisponivel) {
    alert("Quantidade solicitada é maior do que a disponível.");
    //retornar a fnçao 
    return;
  }

  // retirar a quantidade comprada do total de ingresssos 
  spanQtd.textContent = qtdDisponivel - quantidade;


  // funçao de mensagem de compra realizada 
  const msg = document.getElementById("mensagem-sucesso");
  msg.textContent = `Compra de ${quantidade} ingresso(s) para ${tipo.toUpperCase()} realizada com sucesso!`;
  msg.classList.add("ativa");

  setTimeout(() => {
    msg.classList.remove("ativa");
  }, 3000);
}

document.getElementById("formConato").addEventListener("submi", function (event){
event.preventDefault();
const nome = document.getElementById ("nome").value;

const email = document.getElementById ("email").value;
alert('Obrigado, ${nome} ! sua mensagem foi enviada com sucesso para o email: $(email}.');
document.getElementById("formContato").reset();
});





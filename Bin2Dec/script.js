/* Adicionando um envento "submit" com id "form".
A função "event.preventDefault()" impede que o formulário seja enviado de forma padrão, permitindo que o código controle como o formulário é processado. */
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    convert();
});
// função para converter binário para decimal
function convert() {
// obtém o valor do campo de entrada
var binary = document.getElementById("binary").value;
// verifica se o valor é válido (apenas 0 e 1)
var valid = /^[0-1]+$/.test(binary);
if (!valid) {
    alert("Insira apenas 0 e 1!");
    return;
}
// calcula o equivalente decimal
var decimal = parseInt(binary, 2);
// exibe o resultado
document.querySelector(".output").innerHTML = "O equivalente decimal é: " + decimal;
}
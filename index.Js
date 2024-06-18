function exibirTexto() {
    // Obtém o valor digitado pelo usuário
    var texto = document.getElementById("textoInput").value;

    // Exibe o texto no parágrafo resultado
    document.getElementById("resultado").textContent = texto;
}
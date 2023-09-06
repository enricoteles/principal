document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simulação de login (substitua por uma lógica real)
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === "enricotelescavalhierimariaeduardarapiniingracia" && password === "11062021") {
            // Redirecione para a página de conteúdo secreto após o login
            window.location.href = "conteudo_secreto.html";
        } else {
            alert("Nome de usuário ou senha incorretos. Tente novamente.");
        }
    });
});

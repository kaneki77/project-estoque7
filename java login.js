document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Simulação de autenticação (substitua isso por um sistema de autenticação real)
        if (username === "usuario" && password === "senha123") {
            alert("Autenticação bem-sucedida. Redirecionando para o sistema de estoque...");
            window.location.href = "estoque.html"; // Redireciona para a página do sistema de estoque
        } else {
            alert("Credenciais inválidas. Tente novamente.");
            usernameInput.value = "";
            passwordInput.value = "";
        }
    });
});


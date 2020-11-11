let entradaUsuario = document.querySelector("#texto");
let formulario = document.querySelector('form')

formulario.addEventListener('submit', function consultarUsuario(e) {
  e.preventDefault();
  consumirAPI("https://api.github.com/users/" + entradaUsuario.value);
})


function consumirAPI(url) {
  fetch(url)
    .then(function (resposta) {
      return resposta.json();
    })

    .then(function (dados) {
      if (dados.message === "Not Found") {
        let resultadoErro = document.querySelector(".resultado");
 
        resultadoErro.innerHTML = `<p>O usuário ${entradaUsuario.value} não existe, tente novamente! :)</p>`;

        entradaUsuario.value = "";

        entradaUsuario.style.backgroundColor = "rgba(255,0,0,0.3)";
        entradaUsuario.style.border = "1px solid red";
        entradaUsuario.style.color = "white";
      } else {
        window.location.href = "./perfil/perfil.html?user=" + entradaUsuario.value;
      }
    })

    .catch(function (erro) {
      alert("Conexão apresenta erro. Tente novamente em alguns minutos.");
    });
}

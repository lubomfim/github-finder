const parametros = window.location.search;
const filtrarParametros = new URLSearchParams(parametros);
const user = filtrarParametros.get("user");

consumirAPI("https://api.github.com/users/" + user);

function consumirAPI(url) {
  fetch(url, {
    method: "get",
    headers: new Headers({
      Authorization:
        "30:ee:d9:84:37:fc:a5:01:0c:ea:f2:65:70:12:47:e0:6e:56:5b:3c",
    }),
  })
    .then(function (resposta) {
      return resposta.json();
    })

    .then(function (dados) {
      alimentar(dados);
      console.log(dados);
    })

    .catch(function (erro) {
      alert("Conexão apresenta erro. Tente novamente em alguns minutos.");
      console.log("Erro de conexão:");
      console.log(erro);
    });
}

function alimentar(dados) {
  let nome = document.querySelector("h2");
  let bio = document.querySelector(".description");
  let followers = document.querySelector(".followers__number");
  let following = document.querySelector(".following__number");
  let avatar = document.querySelector(".avatar");
  let title = document.querySelector("title");

  nome.textContent = dados.name;
  bio.textContent = dados.bio;
  followers.textContent = dados.followers;
  following.textContent = dados.following;
  avatar.src = dados.avatar_url;

  title.textContent = dados.name;
}

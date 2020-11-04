const parametros = window.location.search;
const filtrarParametros = new URLSearchParams(parametros);
const user = filtrarParametros.get("user");

consumirApiPessoal("https://api.github.com/users/" + user);
consumirApiRepositorios("https://api.github.com/users/" + user + "/repos")

function consumirApiPessoal(url) {
  fetch(url)
    .then(function (resposta) {
      return resposta.json();
    })

    .then(function (dados) {
      alimentarDadosPessoais(dados);
    })

    .catch(function (erro) {
      alert("Conexão apresenta erro. Tente novamente em alguns minutos.");
      console.log("Erro de conexão:");
      console.log(erro);
    });
}

function alimentarDadosPessoais(dados) {
  let nome = document.querySelector("h2");
  let bio = document.querySelector(".description");
  let followers = document.querySelector(".followers__number");
  let following = document.querySelector(".following__number");
  let avatar = document.querySelector(".avatar");
  let title = document.querySelector("title");
  let botaoPerfil = document.querySelector('.btn-mais-perfil')

  nome.textContent = dados.name;
  bio.textContent = dados.bio;
  followers.textContent = dados.followers;
  following.textContent = dados.following;
  avatar.src = dados.avatar_url;
  botaoPerfil.href = dados.html_url;

  title.textContent = dados.name;
}


function consumirApiRepositorios (url) {
  fetch(url)
  .then(function(reposta) {
    return reposta.json()
  })
  .then(function(dados) {
    alimentarRepositorio(dados)
  })
  .catch(function (erro) {
    alert("Conexão apresenta erro. Tente novamente em alguns minutos.");
    console.log("Erro de conexão:");
    console.log(erro);
  });
}

function alimentarRepositorio(dados) {
  let arrayDados = dados
  
  for(let i = 0; i < arrayDados.length; i++) {
    let containerRepositorios = document.querySelector('.perfil__repositorios')
    let respositorio = document.createElement('div')
    let tituloRepositorio = document.createElement('h4')
    let tecRepositorio = document.createElement('p')
    let linkRepositorio = document.createElement('a')

    respositorio.classList.add('repositorio')
    tituloRepositorio.classList.add('repositorio__title')
    tecRepositorio.classList.add('repositorio__tec')
    linkRepositorio.classList.add('btn__see-more')

    let elemento = arrayDados[i]
    containerRepositorios.appendChild(respositorio)

    tituloRepositorio.textContent = elemento.name
    tecRepositorio.textContent = elemento.language
    linkRepositorio.textContent = "Veja mais"
    linkRepositorio.href = elemento.html_url



    respositorio.appendChild(tituloRepositorio)
    respositorio.appendChild(tecRepositorio)
    respositorio.appendChild(linkRepositorio)
  }

   
  
}
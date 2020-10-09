const parametros = window.location.search;
const filtrarParametros = new URLSearchParams(parametros);
const user = filtrarParametros.get("user");

consumirAPI("https://api.github.com/users/" + user);

$(document).ready()

function consumirAPI() {
  $.ajax({
    url: "https://api.github.com/users/" + user,
    type: "get",
  })

  .done(function(dados) {
    alimentar(dados)
  })

  .fail (function() {
    alert("Conexão apresenta erro. Tente novamente em alguns minutos.");
  })
}


function alimentar(dados) {
  let nome = $("h2");
  let bio = $(".description");
  let followers = $(".followers__number");
  let following = $(".following__number");
  let avatar = $(".avatar");
  let title = $("title");

  /* const {name,bio,followers,following,avatar_url} = dados */
  // desestruturação


  nome.html(dados.name);
  bio.html(dados.bio);
  followers.html(dados.followers);

  following.html(dados.following);
  avatar.attr("src", dados.avatar_url);
  title.html(dados.name);
}

 let entradaUsuario = $('#texto')

$('#btn').click(function consumirAPI() {
  $.ajax({
    url:"https://api.github.com/users/" + entradaUsuario.val(),
    type: 'get',
    error: 
      function() {
          let resultadoErro = $(".resultado");
    
          resultadoErro.html(`<p>O usuário ${entradaUsuario.val()} não existe, tente novamente! :)</p>`);
    
          entradaUsuario.val("");
    
          entradaUsuario.css("background-color","rgba(255,0,0,0.3)");
          entradaUsuario.css("border","1px solid red")
          entradaUsuario.css("color","white")
        
    },

    success: function () {
      window.location.href = "perfil.html?user=" + entradaUsuario.val();
    },
  })
   
  .fail( function (erro) {
    if (erro.statusText !== "Not Found") {
      alert("Conexão apresenta erro. Tente novamente em alguns minutos.");
      console.log("Erro de conexão:");
      console.log(erro);
    }
  })
})

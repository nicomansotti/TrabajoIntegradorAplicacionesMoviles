tres = 0; 


function buscarPeli(){

    tres = tres + 2;

    peliculaBuscador = document.getElementById('peliculaBuscador').value ;

        $.ajax({
            url: "https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=es-MX&query="+peliculaBuscador ,
            contentType: "application/json",
            type: "GET",
            success: function(data) {

                $('#buscarMas').empty();
                $('#movies').empty();

                var buscarMas = $("<div><button onclick='buscarPeli()' id='buscarMas' >Buscar más resultados</button>");
                var resultHtml = $("<div><h2>Resultado de busqueda:</h2>");
                //for (i = 0; i < data["results"].length; i++) {
                 
                for (i = 0; i < tres; i++) {

   
                    titulo = data["results"][i]["title"];
                    imagen = data["results"][i]["poster_path"];
                    descripcion = data["results"][i]["overview"];
                    id = data["results"][i]["id"];            
                    resultHtml.append("<div><h3>" + titulo + "</h3><img src='https://image.tmdb.org/t/p/w500" + imagen + "'></div>" + "<h4>" + descripcion + "</h3>" +  "<a id='sharebutton' onclick='movieSelected("+id+")' href='#'>Movie Details</a>")
                    // PUEDE QUEDAR PARA LA RESEÑA"<a id=sharebutton href=share.html> Compartir con un amigo </a>"                                                                        
                    //resultHtml.append("<div><img src='https://image.tmdb.org/t/p/w500" + imagen + "'></div>")
                }
                
  
                resultHtml.append("</div>");
                buscarMas.append("</div>")
                $("#movies").html(resultHtml);
                $("#buscarMas").html(buscarMas);


            },
            error: function(err) {
                alert(JSON.stringify(err));
            }
        });

}





//funcion email

$(function () {
    $('#emailLink').on('click', function (event) {
        event.preventDefault();
      var email = $('#emailb').val();
      var subject = 'Circle Around';
      var emailBody = $('#comentario').val(); 
      window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
    });
  });





//copiado de la pagina y adaptado
  
  function movieSelected(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
  }
  
  function getMovie(){
    let movieId = sessionStorage.getItem('movieId');
   
        $.ajax({
            url: "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=es-MX" ,
            contentType: "application/json",
            type: "GET",
            success: function(data) {



                popularity = data["popularity"];
                vote_average = data["vote_average"];
                descripcion = data["overview"];
                


     
      let output = '<div>Popularidad: '+popularity+'</div><div>Puntaje: '+vote_average+'</div>'+'</div><div>Sinapsis: '+descripcion+'</div>';




      $('#movie').html(output);


       },
            error: function(err) {
                alert(JSON.stringify(err));
            }
        });
  }
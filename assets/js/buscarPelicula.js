function buscarPeli(){


    peliculaBuscador = document.getElementById('peliculaBuscador').value ;

    añoPeli = document.getElementById('añoPeli').value ;


    var urlPeli;

    if(añoPeli === "Elegir..."){
        urlPeli = "https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=es-MX&query="+peliculaBuscador
    }

    if(añoPeli !== "Elegir..."){
        urlPeli = "https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=es-MX&query="+peliculaBuscador+"&year="+añoPeli
    }



        $.ajax({
            url: urlPeli,//"https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=es-MX&query="+peliculaBuscador ,
            contentType: "application/json",
            type: "GET",
            success: function(data) {

                console.log(data);
                console.log(urlPeli);

                $('#buscarMas').empty();
                $('#movies').empty();


             
                $('#peliculaBuscador').change(function(){

                    $('#buscarMas').show();
                  
                    
                });

                /*
                if (diez !== 10){
                    $('#buscarMas').hide();
                }
                */
                

                var buscarMas = $("<div><button onclick='buscarPeli()' id='buscarMas' >Buscar todos los resultados</button>");
                var resultHtml = $("<div><h2>Resultado de busqueda:</h2>");

                

                for (i = 0; i <  data["results"].length; i++) {

                    titulo = data["results"][i]["title"];
                    imagen = data["results"][i]["poster_path"];
                    descripcion = data["results"][i]["overview"];
                    año = data["results"][i]["release_date"];
                    //año = año.substring(0, 4);
                    id = data["results"][i]["id"];           


                    resultHtml.append("<div><h3>" + titulo + "</h3><img src='https://image.tmdb.org/t/p/w500" + imagen + "'></div>" + "<h4>" + descripcion + "</h4>" + "<h4>Fecha de lanzamiento: " + año + "</h4>" +"<a id='sharebutton' onclick='movieSelected("+id+")' href='#'>Movie Details</a><div><a onclick='mandarAmigo("+id+")' href='#'> Compartir con un amigo </a></div>")
                    
                    /*
                    if (añoPeli !== "Elegir..."){
                        if (año === añoPeli){
                        resultHtml.append("<div><h3>" + titulo + "</h3><img src='https://image.tmdb.org/t/p/w500" + imagen + "'></div>" + "<h4>" + descripcion + "</h4>" + "<h4>Fecha lanzamiento: " + año + "</h4>" +"<a id='sharebutton' onclick='movieSelected("+id+")' href='#'>Movie Details</a><div><a onclick='mandarAmigo("+id+")' href='#'> Compartir con un amigo </a></div>")
                        }
                    }

                    else if(añoPeli === "Elegir..."){
                        resultHtml.append("<div><h3>" + titulo + "</h3><img src='https://image.tmdb.org/t/p/w500" + imagen + "'></div>" + "<h4>" + descripcion + "</h4>" + "<h4>Fecha lanzamiento: " + año + "</h4>" +"<a id='sharebutton' onclick='movieSelected("+id+")' href='#'>Movie Details</a><div><a onclick='mandarAmigo("+id+")' href='#'> Compartir con un amigo </a></div>")
                    }

                    */
                    
                }


                


                
  
                resultHtml.append("</div>");
                buscarMas.append("</div>");
                $("#movies").html(resultHtml);
                $("#buscarMas").html(buscarMas);


            },
            error: function(err) {
                alert(JSON.stringify(err));
                //alert("Ingresar una película");
            }
        });

}





//funcion email

function enviarMaiil() {

    if (validacion() == true){    

      var email = $('#emailb').val();
      var subject = $('#subject').val();
      var emailBody = $('#comentario').val(); 
      window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;

    }

  };




function mandarAmigo(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'share.html';
    return false;
  }


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


                
                titulo = data["title"];
                vote_average = data["vote_average"];
                lanzamiento = data["release_date"];
                


     
      let output = '<div>Titulo: '+titulo+'</div><div>Puntaje: '+vote_average+'</div>'+'</div><div>Lanzamiento: '+lanzamiento+'</div>';
      
    


      $('#movie').html(output);


       },
            error: function(err) {
                alert(JSON.stringify(err));
            }
        });
  }





  function llenarCamposMail(){
      
    let movieId = sessionStorage.getItem('movieId');
   
        $.ajax({
            url: "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=es-MX" ,
            contentType: "application/json",
            type: "GET",
            success: function(data) {



                popularity = data["popularity"];
                vote_average = data["vote_average"];
                descripcion = data["overview"];

               titulo = data["title"];
               //vote_average = data["vote_average"];
                lanzamiento = data["release_date"];
                




     
      //let output = '<div>Popularidad: '+popularity+'</div><div>Puntaje: '+vote_average+'</div>'+'</div><div>Sinapsis: '+descripcion+'</div>';

      //manda la info en el comentario 
      //let output = '<label>Mail suyo</label><input id="email" type="text" placeholder="Introduzca su Email"><label>Mail de su amigo</label><input id="emailb" type="text" placeholder="Introduzca el Email de su amigo"><label>Asunto</label><input id="subject" type="text" placeholder="Introduzca un asunto" value="Titulo: '+titulo+' | Fecha Lanzamiento: '+lanzamiento+' | Puntuacion: '+vote_average+'"><label>Comentario</label><textarea rows="12" cols="50" name="comentario" id="comentario" placeholder="Deja un comentario...">Popularidad: '+popularity+'\n \nPuntaje: '+vote_average+'\n \nSinapsis: '+descripcion+'\n \nMira esta peli!!!</textarea>'

      //no manda la info en el comentario. lo manda en el asunto
      let output = '<label>Mail suyo</label><input id="email" type="text" placeholder="Introduzca su Email"><label>Mail de su amigo</label><input id="emailb" type="text" placeholder="Introduzca el Email de su amigo"><label>Asunto</label><input id="subject" type="text" placeholder="Introduzca un asunto" value="Titulo: '+titulo+' | Fecha Lanzamiento: '+lanzamiento+' | Puntuacion: '+vote_average+'"><label>Comentario</label><textarea rows="12" cols="50" name="comentario" id="comentario" placeholder="Deja un comentario..."></textarea>'

      //document.getElementById('subject').value = "Popularidad: "+popularity+" - Puntaje: "+vote_average+" - Sinapsis: "+descripcion;

      $('#compartirAmigoo').html(output);


       },
            error: function(err) {
                alert(JSON.stringify(err));
            }
        });
  }
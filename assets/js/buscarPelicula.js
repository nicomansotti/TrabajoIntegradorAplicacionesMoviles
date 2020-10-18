diez = 10

function buscarPeli(){

    peliculaBuscador = document.getElementById('peliculaBuscador').value ;
    añoPeli = document.getElementById('añoPeli').value ;
    puntaje = document.getElementById('puntaje').value;
    genero = document.getElementById('genero').value;
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


        if(data["results"] == []){
            alert("[ERROR] No se encontraron resultados");
        }



        $('#buscarMas').empty();
        $('#movies').empty();


        /*
        $('#peliculaBuscador').change(function(){
            diez = 10;
            $('#buscarMas').show();
            
            
        });
        */



      
       


        var buscarMas = $("<div><button onclick='buscarPeli()' id='buscarMas' >Buscar todos los resultados</button>");
        var resultHtml = $("<div><h2>Resultado de busqueda:</h2>");

        
        if (diez >= data["results"].length){
            diez = data["results"].length;
        }


        for (i = 0; i <  diez; i++) {


            if (diez === data["results"].length){
                $('#buscarMas').hide();
            }

            titulo = data["results"][i]["title"];
            imagen = data["results"][i]["poster_path"];
            año = data["results"][i]["release_date"];
            id = data["results"][i]["id"];        
            puntuacion = data["results"][i]["vote_average"];
            generito = data["results"][i]["genre_ids"];
            generito = generito.toString();

            if (año === ""){
                año = "A estrenar";
            }

            //#########################################################################
             //si no tiene imagen
             if (imagen == null){

            //ELIGE PUNTAJE Y GENERO
            if (puntaje !== "Elegir..." && genero !== "Elegir..."){
                if (puntaje <= puntuacion){
                    if(generito.includes(genero)){
                        resultHtml.append("<div class='colum'><h3>" + titulo + "</h3><img src='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'>" + "<h4>Puntuación: " + puntuacion + "</h4>" +/*"<h4 id='descripcionPeli'>" + descripcion + "</h4>" + */"<h4>Fecha de lanzamiento: " + año + "</h4>"+ "<a id='sharebutton' onclick='movieSelected(" + id + "); busquedaGuardada(" + id + ");' href='#'>Detalles</a><a id='sharebuttonn' onclick='mandarAmigo(" + id +")' href='#'> Compartir </a></div >")
                    }
                }
            }

            //ELIGE PUNTAJE
            if (puntaje !== "Elegir..." && genero === "Elegir..."){
                if (puntaje <= puntuacion){
                    resultHtml.append("<div class='colum'><h3>" + titulo + "</h3><img src='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'>" + "<h4>Puntuación: " + puntuacion + "</h4>" +/*"<h4 id='descripcionPeli'>" + descripcion + "</h4>" + */"<h4>Fecha de lanzamiento: " + año + "</h4>"+ "<a id='sharebutton' onclick='movieSelected(" + id + "); busquedaGuardada(" + id + ");' href='#'>Detalles</a><a id='sharebuttonn' onclick='mandarAmigo(" + id +")' href='#'> Compartir </a></div >")
                }
            }

            //ELIGE GENERO
            if(genero !== "Elegir..." && puntaje === "Elegir..."){
                if(generito.includes(genero)){
                    resultHtml.append("<div class='colum'><h3>" + titulo + "</h3><img src='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'>" + "<h4>Puntuación: " + puntuacion + "</h4>" +/*"<h4 id='descripcionPeli'>" + descripcion + "</h4>" + */"<h4>Fecha de lanzamiento: " + año + "</h4>" + " <a id='sharebutton' onclick='movieSelected(" + id + "); busquedaGuardada(" + id + ");' href='#'>Detalles</a><a id='sharebuttonn' onclick='mandarAmigo(" + id +")' href='#'> Compartir </a></div >")
                } 
            }

            //NO ELIGE NINGUNO
            if(puntaje === "Elegir..." && genero === "Elegir..."){
                resultHtml.append("<div class='colum'><h3>" + titulo + "</h3><img src='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'>" + "<h4>Puntuación: " + puntuacion + "</h4>" +/*"<h4 id='descripcionPeli'>" + descripcion + "</h4>" + */"<h4>Fecha de lanzamiento: " + año + "</h4>" + " <a id='sharebutton' onclick='movieSelected(" + id + "); busquedaGuardada(" + id + ");' href='#'>Detalles</a><a id='sharebuttonn' onclick='mandarAmigo(" + id +")' href='#'> Compartir </a></div >")
            }
            }



            //#########################################################################
            //si tiene imagen
            if (imagen != null){
                //ELIGE PUNTAJE Y GENERO
            if (puntaje !== "Elegir..." && genero !== "Elegir..."){
                if (puntaje <= puntuacion){
                    if(generito.includes(genero)){
                        resultHtml.append("<div class='colum'><h3>" + titulo + "</h3><img src='https://image.tmdb.org/t/p/w500" + imagen + "'>" + "<h4>Puntuación: " + puntuacion + "</h4>" +/*"<h4 id='descripcionPeli'>" + descripcion + "</h4>" + */"<h4>Fecha de lanzamiento: " + año + "</h4>"+ "<a id='sharebutton' onclick='movieSelected(" + id + "); busquedaGuardada(" + id + ");' href='#'>Detalles</a><a id='sharebuttonn' onclick='mandarAmigo(" + id +")' href='#'> Compartir </a></div >")
                    }
                }
            }

            //ELIGE PUNTAJE
            if (puntaje !== "Elegir..." && genero === "Elegir..."){
                if (puntaje <= puntuacion){
                    resultHtml.append("<div class='colum'><h3>" + titulo + "</h3><img src='https://image.tmdb.org/t/p/w500" + imagen + "'>" + "<h4>Puntuación: " + puntuacion + "</h4>" +/*"<h4 id='descripcionPeli'>" + descripcion + "</h4>" + */"<h4>Fecha de lanzamiento: " + año + "</h4>"+ "<a id='sharebutton' onclick='movieSelected(" + id + "); busquedaGuardada(" + id + ");' href='#'>Detalles</a><a id='sharebuttonn' onclick='mandarAmigo(" + id +")' href='#'> Compartir </a></div >")
                }
            }

            //ELIGE GENERO
            if(genero !== "Elegir..." && puntaje === "Elegir..."){
                if(generito.includes(genero)){
                    resultHtml.append("<div class='colum'><h3>" + titulo + "</h3><img src='https://image.tmdb.org/t/p/w500" + imagen + "'>" + "<h4>Puntuación: " + puntuacion + "</h4>" +/*"<h4 id='descripcionPeli'>" + descripcion + "</h4>" + */"<h4>Fecha de lanzamiento: " + año + "</h4>" + " <a id='sharebutton' onclick='movieSelected(" + id + "); busquedaGuardada(" + id + ");' href='#'>Detalles</a><a id='sharebuttonn' onclick='mandarAmigo(" + id +")' href='#'> Compartir </a></div >")
                } 
            }

            //NO ELIGE NINGUNO
            if(puntaje === "Elegir..." && genero === "Elegir..."){
                resultHtml.append("<div class='colum'><h3>" + titulo + "</h3><img src='https://image.tmdb.org/t/p/w500" + imagen + "'>" + "<h4>Puntuación: " + puntuacion + "</h4>" +/*"<h4 id='descripcionPeli'>" + descripcion + "</h4>" + */"<h4>Fecha de lanzamiento: " + año + "</h4>" + " <a id='sharebutton' onclick='movieSelected(" + id + "); busquedaGuardada(" + id + ");' href='#'>Detalles</a><a id='sharebuttonn' onclick='mandarAmigo(" + id +")' href='#'> Compartir </a></div ></div>")
            }}



           

            }
  
                resultHtml.append("</div>");
                buscarMas.append("</div>");
                $("#movies").html(resultHtml);
                $("#buscarMas").html(buscarMas);


                diez= data["results"].length;

                


            },
            error: function(err) {
                if(peliculaBuscador === ""){
                    //document.getElementById('mensajito').innerHTML = "Ingresar una película";
                    //alert("[ERROR] Ingresar una película");
                    document.querySelector('.alert').style.display = 'block' ;
                    document.getElementById('mensajito').innerHTML = "Ingresar una película"
                   
                    setTimeout(function(){
                        document.querySelector('.alert').style.display = 'none' ;
                    },3000);
                }
                else{
                    document.querySelector('.alert').style.display = 'block' ;
                    document.getElementById('mensajito').innerHTML = "No se encontraron resultados";

                    setTimeout(function(){
                        document.querySelector('.alert').style.display = 'none' ;
                    },3000);
                    //document.getElementById('mensajito').innerHTML = "No se encontraron resultados";
                    //alert("[ERROR] No se encontraron resultados");
                }
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
                imagen = data["poster_path"];
                descripcion = data["overview"]
                idiomaOriginal = data["original_language"]
                

                
                var generos = [];
                for (let i = 0; i < data["genres"].length; i++) {
                    generos.push(data["genres"][i]["name"])                   
                }
                generos = generos.join(", ");
                var x = generos.toString();
                document.getElementById("demo").innerHTML = "Generos: "+ x;




                var productoras = [];
                for (let i = 0; i < data["production_companies"].length; i++) {
                    productoras.push(data["production_companies"][i]["name"])                   
                }
                productoras = productoras.join(", ");
                var x = productoras.toString();
                document.getElementById("productoras").innerHTML = "Productoras: "+ x;



                var idiomas = [];
                for (let i = 0; i < data["spoken_languages"].length; i++) {
                    idiomas.push(data["spoken_languages"][i]["name"])                   
                }
                idiomas = idiomas.join(", ");
                var x = idiomas.toString();
                document.getElementById("idiomas").innerHTML = "Idiomas: "+ x;
                

                if (imagen == null){
                    //alert("no tiene imagen")
                    //alert(imagen);
                    output = '<div id="titulardo"><h3>' + titulo + '</h3></div><br><div><img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"></div><br><div id="sinopsilla"><h2>Sinopsis:<br><br> ' + descripcion + '</h2></div><br><div><h3>Puntaje: ' + vote_average + '</h3></div><br><div><h3>Lanzamiento: ' + lanzamiento +'</h3></div><br><div><h3>Idioma original: '+idiomaOriginal+'</h3></div>';                  
                }

                if (imagen != null){
                    //alert("tiene imagen")
                    output = '<div id="titulardo"><h3>' + titulo + '</h3></div><br><div><img src="https://image.tmdb.org/t/p/w500' + imagen + '"></div><br><div id="sinopsilla"><h2>Sinopsis:<br><br> ' + descripcion + '</h2></div><br><div><h3>Puntaje: ' + vote_average + '</h3></div><br><div><h3>Lanzamiento: ' + lanzamiento +'</h3></div><br><div><h3>Idioma original: '+idiomaOriginal+'</h3></div>';
                }

              
                //let output = '<h1>' + titulo + '</h1><br><div><img src="https://image.tmdb.org/t/p/w500' + imagen + '"></div><br><div><h2>Sinopsis:<br><br> ' + descripcion + '</h2></div><br><div><h3>Puntaje: ' + vote_average + '</h3></div><br><div><h3>Lanzamiento: ' + lanzamiento +'</h3></div><br><div><h3>Idioma original: '+idiomaOriginal+'</h3></div>';



      $('#movie').html(output);


       },
            error: function(err) {
                alert(JSON.stringify(err));
            }
        });
  }


    //cuando se elige otra peli, se resetea las pelis que te devuelve y devuelve 10 la primera vez que busca
    $('#submit').click(function(){
        diez = 10;
        $('#buscarMas').show();  
        
    });


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
      let output = '<label>Su E-mail</label><input id="email" type="text" placeholder="Introduzca su Email"><label>E-Mail de su amigo</label><input id="emailb" type="text" placeholder="Introduzca el Email de su amigo"><label>Asunto</label><input id="subject" type="text" placeholder="Introduzca un asunto" readonly value="Titulo: '+titulo+' | Fecha Lanzamiento: '+lanzamiento+' | Puntuacion: '+vote_average+'"><label>Comentario</label><div><textarea rows="12" cols="50" name="comentario" id="comentario" placeholder="Deja un comentario..."></textarea></div>'

      //document.getElementById('subject').value = "Popularidad: "+popularity+" - Puntaje: "+vote_average+" - Sinapsis: "+descripcion;

      $('#compartirAmigoo').html(output);


       },
            error: function(err) {
                alert(JSON.stringify(err));
            }
        });
  }



function busquedaGuardada(id){
    if (localStorage.getItem("history") != null) 
    {
        var historyTmp = localStorage.getItem("history");
        historyTmp += id+"-";
        localStorage.setItem("history",historyTmp);
    }
    else
    {
        var historyTmp = id;
        localStorage.setItem("history",historyTmp);
    }
}



function showHistory(){

    if (localStorage.getItem("history") == null){
        $('#busqueditaReciente').hide();
    }

    if (localStorage.getItem("history") != null)
    {
        var historyTmp = localStorage.getItem("history");
        var oldhistoryarray = historyTmp.split('-');
        $('#lastResults').empty();

        for(var i =0; i<oldhistoryarray.length; i++)
        {

            let id = oldhistoryarray[i];
            

            $.ajax({
                url: "https://api.themoviedb.org/3/movie/" + oldhistoryarray[i] + "?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=es-MX" ,
                contentType: "application/json",
                type: "GET",
                success: function(data) {

                    popularity = data["popularity"];
                    vote_average = data["vote_average"];
                    descripcion = data["overview"];
                    imagen = data["poster_path"];
                    titulo = data["title"];
                    lanzamiento = data["release_date"];

                    if (imagen == null){
                        $('#lastResults').append('<div class="columB">'+'<div><img onclick="movieSelected(' + id + ');" src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"></div>');
                    }
                    
                    if(imagen != null){
                        $('#lastResults').append('<div class="columB">' + '<div><img onclick="movieSelected(' + id + ');" src="https://image.tmdb.org/t/p/w500' + imagen + '"></div>');
                    }
                    //resultHtml.append("</div>");
                },
                error: function(err) {
                    console.log("hola")
                    //alert(JSON.stringify(err));
                }
            });
        }
    }
}
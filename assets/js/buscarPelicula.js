tres = 0; 


function buscarPeli(){

    tres = tres + 3

    peliculaBuscador = document.getElementById('peliculaBuscador').value ;

        $.ajax({
            url: "https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=es-MX&query="+peliculaBuscador ,
            contentType: "application/json",
            type: "GET",
            success: function(data) {

                var resultHtml = $("<div><h2>Resultado de busqueda:</h2>");
                //for (i = 0; i < data["results"].length; i++) {
                for (i = 0; i < tres; i++) {

  
                   
                    titulo = data["results"][i]["title"];
                    imagen = data["results"][i]["poster_path"];
                    descripcion = data["results"][i]["overview"];
                    resultHtml.append("<div><h3>" + titulo + "</h3><img src='https://image.tmdb.org/t/p/w500" + imagen + "'></div>" + "<h4>" + descripcion + "</h3>" + "<a id=sharebutton href=share.html> compartir con un amigo </a>")
                    //resultHtml.append("<div><img src='https://image.tmdb.org/t/p/w500" + imagen + "'></div>")
                }
                
  
                resultHtml.append("</div>");
                $("#movies").html(resultHtml);


            },
            error: function(err) {
                alert(JSON.stringify(err));
            }
        });

}

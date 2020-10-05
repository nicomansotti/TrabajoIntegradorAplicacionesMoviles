tres = 0; 


function buscarPeli(){

    tres = tres + 3

    peliculaBuscador = document.getElementById('peliculaBuscador').value ;

        $.ajax({
            url: "https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=es-MX&query="+peliculaBuscador ,
            contentType: "application/json",
            type: "GET",
            success: function(data) {

                var resultHtml = $("<div><p>Peliculas</p>");
                //for (i = 0; i < data["results"].length; i++) {
                for (i = 0; i < tres; i++) {

  
                   
                    titulo = data["results"][i]["title"];
                    imagen = data["results"][i]["poster_path"];
                    resultHtml.append("<div><p>" + titulo + "</p><img src='https://image.tmdb.org/t/p/w500" + imagen + "'></div>")
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

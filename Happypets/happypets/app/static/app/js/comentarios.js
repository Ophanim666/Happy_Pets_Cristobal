$("#btn-cargar").click(function (event) {
    event.preventDefault();

    var url = "https://random-data-api.com/api/users/random_user";

        fetch(url)
        .then(response => response.json())
        .then(data => 
            {
                var $name = $('<h1>').text(data.first_name);
                var $email = $('<p>').text(data.email);
                var $body = $('<p>').text(data.username);
                var $foto_user = $("<p><img class='img-thumbnail' src='"+data.avatar+"'>");

                

                // para limpiar el contedor antes de desplegar
                $("#info").empty();
                $('#info')
                    .append($name)
                    .append($email)
                    .append($body)
                    .append($foto_user);
                
            

            })
        .catch(error => console.error(error));

    

});
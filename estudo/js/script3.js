$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    beforeSend: function() { $('#wait').show(); $('#posts').hide() },
    complete: function() { $('#wait').fadeOut('slow'); },
    data: 'GET'
}).done(function(data){
    $('#posts').fadeIn();
    $.each(data, function(index, post){
         $('#posts').append(
            "<h2>"+ post['title'] +"</h2>" +
            "<p>" + post['body'] + "</p>"
         );
    })
   

})
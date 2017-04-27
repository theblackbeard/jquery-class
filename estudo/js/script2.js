$.get('https://jsonplaceholder.typicode.com/photos/', function(data){
    $.each(data, function(index, post){
        $('#album').append("<option value=\""+ post['id'] +"\">"+ post['title'] +"</option");
    });

    $('#album').change(function(){
        let id = $(this).val();
        $.get('https://jsonplaceholder.typicode.com/photos/' + id, function(data){
            $('#info').html(
                "<img src=\"" + data['thumbnailUrl'] + "\">" + 
                "<h1>" + data['title'] + "</h1>"
                
            )
        })
    })

})
//$('#album')


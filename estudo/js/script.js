
$('#state').change(function(e){
    let state = $(this).val();
    $('#info').html("");
    $.getJSON("cities.json", function(data){
        $('#city').html("<option> -- Selecione a Cidade -- </option>")
        $.each(data[state], function(index, city){
            $('#city').append("<option value=\""+ index +"\" >"+ city +"</option>")
          
        });

         $('#city').change(function(){
            let citi = $(this).val();
               $.getJSON('post.json', function(data){
                   $('#info').html("<h1>" + data[citi].city + "<h1><p>" + data[citi].body + "</p>")
                   
               })
         })
    })
})
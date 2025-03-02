$(function() {
    $('#change-color').on('click', function(){
      $('#target').css('color', 'red');
    });
   });

$(function() {
    $('#change-text').on('click', function(){
        $('#target').text('Hello!');
    })});

$('#fade-in').on('click', function(){
    $('#target').show();
    });
    
$('#fade-out').on('click', function(){
    $('#target').hide();
    });
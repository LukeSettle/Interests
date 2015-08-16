$(function(){
    var $url = $('#url');
    var $note = $('#note')
    var $pin_url = $('#pin_url');
    var $pin_note = $('#pin_note');

    $(".modal-toggle").click(function(){
      $('#myModal').modal('toggle');
      $('#pin_url').val('');
      $('#pin_note').val('');
    });

    $('#add-pin').on('click', function(){
      $('#myModal').modal('hide')
      $.ajax({
        type: 'POST',
        url: 'pins',
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
          url: $pin_url.val(),
          note: $pin_note.val(),
          }),
        success: function(newPin) {
          $url.append('<li><h1><a href='+ newPin.url + '>'+ newPin.url +'</a></h1></li>');
          $url.append('<li><p>note: '+ newPin.note +'</p></li>');
          },
        error: function(e) {
          console.log(e);
        }
      });
    });

    $.ajax({
      type: 'GET',
      url: 'pins',
      dataType: 'JSON',
      success: function(data) {
        $.each(data, function(i, data){
          $url.append('<li><h1><a href='+ data.url + '>'+ data.url +'</a></h1></li>');
          $url.append('<li><p>note: '+data.note+'</p></li>')
          $url.append('image_tag attachment_url('+ data +', :'+ data.file +', :fill, 300, 300, format: "jpg")')
        })
      },
      error: function(){
      alert("Error loading pins")
      }
    });
  });

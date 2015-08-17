$(function(){
    var $url = $('#url');
    var $note = $('#note')
    var $pin_url = $('#pin_url');
    var $pin_note = $('#pin_note');
    var $pin_file = $('#pin_file')

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
          file: $pin_file.val(),
          }),
        success: function(newPin) {
          $url.append('<li class="inner"><img src="'+ newPin.file +' hight="50%" width="50%"></img><h1><a href=http://'+ newPin.url + '>'+ newPin.url +'</a></h1><p>note: '+ newPin.note +'</p></li>');
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
          $url.append('<li><img src="'+ data.file +'" hight="50%" width="50%"></img><h1><a href=http://'+ data.url + '>'+ data.url +'</a></h1><p>note: '+data.note+'</p></li>');
        })
      },
      error: function(){
      alert("Error loading pins")
      }
    });
  });

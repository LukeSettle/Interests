$(function(){
    var $url = $('#url');
    var $note = $('#note')
    var $pin_url = $('#pin_url');
    var $pin_note = $('#pin_note');
    var $pin_file = $('#pin_file')

    var appendPicture = function(data) {
      $url.append('<li><img src="'+ data.file+ '", hight="50%" width="50%"></img><h1><a href="http://'+ data.url+ '">'+ data.url+ '</a></h1><p>note: '+ data.note+ '</p></li>');
    }

    var getPins = $.ajax({
      type: 'GET',
      url: 'pins',
      dataType: 'JSON',
      success: function(data) {
        $.each(data, function(i, data){
          appendPicture(data);
        })
      },
      error: function(){
        alert("Error loading pins")
      }
    });

    $(".modal-toggle").click(function(){
      $('#myModal').modal('toggle');
      $('#pin_url').val('');
      $('#pin_note').val('');
    });

    $('#create_pin_form').submit(function(){
      $('#myModal').modal('hide');
      success:
        $.ajax({
          type: 'GET',
          url: 'pins',
          dataType: 'JSON',
          success: function(data) {
            $.each(data, function(i, data){
              appendPicture(data);
            })
          },
          error: function(){
            alert("Error loading pins")
          }
        });
    });
  });

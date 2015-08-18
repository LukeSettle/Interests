$(function(){
    var $url = $('#url');
    var $note = $('#note')
    var $pin_url = $('#pin_url');
    var $pin_note = $('#pin_note');
    var $pin_file = $('#pin_file')

    var appendPicture = function(data) {
      $url.append('<li><a class="pic-show" href="#"><img class="each-pin" src="'+ data.file+ '", height="50%" width="50%"></img></a><h1><a href="http://'+ data.url+ '">'+ data.url+ '</a></h1><p>note: '+ data.note+ '</p></li>');
    }
    $(".each-pin").click(function(){
      $(".showPartial").toggleClass("visible");
    });

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

    $("#add-pin").click(function(){
        $.ajax({
          type: 'POST',
          contentType: "application/json; charset=utf-8",
          url: 'pins',
          dataType: 'json',
          data: JSON.stringify({ url: $pin_url.val(), note: $pin_note.val(), file: $pin_file.val() })
        });
        $("#myModal").modal('toggle'),
        $("#url").empty(),
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

    $(".modal-toggle").click(function(){
      $('#myModal').modal('toggle');
      $('#pin_url').val('');
      $('#pin_note').val('');
      $('#pin_file').val('');
    });
  });

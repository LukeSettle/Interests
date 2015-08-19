$(function(){
    var $note = $('#note')
    var $pin_url = $('#pin_url');
    var $pin_note = $('#pin_note');
    var $pin_file = $('#pin_file')

    $('.show-pic').click(function(){
      $('.each-pic').toggleClass('pic-modal');
    })

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

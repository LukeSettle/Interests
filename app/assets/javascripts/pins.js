$(function(){
    var $note = $('#note')
    var $pin_url = $('#pin_url');
    var $pin_note = $('#pin_note');
    var $pin_file = $('#pin_file')

    $('.show-pic').click(function(){
      $('.each-pic').toggleClass('pic-modal');
    }),

    $(".modal-toggle").click(function(){
      $('#myModal').modal('toggle');
      $('#pin_url').val('');
      $('#pin_note').val('');
      $('#pin_file').val('');
    });
  });

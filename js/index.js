$(function () {
  $('#login').click(function () {
    authen();
  });

  $('#mainform').submit(function (event) {
    var form = $('#mainform')[0];
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    $(this).addClass('was-validated');

  });

  function authen() {
    var username = $('#InputEmail').val();
    var password = $('#InputPassword').val();
    if (email=='admin@nw.com') {
      if (password=='12345**'&&password!='') {
        window.location.href = 'about.html';
      }
      else {
        $('#exampleModal').modal();
      }
    }
    else {
      $('#exampleModal').modal();
    }
  }




});
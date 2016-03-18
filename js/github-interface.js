var apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $('#githubInfo').click(function() {
    var github = $('#userName').val();
    $('#userName').val("");
    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      // $('.showUserInfo').text("This github user is " + github + " " + response.name + " is " + response.avatar_url + response.location);
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
      $('.showUserInfo').text(error.responseJSON.message);
    });
  });
});

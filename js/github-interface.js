
var getUserInfo = require('./../js/github.js').getUserInfo;
var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $(".showUserInfo").hide();
  $('#userName').click(function(event){
    event.preventDefault();
    $(".showUserInfo").show();
    $('ul.repoList').empty();
    $('.showUserInfo').empty();
    var UserRepo = getUserInfo();
    var newRepo = getRepos();
  })
});

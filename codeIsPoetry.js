$(document).ready(function(){

  illustrateWords = function() {
    var wordstring = $('#searchParams').val();
    var wordArray = splitIntoWords(wordstring);

    $('.poem').empty();
    $("#searchParams").val('');
    $('#authors').append("Visual Poetry By Users:");
    $('body').append('<div class="poem">' + wordstring + '</div>');

    makeAjaxCall(wordArray);

  };

  splitIntoWords = function(string) {
      return string.split(" ");
  };

  makeAjaxCall = function(array) {

     _.each(array, function(thisWord){
      var word = removeUnsearchables(thisWord)
      $.ajax({
        url: 'https://api.instagram.com/v1/tags/' + word + '/media/recent/?client_id=a9f303e9d3244d5e8a67b5a4f025ec41',
        dataType: 'jsonp',
        success: function(result){
          var url = result.data[0].images.thumbnail.url;
          var author = result.data[0].user.username;
          $('#pictures').append('<img src="' + url + '"/>');
          $('#authors').append(" " + author + ", ");
        }
      });
    });
  };

  removeUnsearchables = function(word) {
    var str = word.toString();
    //just generally, replace common non-alphanumeric characters in poems
    return str.replace("\'", "").replace(",", "").replace(";", "").replace("(", "").replace(")", "").replace('.', ' ').replace("-", "").replace("\"", "").replace("!", "").replace("?", "");
  };

});
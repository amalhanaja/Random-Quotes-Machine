var quotesText = "", authorName = "";

function getQuote(){
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    headers: {
      'X-Mashape-Key': 'aCQr27xYQmmsh8DRSFAnoYKAXe4rp13BPbhjsnYkn0infciTCx',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    type: 'GET',
    dataType: 'json',
    success: function(json){
      quotesText = json.quote;
      authorName = json['author'];
      $('.quotes-author').animate({
        opacity: 0
      },
        500, function() {
        /* stuff to do after animation is complete */
        $(this).animate({
          opacity: 0.7
        }, 500);
        $('#namaAuthor').html(authorName);
      });

      $('.quotes-text').animate({
        opacity: 0
      },
        500, function() {
        /* stuff to do after animation is complete */
        $(this).animate({
          opacity: 1
        }, 500);
        $('#textQuote').html(quotesText);
      });
    }
  })
  .done(function() {
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}

$(document).ready(function() {
  getQuote();
  $('#new').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    getQuote();
  });

  $('#twitter').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    var twitterWindow = window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
  + encodeURIComponent('"' + quotesText + '" ' + authorName), 'twitter-popup', 'height=350, width=600');
  if (twitterWindow.focus) {
    twitterWindow.focus();
  }
  return false;
  });

});

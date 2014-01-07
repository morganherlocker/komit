$(function(){
  console.log(window.location.search.indexOf("wind"))
  if(window.location.search.indexOf("paddle") !== -1){
    $(':radio[value="paddle"]').attr('checked', 'checked');
  }
  else if(window.location.search.indexOf("wind") !== -1){
    //alert(window.location.search)
    $(':radio[value="wind"]').attr('checked', 'checked');
  }
  else if(window.location.search.indexOf("steam" !== -1)){
    $(':radio[value="steam"]').attr('checked', 'checked');
  }
  $('#registerDoneButton').click(function(){
    var email = $('#'),
        password = $('#'),
        password2 = $('#'),
        cardType = $('#'),
        cardNumber = $('#'),
        cardExpirationDate = $('#'),
        cardSecurityCode = $('#'),
        email = $('#'),
        email = $('#'),
        email = $('#')
  })
})


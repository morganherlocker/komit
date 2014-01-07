$(function(){
  // load the plan choice
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

  // submit form
  $('#registerDoneButton').click(function(){
    var email = $('#emailInput').val(),
        password = $('#password1Input').val(),
        password2 = $('#password2Input').val(),
        plan = $('#planInput').val()
  })

var handler = StripeCheckout.configure({
  key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
  image: 'https://drupal.org/files/styles/grid-3/public/project-images/Very-Basic-Checked-checkbox-icon.png?itok=0nrFxSo_',
  token: function(token, args) {
    // Use the token to create the charge with a server-side script.
    var data = {}
    data.token = token
    $.post('/subscription', data, function(res){
      console.log(res);
    })
  }
});

document.getElementById('registerDoneButton').addEventListener('click', function(e) {
  var amount = 0,
      plan = $('#planInput').val();

  if(plan === 'paddle'){
    amount = 9.99
  }
  else if(plan === 'wind'){
    amount = 19.99
  }
  else if(plan === 'steam'){
    amount = 29.99
  }
  // Open Checkout with further options
  handler.open({
    name: 'komit',
    email: $('#emailInput').val(),
    description: $(':radio').val() + ' plan',
    amount: amount
  });
  e.preventDefault();
  });
})


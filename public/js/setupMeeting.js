$(function(){

  // add name to invites
  $('#addUserButton').click(function(){
    var name = $('#nameInput').val()
    var email = $('#emailInput').val()
    $('#invitesBody').append('<tr id="'+'tr_'+email+'"><td>'+name+'</td><td>'+email+'</td></td><td><a>remove</a></td></tr>');

    //reset user inputs and set focus
    $('#nameInput').val('')
    $('#emailInput').val('')
    $('#nameInput').focus()
  })

})
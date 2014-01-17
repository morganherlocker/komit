$(function(){

  // add name to invites
  $('#addUserButton').click(function(){
    addInvite()
  })
  
})

function addInvite(){
  var name = $('#nameInput').val()
  var email = $('#emailInput').val()

  //reset user inputs and set focus
  $("#emailInput").animate({width:'0px'}, 200).animate({width:'100%'}, 200)
  $("#nameInput").animate({width:'0px'}, 200).animate({width:'100%'}, 200,
    function(){
      $('#nameInput').val('')
      $('#emailInput').val('')
      $('#invitesBody').append('<tr id="'+'tr_'+email+'">'+
        '<td>'+name+'</td>'+
        '<td>'+email+'</td></td>'+
        '<td><a href="#">remove</a></td></tr>')
      name = $('#nameInput').focus()
    }
  )
}
$(function(){
  // set default name
  var d = new Date();
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var hours = ((d.getHours() + 11) % 12 + 1)
  var amPm = d.getHours() < 12 ? "AM" : "PM";
  var defaultName = d.getMonth()+1+'/'+
                    d.getDay()+'/'+
                    d.getFullYear()+
                    ' '+days[d.getDay()]+
                    ' '+hours+
                    ':'+d.getMinutes()+
                    ' '+amPm
                    ' - '
  $('#meetingNameInput').val(defaultName)

  // select name text
  $('#meetingNameInput').select()

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
      $('#'+'tr_'+email).click(function(){
        this.remove()
      })
    }
  )
}

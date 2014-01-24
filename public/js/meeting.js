$(function(){
  // Render Meeting
  renderNotes()
  renderCommitments()
  $( "#notes" ).sortable({placeholder: "note"});
  $( "#sortable" ).disableSelection();
  $( "#commitments" ).sortable();

  // Note Logic
  $('#addNote').click(function(){
    $('.addButton').hide('slow')
    $('#noteForm').show('slow')
  })

  $('#cancelNoteButton').click(function(){
    $('#noteForm').hide('slow')
    $('.addButton').show('slow')
  })

  $('#addNoteButton').click(function(){
    $('#noteForm').hide('slow')
    $('.addButton').show('slow')

    // Add note to meeting
    var topic = $('#noteTopicInput').val()
    var content = $('#noteContentInput').val()
    $('#noteTopicInput').val('')
    $('#noteContentInput').val('')
    addNote(topic, content)
  })


  // Commitment Logic
  $('#addCommitment').click(function(){
    $('.addButton').hide('slow')
    $('#commitmentForm').show('slow')
  })

  $('#cancelCommitmentButton').click(function(){
    $('#commitmentForm').hide('slow')
    $('.addButton').show('slow')
  })

  $('#addCommitmentButton').click(function(){
    $('#commitmentForm').hide('slow')
    $('.addButton').show('slow')

    // Add commitment to meeting
    var commitment = $('#commitmentCommitmentInput').val()
    var dueDate = $('#commitmentDueDateInput').val()
    $('#commitmentCommitmentInput').val('')
    $('#commitmentDueDateInput').val('')
    addCommitment(commitment, dueDate)
  })
})

function addNote(topic, content){
  meeting.notes.unshift({topic: topic, content: content})
  renderNotes()
}

function renderNotes(){
  $('#notes').empty()

  _.each(meeting.notes, function(note){
  $('#notes').append(
    '<div class="note card"><h4>'+
    note.topic+
    '</h4>'+
    '<a class="edit" href="#">edit</a><a class="remove" href="#">remove</a><hr>'+
    '<p>'+
    markdown.toHTML(note.content)+
    '</p></div>')
  })
}

function addCommitment(commitment, dueDate){
  meeting.commitments.unshift({commitment: commitment, dueDate: dueDate})
  renderCommitments()
}

function renderCommitments(){
  $('#commitments').empty()

  _.each(meeting.commitments, function(commitment){
  $('#commitments').append(
    '<div class="card"><h4>'+
    commitment.commitment+
    '</h4><p>'+
    commitment.dueDate+
    '</p><a class="edit" href="#">edit</a><a class="remove" href="#">remove</a></div>')
  })
}









var meeting = {
  name: 'Weekly Standup',
  attendees: [
    {
      name: 'Morgan Herlocker',
      email: 'mmmmm@ggg.com'
    },
    {
      name: 'John Doe',
      email: 'John@dow.net'
    },
    {
      name: 'Jane Roe',
      email: 'Jane@hotmai.net'
    }
  ],
  notes: [
    {
      topic: 'UX Design',
      content: 'Relictus est Nelei Pyrame conviciaque pertulit inmixtos \n\
 \n\
*Fecit ipsos austroque quantum humum arvum umbris* \n\
\n\
Lorem markdownum arida, sanguis quanto, tum, *a* adspexi huius, conclamat **quibus** \n\
deprendere missi spectabilis. \n\
\n\
- Quia inploravere dant Cinyras. *Licet disiectum nigram* fatetur inania illi \n\
- fonte prementem simul, et excussa Andros [Scyrum](http://seenly.com/). \n\
- Exitiabile flores. Patrias et coniuge, inhonoratae sibi est ceciderat \n\
- murmurat; ut oves, is.'
    },
    {
      topic: 'Additional help',
      content: 'It has been decided that we should find a designer to help with the new logo.'
    }
  ],
  commitments: [
    {
      commitment: 'Get notes to Mike',
      dueDate: '1/3/2014'
    }
  ]
}
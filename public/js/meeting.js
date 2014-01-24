$(function(){
  // Render Meeting
  renderNotes()

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
})

function addNote(topic, content){
  meeting.notes.unshift({topic: topic, content: content})
  renderNotes()
}

function renderNotes(){
  $('#notes').empty()

  _.each(meeting.notes, function(note){
  $('#notes').append(
    '<div class="card"><h4>'+
    note.topic+
    '</h4><a class="edit" href="#">edit</a><a class="remove" href="#">remove</a><br><br><p>'+
    markdown.toHTML(note.content)+
    '</p></div>')
  })
}

function addCommitment(commitment, content){
  meeting.notes.unshift({topic: topic, content: content})
  renderNotes()
}

function renderNotes(){
  $('#notes').empty()

  _.each(meeting.notes, function(note){
  $('#notes').append(
    '<div class="card"><h4>'+
    note.topic+
    '</h4><a class="edit" href="#">edit</a><a class="remove" href="#">remove</a><br><br><p>'+
    markdown.toHTML(note.content)+
    '</p></div>')
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
      content: 'Feedback has been positive so far. Could use a few more beta testers.'
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
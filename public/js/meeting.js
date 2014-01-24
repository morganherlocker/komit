$(function(){
  
})





function NotesController($scope) {
  if(meeting){
    $scope.notes = meeting.notes;
  }
  else{
    $scope.notes = {
      topic: '',
      content: ''
    }
  }

  $scope.addNote = function() {
    $scope.notes.unshift({topic:'', content:''});
  };
}

function CommitmentsController($scope) {
  $scope.commitments = meeting.commitments;

  $scope.addCommitment = function() {
    $scope.commitments.unshift({name:'', email:''});
  };
}

function AttendeesController($scope) {
  $scope.attendees = meeting.attendees;
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
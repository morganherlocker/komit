/*
 * GET setupMeeting page.
 */

module.exports = function(req, res){

  // fake meeting data
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
        dueDate: new Date()
      }
    ]
  }
  
  res.render('meeting', {meeting: meeting});
};
/*
 * GET setupMeeting page.
 */

module.exports = function(req, res){

  // fake meeting data
  var meeting = {
    name: 'Japan Briefing',
    attendees: [
      { 
        name: 'Morgan Herlocker',
        email: 'mmmmm@ggg.com'
      },
      {
        name: 'John Doe',
        email: 'John@dow.net'
      }
    ]
  }
  
  res.render('meeting', {meeting: meeting});
};
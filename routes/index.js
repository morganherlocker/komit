
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {});
};


/*
 * GET pricing page.
 */

exports.pricing = function(req, res){
  res.render('pricing', {});
};

/*
 * GET register page.
 */

exports.register = function(req, res){
  res.render('register', {});
};

/*
 * POST stripe subscription
 */

exports.subscription = function(req, res){
  console.log(req.body.token)
  res.send('ok')
};

/*
 * GET panel page.
 */

exports.panel = function(req, res){
  res.render('panel', {});
};

/*
 * GET register page.
 */

exports.meeting = function(req, res){
  res.render('meeting', {});
};

/*
 * GET setupMeeting page.
 */

exports.setupMeeting = function(req, res){
  res.render('setupMeeting', {});
};





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
  console.log('!!!!!!!!!!!!!!!!!!!!!!!')
  console.log(req.body.token)
  res.send('ok')
};
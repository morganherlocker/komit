
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
Router.configure({
  layoutTemplate:"SMTemplate"
});
Router.route('/', function () {
  this.render('main', {
    to:"SMBody"
  });
  this.render('landingFooter',{
    to:"SMFooter"
  });
});
Router.route('/update', function () {
  this.render('updates', {
    to:"SMBody"
  });
  this.render('footer',{
    to:"landingFooter"
  });
});
Router.route('/userHome', function () {
  this.render('userHome', {
    to:"SMBody"
  });
  this.render('footer',{
    to:"landingFooter"
  });
});

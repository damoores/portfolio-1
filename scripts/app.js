portfolioArray = [];

function Portfolio (opts) {
  this.title = opts.title;
  this.published = opts.published;
  this.tagline = opts.tagline;
  this.description = opts.description;
  this.tag = opts.tag;
}

Portfolio.prototype.toHtml = function() {
  // var $newPortfolio = $('article.template').clone();
  //
  // $newPortfolio.find('header h1').text(this.title);
  // $newPortfolio.find('.project-description').html(this.description);
  // $newPortfolio.find('.published').html(this.published);
  // $newPortfolio.find('.tagline').html(this.tagline);
  // $newPortfolio.find('.published').html(this.published);
  // $newPortfolio.find('.tag').html(this.tag);
  //
  // $newPortfolio.removeClass('template');
  // return $newPortfolio;
  var $source = $('#portfolio-template').html();
  var template = Handlebars.compile($source);
  return template(this);

};

portfolioData.forEach(function(ele){
  portfolioArray.push(new Portfolio(ele));
});

portfolioArray.forEach(function(p){
  $('#projects').append(p.toHtml());
});

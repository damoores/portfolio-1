portfolioArray = [];

function Portfolio (opts) {
  this.title = opts.title;
  this.publishedOn = opts.publishedOn;
  this.tagline = opts.tagline;
  this.description = opts.description;
  this.tag = opts.tag;
}

Portfolio.prototype.toHtml = function() {
  var $newPortfolio = $('article.template').clone();

  $newPortfolio.find('header h1').text(this.title);
  $newPortfolio.find('.project-description').html(this.description);
  $newPortfolio.find('.published').html(this.publishedOn);
  $newPortfolio.find('.tagline').html(this.tagline);
  $newPortfolio.find('.published').html(this.publishedOn);
  $newPortfolio.find('.tag').html(this.tag);

  $newPortfolio.removeClass('template');
  return $newPortfolio;
};

portfolioData.forEach(function(ele){
  portfolioArray.push(new Portfolio(ele));
});

portfolioArray.forEach(function(p){
  $('#projects').append(p.toHtml());
});

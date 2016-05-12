var portfolioView = {};

portfolioView.handleMainNav = function (){
  $('.main-nav').on('click', '.tab', function(){
    $('main').hide();
    var navTabs = $(this).attr('data-content');
    $('section[id = "'+ navTabs + '"]').fadeIn();
  });
};

$(document).ready(
  articleView.handleMainNav()
);

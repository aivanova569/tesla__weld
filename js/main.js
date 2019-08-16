$(function(){

  $('.selection__card-slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    infinite: false,
  });

  $('.btn-menu').click(function(){
		$('.menu-list').slideToggle();
	});

});
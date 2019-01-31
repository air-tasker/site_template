$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4 
      }
    }
  });

  $(document).ready(function(){
	
	$('.tabs').find('.members').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.tabs').find('.members').removeClass('active');
		$('.tab-content').removeClass('current');

		$(this).addClass('active');
		$("#"+tab_id).addClass('current');
	})

})
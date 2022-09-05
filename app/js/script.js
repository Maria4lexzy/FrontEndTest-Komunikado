$(document).ready(function () {
	$('.slider__btn-prev').click(function () {
		$('.slider').slick('slickNext');
	})

	$('.slider__btn-next').click(function () {
		$('.slider').slick('slickPrev');
	});
	$('.slider').slick({
		slidesToShow: 4,
		centerMode: true,
		arrows: false,
		draggable: true,
		centerPadding: '8px',
		// infinite: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

				}
			},

			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});



});
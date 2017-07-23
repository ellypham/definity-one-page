$(function() {

	// jQuery Goes here!

	$('.fa-bars').on('click', function(){
		$('.nav ul').addClass('flexplicit');
	});
	$('.nav a').on('click', function(){
		$('.nav ul').removeClass('flexplicit');
	});

	$('#circle').progressCircle({
	nPercent        : 50,
	showPercentText : true,
	circleSize      : 100,
	thickness       : 3
	});


});
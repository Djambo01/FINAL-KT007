$(function () {

	$('#js-news').ticker();
	

	$('#release-wrapper').css('margin-top', '-' + ($('#release-wrapper').height() + 20) + 'px');

	$('a[href="#release-history"]').toggle(function () {	
		$('#release-wrapper').animate({
			marginTop: '0px'
		}, 600, 'linear');
	}, function () {
		$('#release-wrapper').animate({
			marginTop: '-' + ($('#release-wrapper').height() + 20) + 'px'
		}, 600, 'linear');
	});	
	
	$('#download a').mousedown(function () {
		_gaq.push(['_trackEvent', 'download-button', 'clicked'])		
	});
});





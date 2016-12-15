$(document).ready(function() {

	for (var j=0; j<16; j++) {
		for (var i=0; i<16; i++) {
			$('<div />', {
				'class' : 'box'
			}).appendTo($('.grid-holder'));
		}
	}
});




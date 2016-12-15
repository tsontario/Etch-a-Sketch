$(document).ready(function() {
	makeGrid(16);

	$(document).on('mouseenter', '.box', function() {
			$(this).css('background-color', '#AAA');
		});
	// Keep grid size, reset colors
	$('#reset').click(function() {
		$('.box').css('background-color', '#FFF');
	});

	// New grid size:
	$('#new').click(function() {
		var val = prompt("Enter the grid size you want (max = 64).");
		if ($.isNumeric(val) && val > 0 && val <= 64) {
			$('.grid-holder').empty();
			makeGrid(val);
		}
		else {
			alert("Error. Please enter an integer.");
		}
	});
});


function makeGrid(size) {
	for (var j=0; j<size; j++) {
		$row = $('<tr />', {
			'class' : 'row'
		});
		$row.appendTo($('.grid-holder'));
		for (var i=0; i<size; i++) {
			$('<td />', {
				'class' : 'box'
			}).appendTo($row);
			console.log('looping');
		}
	}
	$dimension = 480.0/(size) - 2;
	$('.row').css('width', '480px');
	$('.row').css('height', $dimension);
	$('.box').css('height', $dimension);
	$('.box').css('width', $dimension);
	

}




$(document).ready(function() {
	// Add all ages
	$('.ta-customTableAgeAddAll').on('click', function(){
		$('.ta-customTableAge').each(function( index ) {
		  var $this = $(this);
		  $this.html(parseInt($this.text()) + 1);
		});
	});

	// Substract all ages
	$('.ta-customTableAgeSubAll').on('click', function(){
		$('.ta-customTableAge').each(function( index ) {
		  var $this = $(this);
		  $this.html(parseInt($this.text()) - 1);
		});
	});

	//Add one age
	$('[data-ta-add]').on('click', function(){
		var $this = $(this),
			ageEl = $this.siblings('[data-ta-age=' + $this.data('ta-add') + ']');
		ageEl.html(parseInt(ageEl.text()) + 1);
	});

	//Substract one age
	$('[data-ta-sub]').on('click', function(){
		var $this = $(this),
			ageEl = $this.siblings('[data-ta-age=' + $this.data('ta-sub') + ']');
		ageEl.html(parseInt(ageEl.text()) - 1);
	});

});

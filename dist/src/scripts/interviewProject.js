(function(window) {
	'use strict';

	angular
	.module('tableApp', [
			'smart-table'
		])
	.controller('Table', Table)
	.factory('tableFactory', tableFactory);

	Table.$inject = ['tableFactory'];

	//controller
	function Table(tableFactory){	
		var vm = this;
	 	vm.rowCollection = [];
	 	vm.firstnames = ['Bill', 'Mark', 'Elon', 'Steve', 'Marrisa', 'Sergey'];
	 	vm.lastnames = ['Gates', 'Zukerberg', 'Musk', 'Jobs', 'Mayers', 'Brin'];
		vm.addRandomItem = addRandomItem;
		vm.removeItem = removeItem;
		vm.addAge = addAge;
		vm.substractAge = substractAge;

		addInitialItems();

		function addInitialItems(){
			tableFactory.addInitialItems(vm.rowCollection, vm.firstnames, vm.lastnames);
		}

		function addRandomItem(){
			tableFactory.addRandomItem(vm.rowCollection, vm.firstnames, vm.lastnames);
		}

		function removeItem(row){
			tableFactory.removeItem(vm.rowCollection, row);
		}

		function addAge(num){
			tableFactory.addAge(vm.rowCollection, num);
		}

		function substractAge(num){
			tableFactory.substractAge(vm.rowCollection, num);
		}
	}


	//service
	function tableFactory(){
		var service = {
			addInitialItems : addInitialItems,
			addRandomItem : addRandomItem,
			removeItem : removeItem,
			addAge : addAge,
			substractAge : substractAge
		}	

		return service;	

		function addInitialItems(collection, firstnames, lastnames){
			var count = 1;
			for (count; count < 5; count++) {
	        	collection.push(generateRandomItem(firstnames, lastnames));
	    	}
		}

		function addRandomItem(collection, firstnames, lastnames){
	    	collection.push(generateRandomItem(firstnames, lastnames));
	    }

	    function removeItem(collection, row) {
	        var index = collection.indexOf(row);
	        if (index !== -1) {
	            collection.splice(index, 1);
	        }
	    }

	    function addAge(collection, num){
	    	collection[num].Age += 1;
	    }	

	    function substractAge(collection, num){
	    	var curAge = collection[num].Age;
	    	if(curAge > 0){
	    		collection[num].Age -= 1;
	    	}
	    }

		function generateRandomItem(firstnames, lastnames){
	    	var firstname = firstnames[Math.floor(Math.random() * 5)];
	        var lastname = lastnames[Math.floor(Math.random() * 5)];
	        var age = Math.floor((Math.random() * 100) + 1);
	        return {
	        	Name: firstname + ' ' + lastname,
	        	Age: age
	        }
	    }
	}

})(window)	 
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

//Raw data to begin with
var apartmentData = {
	'Brownstone': {
		bedrooms: 4,
		rent: 4500,
		pets: 'Ok',
		picture: 'brownstone.jpg'
	},
	'Closet': {
		bedrooms: 1,
		rent:1500,
		pets: 'Not allowed.',
		picture: 'closet.jpg'
	},
	'Modern': {
		bedrooms: 2,
		rent: 2700,
		pets: 'Cats and small dogs allowed.',
		picture: 'modern.jpg'
	}
};

//module.exports = apartmentData;

var apartmentApp = angular.module('apartmentApp', [])
.controller('ApartmentCtrl', function () {
	this.apartments = {
		'Brownstone': 4500,
		'Modern': 4000,
		'Closet': 2000
	}
});


var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
	$scope.phones = [
	{'name': 'Nexus S',
	'snippet': 'Fast just got faster with Nexus S.'},
	{'name': 'Motorola XOOM™ with Wi-Fi',
	'snippet': 'The Next, Next Generation tablet.'},
	{'name': 'MOTOROLA XOOM™',
	'snippet': 'The Next, Next Generation tablet.'}
	];
});
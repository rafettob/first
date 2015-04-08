//Raw data to begin with
var apartmentData = {
	'Brownstone': {
		name: 'Brownstone',
		bedrooms: 4,
		rent: 4500,
		pets: 'Ok',
		picture: 'brownstone.jpg'
	},
	'Closet': {
		name: 'Closet',
		bedrooms: 1,
		rent:1500,
		pets: 'Not allowed.',
		picture: 'closet.jpg'
	},
	'Modern': {
		name: 'Modern',
		bedrooms: 2,
		rent: 2700,
		pets: 'Cats and small dogs allowed.',
		picture: 'modern.jpg'
	}
};

//module.exports = apartmentData;

angular.module('invoice2', [])
.controller('ApartmentCtrl', function() {
	this.apartments = apartmentData;
});

//console.dir(Object.keys(apartmentData));
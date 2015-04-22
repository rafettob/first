var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apartments');

var apartmentSchema = require('./apartmentSchema')(mongoose);

var Apartment = mongoose.model('Apartment', apartmentSchema);

var myHome = new Apartment({
	address: '326 E. 78th St.',
	rent: 2450,
	availableFrom: new Date(2015, 05, 01)
})

Apartment.find(function (err, apartments) {
	console.log(apartments);
});

//mongoose.disconnect();

//myHome.save();
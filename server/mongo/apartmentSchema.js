module.exports = function(mongoose) {
	var apartmentSchema = mongoose.Schema({
		address: String,
		rent: Number,
		availableFrom: Date,
		availableTo: Date,
		validityRating: Number,
		pictureUrls: [String]
	})

	return apartmentSchema;
}
module.exports = function(mongoose) {
	var userSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		gender: String
	})

	return userSchema;
}
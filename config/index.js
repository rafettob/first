var environment = {
	local: {
		port: process.env.PORT || 3000
	},
	uat: {
		port: process.env.PORT || 3000
	},
	prod: {
		port: process.env.PORT || 4000
	}
};

this.environment = environment;

module.exports = function(env) {
	return environment[env];
}
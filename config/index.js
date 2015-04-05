var environment = {
	uat: {
		port: 3000
	},
	prod: {
		port: 4000
	}
};

this.environment = environment;

module.exports = function(env) {
	return environment[env];
}
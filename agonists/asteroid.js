var agonist_asteroid = function(parent) {
	var self = agonist_rock(parent);
	self.name = 'agonist_asteroid';

	// Like rock, but larger

	self.rockSetup = self.setup;
	self.setup = function(options) {
		self.scale(self.rnd(2, 8));

		self.rockSetup(options);
	}

	return self;
}
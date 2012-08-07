var agonist_giant = function(parent) {
	var self = agonist_human(parent);
	self.name = 'agonist_giant';

	// Like human, but larger

	self.humanSetup = self.setup;
	self.setup = function(options) {
		self.scale(self.rnd(2, 8));

		self.humanSetup(options);
	}

	return self;
}
var scenery_lines1 = function(parent) {
	var self = scenery(parent);
	self.name = 'scenery_lines1';

	self.lineMinWidth = 2;
	self.lineMaxWidth = 5;
	self.lineMinLength = 20;
	self.lineMaxLength = 200;
	self.lineMinInclination = -0.75;
	self.lineMaxInclination = 0.75;

	self.minLines = 1;
	self.maxLines = 20;

	self.generate = function() {
		self.initialize();

		var l, nl;
		
		for(l=0; l<self.rnd(self.minLines, self.maxLines); l++) {
			nl = {}
			nl.width = self.rnd(self.lineMinWidth, self.lineMaxWidth);
			nl.length = self.rnd(self.lineMinLength, self.lineMaxLength);
			nl.inclination = self.rnd(self.lineMinInclination, self.lineMaxInclination, true);
			nl.left = self.rnd(0, self.parent.config.width)-Math.round(nl.length/2);
			nl.top = self.rnd(0, self.parent.config.height);

			for(var x=0; x<nl.length; x++) {
				for(var w=0; w<=nl.width; w++) {
					self.set(nl.left+x, Math.round(nl.top+(x*nl.inclination))+w, 1);
				}
			}
		}
	}

	return self;
};
var agonist_rock = function(parent) {
	var self = agonist(parent);
	self.name = 'agonist_rock';

	var rockBitmap = [
		[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
		[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	];

	self.setBitmap(rockBitmap, rockBitmap);

	self.mass = 10;

	self.setup = function(options) {
		self.setupBase(options);
		if(self.x==-1) {
			self.x = self.rnd(0, self.parent.config.width-self.width);
		}
		if(self.y==-1) {
			self.y = self.rnd(0, self.parent.config.height);
		}
	};

	self.step = function() {
		self.stepStart();
		var hitAgonists = self.findIntersectingAgonists(self.x, self.y, self.width, self.height);
		for(var a in hitAgonists) {
			hitAgonists[a].hurt(self.mass*self.speedY, self);
		}
		self.stepEnd();
	}

	self.stopY = function() {
		self.toScenery();
	}

	return self;
}

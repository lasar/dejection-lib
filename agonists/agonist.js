var agonist = function(parent) {
	var self = base(parent);
	self.name = 'agonist';
	self.width = 0;
	self.height = 0;
	self.bitmap = [];
	self.mask = [];

	self.lifetime = 0;
	// self.dying = false;
	// self.deathSteps = 10;
	// self.deathStep = 0;

	self.index;
	self.x = -1;
	self.y = -1;

	self.setBitmap = function(bitmap, mask) {
		self.mask = mask;
		self.bitmap = [];
		for(var y=0; y<bitmap.length; y++) {
			self.bitmap[y] = [];
		}
		self.xyLoop(bitmap, function(x, y, val) {
			if(typeof(val)!='object') {
				if(val) {
					val = {r:0, g:0, b:0, a:255};
				} else {
					val = {r:255, g:255, b:255, a:0};
				}
			}
			self.bitmap[y][x] = val;
		});
		self.calculateSize();
	}

	self.getBitmap = function() {
		return self.bitmap;
	}

	self.calculateSize = function() {
		self.width = self.bitmap[0].length;
		self.height = self.bitmap.length;
	}

	self.setupBase = function(options) {
		if(typeof(options)=='object') {
			if(typeof(options.x)=='number') {
				self.x = options.x;
			}
			if(typeof(options.y)=='number') {
				self.y = options.y;
			}
		}
		self.physics = self.parent.config.physics(self);
	};

	self.setup = function(options) {
		self.setupBase(options);
		self.log('agonist.setup: Not overridden');
	};

	self.scale = function(factor) {
		self.bitmap = self.scaleBitmap(self.bitmap, factor);
		self.mask = self.scaleBitmap(self.mask, factor);
		self.calculateSize();
	}

	self.stepStart = function() {
		// if agonist is not in the frame anymore, remove
		if(self.y>self.parent.config.height || (self.x+self.width)<0 || self.x>self.parent.config.width) {
			self.remove();
		}

		self.lifetime++;

		// Agonist is dying
		// self.dying && self.deathStep++;
		// if(self.deathStep>self.deathSteps) {
		// 	self.remove();
		// }
	}

	self.stepEnd = function() {
		self.physics.move();
	}

	self.step = function() {
		self.log('agonist.step: Not overridden');
	};

	self.remove = function() {
		self.parent.removeAgonist(self.index);
	}

	self.move = function(x, y) {
		var ok = true;
		while(ok) {
			y--;
			self.y++;
			if(y<0) {
				ok = false;
			}
		}
	}

	self.stopX = function() {}

	self.stopY = function() {}

	self.kill = function() {
		self.dying = true;
	}

	return self;
}

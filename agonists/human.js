var agonist_human = function(parent) {
	var self = agonist(parent);
	self.name = 'agonist_human';

	var humanBitmap = [
		[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
	];

	var humanMask = [
		[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], // no "hole" between the legs
	];

	self.setBitmap(humanBitmap, humanMask);

	self.avoidCollision = true;

	self.vincible = true;
	self.mortal = true;
	self.maxDeathtime = 5;

	self.xCollisionCount = 0;
	self.jumpProbability = 0;

	self.setup = function(options) {
		self.setupBase(options);
		if(self.x==-1) {
			self.x = self.rnd(0, self.parent.config.width-self.width);
		}
		if(self.y==-1) {
			// self.y = self.rnd(0, self.parent.config.height);
			self.y = self.height*self.rnd(1,2)*-1;
		}

		self.speedY = self.rnd(-5, 0);
		self.targetSpeedX = self.getSpeedX() * [1,-1][self.rnd(0,1)];
	};

	self.stopX = function() {
		self.stepsX = 0;
		self.targetSpeedX = 0;
		if(self.xCollisionCount<1) {
			self.xCollisionCount++;
			self.targetSpeedX = self.getSpeedX();
			if(self.rnd(0,self.jumpProbability)==0) {
				self.jump();
			}
		} else {
			self.turnAround();
		}
	}

	self.step = function() {
		self.stepStart();

		// Temporary: Warp bitmap while dying. Later to be replaced by proper bitmaps.
		if(self.deathtime>0) {
			var cutLines = 2;
			var newBitmap = [];
			for(var y=0; y<self.height; y++) {
				newBitmap[y] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
			self.yLoop(self.bitmap, function(y, v) {
				var newY = Math.round(y/self.height*(self.height-cutLines))+cutLines;
				newBitmap[newY] = v;
			});
			self.setBitmap(newBitmap, humanMask);
		}

		self.stepEnd();
	}

	self.getSpeedX = function() {
		return self.rnd(1, 2);
	}

	self.jump = function() {
		self.speedY = -5;
	}

	self.turnAround = function() {
		self.targetSpeedX = self.getSpeedX() * -1;
		self.xCollisionCount = 0;
		self.x += self.targetSpeedX;
	}

	self.kill = function() {
		self.dying = true;
		self.parent.deathCount++;
		self.corporeal = false;
	}

	return self;
}

var physics_earth = function(parent) {
	var self = physics(parent);
	self.name = 'physics_earth';

	self.speedX = 0;
	self.speedY = 0;

	self.dirX = 1;
	self.dirY = 1;

	self.stepsX = 0;
	self.stepsY = 0;

	self.gravity = .098 * 2;
	self.maxFallingSpeed = 10;

	self.collisionToleranceFactor = 0;

	self.corporeal = true;

	self.stopY = function() {
		self.stepsY = 0;
		self.speedY = 0;
		self.parent.stopY();
	}

	self.stopX = function() {
		self.stepsX = 0;
		self.speedX = 0;
		self.parent.stopX();
	}

	self.move = function() {
		var x = self.parent.x;
		var y = self.parent.y;
		var dx = 0;
		var dy = 0;

		self.speedX = Math.round(self.speedX);

		self.stepsY++;
		self.speedY = 1/2 * self.gravity * self.stepsY*self.stepsY;
		if(self.speedY>self.maxFallingSpeed) {
			self.speedY = self.maxFallingSpeed;
		}
		self.speedY = Math.round(self.speedY);

		dx += self.speedX;
		dy += self.speedY;

		if(self.corporeal) {
			for(var f=0; f<=(dx>dy?dx:dy); f++) {
				if(f<dx) {
					if(!self.moveStep(1, 0)) {
						dx = f;
					}
				}
				if(f<dy) {
					if(!self.moveStep(0, 1)) {
						dy = f;
					}
				}
			}
		} else {
			self.parent.x += dx;
			self.parent.y += dy;
		}
	};

	self.moveStep = function(mx, my) {
		if(mx>0) {
			if(self.isCollision(self.parent.mask, self.parent.x+mx, self.parent.y)) {
				if(self.speedY<2 && !self.isCollision(self.parent.mask, self.parent.x+mx, self.parent.y-2)) {
					self.parent.y -= 2;
					return self.moveStep(mx, my);
				} else {
					self.stopX();
					return false;
				}
			}
		}
		if(my>0) {
			if(self.isCollision(self.parent.mask, self.parent.x+mx, self.parent.y+my)) {
				self.stopY();
				return false;
			}
		}
		self.parent.x += (mx * self.dirX);
		self.parent.y += (my * self.dirY);
		return true;
	};

	self.isCollision = function(mask, x, y) {
		var collisionCount = 0;
		var scenery = self.getBitmapSlice(self.parent.parent.scenery.pxMask, x, y, mask[0].length, mask.length);
		self.xyLoop(mask, function(bx, by, val) {
			if(typeof(scenery[by])!='undefined' && typeof(scenery[by][bx])!='undefined') {
				if(val==1 && scenery[by][bx]==1) {
					collisionCount++;
				}
			}
		});
		return collisionCount>self.collisionToleranceFactor;
	}

	return self;
};
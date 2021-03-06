var agonist = function(parent) {
	var self = base(parent);
	self.name = 'agonist';
	self.width = 0;
	self.height = 0;
	self.bitmap = [];
	self.mask = [];

	self.lifetime = 0;
	self.maxLifetime = 0;
	self.deathtime = 0;
	self.maxDeathtime = 0;
	self.mortal = false;
	self.vincible = false;
	self.health = 100;
	self.dying = false;

	self.index;
	self.x = -1;
	self.y = -1;

	self.speedX = 0;
	self.speedY = 0;
	self.targetSpeedX = 0;
	self.targetSpeedY = 0;

	self.stepsX = 0;
	self.stepsY = 0;

	self.mass = 1;
	self.gravity = .098 * 2;
	self.maxFallingSpeed = 10;

	self.corporeal = true;
	self.avoidCollision = false;

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

		if(!self.dying && (self.maxLifetime>0 && self.lifetime>=self.maxLifetime)) {
			self.kill();
		}

		if(self.dying) {
			self.deathtime++;
		}

		if(self.vincible && !self.dying && self.health<1) {
			self.kill();
		}

		if(self.dying && self.deathtime>=self.maxDeathtime) {
			self.dead();
		}
	}

	self.stepEnd = function() {
		self.move();
	}

	self.step = function() {
		self.stepStart();
		self.log('agonist.step: Not overridden');
		self.stepEnd();
	};

	self.remove = function() {
		self.parent.removeAgonist(self.index);
	};

	self.move = function(x, y) {
		var x = self.x;
		var y = self.y;
		var dx = 0;
		var dy = 0;

		self.speedX = Math.round(self.speedX);

		if(self.speedX<self.targetSpeedX) {
			self.speedX++;
		} else if(self.speedX>self.targetSpeedX) {
			self.speedX--;
		}

		self.stepsY++;
		// if(self.speedY<self.targetSpeedY) {
		// 	self.speedY++;
		// }
		if(self.mass>0) {
			self.targetSpeedY = 1/2 * self.gravity * self.stepsY*self.stepsY;
			if(self.targetSpeedY>self.maxFallingSpeed) {
				self.targetSpeedY = self.maxFallingSpeed;
			}
			self.targetSpeedY = Math.round(self.targetSpeedY);
		}

		if(self.speedY<self.targetSpeedY) {
			self.speedY++;
		} else if(self.speedY>self.targetSpeedY) {
			self.speedY--;
		}

		dx += self.speedX;
		dy += self.speedY;

		if(self.corporeal) {
			for(var f=0; f<=(Math.abs(dx)>Math.abs(dy)?Math.abs(dx):Math.abs(dy)); f++) {
				if(f<Math.abs(dx)) {
					if(!self.moveStep(dx>0?1:-1, 0)) {
						dx = f; // Abort. pos/neg does not matter.
					}
				}
				if(f<Math.abs(dy)) {
					if(!self.moveStep(0, dy>0?1:-1)) {
						dy = f; // Abort. pos/neg does not matter.
					}
				}
			}
			// When still collided, find nearest available space, move in that direction
			if(self.avoidCollision && self.isCollision(self.mask, self.x, self.y)) {
				var freeSpaceDistance = 0;
				var foundSpace = false;
				while(!foundSpace) {
					freeSpaceDistance++;
					if(!self.isCollision(self.mask, self.x+freeSpaceDistance, self.y, true)) {
						self.x += 1;
						foundSpace = true;
					} else if(!self.isCollision(self.mask, self.x-freeSpaceDistance, self.y, true)) {
						self.x -= 1;
						foundSpace = true;
					} else if(!self.isCollision(self.mask, self.x, self.y+freeSpaceDistance, true)) {
						self.y += 1;
						foundSpace = true;
					} else if(!self.isCollision(self.mask, self.x, self.y-freeSpaceDistance, true)) {
						self.y -= 1;
						foundSpace = true;
					}
				}
			}
		} else {
			self.x += dx;
			self.y += dy;
		}
	};

	self.moveStep = function(mx, my) {
		var destinationX = self.x + mx;
		var destinationY = self.y + my;
		if(mx!=0) {
			if(self.isCollision(self.mask, self.x+mx, self.y)) {
				if(self.avoidCollision && !self.isCollision(self.mask, self.x+mx, self.y-3)) {
					self.y -= 3;
					return self.moveStep(mx, my);
				} else {
					self.stopX();
					return false;
				}
			}
		}
		if(my!=0) {
			if(self.isCollision(self.mask, self.x+mx, self.y+my)) {
				self.stopY();
				return false;
			}
		}
		self.x += mx;
		self.y += my;
		return true;
	};

	self.isCollision = function(mask, x, y, ignoreMass, scenery) {
		var collisionCount = 0;
		var collisionTolerance = ignoreMass ? 1 : self.mass;
		if(typeof(scenery)=='undefined') {
			scenery = self.getBitmapSlice(self.parent.scenery.pxMask, x, y, mask[0].length, mask.length);
		}
		self.xyLoop(mask, function(bx, by, val) {
			if(typeof(scenery[by])!='undefined' && typeof(scenery[by][bx])!='undefined') {
				if(val==1 && scenery[by][bx]==1) {
					collisionCount++;
					if(collisionCount>collisionTolerance) {
						return true;
					}
				}
			}
		});
		return collisionCount>collisionTolerance;
	}

	self.findIntersectingAgonists = function(x, y, w, h) {
		var intersecting = [];
		for (var a in self.parent.agonists) {
			var agonist = self.parent.agonists[a];
			if(agonist.index!=self.index && (agonist.x+agonist.width>=self.x && agonist.x<=self.x+self.width && agonist.y+agonist.height>=self.y && agonist.y<=self.y+self.height)) {
				intersecting.push(agonist);
			}
		}
		return intersecting;
	};

	self.findIntersectingAgonists_SLOW = function(x, y, w, h) {
		var intersecting = [];
		var pseudoScenery = self.getBitmapSlice([], 0, 0, self.parent.config.width, self.parent.config.height);
		self.xyLoop(self.mask, function(aX, aY, aVal) {
			var x = self.x+aX;
			var y = self.y+aY;
			if(x>=0 && x<self.parent.config.width && y>=0 && y<self.parent.config.height) {
				pseudoScenery[y][x] = aVal;
			}
		});
		for (var a in self.parent.agonists) {
			var agonist = self.parent.agonists[a];
			if(agonist.index!=self.index) {
				if(self.isCollision(agonist.mask, agonist.x, agonist.y, true, self.getBitmapSlice(pseudoScenery, agonist.x, agonist.y, agonist.width, agonist.height))) {
					intersecting.push(agonist);
				}
			}
		}
		return intersecting;
	};

	self.stopY = function() {
		self.stepsY = 0;
		self.speedY = 0;
	}

	self.stopX = function() {
		self.stepsX = 0;
		self.speedX = 0;
		self.targetSpeedX = 0;
	}

	self.hurt = function(amount, by) {
		if(self.vincible) {
			self.health -= amount;
			self.log('agonist '+self.name+'/'+self.index+' hurt '+amount+' by '+by.name+'/'+by.index+', new health: '+self.health);
		}
	};

	self.kill = function() {
		self.dying = true;
		if(self.mortal) {
			self.parent.deathCount++;
		}
	}

	self.dead = function() {
		self.remove();
	}

	self.toScenery = function() {
		self.parent.scenery.addBitmap(self.mask, self.bitmap, self.x, self.y);
		self.remove();
	}

	return self;
}

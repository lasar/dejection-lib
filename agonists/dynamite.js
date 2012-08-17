var agonist_dynamite = function(parent) {
	var self = agonist(parent);
	self.name = 'agonist_dynamite';

	var dynamiteBitmaps = [
		[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
			[0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
			[0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
			[0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
			[1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
			[1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
			[1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
			[1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
			[1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
		],
		[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
			[0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
			[0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
			[0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
			[1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
			[1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
			[1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
			[1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
			[1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
		],
		[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
			[0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
			[0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
			[0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
			[1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
			[1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
			[1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
			[1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
			[1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
		],
		[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
			[0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
			[0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
			[0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
			[1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
			[1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
			[1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
			[1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
			[1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
		],
	];

	self.setBitmap(dynamiteBitmaps[0], dynamiteBitmaps[0]);

	self.mass = 1;
	self.maxLifetime = 30;
	self.maxDeathtime = 10;

	self.clockPos = 0;

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

		if(self.deathtime>0) {
			var explosionFactor = 2;
			// var explosionRadius = self.width + (explosionFactor*2);
			var explosionRadius = 30;
			var explosion = [];
			var explosionMask = [];
			for(var ey=0; ey<explosionRadius*2; ey++) {
				explosion[ey] = [];
				explosionMask[ey] = [];
				for(var ex=0; ex<explosionRadius*2; ex++) {
					explosion[ey][ex] = 0;
					explosionMask[ey][ex] = 0;
				}
			}

			self.log('explosionRadius '+explosionRadius);
			self.log(explosion);
			
			var radius = explosionRadius-1;
			var steps = radius*3;
			var x, y;
			for (var i=0; i<steps; i++) {
			    x = Math.round(radius + radius * Math.cos(Math.PI * i / steps));
			    y = Math.round(radius + radius * Math.sin(Math.PI * i / steps));
				if(x>radius) {
					for(xc=radius; xc<=x; xc++) {
						self.log(x+'/'+y);
						explosion[y][x] = 1;
						explosionMask[y][x] = 1;
					}
				} else if(x<radius) {
					for(xc=x; xc<=radius; xc++) {
						self.log(x+'/'+y);
						explosion[y][x] = 1;
						explosionMask[y][x] = 1;
					}
				}
			}

			// for(var ey=0; ey<explosionRadius; ey++) {
			// 	explosion[ey] = [];
			// 	explosionMask[ey] = [];
			// 	for(var ex=0; ex<explosionRadius; ex++) {
			// 		explosion[ey][ex] = 0;
			// 		explosionMask[ey][ex] = 1;
			// 	}
			// }
			self.setBitmap(explosion.slice(0), explosionMask.slice(0));
			self.x -= explosionFactor;
			self.y -= explosionFactor;
			self.parent.scenery.addBitmap(explosion, explosion, self.x, self.y, true);

			var hitAgonists = self.findIntersectingAgonists(self.x, self.y, self.width, self.height);
			for(var a in hitAgonists) {
				hitAgonists[a].hurt(100, self);
			}
		} else {
			self.setBitmap(dynamiteBitmaps[self.clockPos], dynamiteBitmaps[0]);
			self.clockPos++;
			if(self.clockPos>3) {
				self.clockPos = 0;
			}
		}

		self.stepEnd();
	};

	self.kill = function() {
		self.dying = true;
		self.gravity = 0
	}
	

	return self;
}

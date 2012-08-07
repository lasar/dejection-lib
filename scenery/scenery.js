var scenery = function(parent) {
	var self = base(parent);
	self.name = 'scenery';
	self.pxMask = [];
	self.px = [];

	self.set = function(x, y, mask, color) {
		if(x>=0 && x<self.parent.config.width && y>=0 && y<self.parent.config.height) {
			if(typeof(color)!='object') {
				if(mask) {
					color = {r:0, g:0, b:0, a:255};
				} else {
					color = {r:255, g:255, b:255, a:255};
				}
			}
			self.pxMask[y][x] = mask;
			self.px[y][x] = color;
		}
	};

	self.loop = function(fn, set, sx, sy, sw, sh) {
		if(typeof(sx)=='undefined') { sx = 0; }
		if(typeof(sy)=='undefined') { sy = 0; }
		if(typeof(sw)=='undefined') { sw = self.parent.config.width; }
		if(typeof(sh)=='undefined') { sh = self.parent.config.height; }
		for(var y=sy; y<sy+sh; y++) {
			for(var x=sx; x<sx+sw; x++) {
				if(x>=0 && x<self.parent.config.width && y>=0 && y<self.parent.config.height) {
					if(set) {
						self.set(x, y, fn(x, y, self.pxMask[y][x], self.px[y][x]));
					} else {
						fn(x, y, self.pxMask[y][x], self.px[y][x]);
					}
				}
			}
		}
	};

	self.initialize = function() {
		self.px = [];
		self.pxMask = [];
		for(var y=0; y<self.parent.config.height; y++) {
			self.px[y] = [];
			self.pxMask[y] = [];
			for(var x=0; x<self.parent.config.width; x++) {
				self.px[y][x] = 0;
				self.pxMask[y][x] = 0;
			}
		}
	};

	self.generate = function() {
		self.initialize();
		self.log('scenery.generate: Not overridden');
	};

	self.addBitmap = function(bitmapMask, bitmap, left, top) {
		var width = bitmapMask[0].length;
		var height = bitmapMask.length;
		for(x=0; x<width; x++) {
			for(y=0; y<height; y++) {
				p = bitmapMask[y][x];
				if(p) {
					self.set(left+x, top+y, 1, bitmap[y][x]);
				}
			}
		}
	}

	return self;
};

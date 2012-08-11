var renderer_browserCanvas = function(parent) {
	var self = renderer(parent);
	self.name = 'renderer_browserCanvas';

	self.text = {
		charWidth: 8,
		charHeight: 12,
		charSpacing: 2,
		chars: {
			unknown: [
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
			],
			' ': [
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
			],
			'0': [
				[0, 1, 1, 1, 1, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
			],
			'1': [
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 1, 1, 1, 0, 0, 0],
				[0, 1, 1, 1, 1, 0, 0, 0],
				[0, 1, 1, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
			'2': [
				[0, 0, 1, 1, 1, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 1, 1, 0, 0, 0, 0],
				[0, 1, 1, 0, 0, 0, 0, 0],
				[0, 1, 1, 0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
			],
			'3': [
				[0, 0, 1, 1, 1, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 0, 1, 1],
				[0, 0, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 0, 1, 1, 1, 1, 1, 0],
			],
			'4': [
				[1, 1, 0, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0, 0],
				[1, 1, 0, 1, 1, 0, 0, 0],
				[1, 1, 0, 1, 1, 0, 0, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
			'5': [
				[0, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
			],
			'6': [
				[0, 1, 1, 1, 1, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 0],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
			],
			'7': [
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
			'8': [
				[0, 1, 1, 1, 1, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
			],
			'9': [
				[0, 1, 1, 1, 1, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 1, 1, 1, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 0, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 1, 0],
			],
			'/': [
				[0, 0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 1, 1, 0, 0],
				[0, 0, 0, 0, 1, 1, 0, 0],
				[0, 0, 0, 0, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 1, 1, 0, 0, 0, 0],
				[0, 0, 1, 1, 0, 0, 0, 0],
				[0, 0, 1, 1, 0, 0, 0, 0],
				[0, 1, 1, 0, 0, 0, 0, 0],
				[0, 1, 1, 0, 0, 0, 0, 0],
			],
			'-': [
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
			],
			'_': [
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
			],
			'.': [
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
			],
			',': [
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 0, 1, 0, 0, 0],
				[0, 0, 0, 1, 0, 0, 0, 0],
			],
			'x': [
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0],
				[0, 1, 0, 0, 0, 0, 1, 0],
				[0, 0, 1, 0, 0, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0],
				[0, 0, 1, 0, 0, 1, 0, 0],
				[0, 1, 0, 0, 0, 0, 1, 0],
			],
		}
	};

	self.changeCache = [];

	self.checkEnv = function() {
		if(typeof(jQuery)=='undefined') {
			self.log('renderer_browserCanvas.checkEnv: Requires jQuery!');
		}
		if(typeof(self.parent.config.renderer_browserCanvas_config)=='undefined') {
			self.log('renderer_browserCanvas_config.checkEnv: requires configuration in "renderer_browserCanvas_config"!');
		}
		if(typeof(self.parent.config.renderer_browserCanvas_config.container)=='undefined') {
			self.log('renderer_browserCanvas_config.checkEnv: Requires configuration "container"');
		}
		if($(self.parent.config.renderer_browserCanvas_config.container).length<1) {
			self.log('No container element for "'+self.parent.config.renderer_browserCanvas_config.container+'" found.');
		}
	};

	self.setup = function() {
		self.checkEnv();
		if(typeof(self.parent.config.renderer_browserCanvas_config.debug)!='undefined' && self.parent.config.renderer_browserCanvas_config.debug) {
			self.debug = true;
		}

		self.canvas = jQuery('<canvas />').attr({
			width: self.parent.config.width,
			height: self.parent.config.height,
		});
		jQuery(self.parent.config.renderer_browserCanvas_config.container).append(self.canvas);
		self.ctx = $(self.canvas)[0].getContext('2d');
		self.imageData = self.ctx.createImageData(self.parent.config.width, self.parent.config.height);
		self.reset();
	};

	self.reset = function() {
		self.resetChangeCache();
		self.addToChangeCache(0, 0, self.parent.config.width, self.parent.config.height);
	};

	self.render = function() {
		self.changeCacheLoop(function(change) {
			self.parent.scenery.loop(function(x, y, mask, color) {
				self.set(x, y, color);
			}, false, change.x, change.y, change.width, change.height);
		});

		self.resetChangeCache();

		// Agonists
		for(var a in self.parent.agonists) {
			self.addAgonist(self.parent.agonists[a]);
		}

		self.ctx.putImageData(self.imageData, 0, 0);
	};

	self.addToChangeCache = function(x, y, w, h, lifetime) {
		if(lifetime=='undefined') {
			lifetime = 1;
		}
		self.changeCache.push({
			x: x-10,
			y: y-10,
			width: w+20,
			height: h+20,
			lifetime: lifetime
		});
	};

	self.resetChangeCache = function() {
		self.changeCache = [];
	};

	self.changeCacheLoop = function(callback) {
		for(var c in self.changeCache) {
			callback(self.changeCache[c]);
			self.changeCache[c].lifetime--;
			if(self.changeCache[c].lifetime<1) {
				delete(self.changeCache[c]);
			}
		}
		
	};

	self.addBitmap = function(bitmap, left, top, color) {
		var width = bitmap[0].length;
		var height = bitmap.length;
		for(x=0; x<width; x++) {
			for(y=0; y<height; y++) {
				p = bitmap[y][x];
				if(p.a!=0) {
					self.toggle(left+x, top+y);
				}
			}
		}
		self.addToChangeCache(left, top, width, height);
	}

	self.addAgonist = function(agonist) {
		self.addBitmap(agonist.getBitmap(), Math.round(agonist.x), Math.round(agonist.y));
		// self.debug && self.write(agonist.x+agonist.width+2, agonist.y+agonist.height-self.text.charHeight, agonist.speedX+'/'+agonist.speedY, {r:255, g:0, b:0, a:255});
	}

	self.toggle = function(x, y) {
		// Note: This assumes a b/w world. Color is ignored.
		if(x>=0 && x<self.imageData.width && y>=0 && y<self.imageData.height) {
			var index = (x + y * self.imageData.width) * 4;
			if(self.imageData.data[index]>0) {
				self.set(x, y, 1);
			} else {
				self.set(x, y, 0);
			}
			return true;
		}
		return false;
	}

	self.set = function(x, y, color) {
		if(x>=0 && x<self.imageData.width && y>=0 && y<self.imageData.height) {
			if(typeof(color)=='object') {
				var r = color.r;
				var g = color.g;
				var b = color.b;
				var a = color.a;
			} else if(color==1) {
				var r = 0;
				var g = 0;
				var b = 0;
				var a = 255;
			} else if(color==0) {
				var r = 255;
				var g = 255;
				var b = 255;
				var a = 255;
			} else {
				return false;
			}
		    var index = (x + y * self.imageData.width) * 4;
		    self.imageData.data[index+0] = r;
		    self.imageData.data[index+1] = g;
		    self.imageData.data[index+2] = b;
		    self.imageData.data[index+3] = a;
			return true;
		}
		return false;
	};

	self.write = function(x, y, text, color) {
		text = text.toString();
		var chr, left = 0;
		for(var i=0; i<text.length; i++) {
			chr = text.charAt(i);
			if(typeof(self.text.chars[chr])=='undefined') {
				chr = 'unknown';
			}
			if(chr=="\n") {
				y += self.text.charHeight + self.text.charSpacing;
				left = 0;
			} else {
				self.addBitmap(self.text.chars[chr], x+left+1, y+1, {r:200, g:200, b:200, a:255});
				self.addBitmap(self.text.chars[chr], x+left, y, color);
				left += self.text.charWidth + self.text.charSpacing;
			}
		}
	};

	return self;
};

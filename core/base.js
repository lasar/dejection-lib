var base = function(parent) {
	var self = {
		name: 'base',
		parent: parent,
		debug: false,
	};
	self.logData = [];

	self.log = function(msg) {
		if(typeof(self.parent)=='object') {
			self.parent.log(msg);
		} else {
			self.logData.push(msg);
			if(typeof(console)=='object' && typeof(console.log)=='function') {
				console.log(msg);
			}
		}
	};

	self.rnd = function(min, max, returnFloat) {
		var rnd = min+(Math.random()*(max-min));
		if(!returnFloat) { rnd = Math.round(rnd); }
		return rnd;
	};

	self.yLoop = function(yData, fn) {
		for(var y=0; y<yData.length; y++) {
			fn(y, yData[y]);
		}
	};

	self.xyLoop = function(xyData, fn) {
		for(var y=0; y<xyData.length; y++) {
			for(var x=0; x<xyData[0].length; x++) {
				fn(x, y, xyData[y][x]);
			}
		}
	};

	self.getBitmapSlice = function(source, x, y, width, height) {
		var slice = [];
		for(var sy=0; sy<height; sy++) {
			slice[sy] = [];
			for(var sx=0; sx<width; sx++) {
				if(typeof(source[y+sy])!='undefined' && typeof(source[y+sy][x+sx])!='undefined') {
					slice[sy][sx] = source[y+sy][x+sx];
				} else {
					slice[sy][sx] = 0;
				}
			}
		}
		return slice;
	}

	self.scaleBitmap = function(original, scale) {
		var bitmap = [];
		var yn, xn;
		for(var y=0; y<original.length; y++) {
			for(var yc=0; yc<scale; yc++) {
				yn = (y*scale)+yc;
				bitmap[yn] = [];
				for(var x=0; x<original[0].length; x++) {
					for(var xc=0; xc<scale; xc++) {
						xn = (x*scale)+xc;
						bitmap[yn][xn] = original[y][x];
					}
				}
			}
		}
		return bitmap;
	}

	return self;
}

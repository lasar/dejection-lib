var scenery_lines = function(parent) {
	var self = scenery(parent);
	self.name = 'scenery_lines';

	self.lineWidth = 1;

	self.generate = function() {
		self.initialize();
	}

	self.getLineEnd = function(line) {
		var angle = (line.angle+90) / (360/(Math.PI*2));
		var end = {
			angle: angle,
			x: Math.round(line.x + (Math.sin(angle)*line.length)),
			y: Math.round(line.y + (Math.cos(angle)*line.length))
		};
		return end;
	};

	self.drawLine = function(line) {
		var end = self.getLineEnd(line);

		var widthEnd = self.getLineEnd({
			x: 0,
			y: 0,
			length: line.width,
			angle: line.angle-90
		});
		var widthLineLength = Math.sqrt( (line.x-widthEnd.x)*(line.x-widthEnd.x)+(line.y-widthEnd.y)*(line.y-widthEnd.y) );

		var lineLength = Math.sqrt( (line.x-end.x)*(line.x-end.x)+(line.y-end.y)*(line.y-end.y) );
		for(var i=0; i<lineLength; i++) {
			var x = Math.round(line.x+(end.x-line.x)*i/lineLength);
			var y = Math.round(line.y+(end.y-line.y)*i/lineLength);
			for(var k=0; k<widthLineLength; k++) {
				var wx = Math.round(x+((widthEnd.x+x)-x)*k/widthLineLength);
				var wy = Math.round(y+((widthEnd.y+y)-y)*k/widthLineLength);
				self.set(wx, wy, 1);
				self.set(wx+1, wy, 1); // Dirty fix: Some lines won't get filled out properly. This takes care of that.
			}
		}
	};

	self.drawRect = function(rect) {
		for(var x=rect.x; x<=rect.x+rect.w; x++) {
			for(var y=rect.y; y<=rect.y+rect.h; y++) {
				self.set(x, y, 1);
			}
		}
	};

	return self;
};
var scenery_platformer_greenery = function(parent) {
	var self = scenery_platformer(parent);
	self.name = 'scenery_platformer_greenery';

	self.grassProbability = 50;
	self.flowerProbability = 10;
	self.grassMinHeight = 1;
	self.grassMaxHeight = 10;

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

			if(line.angle<80 && line.angle>-80 && self.rnd(1,100)<=self.grassProbability) {
				for(var grassHeight=1; grassHeight<=self.rnd(self.grassMinHeight, self.grassMaxHeight); grassHeight++) {
					self.set(x, y-grassHeight, 0, {r:0, g:165, b:0, a:255});
				}
				if(self.rnd(1,100)<=self.flowerProbability) {
					self.set(x, y-grassHeight, 0, [
						{r:200, g:0, b:0, a:255},
						{r:200, g:200, b:0, a:255}
					][self.rnd(0,1)]);
				}
			}

			for(var k=0; k<widthLineLength; k++) {
				var wx = Math.round(x+((widthEnd.x+x)-x)*k/widthLineLength);
				var wy = Math.round(y+((widthEnd.y+y)-y)*k/widthLineLength);
				self.set(wx, wy, 1);
				if(line.width>1) {
					self.set(wx+1, wy, 1); // Dirty fix: Some lines won't get filled out properly. This takes care of that.
				}
			}
		}
	};

	return self;
};
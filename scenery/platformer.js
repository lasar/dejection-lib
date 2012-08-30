var scenery_platformer = function(parent) {
	var self = scenery_lines(parent);
	self.name = 'scenery_platformer';

	self.lineWidth = 4;
	self.lineMinLength = 20;
	self.lineMaxLength = 60;

	self.corridorHeight = 100;
	self.corridorSpacing = 25;

	self.blankProbability = 20;

	self.generate = function() {
		self.initialize();

		var corridorCount = Math.ceil(self.parent.config.height / self.corridorHeight);
		for(var c=0; c<corridorCount; c++) {
			var cTop = (c*self.corridorHeight) + self.corridorSpacing;
			var cBottom = (c+1)*self.corridorHeight;
			self.drawCorridor(cTop, cBottom);
		}
	}

	self.drawCorridor = function(topY, bottomY) {
		var left = 0;
		var draw, angle, line, lineLength;
		while(left<self.parent.config.width) {
			draw = self.rnd(1,100)>=self.blankProbability;
			lineLength = self.rnd(self.lineMinLength, self.lineMaxLength);
			line = {
				x: left,
				y: topY + self.rnd(0, bottomY-topY),
				length: lineLength,
				angle: 0,
				width: self.lineWidth
			};
			if(draw) {
				self.drawLine(line);
			}
			left += lineLength;
		}
	};

	return self;
};
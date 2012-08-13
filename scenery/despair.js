var scenery_despair = function(parent) {
	var self = scenery_lines(parent);
	self.name = 'scenery_despair';

	self.lineWidth = 4;
	self.lineMinLength = 20;
	self.lineMaxLength = 60;

	self.smallAngle = 20;
	self.bigAngle = 60;
	self.verticalAngle = 90;

	self.corridorHeight = 100;
	self.corridorSpacing = 25;

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
		var typeProbabilities = [
			60, // 0: small angles
			10, // 1: big angles
			10, // 2: vertical
			20 // 3: empty
		];
		var typeSum = 0;
		var types = [];
		for(var t=0; t<typeProbabilities.length; t++) {
			typeSum += typeProbabilities[t];
			for(var tt=0; tt<typeProbabilities[t]; tt++) {
				types.push(t);
			}
		}
		var left = 0;
		var top = topY+Math.round((bottomY-topY)/2);
		var typeNum, draw, angle, line, end;
		while(left<self.parent.config.width) {
			typeNum = self.rnd(0, typeSum-1);
			draw = true;
			switch(types[typeNum]) {
				case 0: angle = self.rnd(-self.smallAngle, self.smallAngle); break;
				case 1: angle = self.rnd(-self.bigAngle, self.bigAngle); break;
				case 2: angle = self.rnd(0, 1) ? self.verticalAngle : -self.verticalAngle; break;
				case 3: angle = 0; draw = false; break;
			}
			line = {
				x: left,
				y: top,
				length: self.rnd(self.lineMinLength, self.lineMaxLength),
				angle: angle,
				width: self.lineWidth
			};
			end = self.getLineEnd(line);
			if(end.y>=topY && end.y<=bottomY) {
				if(draw) {
					self.drawLine(line);
				}
				left = end.x;
				top = end.y;
			}
		}
	};

	return self;
};
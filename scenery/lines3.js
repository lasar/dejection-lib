var scenery_lines3 = function(parent) {
	var self = scenery(parent);
	self.name = 'scenery_lines3';

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
		var left = 0;
		var top = topY+Math.round((bottomY-topY)/2);
		while(left<self.parent.config.width) {
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
			var typeNum = self.rnd(0, typeSum-1);
			var type = 0;
			var draw = true;
			switch(types[typeNum]) {
				case 0: var angle = self.rnd(-self.smallAngle, self.smallAngle); break;
				case 1: var angle = self.rnd(-self.bigAngle, self.bigAngle); break;
				case 2: var angle = self.rnd(0, 1) ? self.verticalAngle : -self.verticalAngle; break;
				case 3: var angle = 0; draw = false; break;
			}
			var line = {
				x: left,
				y: top,
				length: self.rnd(self.lineMinLength, self.lineMaxLength),
				angle: angle,
				width: self.lineWidth
			};
			var end = self.getLineEnd(line);
			if(end.y>=topY && end.y<=bottomY) {
				if(draw) {
					self.drawLine(line);
				}
				left = end.x;
				top = end.y;
			}
		}
	};

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


		var lineLength = Math.sqrt( (line.x-end.x)*(line.x-end.x)+(line.y-end.y)*(line.y-end.y) );
		for(var i=0; i<lineLength; i++) {
			var x = Math.round(line.x+(end.x-line.x)*i/lineLength);
			var y = Math.round(line.y+(end.y-line.y)*i/lineLength);
			self.set(x, y, 1);
		}
	};

	return self;
};
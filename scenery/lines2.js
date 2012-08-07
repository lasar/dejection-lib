var scenery_lines2 = function(parent) {
	var self = scenery(parent);
	self.name = 'scenery_lines2';

	self.sizeFactor = 4;

	self.lineMinWidth = 2;
	self.lineMaxWidth = 2;
	self.lineMinLength = 20;
	self.lineMaxLength = 100;
	self.lineMinInclination = -0.5;
	self.lineMaxInclination = 0.5;

	self.minLinesInSet = 4;
	self.maxLinesInSet = 4;

	self.generate = function() {
		self.initialize();

		self.sizeFactor = ((self.parent.config.width*self.parent.config.height)/40000);

		self.inventLines();
		self.drawLines();
	}

	self.inventLines = function() {
		var lineSets = self.rnd(Math.round(self.sizeFactor/2), self.sizeFactor);

		self.data = [];

		var lineSet, line;

		for(var ls=0; ls<lineSets; ls++) {
			lineSet = {};
			lineSet.startX = self.rnd(0, self.parent.config.width-Math.round(self.lineMaxLength/2));
			lineSet.startY = self.rnd(0, self.parent.config.height);
			lineSet.lines = [];

			linesInSet = self.rnd(self.minLinesInSet, self.maxLinesInSet);

			for(var lis=0; lis<linesInSet; lis++) {
				line = {
					// x
					// y
					length: self.rnd(self.lineMinLength, self.lineMaxLength),
					inclination: self.rnd(self.lineMinInclination, self.lineMaxInclination, true),
					width: self.rnd(self.lineMinWidth, self.lineMaxWidth),
				};
				
				lineSet.lines.push(line);
			}

			self.data.push(lineSet);
		}
	};

	self.drawLines = function() {
		var ls, lis, x, y;
		for(var lsKey in self.data) {
			ls = self.data[lsKey];
			x = ls.startX;
			y = ls.startY;
			for(var lisKey in ls.lines) {
				lis = ls.lines[lisKey];
				lis.x = x;
				lis.y = y;
				self.drawLine(lis);
				x += lis.length;
				y += (lis.length*lis.inclination);
			}
		}
	};

	self.drawLine = function(line) {
		for(var x=0; x<line.length; x++) {
			for(var w=0; w<line.width; w++) {
				self.set(line.x+x, Math.round(line.y+(x*line.inclination))+w, 1);
			}
		}
	}

	return self;
};
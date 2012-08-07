var dejection = function(config) {
	var self = base(false);
	self.name = 'dejection';
	self.config = {
		// width
		// height
		stepInterval: 1,
		renderInterval: 1,
		// env
		// renderer
		// scenery
		// agonists
		randomAgonists: {},
	};
	self.requiredConfig = {
		width: 'number',
		height: 'number',
		stepInterval: 'number',
		renderInterval: 'number',
		env: 'function',
		renderer: 'function',
		scenery: 'function',
		agonists: 'object',
		physics: 'function',
		randomAgonists: 'object',
	};
	self.agonists = {};
	self.agonistIndex = 0;
	self.agonistCount = 0;
	self.stepInProgress = false;
	self.renderInProgress = false;

	self.setConfig = function(config) {
		if(typeof(config)=='object') {
			for(var c in config) {
				self.config[c] = config[c];
			}
		}
	};

	self.validateConfig = function() {
		var type;
		var ok = true;
		for(var key in self.requiredConfig) {
			switch(self.requiredConfig[key]) {
				case 'number':
				case 'object':
				case 'function':
					type = typeof(self.config[key]);
					if(type!=self.requiredConfig[key]) {
						self.log('dejection.validateConfig: Configuration "'+key+'" is required and must be "'+self.requiredConfig[key]+'" but is "'+type+'" instead.');
						ok = false;
					}
					break;
				default:
					self.log('dejection.validateConfig: "'+self.requiredConfig[key]+'" is unknown format for configuration "'+key+'"');
					ok = false;
					break;
			}
		}
	};

	// Basic one-time setup
	self.run = function(config) {
		self.setConfig(config);
		self.validateConfig();

		self.env = self.config.env(self);
		self.env.setup();

		self.renderer = self.config.renderer(self);
		self.renderer.setup();

		self.scenery = self.config.scenery(self);

		self.reset();
		self.start();
	};

	// Reset to game beginning
	self.reset = function() {
		self.agonists = {};
		self.scenery.generate();
		self.renderer.reset();
	};

	// Start game process
	self.start = function() {
		// TODO: Check if steps take too long, skip things.
		self.step();
		self.stepInterval = window.setInterval(self.step, self.config.stepInterval);

		self.render();
		self.renderInterval = window.setInterval(self.render, self.config.renderInterval);
	};

	self.stop = function() {
		window.clearInterval(self.stepInterval);
		window.clearInterval(self.renderInterval);
	};

	self.restart = function() {
		self.stop();
		self.reset();
		self.start();
	}

	self.step = function() {
		if(!self.stepInProgress) {
			self.stepInProgress = true;

			// preStep
			if(typeof(self.config.preStep)=='function') {
				self.config.preStep();
			}
			
			// Add random agonists
			for(var agonistKey in self.config.randomAgonists) {
				if(self.rnd(0, Math.round(100/self.config.randomAgonists[agonistKey]))==0) {
					self.addAgonist(self.config.agonists[agonistKey]);
				}
			}

			// Step agonists
			for(var a in self.agonists) {
				self.agonists[a].step();
			}

			// postStep
			if(typeof(self.config.postStep)=='function') {
				self.config.postStep();
			}
			
			self.stepInProgress = false;
		}
	}

	self.render = function() {
		if(!self.renderInProgress) {
			self.renderInProgress = true;
			// preRender
			if(typeof(self.config.preRender)=='function') {
				self.config.preRender();
			}

			self.renderer.render();

			// postRender
			if(typeof(self.config.postRender)=='function') {
				self.config.postRender();
			}

			self.renderInProgress = false;
		}
	}

	self.addAgonist = function(key, options) {
		if(typeof(key)=='function') {
			var a = key(self);
		} else {
			var a = self.config.agonists[key](self);
		}
		a.index = self.agonistIndex;
		self.agonists[a.index] = a;
		a.setup(options);
		self.agonistIndex++;
		self.agonistCount++;
	}

	self.removeAgonist = function(index) {
		delete self.agonists[index];
		self.agonistCount--;
	}

	self.setConfig(config);

	return self;
};

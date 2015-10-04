
Universe.prototype = Object.create(null); // Why is this necessary? Let's see ./resources-preparation.js --> [0] to find the answer.
window.universe = new Universe(window, document);

function Universe(window, document, undefined) {
	'use strict';
	
	if (window.universe) return window.universe;
	
	var universe = this;
	
	function initLibs() {
		var kjslib = universe.kjslib = _kJs_Initor();
		var kxmllib = universe.kxmllib = _kXml_Initor();
		var kanilib = universe.kanilib = _kAni_Initor();
		var keventlib = universe.keventlib = _kEvent_Initor();
		var kgraphlib = universe.kgraphlib = _kGraph_Initor();
		initClasses
			(kjslib, "kjsclasses")
			(kxmllib, "kxmlclasses")
			(kanilib, "kaniclasses")
			(keventlib, "keventclasses")
			(kgraphlib, "kgraphclasses");
	}
	
	function initClasses(lib, name) {
		universe[name] = new lib.ClassCollection();
		return initClasses; // some thing like: initClasses(a, b)(d, e)(g, h) instead of do them sepparately.
	}
	
	function theBigBang() {
		initLibs();
		Object.setPrototypeOf(Universe.prototype, universe.kjsclasses._primitive_prototype);
	}
	
	theBigBang();
}



window.universe = new Universe(window, document);

function Universe(window, document, undefined) {
	'use strict';
	
	if (window.universe) return window.universe;
	
	var universe = this;
	
	function initLibs() {
		var kjslib = universe.kjslib = _kJs_Init();
		var kxmllib = universe.kxmllib = _kXml_Init();
		var kanilib = universe.kanilib = _kXml_Init();
		var keventlib = universe.keventlib = _kEvent_Init();
		var kgraphlib = universe.kgraphlib = _kGraph_Init();
		initClasses
			(kjslib, "kjsclasses")
			(kxmllib, "kxmlclasses")
			(kanilib, "kaniclasses")
			(keventlib, "keventclasses")
			(kgraphlib, "kgraphclasses");
	}
	
	function initClasses(lib, name) {
		universe[name] = new lib.ClassesCollection();
		return initClasses; // some thing like: initClasses(a, b)(d, e)(g, h) instead of do them sepparately.
	}
	
	function theBigBang() {
		initLibs();
	}
	
	theBigBang();
}
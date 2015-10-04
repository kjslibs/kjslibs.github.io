
Resources.prototype = Object.create(null);
window.resources = new Resources(window, document, universe);

// Resources::Resources(Window, Document, Universe, void);
function Resources(window, document, universe, undefined) {
	'use strict';
	
	if (window.resources) return;
	
	var resources = this;
	
	// CONVENTION:	If a function return 0 or 1, 0 means no error and 1 means opposite.
	
	if (main()) {
		resources._error = 1;
		throw "Bad support browser.";
	}
	
	// int main(void);
	function main() {
		implementation();
		if(glContextCreation(kxmlclasses, kgraphclasses))
			return 1;
		return 0;
	}
	
	// void implementation(void);
	function implementation() {
		Object.setPrototypeOf(Resources.prototype, universe);
		Object.setPrototypeOf(Object.prototype, resources);
	}
	
	// int glContextCreation(ClassCollection, ClassCollection)
	function glContextCreation(kxmlclasses, kgraphclasses) {
		
		// Set up 'document_util'
		var document_util = resources.document_util = new kxmlclasses.DocumentUtil(document);
		document_util.namespaceURI = document.documentElement.namespaceURI;
		
		// Set up 'canvas'
		var canvas = resources.canvas = document_util.create({
			type: document_util.ELEMENT,
			tag: "canvas",
			parent: document.body,
			before: null,
			children: ["Opps, your browser didn't supported HTMLCanvasElement."]
		});
		
		// Set up a 'WebGLRenderingContext' named 'gl'
		var gl = resources.gl = canvas.getContext("webgl");
		if (!gl) {
			document.body.removeChild(canvas);
			document_util.create({
				type: document_util.ELEMENT,
				tag: "div",
				parent: document.body,
				before: null,
				children: ["Your browser don't support WebGL or WebGL are disabled."]
			});
			return 1;
		}
		
		// Set up a 'GLUtil' named 'gl_util' from 'gl'
		resources.gl_util = new kgraphclasses.GLUtil(gl);
		
		return 0;
	}
	
}


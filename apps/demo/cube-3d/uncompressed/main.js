
main(window);

function main(window) {
	'use strict';
	
	window.allglobjs = new AllGLObjs(__main__, onerror);
	
	function __main__(allglobjs) {
		
		// front = clockwise, cull counter-clockwise
		var vertices = new Float32Array([
			
			// Back face
			
			// Triangle 1
			-1.0, -1.0, -1.0
			
			
		]);
		
	}
	
	function onerror() {
		var body = document.body;
		clearChildren(body);
		body.insertBefore(createErrMsgNode("ERROR 404: Resources Not Found."), null);
	}
	
}


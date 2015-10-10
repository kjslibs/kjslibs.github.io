
main(window);

function main(window) {
	'use strict';
	
	window.allglobjs = new AllGLObjs(__main__, onerror);
	
	function __main__(allglobjs) {
		
		// front = clockwise, cull counter-clockwise
		var vertices = new Float32Array([
			
			// LEFT FACE
			
			// Triangle (-x1)
			-1.0, -1.0, -1.0,
			-1.0, -1.0, +1.0,
			-1.0, +1.0, +1.0,
			
			// Triangle (-x2)
			-1.0, -1.0, -1.0,
			-1.0, +1.0, +1.0,
			-1.0, +1.0, -1.0,
			
			// BOTTOM FACE
			
			// Triangle (-y1)
			-1.0, -1.0, -1.0,
			-1.0, -1.0, +1.0,
			+1.0, -1.0, +1.0,
			
			// Triangle (-y2)
			-1.0, -1.0, -1.0,
			+1.0, -1.0, +1.0,
			+1.0, -1.0, -1.0,
			
			// BACK FACE
			
			// Triangle (-z1)
			-1.0, -1.0, -1.0,
			+1.0, -1.0, -1.0,
			+1.0, +1.0, -1.0,
			
			// Triangle (-z2)
			-1.0, -1.0, -1.0,
			+1.0, +1.0, -1.0,
			-1.0, +1.0, -1.0,
			
			// RIGHT FACE
			
			// Triangle (+x1)
			+1.0, -1.0, -1.0,
			+1.0, -1.0, +1.0,
			+1.0, +1.0, +1.0,
			
			// Triangle (+x2)
			+1.0, -1.0, -1.0,
			+1.0, +1.0, +1.0,
			+1.0, +1.0, -1.0,
			
			// TOP FACE
			
			// Triangle (+y1)
			-1.0, +1.0, -1.0,
			+1.0, +1.0, -1.0,
			+1.0, +1.0, +1.0,
			
			// Triangle (+y2)
			-1.0, +1.0, -1.0,
			+1.0, +1.0, +1.0,
			-1.0, +1.0, +1.0,
			
			// FRONT FACE
			
			// Triangle (+z1)
			-1.0, -1.0, +1.0,
			-1.0, +1.0, +1.0,
			+1.0, +1.0, +1.0,
			
			// Triangle (+z2)
			-1.0, -1.0, +1.0,
			+1.0, +1.0, +1.0,
			+1.0, -1.0, +1.0
			
			
		]);
		
	}
	
	function onerror() {
		var body = document.body;
		clearChildren(body);
		body.insertBefore(createErrMsgNode("ERROR 404: Resources Not Found."), null);
	}
	
}


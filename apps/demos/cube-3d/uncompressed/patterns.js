
PatternCollection.prototype = Object.create(null);
window.patterncollection = new PatternCollection;

function PatternCollection() {
	'use strict';
	
	if (window.patterncollection) return;
	
	var patterncollection = this;
	
	main();
	
	function main() {
		implementation();
		creation();
	}
	
	function implementation() {
		Object.setPrototypeOf(PatternCollection.prototype, resources);
		Object.setPrototypeOf(Object.prototype, patterncollection);
	}
	
	function creation() {
		
		// front = clockwise, cull counter-clockwise
		// float cube_pattern[3 * 3 * 2 * 6];
		patterncollection.cube_pattern = new Float32Array([
			
			// LEFT FACE
			
			// Triangle (-x1)
			-1.0, -1.0, -1.0,
			-1.0, +1.0, +1.0,
			-1.0, -1.0, +1.0,
			
			// Triangle (-x2)
			-1.0, -1.0, -1.0,
			-1.0, +1.0, -1.0,
			-1.0, +1.0, +1.0,
			
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
	
}


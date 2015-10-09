
main();

function main() {
	'use strict';
	
	var allglobjs = new AllGLObjs(__main__, onerror);
	
	function __main__(allglobjs) {
		console.log("__main__ was called.");
	}
	
	function onerror(param) {
		console.warn("onerror was called.");
		console.log("param:", param);
		console.log("this:", this);
		console.log("__main__:", __main__);
	}
	
}


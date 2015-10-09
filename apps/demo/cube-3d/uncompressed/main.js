
main();

function main() {
	'use strict';
	
	var allglobjs = new AllGLObjs(__main__, onerror);
	
	function __main__(param) {
		console.log("__main__ was called.");
		console.log("param:", param);
		console.log("this:", this);
		console.log("__main__:", __main__);
	}
	
	function onerror(param) {
		console.warn("onerror was called.");
		console.log("param:", param);
		console.log("this:", this);
		console.log("__main__:", __main__);
	}
	
}


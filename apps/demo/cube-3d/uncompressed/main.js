
main(window);

function main(window) {
	'use strict';
	
	window.allglobjs = new AllGLObjs(__main__, onerror);
	
	function __main__(allglobjs) {
		
		
		
	}
	
	function onerror() {
		var body = document.body;
		clearChildren(body);
		body.insertBefore(createErrMsgNode("ERROR 404: Resources Not Found."), null);
	}
	
}



main();

function main() {
	'use strict';
	
	var allglobjs = new AllGLObjs(__main__, onerror);
	
	function __main__(allglobjs) {
		
		
		
	}
	
	function onerror() {
		var body = document.body;
		emptyNode(body);
		body.insertBefore(createErrMsgNode("ERROR 404: Resources Not Found."), null);
	}
	
}


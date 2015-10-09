
main();

function main() {
	'use strict';
	
	var allglobjs = new AllGLObjs(__main__, onerror);
	
	function __main__(allglobjs) {
		
	}
	
	function onerror() {
		var body = document.body;
		emptyNode(body);
		body.insertBefore(document_util.create({
			type: document_util.ELEMENT,
			tag: "div",
			attributes: {
				id: "error-message"
			},
			children: [
				"ERROR 404: Resources Not Found."
			]
		}), null);
	}
	
}


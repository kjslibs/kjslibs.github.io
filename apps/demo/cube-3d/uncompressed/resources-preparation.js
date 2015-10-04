
Resources.prototype = Object.create(null);
window.resources = new Resources(window, document, universe);

function Resources(window, document, universe, undefined) {
	'use strict';
	
	if (window.resources) return;
	
	var resources = this;
	
	main(kjsclasses);
	
	function main(kjsclasses) {
		Object.setPrototypeOf(kjsclasses._primitive_prototype, resources);
	}
	
}


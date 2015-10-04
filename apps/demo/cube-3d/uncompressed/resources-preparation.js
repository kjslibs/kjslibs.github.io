
Resources.prototype = Object.create(null);
window.resources = new Resources(window, document, universe);

function Resources(window, document, universe, undefined) {
	'use strict';
	
	if (window.resources) return;
	
	var resources = this;
	
	main(kjsclasses);
	
	function main(kjsclasses) {
		implementation();
	}
	
	function implementation() {
		Object.setPrototypeOf(Resources.prototype, universe);
		Object.setPrototypeOf(Object.prototype, resources);
	}
	
}



(function (window, undefined) {
	
	window.__badsupport = 0;
	
	(function (proto) {
		if (!proto.hasOwnProperty("currentScript")) {
			++window.__badsupport;
			Object.defineProperty(proto, "currentScript", {
				"get": function () {
					var scripts = this.getElementsByTagName("script");
					return scripts[scripts.length - 1];
				}
			});
		}
	})(Document.prototype);
	
	(function (proto) {
		if (!proto.find) {
			++window.__badsupport;
			proto.find = function (callback) {
				var result;
				this.some(function (element, index, array) {
					if (callback.call(element, index, array)) {
						result = element;
						return 1;
					}
				});
				return result;
			}
			Object.getOwnPropertySymbols = function () {
				return [];
			}
		}
	})(Array.prototype);
	
	if (!window.Symbol) {
		++window.__badsupport;
		var current = 0;
		window.Symbol = function (key) {
			var key = "@@{" + (key ? String(key) : "") + "}" + String.fromCharCode(current);
			++current;
			return {
				"toString": function () {
					return key;
				},
				__proto__: window.Symbol.prototype
			}
		}
	}
	
	if (!window.Map) {
		++window.__badsupport;
		window.Map = function () {
			this.__keyvals = 0;
		}
		window.Map.prototype = {
			"clear": function () {
				this.__keyvals.length = 0;
			},
			"delete": function (key) {
				return this.__keyvals.some(function (keyval, index, array) {
					if (keyval.key === key) {
						array.splice(index, 1);
						return true;
					}
					return false;
				});
			},
			"entries": NOTSUPPORTED,
			"forEach": function (callback) {
				var self = this;
				self.__keyvals.forEach(function (keyval) {
					callback(keyval.key, keyval.val, self);
				});
			},
			"get": function (key) {
				var keyval = this.__findKeyVal(key);
				if (keyval) {
					return keyval.val;
				}
			},
			"set": function (key, val) {
				var keyval = this.__findKeyVal(key);
				if (keyval) {
					keyval.val = val;
				} else {
					this.__keyvals.push(new MapKeyVal(key, val));
				}
				return this;
			},
			"values": NOTSUPPORTED,
			"__findKeyVal": function (key) {
				return this.__keyvals.find(function (keyval) {
					return keyval.key === key;
				});
			}
		}
		window.Map.prototype[Symbol.iterator] = NOTSUPPORTED;
	
		function MapKeyVal(key, val) {
			this.key = key;
			this.val = val;
		}
		
	}
	
	function NOTSUPPORTED() {
		throw new Error("This feature is not yet (and maybe never) supported.");
	}
	
})(window);


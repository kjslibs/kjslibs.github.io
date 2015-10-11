
Universe.prototype = Object.create(null); // Why is this necessary? Let's see [0] to find the answer.
window.universe = new Universe(window, document);

function Universe(window, document, undefined) {
	'use strict';
	
	if (window.universe) return;
	
	var universe = this;
	
	theBigBang();
	
	// The main function
	// Will be called from Universe
	function theBigBang() {
		initLibs();
		initFuncs();
		Object.setPrototypeOf(Universe.prototype, universe.kjsclasses._primitive_prototype);
		Object.setPrototypeOf(Object.prototype, universe); // [0]
	}
	
	// Will be called from theBigBang
	function initLibs() {
		var kjslib = universe.kjslib = _kJs_Initor();
		var kxmllib = universe.kxmllib = _kXml_Initor();
		var kanilib = universe.kanilib = _kAni_Initor();
		var keventlib = universe.keventlib = _kEvent_Initor();
		var kgraphlib = universe.kgraphlib = _kGraph_Initor();
		initClasses
			(kjslib, "kjsclasses")
			(kxmllib, "kxmlclasses")
			(kanilib, "kaniclasses")
			(keventlib, "keventclasses")
			(kgraphlib, "kgraphclasses");
	}
	
	// Will be called from initLibs
	function initClasses(lib, name) {
		universe[name] = new lib.ClassCollection();
		return initClasses; // some thing like: initClasses(a, b)(d, e)(g, h) instead of do them sepparately.
	}
	
	// Will be called from theBigBang
	function initFuncs() {
		
		var _call = Function.call; // it's 'Function.prototype.call' because 'Function' is a function
		var _array_ = Array.prototype;
		var _array_map_call = call.bind(_array_.map);
		
		universe.ONCE_EXECUTER = ONCE_EXECUTER;
		function ONCE_EXECUTER(func) {
			func = func.bind(undefined);
			return function (param) {
				var result = func(param);
				func = donothing;
				return result;
			}
		}
		
		universe.clearChildren = clearChildren;
		function clearChildren(node) {
			var childNodes = node.childNodes;
			while (childNodes.length) {
				node.removeChild(node.firstChild);
			}
		}
		
		universe.Matrix = Matrix;
		var _mat_key_arrayElement = Symbol("Matrix::symbols::arrayElement");
		var _mat_key_matrixElement = Symbol("Matrix::symbols::matrixElement");
		function Matrix(rows, cols, base) {
			var matrix = this;
			matrix.clone = clone;
			matrix.sub = sub;
			function clone() {
				return new Matrix(rows, cols, cloneArray(base));
			}
			function sub(firstrow, firstcol, rows, cols) {
				// continue from here...
			}
		}
		Matrix.prototype = new (function () {
			var proto = this;
			Object.setPrototypeOf(Matrix, proto);
			proto.create = create;
			proto.createSquare = createSquare;
			proto.createIdentity = createIdentity;
			proto.turnIdentity = turnIdentity;
			return proto;
			function create(rows, cols, base) {
				return new Matrix(rows, cols, base || new Float64Array(rows * cols));
			}
			function createSquare(size, base) {
				return create(size, size, base);
			}
			function createIdentity(size, base) {
				var result = createSquare(size, base);
				turnIdentity(result, size);
				return result;
			}
			function turnIdentity(matrix, size) {
				var base = matrix.base;
				var i = 0, l = size * size;
				while (i != l) {
					base[_mat_key_arrayElement](i).set(1);
					++i;
					var j = size;
					for ( ; j; --j) {
						base[_mat_key_arrayElement](i).set(0);
						++i;
					}
				}
			}
		})();
		_array_[_mat_key_arrayElement] = (function () {
			var proto = ArrayElementAccessor.prototype = {
				get: function () {
					return this.array[this.index];
				},
				set: function (value) {
					this.array[this.index] = value;
				}
			};
			Object.defineProperty(proto, "value", proto);
			return function (index) {
				return new ArrayElementAccessor(this, index);
			}
			function ArrayElementAccessor(array, index) {
				this.array = array;
				this.index = index;
			}
		})();
		
		universe.cloneArray = cloneArray;
		function cloneArray(array) {
			return _array_map_call(array, returnFirstArg);
		}
		
		universe.returnFirstArg = returnFirstArg;
		function returnFirstArg(arg) {
			return arg;
		}
		
		universe.donothing = donothing;
		function donothing () {}
		
	}
	
}


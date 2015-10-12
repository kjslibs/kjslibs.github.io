
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
		var _array_map_call = _call.bind(_array_.map);
		var _arr_key_clone = Symbol("Array::clone");
		
		universe[_arr_key_clone] = function () {
			return _array_map_call(this, returnFirstArg);
		};
		
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
			matrix.rows = rows;
			matrix.cols = cols;
			matrix.base = base;
			matrix.clone = clone;
			matrix.sub = sub;
			matrix[_mat_key_matrixElement] = createElementAccessor;
			function clone() {
				return new Matrix(rows, cols, base[_arr_key_clone]());
			}
			function sub(firstrow, firstcol, rows, cols) {
				var parent = this;
				var first = parent[_mat_key_matrixElement](firstrow, firstcol);
				var proto = SubMatrix.prototype = {
					parent: parent,
					first: first,
					__proto__: parent
				};
				proto._kJs_setConst(_mat_key_matrixElement, createElementAccessor);
				Object.freeze(proto);
				return new SubMatrix();
				function SubMatrix() {
					Object.freeze(this);
				}
				function createElementAccessor(rowId, colId) {
					var baseaccessor = parent[_mat_key_matrixElement](rowId + firstrow, colId + firstcol);
					ElementAccessor.prototype = {
						rowId: rowId,
						colId: colId,
						__proto__: baseaccessor
					};
					return new ElementAccessor();
					function ElementAccessor() {
						Object.freeze(this);
					}
				}
			}
			function createElementAccessor(i, j) {
				var baseaccessor = base[_mat_key_arrayElement](i * rows + j);
				var accessor = {
					matrix: matrix,
					rowId: i,
					colId: j,
					get: baseaccessor.get.bind(baseaccessor),
					set: baseaccessor.set.bind(baseaccessor)
				};
				Object.defineProperty(accessor, "value", accessor);
				Object.freeze(accessor);
				return accessor;
			}
		}
		Matrix.prototype = new (function () {
			var proto = this;
			Object.setPrototypeOf(Matrix, proto);
			proto.symbols = Object.freeze({
				arrayElement: _mat_key_arrayElement,
				matrixElement: _mat_key_matrixElement
			});
			proto.create = create;
			proto.createSquare = createSquare;
			proto.createIdentity = createIdentity;
			proto.turnIdentity = turnIdentity;
			proto = Object.create(proto);
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
		universe[_mat_key_arrayElement] = (function () {
			var proto = PropertyAccessor.prototype = {
				get: function () {
					return this.object[this.name];
				},
				set: function (value) {
					this.object[this.name] = value;
				}
			};
			Object.defineProperty(proto, "value", proto);
			return function (index) {
				return new PropertyAccessor(this, index);
			}
			function PropertyAccessor(object, name) {
				this.object = object;
				this.name = name;
				Object.freeze(this);
			}
		})();
		
		universe.returnFirstArg = returnFirstArg;
		function returnFirstArg(arg) {
			return arg;
		}
		
		universe.donothing = donothing;
		function donothing () {}
		
	}
	
}


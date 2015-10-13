
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
			};
		}
		
		universe.clearChildren = clearChildren;
		function clearChildren(node) {
			var childNodes = node.childNodes;
			while (childNodes.length) {
				node.removeChild(node.firstChild);
			}
		}
		
		var Matrix = universe.Matrix = (function () {
			/*
				
				Matrix is an array (iterable objecy) which store matrix column next to column
				
				The very first element is indexed (0, 0), placed at array[first + 0]
				
				The element at (i, j) of Mat[m, n] is placed at array[getArrayIndex(first, i, j, m, n)]
				
				    | a d g |
				Mat | b e h | => Array [a, b, c, d, e, f, g, h, i]
				    | c f i |
				
				Matrix's size will be determine when call matrix calculating function
				
			*/
			var proto = {
				createCalculatingContext: createCalculatingContext,
				__proto__: {
					add: add,
					createIdentity: createIdentity,
					scalarMultiply: scalarMultiply,
					matrixMultiply: matrixMultiply,
					getArrayIndex: getArrayIndex
				}
			};
			return Object.create(proto);
			function createCalculatingContext() {
				// continue from here...
			}
			function MatrixCalculatingContext() {
				// continue from here...
			}
			function add(matR, startR, matA, startA, matB, startB, elements) {
				var limR = startR + elements;
				for ( ; startR != limR; ++startR, ++startA, ++startB) {
					matR[startR] = matA[startA] + matB[startB];
				}
				return add;
			}
			function createIdentity(matR, startR, size) {
				for (var i = size; ; --i) {
					matR[startR] = 1;
					++startR;
					if (i == 1) {
						break;
					}
					for (var j = size; j; --j) {
						matR[startR] = 0;
						++startR;
					}
				}
				return createIdentity;
			}
			function scalarMultiply(matR, startR, matA, startA, elements, factor) {
				var limR = startR + elements;
				for ( ; startR != limR; ++startR, ++startA) {
					matR[startR] = factor * matA[startA];
				}
				return scalarMultiply;
			}
			function matrixMultiply(matR, startR, matA, startA, matB, startB, rowsAR, colsArowsB, colsBR) {
				for (var i = 0; i != rowsAR; ++i) {
					for (var j = 0; j != colsBR; ++j) {
						var total = 0;
						for (var k = 0; k != colsArowsB; ++k) {
							total
								+= matA[getArrayIndex(startA, i, k, rowsAR, colsArowsB)]
								 * matB[getArrayIndex(startB, k, j, colsArowsB, colsBR)]
							;
						}
						matR[getArrayIndex(startR, i, j, rowsAR, colsBR)] = total;
					}
				}
				return matrixMultiply;
			}
			function getArrayIndex(first, rowId, colId, rows, cols) {
				return first + rowId + rows * colId;
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


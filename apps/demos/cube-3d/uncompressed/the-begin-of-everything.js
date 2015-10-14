
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
					makeIdentity: makeIdentity,
					scalarMultiply: scalarMultiply,
					matrixMultiply: matrixMultiply,
					subMatrix: subMatrix,
					assembleRows: assembleRows,
					assembleCols: assembleCols,
					getArrayIndex: getArrayIndex
				}
			};
			MatrixCalculatingContext.prototype = {
				add: function (matA, startA, matB, startB, elements) {
					var context = this;
					add(context.matR, context.startR, matA, startA, matB, startB, elements);
					return context;
				},
				makeIdentity: function (size) {
					var context = this;
					makeIdentity(context.matR, context.startR, size);
					return context;
				},
				scalarMultiply: function (matA, startA, elements, factor) {
					var context = this;
					scalarMultiply(context.matR, context.startR, matA, startA, elements, factor);
					return context;
				},
				matrixMultiply: function (matA, startA, matB, startB, rowsAR, colsArowsB, colsBR) {
					var context = this;
					matrixMultiply(context.matR, context.startR, matA, startA, matB, startB, rowsAR, colsArowsB, colsBR);
					return context;
				},
				subMatrix: function (rowsR, colsR, matA, startA, rowsA, colsA, firstRowIdA, firstColIdA) {
					var context = this;
					subMatrix(context.matR, context.startR, rowsR, colsR, matA, startA, colsA, rowsA, firstRowIdA, firstColIdA);
					return context;
				},
				assembleRows: function (matA, startA, rowsA, matB, startB, rowsB, colsABR) {
					var context = this;
					assembleRows(context.matR, context.startR, matA, startA, rowsA, matB, startB, rowsB, colsABR);
					return context;
				},
				assembleCols: function (matA, startA, colsA, matB, startB, colsB, rowsABR) {
					var context = this;
					assembleCols(context.matR, context.startR, matA, startA, colsA, matB, startB, colsB, rowsABR);
					return context;
				},
				__proto__: proto
			};
			return Object.create(proto);
			function createCalculatingContext(matR, startR) {
				return new MatrixCalculatingContext(matR, startR);
			}
			function MatrixCalculatingContext(matR, startR) {
				this.matR = matR;
				this.startR = startR;
			}
			function add(matR, startR, matA, startA, matB, startB, elements) {
				var limR = startR + elements;
				for ( ; startR != limR; ++startR, ++startA, ++startB) {
					matR[startR] = matA[startA] + matB[startB];
				}
				return add;
			}
			function makeIdentity(matR, startR, size) {
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
				return makeIdentity;
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
			function subMatrix(matR, startR, rowsR, colsR, matA, startA, rowsA, colsA, firstRowIdA, firstColIdA) {
				for (var i = 0; i != rowsR; ++i) {
					for (var j = 0; j != colsR; ++j) {
						matR[getArrayIndex(startR, i, j, rowsR, colsR)]
						 = matA[getArrayIndex(startA, firstRowIdA + i, firstColIdA + j, rowsA, colsA)];
					}
				}
				return subMatrix;
			}
			function assembleRows(matR, startR, matA, startA, rowsA, matB, startB, rowsB, colsABR) {
				subMatrix(matR, startR, rowsA, colsABR, matA, startA, rowsA, colsABR, 0, 0);
				subMatrix(matR, getArrayIndex(startR, rowsA - 1, colsABR, rowsB), rowsB, colsABR, matB, startB, rowsB, colsABR, 0, 0);
				return assembleRows;
			}
			function assembleCols(matR, startR, matA, startA, colsA, matB, startB, colsB, rowsABR) {
				subMatrix(matR, startR, rowsABR, colsA, matA, startA, rowsABR, colsA, 0, 0);
				subMatrix(matR, getArrayIndex(startR, rowsABR - 1, colsA, rowsABR), rowsABR, colsB, matB, startB, rowsABR, colsB, 0, 0);
				return assembleCols;
			}
			function getArrayIndex(first, rowId, colId, rows) {
				return first + rowId + rows * colId;
			}
		})();
		
		universe.createMethodAdder = createMethodAdder;
		function createMethodAdder(object) {
			return function addMethod(name, method) {
				object[name] = method;
				Object.setPrototypeOf(method, object);
				return addMethod;
			}
		}
		
		universe.donothing = donothing;
		function donothing () {}
		
	}
	
}


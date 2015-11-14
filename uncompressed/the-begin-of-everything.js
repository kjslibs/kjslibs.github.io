
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
				__proto__: (function () {
					var proto = {
						getArrayIndex: getArrayIndex,
						toString: function () {
							return "Matrix {}"
						}
					};
					createMethodAdder(proto)
						("add", add)
						("makeIdentity", makeIdentity)
						("makeRotationMatrix", makeRotationMatrix)
						("scalarMultiply", scalarMultiply)
						("matrixMultiply", matrixMultiply)
						("subMatrix", subMatrix)
						("assembleRows", assembleRows)
						("assembleCols", assembleCols)
						("copyMatrix", copyMatrix)
					;
					return proto;
				})()
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
				makeRotationMatrix: function (rowsR, theta, rotAxeP, rotAxeN) {
					var context = this;
					makeRotationMatrix(context.matR, context.startR, rowsR, theta, rotAxeP, rotAxeN);
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
				copyMatrix: function (rowsR, colsR, subTargetFirstRow, subTargetFirstCol, matA, startA, rowsA, colsA, subSourceFirstRow, subSourceFirstCol, subRows, subCols) {
					var context = this;
					copyMatrix(context.matR, context.startR, rowsR, colsR, subTargetFirstRow, subTargetFirstCol, matA, startA, rowsA, colsA, subSourceFirstRow, subSourceFirstCol, subRows, subCols);
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
			function makeRotationMatrix(matR, startR, rowsR, theta, rotAxeP, rotAxeN) {
				var cosTheta = Math.cos(theta);
				var sinTheta = Math.sin(theta);
				matR[getArrayIndex(startR, rotAxeP, rotAxeP, rowsR)] = +cosTheta;
				matR[getArrayIndex(startR, rotAxeN, rotAxeN, rowsR)] = +cosTheta;
				matR[getArrayIndex(startR, rotAxeP, rotAxeN, rowsR)] = -sinTheta;
				matR[getArrayIndex(startR, rotAxeN, rotAxeP, rowsR)] = +sinTheta;
				return makeRotationMatrix;
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
						matR[getArrayIndex(startR, i, j, rowsR)]
						 = matA[getArrayIndex(startA, firstRowIdA + i, firstColIdA + j, rowsA, colsA)];
					}
				}
				return subMatrix;
			}
			function assembleRows(matR, startR, matA, startA, rowsA, matB, startB, rowsB, colsABR) {
				var rowsR = rowsA + rowsB;
				copyMatrix
					(matR, startR, rowsR, colsABR, 0, 0, matA, startA, rowsA, colsABR, 0, 0, rowsA, colsABR)
					(matR, startR, rowsR, colsABR, rowsA, 0, matB, startB, rowsB, colsABR, 0, 0, rowsB, colsABR)
				;
				return assembleRows;
			}
			function assembleCols(matR, startR, matA, startA, colsA, matB, startB, colsB, rowsABR) {
				var colsR = colsA + colsB;
				copyMatrix
					(matR, startR, rowsABR, colsR, 0, 0, matA, startA, rowsABR, colsA, 0, 0, rowsABR, colsA)
					(matR, startR, rowsABR, colsR, 0, colsA, matB, startB, rowsABR, colsB, 0, 0, rowsABR, colsB)
				;
				return assembleCols;
			}
			function copyMatrix(matR, startR, rowsR, colsR, subTargetFirstRow, subTargetFirstCol, matA, startA, rowsA, colsA, subSourceFirstRow, subSourceFirstCol, subRows, subCols) {
				var subTargetLastRow = subTargetFirstRow + subRows;
				var subTargetLastCol = subTargetFirstCol + subCols;
				var subSourceLastRow = subSourceFirstRow + subRows;
				var subSourceLastCol = subSourceFirstCol + subCols;
				for (var i = subTargetFirstRow, ii = subSourceFirstRow; i != subTargetLastRow; ++i, ++ii) {
					for (var j = subTargetFirstCol, jj = subSourceFirstCol; j != subTargetLastCol; ++j, ++jj) {
						matR[getArrayIndex(startR, i, j, rowsR)]
						 = matA[getArrayIndex(startA, ii, jj, rowsA, colsA)];
					}
				}
				return copyMatrix;
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


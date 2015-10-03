
(function Init(window, Object, Function, Map, Set, Math) {
	'use strict';
	
	//first initialization
	var executing_script = window.document.currentScript;
	var kjslibinit = window[executing_script.getAttributeNS(null, "kjslib-keyword") || "_kJs_Initor"];
	if(!kjslibinit) throw new Error("-k-js-abstract.js is required.");
	// var kgraphlibinit = window[executing_script.getAttributeNS(null, "kgraphlib-keyword") || "_kGraph_Initor"]; // considering necessarility
	// if(!kgraphlibinit) throw new Error("-k-graph.js is required."); // considering necessarility
	var k2dlibkeyword = executing_script.getAttributeNS(null, "k2dlib-keyword") || "_k2d_Initor";
	var kjslib = new kjslibinit();
	var symbols = kjslib.SymbolCollection();
	var utils = kjslib.FunctionCollection();
	var _create_new = Object.create;
	var _def_pro = Object.defineProperty;
	var _get_proto = Object.getPrototypeOf;
	var _kjsclasses = kjslib.ClassCollection();
	var _public_proto = _create_new(_kjsclasses._primitive_prototype);
	var _local_global = _create_new(_public_proto);
	kjslib.ReleaseMethods(_public_proto);
	kjslib.ReleaseMethods(_local_global);
	
	//local variables and private functions
	var _function_ = Function.prototype;
	var _function_call = _function_.call;
	var _function_bind = _function_.bind;
	var _function_callbind = _function_bind.bind(_function_call);
	/* var _kJs_Republic = _kjsclasses.Republic; // considering necessarility...
	var _kJs_Civilian = _kjsclasses.Civilian; */
	var shared_toString = utils.shared_toString;
	var is_extensible_object = utils.is_extensible_object;
	var is_valid_handler = utils.is_valid_handler;
	var freeze = Object.freeze;
	var _setConst = _local_global._kJs_setConst;
	var _setConst_bind = _function_bind.bind(_setConst);
	var __setConst = utils.__setConst;
	var __addSetConsts = utils.__addSetConsts;
	var __executePropertyMappers = utils.__executePropertyMappers;
	var __clearAllPropertyMappers = utils.__clearAllPropertyMappers;
	var _map_ = Map.prototype;
	var _set_ = Set.prototype;
	var _map_get = _map_.get;
	var _map_set = _map_.set;
	var _addSetConsts = _local_global._kJs_addSetConsts;
	var _executePropertyMappers = _local_global._kJs_executePropertyMappers;
	var _clearAllPropertyMappers = _local_global._kJs_clearAllPropertyMappers;
	var _math_cos = Math.cos;
	var _math_sin = Math.sin;
	var _math_PI = Math.PI;
	var _p = _create_new(null);
	var _g = _create_new(null);
	var _r = _create_new(_public_proto);
	
	//keys as symbols
	var _key_iterator = Symbol.iterator;
	var _key_create = symbols.create;
	var _key_SymbolCollection = symbols.SymbolCollection;
	var _key_FunctionCollection = symbols.FunctionCollection;
	var _key_ReleaseClasses = symbols.ReleaseClasses;
	var _key_ClassCollection = symbols.ClassCollection;
	var _key_createdInstance = symbols.createdInstance;
	var _key_primitivePrototype = symbols.primitivePrototype;
	
	var _allfunc = freeze({
		_prvEnsureConstructor: prvEnsureConstructor,
		_prvCheckConstructorInstance: prvCheckConstructorInstance,
		__proto__: null
	});
	
	/* MAIN PART */
	
	//UTILITIES OF UTILITIES
	
	//constructor utilities
	var _constructor_object_map = new Map(); //map: function constructor => set(object instance)
	var _object_info_map = new Map(); //map: object instance => object core
	var prvLinkConstructorSet = _map_set.bind(_constructor_object_map);
	var prvGetConstructorObject = _map_get.bind(_constructor_object_map);
	var prvLinkObjectCore = _map_set.bind(_object_info_map);
	var prvGetObjectCore = _map_get.bind(_object_info_map);
	function prvRegisterConstructor(constructor, proto) {
		prvLinkConstructorSet(constructor, new Set());
		constructor.prototype = proto;
	}
	function prvConstructorCorrection(constructor, object) {
		//prvEnsureConstructor(constructor, object, "Illegal invocation. 'new' operator is required.");
		var set = _constructor_object_map.get(constructor);
		if (set.has(object))
			throw new TypeError("Can't re-construct object. 'new' operator is required.");
		set.add(object);
	}
	function prvEnsureConstructor(constructor, object, error) {
		if (!prvCheckConstructorInstance(constructor, object))
			throw new TypeError(error);
	}
	function prvCheckConstructorInstance(constructor, object) {
		var set = prvGetConstructorObject(constructor);
		return set && set.has(object);
	}
	
	//object utilities
	var DescriptorGetterSetter1os3b = utils._DescriptorGetterSetter1os3b;
	var setconst1oVs1v = utils._setconst1oVs1v;
	var setmtdfromcore2o1s = utils._setmtdfromcore2o1s;
	var setmtdfromcore2os = utils._setmtdfromcore2os;
	var setkeytokey1o2s3b = utils._setkeytokey1o2s3b;
	var setkeytokey1o2s3b_inheritable = utils._setkeytokey1o2s3b_inheritable;
	var defgettersetter1o2s = utils._defgettersetter1o2s;
	
	//CLASSES
	
	//shape creation context
	var _setmacros_shape_creation_context = (function () {
		return function (setconst) {
			setconstfreeze("TRIANGLE_TRIANGLE", [0, 1, 2]);
			setconstfreeze("TRIANGLE_TRIANGLE_STRIP_BEGIN", [0, 1, 2]);
			setconstfreeze("TRIANGLE_TRIANGLE_STRIP_NEXT", [0]);
			setconstfreeze("TRIANGLE_TRIANGLE_FAN_BEGIN", [0, 1, 2]);
			setconstfreeze("TRIANGLE_TRIANGLE_FAN_NEXT", [0]);
			setconstfreeze("QUADRANGLE_TRIANGLE", [0, 1, 3, 1, 2, 3]);
			setconstfreeze("QUADRANGLE_TRIANGLE_STRIP_BEGIN", [0, 1, 3, 2]);
			setconstfreeze("QUADRANGLE_TRIANGLE_STRIP_NEXT", [0, 1]);
			setconstfreeze("QUADRANGLE_TRIANGLE_FAN_BEGIN", [0, 1, 2, 3]);
			setconstfreeze("QUADRANGLE_TRIANGLE_FAN_NEXT", [0, 1]);
			setconst("POLYGON_MATRIX_MAKER", POLYGON_MATRIX_MAKER);
			setconst("makeTangentialPolygonOfCircle", makeTangentialPolygonOfCircle);
			setconst("makeCyclicPolygonOfCircle", makeCyclicPolygonOfCircle);
			setconst("BuiltInVertexArrayBuffer", BuiltInVertexArrayBuffer);
			setconst("BuiltInVertexMap", BuiltInVertexMap);
			function setconstfreeze(property_name, array) {
				setconst(property_name, freeze(array));
			}
		};
		function POLYGON_MATRIX_MAKER(buffer, first, offset) {
			first >>= 0;
			offset >>= 0;
			if (isNaN(first) || first < 0)
				throw new RangeError("Parameter 'first' must be an unsigned integer.");
			if (isNaN(offset) || offset < 0)
				throw new RangeError("Parameter 'offset' must be an unsigned integer.");
			var current_index;
			++offset;
			reset();
			var mapper = function (x, y) {
				push(x);
				push(y);
			};
			mapper.toString = shared_toString;
			mapper.user_manuals = [
				"function<void, void, float, float> mapper;",
				"Use as parameter 'mapper' for calling 'ShapeCreationContext.makeTangentialPolygonOfCircle' or 'ShapeCreationContext.makeCyclicPolygonOfCircle'",
				"Use 'mapper.reset()' to reset pointer to 'first'"
			];
			__setConst(mapper, "reset", reset);
			return mapper;
			function reset() {
				current_index = first;
			}
			function push(element) {
				buffer[current_index] = element;
				buffer.length = current_index += offset;
			}
		}
		POLYGON_MATRIX_MAKER.toString = shared_toString;
		POLYGON_MATRIX_MAKER.user_manuals = [
			"function<void, void, float, float> POLYGON_MATRIX_MAKER([[out]] sequence<float> buffer, optional uint first = 0, optional uint offset = 0)"
		];
		function makeTangentialPolygonOfCircle(vertices_count, mapper) {
			return _makePolygonForCircle(vertices_count, mapper, true);
		}
		function makeCyclicPolygonOfCircle(vertices_count, mapper) {
			return _makePolygonForCircle(vertices_count, mapper, false);
		}
		function _makePolygonForCircle(vertices_count, mapper, tangential) {
			vertices_count >>= 0;
			if (isNaN(vertices_count) || vertices_count < 3)
				throw new RangeError("Invalid vertices quantity.");
			if (typeof mapper !== "function")
				throw new TypeError("Parameter 'mapper' must be a function.");
			__makePolygonForCircle(vertices_count, mapper, tangential);
		}
		function __makePolygonForCircle(vertices_count, mapper, tangential) {
			var alpha = _math_PI - _math_PI / vertices_count;
			var used_mapper;
			if (tangential) {
				var r = 1 / _math_cos(alpha);
				used_mapper = function (x, y) {
					return mapper(r * x, r * y);
				};
			} else used_mapper = mapper;
			var i = vertices_count;
			for ( ; i; --i) {
				var theta = i * alpha;
				if (used_mapper(_math_cos(theta), _math_sin(theta))) return;
			}
		}
		function BuiltInVertexArrayBuffer(base, dim_count) {
			if (!is_extensible_object(this)) return new BuiltInVertexArrayBuffer(base);
			dim_count >>= 0;
			if (isNaN(dim_count) || dim_count < 1)
				throw new RangeError("Invalid dimensions quantity.");
			var setconst = _setConst_bind(this);
			setconst("base", base);
			setconst("dimCount", dim_count);
			setconst("set", function (index, vertex) {
				index *= dim_count;
				var l = index + dim_count;
				var j = vertex.index;
				var input = vertex.base;
				for ( ; index != l; ++index, ++j)
					base[index] = input[j];
			});
			setconst("write", function (target, first, offset) {
				++offset;
				var i = 0;
				var l = base.length;
				for ( ; i != l; ++i, first += offset)
					target[first] = base[i];
			});
		}
		BuiltInVertexArrayBuffer.prototype = (function (proto) {
			var setconst = _setConst_bind(proto);
			setconst("base", null);
			setconst("set", null);
			setconst("write", null);
			return proto;
		})(_create_new(_public_proto));
		function BuiltInVertexMap(base, first, dim_count) {
			if (!is_extensible_object(this)) return new BuiltInVertexMap(base);
			var setconst = _setConst_bind(this);
			function iterator() {
				return new BuiltInVertexIterator(base, first, dim_count);
			}
			setconst("base", base);
			setconst("dimCount", dim_count);
			setconst(_key_iterator, iterator);
		}
		BuiltInVertexMap.prototype = (function (proto) {
			var setconst = _setConst_bind(proto);
			setconst("base", null);
			setconst(_key_iterator, null);
			return proto;
		})(_create_new(_public_proto));
		function BuiltInVertexIterator(base, index, dim_count) {
			this.next = function () {
				var result = new BuiltInVertexIteratingResult(base, index);
				index += dim_count;
				return result;
			};
		}
		BuiltInVertexIterator.prototype = (function (proto) {
			this.next = null;
			return proto;
		})(_create_new(null));
		function BuiltInVertexIteratingResult(base, index) {
			this.value = new BuiltInVertexIteratingResultValue(base, index);
		}
		BuiltInVertexIteratingResult.prototype = (function (proto) {
			this.value = undefined;
			return proto;
		})(_create_new(null));
		function BuiltInVertexIteratingResultValue(base, index) {
			this.base = base;
			this.index = index;
		}
		BuiltInVertexIteratingResultValue.prototype = (function (proto) {
			proto.base = proto.index = null;
			return proto;
		})(_create_new(null));
	})();
	_setmacros_shape_creation_context(_setConst_bind(ShapeCreationContext));
	function ShapeCreationContext(buffer) {
		if (!is_extensible_object(this)) return new ShapeCreationContext(buffer);
		if (typeof buffer !== "object" || !buffer)
			throw new TypeError("Parameter 'buffer' must be an object");
		var shape_creation_context = this;
		function makeVertices(count, vertices, ordinal) {
			count >>= 0;
			if (isNaN(count) || count < 0)
				throw new TypeError("Parameter 'count' must be an unsigned integer.");
			if (typeof vertices !== "object")
				throw new TypeError("Parameter 'vertices' must be an object.");
			if (typeof ordinal !== "object")
				throw new TypeError("Parameter 'ordinal' must be an object.");
			var d = ordinal.length; // vertices per shape
			var i = 0;
			var l = d * count;
			var iterator = vertices[_key_iterator]();
			for ( ; i != l; i += d) {
				ordinal.forEach(mapper);
			}
			function mapper(ordinal_position) {
				buffer.set(ordinal_position + i, iterator.next().value);
			}
		}
		var setconst = _setConst_bind(shape_creation_context);
		setconst("buffer", buffer);
		setconst("makeVertices", makeVertices);
		setconst(_key_create, makeVertices);
	}
	prvRegisterConstructor(ShapeCreationContext, (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("buffer", null);
		setconst("makeVertices", null);
		setconst(_key_create, null);
		_setmacros_shape_creation_context(setconst);
		return proto;
	})(_create_new(_public_proto)));
	_g._k2d_ShapeCreationContext = _r.ShapeCreationContext = ShapeCreationContext;
	ShapeCreationContext.toString = shared_toString;
	ShapeCreationContext.user_manuals = [
		"constructor ShapeCreationContext(VertexArrayBuffer buffer)"
	];
	
	/* RELEASE */
	
	//release functions
	var created_function_collection = null;
	function FunctionCollection() {
		return created_function_collection || this;
	}
	FunctionCollection.prototype = _allfunc;
	FunctionCollection.toString = shared_toString;
	FunctionCollection.user_manuals = [
		"constructor Initor::FunctionCollection();"
	];
	FunctionCollection[_key_createdInstance] = FunctionCollection.created = created_function_collection = new FunctionCollection();
	freeze(FunctionCollection);
	
	//release classes and constructors
	var ReleaseClasses_set = new Set();
	function ReleaseClasses(object) {
		if(!is_extensible_object(object))
			throw new TypeError("arguments[0] must be extensible.");
		if (ReleaseClasses_set.has(object)) return this;
		ReleaseClasses_set.add(object);
		__addSetConsts(object, _g);
		__executePropertyMappers(_g);
		__clearAllPropertyMappers(_g);
		__setConst(object, "_k2d_primitivePrototype", _public_proto);
		return this;
	}
	ReleaseClasses.toString = shared_toString;
	ReleaseClasses.user_manuals = [
		"constructor Initor::ReleaseClasses(Object object);"
	];
	
	//release classes and constructor without prefix
	_r._primitive_prototype = _r[_key_primitivePrototype] = _public_proto;
	var created_class_collection = null;
	function ClassCollection() {
		return created_class_collection || this;
	}
	ClassCollection.prototype = freeze(_r);
	ClassCollection.toString = shared_toString;
	ClassCollection.user_manuals = [
		"constructor Initor::ClassCollection();"
	];
	ClassCollection[_key_createdInstance] = ClassCollection.created = created_class_collection = freeze(new ClassCollection());
	freeze(ClassCollection);
	
	var initialized = null;
	function Initor() {
		if (initialized) return initialized;
		var setconst = _setConst_bind(this);
		setconst("FunctionCollection", FunctionCollection);
		setconst(_key_FunctionCollection, FunctionCollection);
		ReleaseClasses(this);
		setconst("ReleaseClasses", ReleaseClasses);
		setconst(_key_ReleaseClasses, ReleaseClasses);
		setconst("ClassCollection", ClassCollection);
		setconst(_key_ClassCollection, ClassCollection);
		return initialized = this;
	}
	window[k2dlibkeyword] = Initor;
	Initor.toString = shared_toString;
	Initor.user_manuals = [
		"constructor Initor();"
	];
	Initor.prototype = _create_new(_public_proto);
	Initor[_key_createdInstance] = Initor.created = initialized = freeze(new Initor());
	freeze(Initor);
	
})(window, Object, Function, Map, Set, Math);
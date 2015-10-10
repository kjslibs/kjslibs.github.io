
(function Init(window, Object, Function, Symbol, Map, Set, Array, WebGLRenderingContext, WebGLProgram, WebGLShader) {
	'use strict';
	
	/* INITIALIZATION */
	
	//first initialization
	var undefined; // locally 'undefined' is necessarry because of UglifyJS
	var executing_script = window.document.currentScript;
	var kjslibinit = window[executing_script.getAttributeNS(null, "kjslib-keyword") || "_kJs_Initor"];
	if(!kjslibinit) throw new Error("-k-js-abstract.js is required.");
	var kgraphlibkeyword = executing_script.getAttributeNS(null, "kgraphlib-keyword") || "_kGraph_Initor";
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
	var _function_bindbind = _function_bind.bind(_function_bind);
	var _function_callcall = _function_call.bind(_function_call);
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
	var _array_ = Array.prototype;
	var _gl_ = WebGLRenderingContext.prototype;
	var _program_ = WebGLProgram.prototype;
	var _shader_ = WebGLShader.prototype;
	var _map_get = _map_.get;
	var _map_set = _map_.set;
	var _set_add = _set_.add;
	var _set_delete = _set_.delete;
	var _set_has = _set_.has;
	var _set_forEach = _set_.forEach;
	var __set_forEach = _function_callbind(_set_forEach);
	var _array_forEach = _array_.forEach;
	var __array_forEach = _function_callbind(_array_forEach);
	var _gl_createProgram = _gl_.createProgram;
	var _$gl_createProgram = _function_bindbind(_gl_createProgram);
	var _gl_createShader = _gl_.createShader;
	var _$gl_createShader = _function_bindbind(_gl_createShader);
	var _gl_createBuffer = _gl_.createBuffer;
	var _$gl_createBuffer = _function_bindbind(_gl_createBuffer);
	var _gl_linkProgram = _gl_.linkProgram;
	var _$gl_linkProgram = _function_bindbind(_gl_linkProgram);
	var _gl_useProgram = _gl_.useProgram;
	var _$gl_useProgram = _function_bindbind(_gl_useProgram);
	var _gl_getShaderSource = _gl_.getShaderSource;
	var _$gl_getShaderSource = _function_bindbind(_gl_getShaderSource);
	var _gl_shaderSource = _gl_.shaderSource;
	var _$gl_shaderSource = _function_bindbind(_gl_shaderSource);
	var _gl_compileShader = _gl_.compileShader;
	var _$gl_compileShader = _function_bindbind(_gl_compileShader);
	var _gl_attachShader = _gl_.attachShader;
	var _$gl_attachShader = _function_bindbind(_gl_attachShader);
	var _gl_detachShader = _gl_.detachShader;
	var _$gl_detachShader = _function_bindbind(_gl_detachShader);
	var _gl_getAttribLocation = _gl_.getAttribLocation;
	var _$gl_getAttribLocation = _function_bindbind(_gl_getAttribLocation);
	var _gl_getUniformLocation = _gl_.getUniformLocation;
	var _$gl_getUniformLocation = _function_bindbind(_gl_getUniformLocation);
	var _gl_getUniform = _gl_.getUniform;
	var _$gl_getUniform = _function_bindbind(_gl_getUniform);
	var _gl_getParameter = _gl_.getParameter;
	var _$gl_getParameter = _function_bindbind(_gl_getParameter);
	var _gl_getProgramParameter = _gl_.getProgramParameter;
	var _$gl_getProgramParameter = _function_bindbind(_gl_getProgramParameter);
	var _gl_getProgramInfoLog = _gl_.getProgramInfoLog;
	var _$gl_getProgramInfoLog = _function_bindbind(_gl_getProgramInfoLog);
	var _gl_getShaderParameter = _gl_.getShaderParameter;
	var _$gl_getShaderParameter = _function_bindbind(_gl_getShaderParameter);
	var _gl_getShaderInfoLog = _gl_.getShaderInfoLog;
	var _$gl_getShaderInfoLog = _function_bindbind(_gl_getShaderInfoLog);
	var _gl_deleteProgram = _gl_.deleteProgram;
	var _$gl_deleteProgram = _function_bindbind(_gl_deleteProgram);
	var _gl_deleteShader = _gl_.deleteShader;
	var _$gl_deleteShader = _function_bindbind(_gl_deleteShader);
	var _gl_deleteBuffer = _gl_.deleteBuffer;
	var _$gl_deleteBuffer = _function_bindbind(_gl_deleteBuffer);
	var _gl_enableVertexAttribArray = _gl_.enableVertexAttribArray;
	var _$gl_enableVertexAttribArray = _function_bindbind(_gl_enableVertexAttribArray);
	var _gl_vertexAttribPointer = _gl_.vertexAttribPointer;
	var _$gl_vertexAttribPointer = _function_bindbind(_gl_vertexAttribPointer);
	var _gl_uniform1f = _gl_.uniform1f;
	var _$gl_uniform1f = _function_bindbind(_gl_uniform1f);
	var _gl_uniform2f = _gl_.uniform2f;
	var _$gl_uniform2f = _function_bindbind(_gl_uniform2f);
	var _gl_uniform3f = _gl_.uniform3f;
	var _$gl_uniform3f = _function_bindbind(_gl_uniform3f);
	var _gl_uniform4f = _gl_.uniform4f;
	var _$gl_uniform4f = _function_bindbind(_gl_uniform4f);
	var _gl_uniform1i = _gl_.uniform1i;
	var _$gl_uniform1i = _function_bindbind(_gl_uniform1i);
	var _gl_uniform2i = _gl_.uniform2i;
	var _$gl_uniform2i = _function_bindbind(_gl_uniform2i);
	var _gl_uniform3i = _gl_.uniform3i;
	var _$gl_uniform3i = _function_bindbind(_gl_uniform3i);
	var _gl_uniform4i = _gl_.uniform4i;
	var _$gl_uniform4i = _function_bindbind(_gl_uniform4i);
	var _gl_uniform1fv = _gl_.uniform1fv;
	var _$gl_uniform1fv = _function_bindbind(_gl_uniform1fv);
	var _gl_uniform2fv = _gl_.uniform2fv;
	var _$gl_uniform2fv = _function_bindbind(_gl_uniform2fv);
	var _gl_uniform3fv = _gl_.uniform3fv;
	var _$gl_uniform3fv = _function_bindbind(_gl_uniform3fv);
	var _gl_uniform4fv = _gl_.uniform4fv;
	var _$gl_uniform4fv = _function_bindbind(_gl_uniform4fv);
	var _gl_uniform1iv = _gl_.uniform1iv;
	var _$gl_uniform1iv = _function_bindbind(_gl_uniform1iv);
	var _gl_uniform2iv = _gl_.uniform2iv;
	var _$gl_uniform2iv = _function_bindbind(_gl_uniform2iv);
	var _gl_uniform3iv = _gl_.uniform3iv;
	var _$gl_uniform3iv = _function_bindbind(_gl_uniform3iv);
	var _gl_uniform4iv = _gl_.uniform4iv;
	var _$gl_uniform4iv = _function_bindbind(_gl_uniform4iv);
	var _gl_uniformMatrix2fv = _gl_.uniformMatrix2fv;
	var _$gl_uniformMatrix2fv = _function_bindbind(_gl_uniformMatrix2fv);
	var _gl_uniformMatrix3fv = _gl_.uniformMatrix3fv;
	var _$gl_uniformMatrix3fv = _function_bindbind(_gl_uniformMatrix3fv);
	var _gl_uniformMatrix4fv = _gl_.uniformMatrix4fv;
	var _$gl_uniformMatrix4fv = _function_bindbind(_gl_uniformMatrix4fv);
	var _gl_bindBuffer = _gl_.bindBuffer;
	var _$gl_bindBuffer = _function_bindbind(_gl_bindBuffer);
	var _gl_bufferData = _gl_.bufferData;
	var _$gl_bufferData = _function_bindbind(_gl_bufferData);
	var _gl_bufferSubData = _gl_.bufferSubData;
	var _$gl_bufferSubData = _function_bindbind(_gl_bufferSubData);
	var _gl_getBufferParameter = _gl_.getBufferParameter;
	var _$gl_getBufferParameter = _function_bindbind(_gl_getBufferParameter);
	var _gl_isBuffer = _gl_.isBuffer;
	var _$gl_isBuffer = _function_bindbind(_gl_isBuffer);
	var _addSetConsts = _local_global._kJs_addSetConsts;
	var _executePropertyMappers = _local_global._kJs_executePropertyMappers;
	var _clearAllPropertyMappers = _local_global._kJs_clearAllPropertyMappers;
	var _p = _create_new(null);
	var _g = _create_new(null);
	var _r = _create_new(_public_proto);
	
	//keys as enum
	var _enum_LINK_STATUS = _gl_.LINK_STATUS;
	var _enum_COMPILE_STATUS = _gl_.COMPILE_STATUS;
	var _enum_SHADER_TYPE = _gl_.SHADER_TYPE;
	var _enum_FRAGMENT_SHADER = _gl_.FRAGMENT_SHADER;
	var _enum_VERTEX_SHADER = _gl_.VERTEX_SHADER;
	var _enum_BUFFER_SIZE = _gl_.BUFFER_SIZE;
	var _enum_BUFFER_USAGE = _gl_.BUFFER_USAGE;
	var _enum_ARRAY_BUFFER = _gl_.ARRAY_BUFFER;
	var _enum_ELEMENT_ARRAY_BUFFER = _gl_.ELEMENT_ARRAY_BUFFER;
	var _enum_BOOL = _gl_.BOOL;
	var _enum_BYTE = _gl_.BYTE;
	var _enum_SHORT = _gl_.SHORT;
	var _enum_INT = _gl_.INT;
	var _enum_UNSIGNED_BYTE = _gl_.UNSIGNED_BYTE;
	var _enum_UNSIGNED_SHORT = _gl_.UNSIGNED_SHORT;
	var _enum_UNSIGNED_INT = _gl_.UNSIGNED_INT;
	var _enum_FLOAT = _gl_.FLOAT;
	var _enum_BOOL_VEC2 = _gl_.BOOL_VEC2;
	var _enum_BYTE_VEC2 = _gl_.BYTE_VEC2;
	var _enum_SHORT_VEC2 = _gl_.SHORT_VEC2;
	var _enum_INT_VEC2 = _gl_.INT_VEC2;
	var _enum_UNSIGNED_BYTE_VEC2 = _gl_.UNSIGNED_BYTE_VEC2;
	var _enum_UNSIGNED_SHORT_VEC2 = _gl_.UNSIGNED_SHORT_VEC2;
	var _enum_UNSIGNED_INT_VEC2 = _gl_.UNSIGNED_INT_VEC2;
	var _enum_FLOAT_VEC2 = _gl_.FLOAT_VEC2;
	var _enum_BOOL_VEC3 = _gl_.BOOL_VEC3;
	var _enum_BYTE_VEC3 = _gl_.BYTE_VEC3;
	var _enum_SHORT_VEC3 = _gl_.SHORT_VEC3;
	var _enum_INT_VEC3 = _gl_.INT_VEC3;
	var _enum_UNSIGNED_BYTE_VEC3 = _gl_.UNSIGNED_BYTE_VEC3;
	var _enum_UNSIGNED_SHORT_VEC3 = _gl_.UNSIGNED_SHORT_VEC3;
	var _enum_UNSIGNED_INT_VEC3 = _gl_.UNSIGNED_INT_VEC3;
	var _enum_FLOAT_VEC3 = _gl_.FLOAT_VEC3;
	var _enum_BOOL_VEC4 = _gl_.BOOL_VEC4;
	var _enum_BYTE_VEC4 = _gl_.BYTE_VEC4;
	var _enum_SHORT_VEC4 = _gl_.SHORT_VEC4;
	var _enum_INT_VEC4 = _gl_.INT_VEC4;
	var _enum_UNSIGNED_BYTE_VEC4 = _gl_.UNSIGNED_BYTE_VEC4;
	var _enum_UNSIGNED_SHORT_VEC4 = _gl_.UNSIGNED_SHORT_VEC4;
	var _enum_UNSIGNED_INT_VEC4 = _gl_.UNSIGNED_INT_VEC4;
	var _enum_FLOAT_VEC4 = _gl_.FLOAT_VEC4;
	var _enum_FLOAT_MAT2 = _gl_.FLOAT_MAT2;
	var _enum_FLOAT_MAT3 = _gl_.FLOAT_MAT3;
	var _enum_FLOAT_MAT4 = _gl_.FLOAT_MAT4;
	
	//keys as symbols
	var _key_create = symbols.create;
	var _key_SymbolCollection = symbols.SymbolCollection;
	var _key_FunctionCollection = symbols.FunctionCollection;
	var _key_ReleaseClasses = symbols.ReleaseClasses;
	var _key_ClassCollection = symbols.ClassCollection;
	var _key_createdInstance = symbols.createdInstance;
	var _key_primitivePrototype = symbols.primitivePrototype;
	var _key_basedObject = Symbol("Based object");
	var _key_parentBasedObject = Symbol("Context's based object");
	var _key_parentObject = Symbol("Context");
	var _key_getParameter = Symbol("Get parameter");
	var _key_getInfoLog = Symbol("Get info log");
	var _key_destruct = Symbol("WebGLObject destructor");
	
	var _allkeys = freeze({
		basedObject: _key_basedObject,
		parentBasedObject: _key_parentBasedObject,
		parentObject: _key_parentObject,
		getParameter: _key_getParameter,
		getInfoLog: _key_getInfoLog,
		destruct: _key_destruct,
		__proto__: null
	});
	
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
	
	//gl util
	var _util_base_ = (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("gl", null);
		setconst("glUtil", null);
		setconst(_key_parentBasedObject, null);
		setconst(_key_parentObject, null);
		return proto;
	})(_create_new(_public_proto));
	var _common_infoLog_descriptor = {
		get: function () {
			return this[_key_getInfoLog]();
		},
		__proto__: null
	};
	var _program_util_ = (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("program", null);
		_def_pro(proto, "infoLog", _common_infoLog_descriptor);
		setconst("createShader", null);
		setconst("createShaderUtil", null);
		setconst("getAttribLocation", null);
		setconst("createAttribUtil", null);
		setconst("getUniformLocation", null);
		setconst("createUniformUtil", null);
		setconst("getParameter", null);
		setconst("getInfoLog", null);
		setconst("destroy", null);
		setconst(_key_basedObject, null);
		setconst(_key_getParameter, null);
		setconst(_key_getInfoLog, null);
		setconst(_key_destruct, null);
		return proto;
	})(_create_new(_util_base_));
	var _shader_util_ = (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("shader", null);
		setconst("source", null);
		_def_pro(proto, "infoLog", _common_infoLog_descriptor);
		_def_pro(proto, "attachedShaders", {
			get: function () {
				return this[_key_parentBasedObject].getAttachedShaders(this[_key_basedObject]);
			},
			__proto__: null
		});
		setconst("getSource", null);
		setconst("setSource", null);
		setconst("compile", null);
		setconst("attachProgram", null);
		setconst("attachProgramUtil", null);
		setconst("detachProgram", null);
		setconst("detachProgramUtil", null);
		setconst("getParameter", null);
		setconst("getInfoLog", null);
		setconst("destroy", null);
		proto.valueOf = function (source) {
			return this[source === undefined ? "getSource" : "setSource"](source);
		};
		setconst(_key_basedObject, null);
		setconst(_key_getParameter, null);
		setconst(_key_getInfoLog, null);
		setconst(_key_destruct, null);
		return proto;
		function setShader(program_util, shader_represent) {
			//continue from here...
		}
	})(_create_new(_util_base_));
	var _buffer_util_ = (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("buffer", null);
		setconst("target", null);
		setconst("size", null);
		setconst("usage", null);
		setconst("valid", false);
		setconst("passData", null);
		setconst("passSubData", null);
		setconst("getParameter", null);
		setconst(_key_getParameter, null);
		return proto;
	})(_create_new(_util_base_));
	var _variable_util_ = (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("program", null);
		setconst("programUtil", null);
		return proto;
	})(_create_new(_util_base_));
	var _gl_error_ = (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("name", null);
		setconst("message", null);
		setconst("details", null);
		setconst("stack", null);
		setconst("toString", toString);
		_def_pro(proto, "string", {
			get: toString,
			__proto__: null
		});
		function toString() {
			return this.name + ":\n" + this.message;
		}
		return proto;
	})(_create_new(_util_base_));
	var _gl_error_details_ = (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("type", null);
		setconst("infoLog", null);
		return proto;
	})(_create_new(_util_base_));
	(function (directory) {
		var setconst = _setConst_bind(directory);
		setconst("_util_base_", _util_base_);
		setconst("_program_util_", _program_util_);
		setconst("_variable_util_", _variable_util_);
		setconst("_gl_error_", _gl_error_);
		setconst("_gl_error_details_", _gl_error_details_);
	})(GLUtil);
	function GLUtil(gl) {
		if (!is_extensible_object(this)) return new GLUtil(gl);
		if (!(gl instanceof WebGLRenderingContext))
			throw new TypeError("Parameter 'gl' must be a WebGLRenderingContext.");
		var gl_util = this;
		var setconst = _setConst_bind(gl_util);
		var _createProgram = _$gl_createProgram(gl);
		var _createShader = _$gl_createShader(gl);
		var _createBuffer = _$gl_createBuffer(gl);
		var _linkProgram = _$gl_linkProgram(gl);
		var _useProgram = _$gl_useProgram(gl);
		var _shaderSource = _$gl_shaderSource(gl);
		var _compileShader = _$gl_compileShader(gl);
		var _attachShader = _$gl_attachShader(gl);
		var _detachShader = _$gl_detachShader(gl);
		/* var _getAttribLocation = _$gl_getAttribLocation(gl); // considering necessarility
		var _getUniformLocation = _$gl_getUniformLocation(gl); // considering necessarility */
		var _bindBuffer = _$gl_bindBuffer(gl);
		var _bufferData = _$gl_bufferData(gl);
		var _getParameter = _$gl_getParameter(gl);
		var _getProgramParameter = _$gl_getProgramParameter(gl);
		var _getProgramInfoLog = _$gl_getProgramInfoLog(gl);
		var _getShaderParameter = _$gl_getShaderParameter(gl); 
		var _getShaderInfoLog = _$gl_getShaderInfoLog(gl);
		function _setproto(constructor, proto, reference_key) {
			constructor.prototype = proto;
			setconst(reference_key, proto); // gl_util[reference_key] = proto
		}
		function _setproto_common_properties(proto) {
			var setconst = _setConst_bind(proto);
			setconst("gl", gl);
			setconst("glUtil", gl_util);
			setconst(_key_parentBasedObject, gl);
			setconst(_key_parentObject, gl_util);
		}
		function _handle_array_element(object, handler_object, handler_void) {
			(function __main__(object) {
				if (object === null || object === undefined)
					return handler_void(object);
				var _forEach;
				if (object instanceof Array) {
					_forEach = __array_forEach;
				} else if (_get_proto(object) === _set_) {
					_forEach = __set_forEach;
				} else return handler_object(object);
				_forEach(object, function (element) {
					__main__(element);
				});
			})(object);
		}
		function _handle_gl_created(object, descriptor) {
			var handler = descriptor.oncreated;
			if (handler === undefined || handler === null) {
				return;
			}
			if (typeof handler === "function") {
				return _function_callcall(handler, gl_util, object);
			}
			console.warn("Value of 'descriptor.oncreated' is invalid: ", handler);
			throw new TypeError("Property 'oncreated' of parameter 'descriptor' must be either undefined, null, or a function.");
		}
		function _handle_gl_error(error, descriptor) {
			var handler = descriptor.onerror;
			if (handler === undefined || handler === null) {
				throw error;
			}
			if (typeof handler === "function") {
				return _function_callcall(handler, gl_util, error);
			}
			console.warn("Property 'onerror' of parameter 'descriptor' should be a function or undefined or null.");
			throw error;
		}
		function ProgramUtil(program) {
			var program_util = this;
			var attachShader = _$gl_attachShader(gl, program);
			var _variable_util_ = new VariableUtil(program_util, program);
			function AttribUtil(attrib_location, size, type, normalized, stride, offset) {
				var attrib_util = this;
				var active = _$gl_enableVertexAttribArray(attrib_location);
				var set = _$gl_vertexAttribPointer(attrib_location, size, type, normalized, stride, offset);
				var setconst = _setConst_bind(attrib_util);
				setconst("attribLocation", attrib_location);
				setconst("size", size);
				setconst("type", type);
				setconst("normalized", normalized);
				setconst("stride", stride);
				setconst("offset", offset);
				setconst("active", active);
				setconst("set", set);
				setconst("attribLocation", attrib_location);
				setconst(_key_basedObject, attrib_location);
			}
			var _attrib_util_ = AttribUtil.prototype = (function (proto) {
				var setconst = _setConst_bind(proto);
				setconst("attribLocation", null);
				setconst("size", null);
				setconst("type", null);
				setconst("normalized", null);
				setconst("stride", null);
				setconst("offset", null);
				setconst("active", null);
				setconst("set", null);
				setconst("attribLocation", null);
				setconst(_key_basedObject, null);
				return proto;
			})(_create_new(_variable_util_));
			function UniformUtil(uniform_location, type, length) {
				var createsetter, funcset;
				switch (type) {
					case "float":
						funcset = {
							1: _$gl_uniform1f,
							2: _$gl_uniform2f,
							3: _$gl_uniform3f,
							4: _$gl_uniform4f,
							__proto__: null
						};
						break;
					case "int":
						funcset = {
							1: _$gl_uniform1i,
							2: _$gl_uniform2i,
							3: _$gl_uniform3i,
							4: _$gl_uniform4i,
							__proto__: null
						};
						break;
					case "fvec":
						funcset = {
							1: _$gl_uniform1fv,
							2: _$gl_uniform2fv,
							3: _$gl_uniform3fv,
							4: _$gl_uniform4fv,
							__proto__: null
						};
						break;
					case "ivec":
						funcset = {
							1: _$gl_uniform1iv,
							2: _$gl_uniform2iv,
							3: _$gl_uniform3iv,
							4: _$gl_uniform4iv,
							__proto__: null
						};
						break;
					case "fmat":
						funcset = {
							2: _$gl_uniformMatrix2fv,
							3: _$gl_uniformMatrix3fv,
							4: _$gl_uniformMatrix4fv,
							__proto__: null
						};
						break;
					default:
						throw new RangeError("Parameter 'type' must be either 'float', 'int', 'fvec', 'ivec' or 'fmat'.");
				}
				createsetter = funcset[length];
				if (typeof createsetter !== "function") throw new RangeError("Parameter 'length' is invalid: length = " + length);
				var setconst = _setConst_bind(this);
				setconst("get", _$gl_getUniform(gl, program, uniform_location));
				setconst("set", createsetter(gl, uniform_location));
				setconst("uniformLocation", uniform_location);
				setconst(_key_basedObject, uniform_location);
			}
			var _uniform_util_ = UniformUtil.prototype = (function (proto) {
				var setconst = _setConst_bind(proto);
				setconst("get", null);
				setconst("set", null);
				setconst("uniformLocation", null);
				setconst(_key_basedObject, null);
				_def_pro(proto, "value", {
					get: function () {
						return this.get();
					},
					set: function (value) {
						this.set(value);
					},
					__proto__: null
				});
				proto.valueOf = function (value) {
					return this[value === undefined ? "get" : "set"](value);
				};
				return proto;
			})(_create_new(_variable_util_));
			function attachShaderUtil(shader_util) {
				attachShader(shader_util[_key_basedObject]);
			}
			var detachShader = _$gl_detachShader(gl, program);
			function detachShaderUtil(shader_util) {
				detachShader(shader_util[_key_basedObject]);
			}
			var getAttribLocation = _$gl_getAttribLocation(gl, program);
			function createAttribUtil(name, size, type, normalized, stride, offset) {
				return new AttribUtil(getAttribLocation(name), size, type, normalized, stride, offset);
			}
			var getUniformLocation = _$gl_getUniformLocation(gl, program);
			function createUniformUtil(name, type, count) {
				return new UniformUtil(getUniformLocation(name), type, count);
			}
			var getParameter = _$gl_getProgramParameter(gl, program);
			var getInfoLog = _$gl_getProgramInfoLog(gl, program);
			var destroy = _$gl_deleteProgram(gl, program);
			var setconst = _setConst_bind(program_util);
			setconst("program", program);
			setconst("attachShader", attachShader);
			setconst("attachShaderUtil", attachShaderUtil);
			setconst("detachShader", detachShader);
			setconst("detachShaderUtil", detachShaderUtil);
			setconst("getAttribLocation", getAttribLocation);
			setconst("createAttribUtil", createAttribUtil);
			setconst("getUniformLocation", getUniformLocation);
			setconst("createUniformUtil", createUniformUtil);
			setconst("getParameter", getParameter);
			setconst("getInfoLog", getInfoLog);
			setconst("destroy", destroy);
			setconst("_variable_util_", _variable_util_);
			setconst("_attrib_util_", _attrib_util_);
			setconst("_uniform_util_", _uniform_util_);
			setconst(_key_basedObject, program);
			setconst(_key_getParameter, getParameter);
			setconst(_key_getInfoLog, getInfoLog);
			setconst(_key_destruct, destroy);
		}
		(function (proto) {
			_setproto(ProgramUtil, proto, "_program_util_");
			_setproto_common_properties(proto);
		})(_create_new(_program_util_));
		function VariableUtil(program_util, program) {
			var setconst = _setConst_bind(this);
			setconst("program", program);
			setconst("programUtil", program_util);
			setconst(_key_parentBasedObject, program);
			setconst(_key_parentObject, program_util);
		}
		(function (proto) {
			_setproto(VariableUtil, proto, "_variable_util_");
			_setproto_common_properties(proto);
		})(_create_new(_variable_util_));
		function ShaderUtil(shader) {
			if (!shader) return; // 'shader' may be null when set proto
			var _getShaderParameter = _$gl_getShaderParameter(gl, shader);
			var _getShaderInfoLog = _$gl_getShaderInfoLog(gl, shader);
			var _deleteShader = _$gl_deleteShader(gl, shader);
			var shader_type = _getShaderParameter(_enum_SHADER_TYPE);
			var shader_constructor;
			switch (shader_type) {
				case _enum_FRAGMENT_SHADER:
					shader_constructor = FragmentShaderUtil;
					break;
				case _enum_VERTEX_SHADER:
					shader_constructor = VertexShaderUtil;
					break;
				default:
					throw new TypeError("Invalid shader. SHADER_TYPE: " + String(shader_type)); // This may never be reached, but I want to keep this.
			}
			var shader_util = new shader_constructor();
			var setconst = _setConst_bind(shader_util);
			var _compileShader = _$gl_compileShader(gl, shader);
			var _getShaderSource = _$gl_getShaderSource(gl, shader);
			var _shaderSource = _$gl_shaderSource(gl, shader);
			function compile(onerror) {
				_compileShader();
				if (_getShaderParameter(_enum_COMPILE_STATUS)) return;
				var error  = new ShaderCompilingError(shader, _getShaderInfoLog(), _getShaderSource());
				__setConst(error, "shaderUtil", shader_util);
				if (onerror === undefined || onerror === null) {
					throw error;
				}
				if (typeof onerror === "function") {
					return _function_callcall(onerror, gl_util, error);
				}
				console.warn("Parameter 'onerror' should be a function or undefined or null.");
				throw error;
			}
			var getSource = _getShaderSource;
			function setSource(descriptor) {
				switch (typeof descriptor) {
					case "string":
						return _shaderSource(descriptor);
					case "object":
						if (!descriptor) break; // this line is the reason why we shouldn't put the final line of this function into label 'default' of 'switch (...) {...}'
						var source = descriptor.source;
						if (typeof source !== "string")
							throw new TypeError("Property 'source' of parameter 'descriptor' must be a string.");
						_shaderSource(source);
						descriptor.compile && compile(descriptor.onerror);
						return;
				}
				throw new TypeError("Parameter 'descriptor' must be either a string or an object."); // remember the line 'if (...) break;'
			}
			function attachProgram(program) {
				_attachShader(program, shader);
			}
			function attachProgramUtil(program_util) {
				_attachShader(program_util[_key_basedObject], shader);
			}
			function detachProgram(program) {
				_detachShader(program, shader);
			}
			function detachProgramUtil(program_util) {
				_detachShader(program_util[_key_basedObject], shader);
			}
			/* var getParameter = _getShaderParameter;
			var getInfoLog = _getShaderInfoLog; */
			setconst("shader", shader);
			_def_pro(shader_util, "source", {
				get: getSource,
				set: setSource,
				__proto__: null
			});
			setconst("compile", compile);
			setconst("getSource", getSource);
			setconst("setSource", setSource);
			setconst("attachProgram", attachProgram);
			setconst("attachProgramUtil", attachProgramUtil);
			setconst("detachProgram", detachProgram);
			setconst("detachProgramUtil", detachProgramUtil);
			setconst("getParameter", _getShaderParameter);
			setconst("getInfoLog", _getShaderInfoLog);
			setconst("destroy", _deleteShader);
			setconst(_key_basedObject, shader);
			setconst(_key_getParameter, _getShaderParameter);
			setconst(_key_getInfoLog, _getShaderInfoLog);
			setconst(_key_destruct, _deleteShader);
			return shader_util;
		}
		(function (proto) {
			_setproto(ShaderUtil, proto, "_shader_util_");
			_setproto_common_properties(proto);
		})(_create_new(_shader_util_));
		function FragmentShaderUtil() {}
		var _vertex_shader_util_ = (function (proto) {
			_setproto(FragmentShaderUtil, proto, "_fragment_shader_util_");
			return proto;
		})(new ShaderUtil(null));
		function VertexShaderUtil() {}
		var _fragment_shader_util_ = (function (proto) {
			_setproto(VertexShaderUtil, proto, "_vertex_shader_util_");
			return proto;
		})(new ShaderUtil(null));
		function BufferUtil(buffer, target) {
			var buffer_util = this;
			var setconst = _setConst_bind(buffer_util);
			var _bindBuffer = _$gl_bindBuffer(gl, target, buffer);
			var _bufferData = _$gl_bufferData(gl, target);
			var _bufferSubData = _$gl_bufferSubData(gl, target);
			var _getBufferParameter = _$gl_getBufferParameter(gl, target);
			var _deleteBuffer = _$gl_deleteBuffer(gl, buffer);
			setconst("buffer", buffer);
			setconst("target", target);
			_def_pro(buffer_util, "size", {
				get: _$gl_getBufferParameter(gl, target, _enum_BUFFER_SIZE),
				__proto__: null
			});
			_def_pro(buffer_util, "usage", {
				get: _$gl_getBufferParameter(gl, target, _enum_BUFFER_USAGE),
				__proto__: null
			});
			_def_pro(buffer_util, "valid", {
				get: _$gl_isBuffer(gl, buffer),
				__proto__: null
			});
			setconst("bind", _bindBuffer);
			setconst("passData", _bufferData);
			setconst("passSubData", _bufferSubData);
			setconst("getParameter", _getBufferParameter);
			setconst("destroy", _deleteBuffer);
			setconst(_key_basedObject, freeze({
				0: buffer,
				1: target,
				buffer: buffer,
				target: target,
				__proto__: {
					toString: function () {
						return buffer;
					},
					valueOf: function () {
						return target;
					},
					__proto__: null
				}
			}));
			setconst(_key_destruct, _deleteBuffer);
		}
		(function (proto) {
			_setproto(BufferUtil, proto, "_buffer_util_");
			_setproto_common_properties(proto);
		})(_create_new(_buffer_util_));
		function GLError(name) {
			__setConst(this, "name", name);
		}
		(function (proto) {
			_setproto(GLError, proto, "_gl_error_");
			_setproto_common_properties(proto);
		})(_create_new(_gl_error_));
		function GLErrorDetails(type) {
			__setConst(this, "errorType", type);
		}
		(function (proto) {
			_setproto(GLErrorDetails, proto, "_gl_error_details_");
			_setproto_common_properties(proto);
		})(_create_new(_gl_error_details_));
		function ProgramLinkingError(program, info_log) {
			var setconst = _setConst_bind(this);
			setconst("details", new ProgramLinkingErrorDetails(program, info_log));
			setconst("message", info_log);
			setconst("stack", new Error().stack);
		}
		(function (proto) {
			_setproto(ProgramLinkingError, proto, "_program_linking_error_");
		})(new GLError("ProgramLinkingError"));
		function ProgramLinkingErrorDetails(program, info_log) {
			var setconst = _setConst_bind(this);
			setconst("program", program);
			setconst("infoLog", info_log);
		}
		(function (proto) {
			_setproto(ProgramLinkingErrorDetails, proto, "_program_linking_error_details_");
			_setproto_common_properties(proto);
			var setconst = _setConst_bind(proto);
			setconst("program", null);
			setconst("infoLog", null);
		})(new GLErrorDetails("ProgramLinkingError"));
		function ShaderCompilingError(shader, info_log, source) {
			var setconst = _setConst_bind(this);
			setconst("details", new ShaderCompilingErrorDetails(shader, info_log, source));
			setconst("message", info_log);
			setconst("stack", new Error().stack);
		}
		(function (proto) {
			_setproto(ShaderCompilingError, proto, "_shader_compiling_error_");
		})(new GLError("ShaderCompilingError"));
		function ShaderCompilingErrorDetails(shader, info_log, source) {
			var setconst = _setConst_bind(this);
			setconst("shader", shader);
			setconst("infoLog", info_log);
			setconst("source", source);
		}
		(function (proto) {
			_setproto(ShaderCompilingErrorDetails, proto, "_shader_compiling_error_details_");
			_setproto_common_properties(proto);
			var setconst = _setConst_bind(proto);
			setconst("shader", null);
			setconst("infoLog", null);
			setconst("source", null);
		})(new GLErrorDetails("ShaderCompilingError"));
		function _firstStep_createProgram(descriptor) {
			/* if (descriptor instanceof WebGLProgram)
				return descriptor; */
			if (descriptor === undefined || descriptor === null)
				return _createProgram();
			if (typeof descriptor !== "object")
				throw new TypeError("Parameter 'descriptor' must be either an object or null or undefined.");
			// return undefined;
		}
		function _secondStep_createProgram(descriptor) {
			if (descriptor instanceof Array || descriptor instanceof Set)
				return createProgram({
					shader: descriptor,
					use: descriptor.use,
					link: descriptor.link,
					onerror: descriptor.onerror,
					__proto__: null
				});
			var program = _createProgram();
			_handle_shader_attachment("vertexShader", _enum_VERTEX_SHADER, _vertex_shader_util_, _fragment_shader_util_);
			_handle_shader_attachment("fragmentShader", _enum_FRAGMENT_SHADER, _fragment_shader_util_, _vertex_shader_util_);
			var use_program = descriptor.use;
			if (descriptor.link || use_program) { // descriptor.link and descriptor.use have type Boolean
				_linkProgram(program);
				_getProgramParameter(program, _enum_LINK_STATUS) ? (
					use_program && _useProgram(program)
				) : (
					_handle_gl_error(new ProgramLinkingError(program, _getProgramInfoLog(program)), descriptor)
				);
			}
			_handle_gl_created(program, descriptor);
			return program;
			function _handle_shader_attachment(property_name, shader_type, util_proto, counter_util_proto) {
				var shader_descriptor = descriptor[property_name];
				var shader;
				if (shader_descriptor === undefined || shader_descriptor === null)
					return;
				switch (typeof shader_descriptor) {
					case "string":
						shader = _secondStep_createShader({
							type: shader_type,
							source: shader_descriptor,
							compile: true,
							__proto__: null
						});
						break;
					case "object":
						switch (_get_proto(shader_descriptor)) {
							case _shader_:
								shader = shader_descriptor;
								if (_getShaderParameter(shader_descriptor, _enum_SHADER_TYPE) !== shader_type) {
									console.warn(shader, " has invalid shader type: ", shader_type);
									throw new TypeError("Invalid shader type: " + shader_type);
								}
								break;
							case util_proto:
								console.warn(shader_descriptor, " is invalid.");
								shader = shader_descriptor[_key_basedObject];
								break;
							case counter_util_proto:
								throw new TypeError("Invalid shader type.");
							default:
								shader = _secondStep_createShader({
									type: shader_type,
									compile: true,
									__proto__: shader_descriptor
								});
						}
						break;
					default:
						throw new TypeError("Property '" + property_name + "' of parameter must be either null, undefined, a string, a WebGLShader, a ShaderUtil, or a descriptor<WebGLShader>");
				}
				_attachShader(program, shader);
			}
		}
		function createProgram(descriptor) {
			return _firstStep_createProgram(descriptor) || _secondStep_createProgram(descriptor);
		}
		function createProgramUtil(descriptor) {
			return new ProgramUtil(_firstStep_createProgram(descriptor) || (_get_proto(descriptor) === _program_ ? descriptor : _secondStep_createProgram(descriptor)));
		}
		function _firstStep_createShader(descriptor) {
			// check error only
			// return nothing
			/* if (descriptor instanceof WebGLShader)
				return descriptor; */ // handled this in createProgram --> _handle_array_element(...)
			if (typeof descriptor !== "object" || !descriptor)
				throw new TypeError("Parameter 'descriptor' must be an object");
		}
		function _secondStep_createShader(descriptor) {
			var shader = _createShader(descriptor.type);
			if (!shader)
				throw new TypeError("Creating shader failed because given 'descriptor.type' has wrong value.");
			var source = descriptor.source; // a string or null or undefined
			var compile = descriptor.compile; // boolean
			if (source) {
				_shaderSource(shader, source);
				if (compile) {
					_compileShader(shader);
					_getShaderParameter(shader, _enum_COMPILE_STATUS) || _handle_gl_error(new ShaderCompilingError(shader, _getShaderInfoLog(shader), source), descriptor);
				}
			}
			_handle_array_element(descriptor.program, function (program_descriptor) {
				_attachShader(_get_proto(program_descriptor) === _program_ ? program_descriptor :createProgram(program_descriptor), shader);
			}, _function_); // descriptor.program must be either null, undefined, a WebGLProgram, a descriptor<WebGLProgram>, or a sequence of them
			_handle_gl_created(shader, descriptor);
			return shader;
		}
		function createShader(descriptor) {
			_firstStep_createShader(descriptor);
			return _secondStep_createShader(descriptor);
		}
		function createShaderUtil(descriptor) {
			_firstStep_createShader(descriptor);
			return new ShaderUtil(_get_proto(descriptor) === _shader_ ? descriptor : _secondStep_createShader(descriptor));
		}
		function __createBuffer_descriptorHandler(buffer, descriptor) { // return target for createBufferUtil
			if (typeof descriptor !== "object" || !descriptor)
				throw new TypeError("Parameter 'descriptor' must be an object.");
			var bind = descriptor.bind;
			var target = descriptor.target;
			var data = descriptor.data;
			data === undefined && (data = descriptor.size);
			bind && _bindBuffer(target, buffer);
			if (data) {
				var usage = descriptor.usage;
				_bufferData(data, usage);
			}
			return target; // for createBufferUtil
		}
		function createBuffer(descriptor) {
			var buffer = _createBuffer();
			__createBuffer_descriptorHandler(buffer, descriptor);
			return buffer;
		}
		function createBufferUtil(descriptor) {
			var buffer = _createBuffer();
			var target = __createBuffer_descriptorHandler(buffer, descriptor);
			if (target != _enum_ARRAY_BUFFER && target != _enum_ELEMENT_ARRAY_BUFFER)
				throw new TypeError("Property 'target' of parameter 'descriptor' must be either ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER");
			return new BufferUtil(buffer, target);
		}
		setconst("gl", gl);
		setconst("createProgram", createProgram);
		setconst("createProgramUtil", createProgramUtil);
		setconst("createShader", createShader);
		setconst("createShaderUtil", createShaderUtil);
		setconst("createBuffer", createBuffer);
		setconst("createBufferUtil", createBufferUtil);
		setconst("getParameter", _getParameter);
		setconst("getProgramParameter", _getProgramParameter);
		setconst("getProgramInfoLog", _getProgramInfoLog);
		setconst("getShaderParameter", _getShaderParameter);
		setconst("getShaderInfoLog", _getShaderInfoLog);
		/* setconst("_program_util_", _program_util_);
		setconst("_shader_util_", _shader_util_);
		setconst("_fragment_shader_util_", _fragment_shader_util_);
		setconst("_vertex_shader_util_", _vertex_shader_util_);
		setconst("_variable_util_", _variable_util_);
		setconst("_buffer_util_", _buffer_util_);
		setconst("_gl_error_", _gl_error_);
		setconst("_gl_error_details_", _gl_error_details_);
		setconst("_program_linking_error_", _program_linking_error_);
		setconst("_program_linking_error_details_", _program_linking_error_details_);
		setconst("_shader_compiling_error_", _shader_compiling_error_);
		setconst("_shader_compiling_error_details_", _shader_compiling_error_details_); */
		setconst(_key_basedObject, gl);
		setconst(_key_create, createProgramUtil);
		setconst(_key_getParameter, _getParameter);
	}
	prvRegisterConstructor(GLUtil, (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("gl", null);
		setconst("createProgram", null);
		setconst("createProgramUtil", null);
		setconst("createShader", null);
		setconst("createShaderUtil", null);
		setconst("getParameter", null);
		setconst("getProgramParameter", null);
		setconst("getProgramInfoLog", null);
		setconst("getShaderParameter", null);
		setconst("getShaderInfoLog", null);
		setconst("_program_util_", _program_util_);
		setconst("_shader_util_", _shader_util_);
		setconst("_fragment_shader_util_", null);
		setconst("_vertex_shader_util_", null);
		setconst("_variable_util_", null);
		setconst("_buffer_util_", _buffer_util_);
		setconst("_gl_error_", _gl_error_);
		setconst("_gl_error_details_", _gl_error_details_);
		setconst("_program_linking_error_", null);
		setconst("_program_linking_error_details_", null);
		setconst("_shader_compiling_error_", null);
		setconst("_shader_compiling_error_details_", null);
		setconst(_key_basedObject, null);
		setconst(_key_create, null); // equiv to createProgramUtil
		setconst(_key_getParameter);
		return proto;
	})(_create_new(_public_proto)));
	_g._kGraph_GLUtil = _r.GLUtil = GLUtil;
	GLUtil.toString = shared_toString;
	GLUtil.user_manuals = [
		"constructor GLUtil(WebGLRenderingContext gl);"
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
		__setConst(object, "_kGraph_primitivePrototype", _public_proto);
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
	window[kgraphlibkeyword] = Initor;
	Initor.toString = shared_toString;
	Initor.user_manuals = [
		"constructor Initor();"
	];
	Initor.prototype = _create_new(_public_proto);
	Initor[_key_createdInstance] = Initor.created = initialized = freeze(new Initor());
	freeze(Initor);
	
})(window, Object, Function, Symbol, Map, Set, Array, WebGLRenderingContext, WebGLProgram, WebGLShader);
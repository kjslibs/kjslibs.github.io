
(function Init(window, Object, Function, Map, Set, XMLHttpRequest) {
	'use strict';
	
	/* INITIALIZATION */
	
	//first initialization
	var undefined; // locally 'undefined' is necessarry because of UglifyJS
	var executing_script = window.document.currentScript;
	var kjslibinit = window[executing_script.getAttributeNS(null, "kjslib-keyword") || "_kJs_Initor"];
	if(!kjslibinit) throw new Error("-k-js-abstract.js is required.");
	var keventlibkeyword = executing_script.getAttributeNS(null, "keventlib-keyword") || "_kEvent_Initor";
	var kjslib = new kjslibinit();
	var symbols = kjslib.SymbolCollection();
	var utils = kjslib.FunctionCollection();
	var _create_new = Object.create;
	var _def_pro = Object.defineProperty;
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
	var _kJs_Republic = _kjsclasses.Republic;
	var _kJs_Civilian = _kjsclasses.Civilian;
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
	var _addSetConsts = _local_global._kJs_addSetConsts;
	var _executePropertyMappers = _local_global._kJs_executePropertyMappers;
	var _clearAllPropertyMappers = _local_global._kJs_clearAllPropertyMappers;
	var _map_ = Map.prototype;
	var _set_ = Set.prototype;
	var _xhr_ = XMLHttpRequest.prototype;
	var _map_get = _map_.get;
	var _map_set = _map_.set;
	var _map_delete = _map_.delete;
	var _map_forEach = _map_.forEach;
	var _map_clear = _map_.clear;
	var _set_add = _set_.add;
	var _set_delete = _set_.delete;
	var _set_has = _set_.has;
	var _xhr_open = _xhr_.open;
	var _xhr_send = _xhr_.send;
	var __xhr_open = _function_callbind(_xhr_open);
	var __xhr_send = _function_callbind(_xhr_send);
	var _p = _create_new(null);
	var _g = _create_new(null);
	var _r = _create_new(_public_proto);
	
	//keys as symbol
	var _key_create = symbols.create;
	var _key_addMember = symbols.addMember;
	var _key_removeMember = symbols.removeMember;
	var _key_update = symbols.update;
	var _key_request = symbols.request;
	var _key_unrequest = symbols.unrequest;
	var _key_enable = symbols.enable;
	var _key_disable = symbols.disable;
	var _key_enabled = symbols.enabled;
	var _key_SymbolCollection = symbols.SymbolCollection;
	var _key_FunctionCollection = symbols.FunctionCollection;
	var _key_ReleaseClasses = symbols.ReleaseClasses;
	var _key_ClassCollection = symbols.ClassCollection;
	var _key_createdInstance = symbols.createdInstance;
	var _key_primitivePrototype = symbols.primitivePrototype;
	var _key_addMember = symbols.addMember;
	var _key_removeMember = symbols.removeMember;
	
	var _allfunc = freeze({
		is_valid_event_target: is_valid_event_target,
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
		var set = _constructor_object_map.get(constructor);
		if (set.has(object))
			throw new TypeError("Can't re-construct object. 'new' operator is required.");
		set.add(object);
	}
	function prvEnsureConstructor(constructor, object, error) {
		if(!prvCheckConstructorInstance(constructor, object))
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
	function is_valid_event_target(event_target) {
		return typeof event_target.addEventListener === "function" && typeof event_target.removeEventListener === "function";
	}
	
	//CLASSES
	
	//event republic
	function prvEventPreventorParam(type, event) {
		var setconst = _setConst_bind(this);
		setconst("type", type);
		setconst("event", event);
	}
	var _event_preventor_param_ = prvEventPreventorParam.prototype = (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("type", null);
		setconst("event", null);
		return proto;
	})(_create_new(_public_proto));
	__setConst(EventRepublic, "_event_preventor_param_", _event_preventor_param_);
	var _event_civilian_ = (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("enable", null);
		setconst("disable", null);
		setconst("enabled", null);
		setconst(_key_enable, null);
		setconst(_key_disable, null);
		setconst(_key_enabled, null);
		return proto;
	})(_create_new(_public_proto));
	__setConst(EventRepublic, "_event_civilian_", _event_civilian_);
	function EventRepublic(handler) {
		if(!is_extensible_object(this)) return new EventRepublic(handler);
		if(!is_valid_handler(handler))
			throw new TypeError("arguments[0] is not a valid handler.");
		var event_republic = this;
		prvConstructorCorrection(EventRepublic, event_republic);
		var republic = new _kJs_Republic(handler.bind(event_republic));
		var republic_add = republic[_key_addMember];
		var republic_remove = republic[_key_removeMember];
		var republic_execute = republic[_key_update];
		var created_event_civilian = new Set();
		var created_event_civilian_has = _set_has.bind(created_event_civilian);
		var created_event_civilian_add = _set_add.bind(created_event_civilian);
		function EventCivilian(event_target, event_descriptor) {
			if(!is_valid_event_target(event_target))
				throw new TypeError("arguments[0] is not a valid event target.");
			if (typeof event_descriptor !== "object" || !event_descriptor)
				throw new TypeError("arguments[1] must be an object.");
			var requestonly = event_descriptor.requestonly;
			if (typeof requestonly !== "boolean")
				throw new TypeError("arguments[1].requestonly must be a boolean.");
			var event_civilian = this;
			var preventor = event_descriptor.preventor;
			switch (typeof preventor) {
				case "function":
					preventor = _function_bind.call(preventor, event_civilian);
					break;
				case "object":
					if(!preventor) {
						preventor = _function_;
						break;
					}
					if(!is_valid_handler(preventor))
						throw new TypeError("arguments[1].preventor must be either undefined, null, a function, or a functor.");
					preventor = preventor.bind(event_civilian);
					break;
				case "undefined":
					preventor = _function_;
					break;
				default:
					throw new TypeError("arguments[1].preventor must be either undefined, null, a function, or a functor.");
			}
			function check_prevent(type, event) {
				return preventor(new prvEventPreventorParam(type, event));
			}
			created_event_civilian_add(event_civilian);
			var civilian = new _kJs_Civilian();
			var enabled = false;
			var addEventListener = event_target.addEventListener.bind(event_target);
			var removeEventListener = event_target.removeEventListener.bind(event_target);
			var enable, disable;
			var request_event_type = event_descriptor.request_event_type;
			var request_use_capture = event_descriptor.request_use_capture;
			var civilian_request = civilian[_key_request];
			function event_requester(event) {
				if (check_prevent("request", event)) return;
				civilian_request();
				republic_execute();
			}
			if (requestonly) {
				enable = function () {
					enabled = true;
					republic_add(civilian);
					addEventListener(request_event_type, event_requester, request_use_capture);
					return event_civilian;
				};
				disable = function () {
					enabled = false;
					republic_remove(civilian);
					removeEventListener(request_event_type, event_requester, request_use_capture);
					return event_civilian;
				};
			} else {
				(function () {
					var unrequest_event_type = event_descriptor.unrequest_event_type;
					var unrequest_use_capture = event_descriptor.unrequest_use_capture;
					var civilian_unrequest = civilian[_key_unrequest];
					function event_unrequester(event) {
						if (check_prevent("unrequest", event)) return;
						civilian_unrequest();
						republic_execute();
					}
					enable = function () {
						enabled = true;
						republic_add(civilian);
						addEventListener(request_event_type, event_requester, request_use_capture);
						addEventListener(unrequest_event_type, event_unrequester, unrequest_use_capture);
						return event_civilian;
					};
					disable = function () {
						enabled = false;
						republic_remove(civilian);
						removeEventListener(request_event_type, event_requester, request_use_capture);
						removeEventListener(unrequest_event_type, event_unrequester, unrequest_use_capture);
						return event_civilian;
					};
				})();
			}
			var enabled_descriptor = {
				get: function () {
					return enabled;
				},
				set: function (value) {
					(value ? enable : disable)();
				},
				__proto__: null
			};
			setconst1oVs1v(event_civilian, [_key_enable, "enable"], enable);
			setconst1oVs1v(event_civilian, [_key_disable, "disable"], disable);
			_def_pro(event_civilian, "enabled", enabled_descriptor);
			_def_pro(event_civilian, _key_enabled, enabled_descriptor);
		}
		var prv_event_civilian_proto = EventCivilian.prototype = _create_new(_event_civilian_);
		__setConst(EventCivilian, "_event_preventor_param_", _event_preventor_param_);
		function create(event_target, event_descriptor) {
			return new EventCivilian(event_target, event_descriptor);
		}
		function enable(event_civilian) {
			validate_event_civilian(event_civilian);
			event_civilian[_key_enable]();
			return event_republic;
		}
		function disable(event_civilian) {
			validate_event_civilian(event_civilian);
			event_civilian[_key_disable]();
			return event_republic;
		}
		function isEnabled(event_civilian) {
			validate_event_civilian(event_civilian);
			return event_civilian[_key_enabled];
		}
		function validate_event_civilian(event_civilian) {
			if(!created_event_civilian_has(event_civilian))
				throw new TypeError("arguments[0] is not a valid event republic.");
		}
		setconst1oVs1v(event_republic, [_key_create, "create"], create);
		setconst1oVs1v(event_republic, [_key_enable, "enable"], enable);
		setconst1oVs1v(event_republic, [_key_disable, "disable"], disable);
		setconst1oVs1v(event_republic, [_key_enabled, "isEnabled"], isEnabled);
	}
	prvRegisterConstructor(EventRepublic, (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("create", null);
		setconst("enable", null);
		setconst("disable", null);
		setconst("isEnabled", null);
		setconst(_key_create, null);
		setconst(_key_enable, null);
		setconst(_key_disable, null);
		setconst(_key_enabled, null);
		return proto;
	})(_create_new(_public_proto)));
	_g._kEvent_EventRepublic = _r.EventRepublic = EventRepublic;
	EventRepublic.toString = shared_toString;
	EventRepublic.user_manuals = [
		"constructor EventRepublic(function<void, EventRepublic, uint> handler);"
	];
	
	//xhr group
	function XHRCount(handler) {
		if(!is_extensible_object(this)) return new XHRCount(handler);
		if(!is_valid_handler(handler))
			throw new TypeError("arguments[0] is not a valid handler.");
		var xhr_count = this;
		var event_republic = new EventRepublic(handler.bind(xhr_count));
		var create_event_civilian = event_republic.create;
		var xhr_event_civilian_map = new Map();
		var xhr_event_civilian_map_get = _map_get.bind(xhr_event_civilian_map);
		var xhr_event_civilian_map_set = _map_set.bind(xhr_event_civilian_map);
		function _add(xhr) {
			var event_civilian = xhr_event_civilian_map_get(xhr);
			if(!event_civilian) {
				event_civilian = create_event_civilian(xhr, {
					requestonly: true,
					request_event_type: "loadend",
					request_use_capture: false,
					__proto__: null
				});
				xhr_event_civilian_map_set(xhr, event_civilian);
			}
			event_civilian.enable();
		}
		function _remove(xhr) {
			var event_civilian = xhr_event_civilian_map_get(xhr);
			if(!event_civilian) return;
			event_civilian.disable();
		}
		var event_republic_enable = event_republic[_key_enable];
		var event_republic_disable = event_republic[_key_disable];
		function add(xhr) {
			_add(xhr);
			return xhr_count;
		}
		function remove(xhr) {
			_remove(xhr);
			return xhr_count;
		}
		function create(method, url, send) {
			var xhr = new XMLHttpRequest();
			_add(xhr);
			(function () {
				if(!method) return;
				__xhr_open(xhr, method, url);
				if (send) __xhr_send(xhr);
			})();
			return xhr;
		}
		function enable() {
			event_republic_enable();
			return xhr_count;
		}
		function disable() {
			event_republic_disable();
			return xhr_count;
		}
		setconst1oVs1v(xhr_count, [_key_addMember, "add"], add);
		setconst1oVs1v(xhr_count, [_key_removeMember, "remove"], remove);
		setconst1oVs1v(xhr_count, [_key_create, "create"], create);
		setconst1oVs1v(xhr_count, [_key_enable, "enable"], enable);
		setconst1oVs1v(xhr_count, [_key_disable, "disable"], disable);
		var enabled_descriptor = new DescriptorGetterSetter1os3b(event_republic, _key_enabled);
		_def_pro(xhr_count, "enabled", enabled_descriptor);
		_def_pro(xhr_count, _key_enabled, enabled_descriptor);
	}
	prvRegisterConstructor(XHRCount, (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("add", null);
		setconst("remove", null);
		setconst("create", null);
		setconst("enable", null);
		setconst("disable", null);
		setconst(_key_addMember, null);
		setconst(_key_removeMember, null);
		setconst(_key_create, null);
		setconst(_key_enable, null);
		setconst(_key_disable, null);
		return proto;
	})(_create_new(_public_proto)));
	_g._kEvent_XHRCount = _r.XHRCount = XHRCount;
	XHRCount.toString = shared_toString;
	XHRCount.user_manuals = [
		"constructor XHRCount(function<void, XHRCount, uint> handler);"
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
		__setConst(object, "_kEvent_primitivePrototype", _public_proto);
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
	window[keventlibkeyword] = Initor;
	Initor.toString = shared_toString;
	Initor.user_manuals = [
		"constructor Initor();"
	];
	Initor.prototype = _create_new(_public_proto);
	Initor[_key_createdInstance] = Initor.created = initialized = freeze(new Initor());
	freeze(Initor);
	
})(window, Object, Function, Map, Set, XMLHttpRequest);
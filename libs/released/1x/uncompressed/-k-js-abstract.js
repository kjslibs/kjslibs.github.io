
(function Init(window, Object, Function, Symbol, Array, Map, Set) {
	'use strict';
	
	/* INITILIZATION */
	
	//local variables and private functions
	var undefined; // locally 'undefined' is necessarry because of UglifyJS
	var _create_new = Object.create;
	var _public_proto = _create_new(null);
	var _def_pro = Object.defineProperty;
	var _def_proes = Object.defineProperties;
	var freeze = Object.freeze;
	var seal = Object.seal;
	var prevent_ext = Object.preventExtensions;
	var isfrozen = Object.isFrozen;
	var issealed = Object.isSealed;
	var isextensible = Object.isExtensible;
	var own_prop_str = Object.getOwnPropertyNames;
	var own_prop_sym = Object.getOwnPropertySymbols;
	var own_prop_des = Object.getOwnPropertyDescriptor;
	var get_proto = Object.getPrototypeOf;
	var set_proto = Object.setPrototypeOf;
	var _key_iterator = Symbol.iterator;
	var _math_ceil = Math.ceil;
	var _math_max = Math.max;
	var _math_min = Math.min;
	var _p = _create_new(null);
	var _g = _create_new(null);
	var _r = _create_new(_public_proto);
	var _const_default_descriptor = {
		enumerable: false,
		writable: false,
		configurable: false,
		__proto__: _public_proto
	};
	
	var _object_ = Object.prototype;
	var _function_ = Function.prototype;
	var _array_ = Array.prototype;
	var _map_ = Map.prototype;
	var _set_ = Set.prototype;
	
	var _proto_descriptor = {
		get: _proto_getter,
		set: _proto_setter,
		__proto__: null
	};
	function _proto_getter() {
		return get_proto(this);
	}
	function _proto_setter(value) {
		set_proto(this, value);
	}
	var _object_hasOwnProperty = _object_.hasOwnProperty;
	var _function_call = _function_.call;
	var _function_apply = _function_.apply;
	var _function_bind = _function_.bind;
	var _array_map = _array_.map;
	var _map_set = _map_.set;
	var _map_get = _map_.get;
	var _map_delete = _map_.delete;
	var _map_forEach = _map_.forEach;
	var _set_add = _set_.add;
	var _set_delete = _set_.delete;
	var _set_forEach = _set_.forEach;
	
	var __function_bindbind = _function_bind.bind(_function_bind);
	var __function_callbind = __function_bindbind(_function_call);
	var __array_map = __function_callbind(_array_map);
	var __setConst = __function_callbind(_setConst);
	var __addSetConsts = __function_callbind(_addSetConsts);
	var __insertPropertyMapperBefore = __function_callbind(_insertPropertyMapperBefore);
	var __executePropertyMappers = __function_callbind(_executePropertyMappers);
	var __clearAllPropertyMappers = __function_callbind(_clearAllPropertyMappers);
	
	var _setConst_bind = __function_bindbind(_setConst);
	
	/* MAIN PART */
	
	//METHODS DEFINITION

	//ultilities of ultilities
	
	//constructor ultilities
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
		if(!prvCheckConstructorInstance(constructor, object))
			throw new TypeError(error);
	}
	function prvCheckConstructorInstance(constructor, object) {
		var set = prvGetConstructorObject(constructor);
		return set && set.has(object);
	}
	
	//object ultilities
	function DescriptorGetterSetter1os3b(object, key, readonly, enumerable, configurable) {
		if(!this) return new DescriptorGetterSetter1os3b(object, key, readonly, enumerable, configurable);
		var setconst = _setConst_bind(this);
		setconst("get", function getter() {
			return object[key];
		});
		readonly || setconst("set", function setter(value) {
			object[key] = value;
		});
		setconst("enumerable", Boolean(enumerable));
		setconst("configurable", Boolean(configurable));
	}
	DescriptorGetterSetter1os3b.prototype = freeze({
		get: null,
		set: null,
		readonly: false,
		enumerable: false,
		configurable: false,
		__proto__: null
	});
	function setconst1oVs1v(object, keys, value) {
		var setconst = _setConst_bind(object);
		__array_map(keys, function mapper(key) {
			setconst(key, value);
		});
	}
	function bindmtdbyname(object, name) {
		return object[name].bind(object);
	}
	function setmtdfromcore2o1s(object, core, name) {
		__setConst(object, name, bindmtdbyname(core, name));
	}
	function setmtdfromcore2os(object, objectkey, core, corekey) {
		var setconsto = _setConst_bind(object);
		var setconstc = bindmtdbyname(core, corekey);
		setconsto(objectkey, setconstc);
		setconsto(corekey, setconstc);
	}
	function setkeytokey2os3b(object1, key1, object2, key2, readonly, enumerable, configurable) {
		_def_pro(object1, key1, new DescriptorGetterSetter1os3b(object2, key2, readonly, enumerable, configurable));
	}
	var setkeytokey1o2s3b_inheritable = false;
	function setkeytokey1o2s3b(object, key1, key2, readonly, enumerable, configurable) {
		_def_pro(object, key1, {
			set: (readonly ? undefined : (setkeytokey1o2s3b_inheritable ? _setter(key2) :_setter_of(object, key2))),
			get: (setkeytokey1o2s3b_inheritable ? _getter(key2) :_getter_of(object, key2)),
			enumerable: Boolean(enumerable),
			configurable: Boolean(configurable),
			__proto__: null
		});
	}
	function defgettersetter1o2s(object, key_source, key_target, enumerable, configurable) {
		_def_pro(object, key_source, {
			configurable: Boolean(configurable),
			enumerable: Boolean(enumerable),
			get: function () {
				return this[key_target];
			},
			set: function (value) {
				this[key_target] = value;
			},
			__proto__: null
		});
	}
	function _setter(key) {
		return function setter(value) {
			return this[key] = value;
		};
	}
	function _getter(key) {
		return function getter() {
			return this[key];
		};
	}
	function _setter_of(object, key) {
		return function setter(value) {
			return object[key] = value;
		};
	}
	function _getter_of(object, key) {
		return function getter() {
			return object[key];
		};
	}
	
	//function ultilities
	function shared_toString() {
		return this.user_manuals.join("\n\t");
	}
	shared_toString.toString = shared_toString;
	shared_toString.user_manuals = "This method which called 'toString', simply join the value stored in 'object.user_manuals' as an instance of 'Array'";
	function throw_error(constructor, message) {
		throw new constructor(message);
	}
	
	//object ultilities
	function is_extensible_object(object) {
		return object && typeof object === "object" && isextensible(object);
	}
	
	//handler ultilities
	function is_valid_handler(handler) {
		switch (handler) {
			case undefined:
			case null:
				return false;
		}
		if (typeof handler.call === "function" && typeof handler.apply === "function" && typeof handler.bind === "function")
			return true;
	}
	
	//mapper ultilities
	var shared_mapper_reply = null; //this is a private variable which used by mapper
	
	//keys as symbol
	
	//public keys
	var _key_Initor = Symbol("Initor");
	var _key_SymbolCollection = Symbol("SymbolCollection");
	var _key_FunctionCollection = Symbol("FunctionCollection");
	var _key_ReleaseMethods = Symbol("ReleaseMethods");
	var _key_ReleaseClasses = Symbol("ReleaseClasses");
	var _key_ClassCollection = Symbol("ClassCollection");
	var _key_createdInstance = Symbol("created instance");
	var _key_proto = Symbol("__proto__");
	var _key_primitivePrototype = Symbol("primitive prototype");
	var _key_create = Symbol("create");
	var _key_setConst = Symbol("setConst");
	var _key_addSetConsts = Symbol("addSetConsts");
	var _key_addMember = Symbol("add member"); //'add' and 'enter' in republic-civilian module
	var _key_removeMember = Symbol("remove member"); //'remove' and 'leave' in republic-civilian module
	var _key_clear = Symbol("clear all members");
	var _key_update = Symbol("update and run"); //'execute' in republic-civilian module
	var _key_request = Symbol("request"); //send request to republic
	var _key_unrequest = Symbol("unrequest"); //send unrequest to republic
	var _key_enable = Symbol("enable");
	var _key_disable = Symbol("disable");
	var _key_enabled = Symbol("check if enabled, set enable/disable");
	var _key_args = Symbol("arguments"); //'args' in properties-mapper module
	var _key_self = Symbol("self"); //'self' in properties-mapper module
	var _key_key = Symbol("key as Symbol or String"); //'property' in properties-mapper module
	var _key_jump = Symbol("jump as Integer");
	
	//public key set
	var _keys_jump = _create_new(_array_);
	_keys_jump.length = 0;
	
	//release keys
	var _allkeys = freeze({
		Initor: _key_Initor,
		SymbolCollection: _key_SymbolCollection,
		FunctionCollection: _key_FunctionCollection,
		ReleaseMethods: _key_ReleaseMethods,
		ReleaseClasses: _key_ReleaseClasses,
		ClassCollection: _key_ClassCollection,
		createdInstance: _key_createdInstance,
		proto: _key_proto,
		primitivePrototype: _key_primitivePrototype,
		create: _key_create,
		setConst: _key_setConst,
		addSetConsts: _key_addSetConsts,
		addMember: _key_addMember,
		removeMember: _key_removeMember,
		clear: _key_clear,
		update: _key_update,
		request: _key_request,
		unrequest: _key_unrequest,
		enable: _key_enable,
		disable: _key_disable,
		enabled: _key_enabled,
		args: _key_args,
		self: _key_self,
		jump: _key_jump,
		__proto__: null
	});
	
	//release functions
	var _allfunc = freeze({
		is_extensible_object: is_extensible_object,
		is_valid_handler: is_valid_handler,
		Initor: Initor,
		SymbolCollection: SymbolCollection,
		FunctionCollection: FunctionCollection,
		ReleaseClasses: ReleaseClasses,
		ReleaseMethods: ReleaseMethods,
		shared_toString: shared_toString,
		_prvEnsureConstructor: prvEnsureConstructor,
		_prvCheckConstructorInstance: prvCheckConstructorInstance,
		_proto_descriptor: (_proto_descriptor.set(null), freeze(_proto_descriptor)),
		_proto_getter: _proto_getter,
		_proto_setter: _proto_setter,
		_DescriptorGetterSetter1os3b: DescriptorGetterSetter1os3b,
		_setconst1oVs1v: setconst1oVs1v,
		_bindmtdbyname: bindmtdbyname,
		_setmtdfromcore2o1s: setmtdfromcore2o1s,
		_setmtdfromcore2os: setmtdfromcore2os,
		_setkeytokey2os3b: setkeytokey2os3b,
		_setkeytokey1o2s3b: setkeytokey1o2s3b,
		_setkeytokey1o2s3b_inheritable: function (value) {
			setkeytokey1o2s3b_inheritable = Boolean(value);
		},
		_defgettersetter1o2s: defgettersetter1o2s,
		_setter: _setter,
		_getter: _getter,
		_setter_of: _setter_of,
		_getter_of: _getter_of,
		__function_callbind: __function_callbind,
		__setConst: __setConst,
		__addSetConsts: __addSetConsts,
		__insertPropertyMapperBefore: __insertPropertyMapperBefore,
		__executePropertyMappers: __executePropertyMappers,
		__clearAllPropertyMappers: __clearAllPropertyMappers,
		__proto__: null
	});

	//ultilities methods, be provided to an object by using _kJs_provide

	//set single constant property method
	//return value: binded object
	function _setConst(name, value, descriptor) {
		//this method should not be used by calling directly '_setConst(...)', bind it to an object before call i.e: '_setConst.apply(...)' or '_setConst.call(...)' ...
		(descriptor || (descriptor = _const_default_descriptor)).value = value;
		_def_pro(this, name, descriptor);
		return this;
	}
	_p[_key_setConst] = _p._kJs_setConst = _setConst;
	_setConst.toString = shared_toString;
	_setConst.user_manuals = ["void Object::setConst(String name, String value, optional Object descriptor);"];
	
	//set multiple constant method
	//In fact: insert setting-constant for executing when call _kJs_executePropertyMappers
	function _addSetConsts(clone_target, descriptor, position) {
		//this method is called "_kJs_addSetConsts" and need '_kJs_executePropertyMappers(...)' to see effect
		//this method require _setConsts_mapper available
		if(!is_extensible_object(this) && typeof this !== "function")
			throw new TypeError("Object must be extensible.");
		var self = this;
		// return __insertPropertyMapperBefore(clone_target, _setConsts_mapper(this, descriptor), position);
		return __insertPropertyMapperBefore(clone_target, function (info) {
			var property = info[_key_key];
			__setConst(self, property, this[property], descriptor);
		}, position);
	}
	_p[_key_addSetConsts] = _p._kJs_addSetConsts = _addSetConsts;
	_addSetConsts.toString = shared_toString;
	_addSetConsts.user_manuals = [
		"void Object::addSetConsts(Object clone_target, optional Object descriptor, optional Handler position)",
		"What this method does is adding a setting-constant handler before position",
		"Call _kJs_insertPropertyMapperBefore to see effect"
	];
	/* function _setConsts_mapper(self, descriptor) {
		//this is a method is used for _kJs_addSetConsts (aka _addSetConsts in this closure), don't release
		return function mapper(info) {
			//this function is a handler used for _kJs_addSetConsts, suitable for param "handler" of _kJs_insertPropertyMapperBefore
			var property = info[_key_key];
			__setConst(self, property, this[property], descriptor);
		};
	} */
	
	//properties mapper module
	//include _kJs_insertPropertyMapperBefore and _kJs_executePropertyMappers
	var property_mapper_module_map = new Map();
	//inserter
	function _insertPropertyMapperBefore(handler, position) {
		var handler_list = property_mapper_module_map.get(this);
		/**
		 * EXPLAIN (for the code after this comment):
		 *  if handler_list exist, find position and insert before
		 *  otherwise, create a new handler_list which contains handler and insert created handler_list into property_mapper_module_map
		**/
		/* handler_list ?
			(handler_list.some(_insertPropertyMapperBefore_mapper(handler, position)) || handler_list.push(handler)) :
			property_mapper_module_map.set(this, [handler]); */
		handler_list ?
			(handler_list.some(function (element, index, object) {
				if (position === handler) {
					object.splice(index, 0, handler);
					return true;
				} else return false;
			}) || handler_list.push(handler)) :
			property_mapper_module_map.set(this, [handler]);
		return this;
	}
	_p._kJs_insertPropertyMapperBefore = _insertPropertyMapperBefore;
	_insertPropertyMapperBefore.toString = shared_toString;
	_insertPropertyMapperBefore.user_manuals = [
		"void Object::insertPropertyMapperBefore(Handler handler, optional Handler position);",
		"When call _kJs_executePropertyMappers, 'handler' will be called before 'position' is called",
		"Handler may skip the rest of executing handler list by assigning arguments[0].jump to 1",
		"Handler may stop the executing process by assigning arguments[0].jump to 2"
	];
	/* function _insertPropertyMapperBefore_mapper(handler, position) {
		//this function is used for _kJs_insertPropertyMapperBefore, don't release it
		return function mapper(element, index, object) {
			if (position === handler) {
				object.splice(index, 0, handler);
				return true;
			} else return false;
		};
	} */
	//remover
	function _removePropertyMapper(handler) {
		var handler_list = property_mapper_module_map.get(this);
		handler_list && handler_list.splice(handler_list.indexOf(handler), 1);
		return this;
	}
	_p._kJs_removePropertyMapper = _removePropertyMapper;
	_removePropertyMapper.toString = shared_toString;
	_removePropertyMapper.user_manuals = [
		"void Object::removePropertyMapper(Handler handler)",
		"removed handler would not execute when call _kJs_executePropertyMappers"
	];
	//clearer
	function _clearAllPropertyMappers() {
		var handler_list = property_mapper_module_map.get(this);
		if (handler_list) handler_list.length = 0;
		return this;
	}
	_p._kJs_clearAllPropertyMappers = _clearAllPropertyMappers;
	_clearAllPropertyMappers.toString = shared_toString;
	_clearAllPropertyMappers.user_manuals = [
		"void Object::clearAllPropertyMappers();",
		"clear all inserted property mappers"
	];
	//executer
	function _executePropertyMappers(args) {
		var handler_list = property_mapper_module_map.get(this);
		var info = new prvPropertyMapperParam(args, this);
		shared_mapper_reply = info;
		if (handler_list) {
			// var i;
			// var mapper = _executePropertyMappers_mapper(handler_list, info, args || this);
			/* if (!args) args = this;
			function mapper() {
				function handler_list_mapper(handler, index) {
					handler.call(this, info);
					return info[_key_jump] > 0 && (--info[_key_jump], true);
				}
				return function(property) {
					info[_key_key] = property;
					handler_list.some(handler_list_mapper, args);
					return info[_key_jump] > 0 && (--info[_key_jump], true);
				}
			} */
			if (!args) args = this;
			if (own_prop_sym(this).some(mapper) || own_prop_str(this).some(mapper))
				return this;
			function mapper(property) {
				info[_key_key] = property;
				handler_list.some(handler_list_mapper, args);
				return info[_key_jump] > 0 && (--info[-key_jump], true);
			}
			function handler_list_mapper(handler, index) {
				handler.call(this, info);
				return info[_key_jump] > 0 && (--info[_key_jump], true);
			}
		}
		return this;
	}
	_p._kJs_executePropertyMappers = _executePropertyMappers;
	_executePropertyMappers.toString = shared_toString;
	_executePropertyMappers.user_manuals = [
		"void Object::executePropertyMappers(optional Object args);",
		"execute all handlers which have been inserted before",
		"Handler may skip the rest of executing handler list by assigning arguments[0].continue to true",
		"Handler may stop the executing process by assigning arguments[0].break to true"
	];
	/* function _executePropertyMappers_mapper(handler_list, info, args) {
		//this function is used for _kJs_executePropertyMappers, don't release it
		// var handler_list_mapper = _executePropertyMappers_handlerlistmapper(info);
		function handler_list_mapper(handler, index) {
			handler.call(this, info);
			return info[_key_jump] > 0 && (--info[_key_jump], true);
		}
		return function mapper(property) {
			info[_key_key] = property;
			handler_list.some(handler_list_mapper, args);
			return info[_key_jump] > 0 && (--info[_key_jump], true);
		};
	} */
	/* function _executePropertyMappers_handlerlistmapper(info) {
		//this function is used for _kJs_executePropertyMappers, don't release it
		return function mapper(handler, index) {
			handler.call(this, info);
			return info[_key_jump] > 0 && (--info[_key_jump], true);
		};
	} */
	//private class
	function prvPropertyMapperParam(args, self) {
		this[_key_args] = args;
		this[_key_self] = self;
	}
	(function (constructor) {
		var proto = _p._kJs_prvPropertyMapperParam_prototype = constructor.prototype = _create_new(_public_proto);
		setkeytokey1o2s3b_inheritable = true;
		setkeytokey1o2s3b(proto, "args", _key_args);
		setkeytokey1o2s3b(proto, "self", _key_self);
		setkeytokey1o2s3b(proto, "property", _key_key);
		setkeytokey1o2s3b(proto, "jump", _key_jump);
		proto[_key_args] = null;
		proto[_key_self] = null;
		proto[_key_key] = null;
		proto[_key_jump] = 0;
	})(prvPropertyMapperParam);
	
	
	//CLASSES DEFINITION
	
	//Republic
	//Civilian
	function prvRepublic(object, handler) {
		this.object = object;
		this.handler = handler;
		var unrequested = this.unrequested = new Set();
		this.__add = _set_add.bind(unrequested);
		this.__delete = _set_delete.bind(unrequested);
		prvLinkObjectCore(object, this);
	}
	prvRepublic.prototype = _create_new({
		__add: null,
		__delete: null,
		_add: function (civiliancore) {
			this.__add(civiliancore);
		},
		_remove: function (civiliancore) {
			this.__delete(civiliancore);
		},
		object: null,
		handler: null,
		unrequested: null,
		add: function (civilian) {
			//this method is used for release by binding
			prvEnsureConstructor(Civilian, civilian, "arguments[0] is not an instance of Civilian");
			prvGetObjectCore(civilian)._enter(this);
			return this.object;
		},
		remove: function (civilian) {
			//this method is used for release by binding
			prvEnsureConstructor(Civilian, civilian, "arguments[0] is not an instance of Civilian");
			prvGetObjectCore(civilian)._leave(this);
			return this.object;
		},
		execute: function () {
			//this method is used for release by binding
			//this.handler already is a function (by binding), use this.handler() instead of this.handler.call()
			return this.handler(this.unrequested.size);
		},
		__proto__: null
	});
	function Republic(handler) {
		if(!is_extensible_object(this)) return new Republic(handler);
		if(!is_valid_handler(handler))
			throw new TypeError("arguments[0] is not a valid handler.");
		handler = handler.bind(this);
		if (typeof handler !== "function")
			throw new TypeError("handler.bind() must return a function.");
		prvConstructorCorrection(Republic, this);
		var info = new prvRepublic(this, handler);
		setmtdfromcore2os(this, _key_addMember, info, "add");
		setmtdfromcore2os(this, _key_removeMember, info, "remove");
		setmtdfromcore2os(this, _key_update, info, "execute");
	}
	prvRegisterConstructor(Republic, (function register_proto(proto) {
		var setconst = _setConst_bind(proto);
		setconst("add", null);
		setconst("remove", null);
		setconst("execute", null);
		setconst(_key_addMember, null);
		setconst(_key_removeMember, null);
		setconst(_key_update, null);
		return proto;
	})(_create_new(_public_proto)));
	_g._kJs_Republic = _r.Republic = Republic;
	Republic.toString = shared_toString;
	Republic.user_manuals = [
		"constructor Republic(Handler handler);",
		"method add(Civilian civilian);",
		"method remove(Civilian civilian);",
		"method execute();"
	];
	(function (directory) {
		var setconst = _setConst_bind(directory);
		setconst("EXECUTE_CASE_ALL_OR_NO", function (allrequestedhandler, norequestedhandler) {
			if(!is_valid_handler(allrequestedhandler))
				throw new TypeError("arguments[0] is not a valid handler.");
			if(!is_valid_handler(norequestedhandler))
				throw new TypeError("arguments[1] is not a valid handler.");
			allrequestedhandler = allrequestedhandler.bind(this);
			norequestedhandler = norequestedhandler.bind(this);
			return function $(unrequested) {
				return (unrequested ? norequestedhandler : allrequestedhandler)(this);
			};
		});
		setconst("EXECUTE_ONLY_WHEN_ALL_REQUESTED", function (handler) {
			if(!is_valid_handler(handler))
				throw new TypeError("arguments[0] is not a valid handler.");
			handler = handler.bind(this);
			return function $(unrequested) {
				return unrequested ? null : handler(this);
			};
		});
		setconst("EXECUTE_ONLY_WHEN_NO_REQUESTED", function (handler) {
			if(!is_valid_handler(handler))
				throw new TypeError("arguments[0] is not a valid handler.");
			handler = handler.bind(this);
			return function $(unrequested) {
				return unrequested ? handler(this) : null;
			};
		});
	})(Republic);
	function prvCivilian(object) {
		this.object = object;
		this.__forEach = _set_forEach.bind(this.entered = new Set());
		prvLinkObjectCore(object, this);
	}
	prvCivilian.prototype = _create_new({
		__forEach: null,
		_enter: function (republiccore) {
			var entered = this.entered;
			if (entered.has(republiccore)) return;
			republiccore._add(this);
			entered.add(republiccore);
		},
		_leave: function (republiccore) {
			var entered = this.entered;
			if(!entered.has(republiccore)) return;
			republiccore._remove(this);
			entered.delete(republiccore);
		},
		entered: null, // Set of Republic
		object: null,
		enter: function (republic) {
			//this method is used for release by binding
			prvEnsureConstructor(Republic, republic, "arguments[0] is not an instance of Republic");
			this._enter(prvGetObjectCore(republic));
			return this.object;
		},
		leave: function (republic) {
			//this method is used for release by binding\
			prvEnsureConstructor(Republic, republic, "arguments[0] is not an instance of Republic");
			this._leave(prvGetObjectCore(republic));
			return this.object;
		},
		request: function () {
			//this method is used for release by binding
			var self = this;
			self.entered.forEach(function mapper(e) {
				e._remove(self);
			});
			return self.object;
		},
		unrequest: function () {
			//this method is used for release by binding
			var self = this;
			self.entered.forEach(function mapper(e) {
				e._add(self);
			});
			return self.object;
		},
		update: function () {
			//this method is used for release by binding
			this.__forEach(function mapper(e) {
				e.execute();
			});
			return this.object;
		},
		__proto__: null
	});
	function Civilian() {
		if(!is_extensible_object(this)) return new Civilian();
		prvConstructorCorrection(Civilian, this);
		var info = new prvCivilian(this);
		setmtdfromcore2os(this, _key_addMember, info, "enter");
		setmtdfromcore2os(this, _key_removeMember, info, "leave");
		setmtdfromcore2os(this, _key_request, info, "request");
		setmtdfromcore2os(this, _key_unrequest, info, "unrequest");
		setmtdfromcore2os(this, _key_update, info, "update");
	}
	prvRegisterConstructor(Civilian, (function register_proto(proto) {
		var setconst = _setConst_bind(proto);
		setconst("enter", null);
		setconst("leave", null);
		setconst("request", null);
		setconst("unrequest", null);
		setconst("update", null);
		setconst(_key_addMember, null);
		setconst(_key_removeMember, null);
		setconst(_key_request, null);
		setconst(_key_unrequest, null);
		setconst(_key_update, null);
		return proto;
	})(_create_new(_public_proto)));
	_g._kJs_Civilian = _r.Civilian = Civilian;
	Civilian.toString = shared_toString;
	Civilian.user_manuals = [
		"constructor Civilian();",
		"method enter(Republic set);",
		"method leave(Republic set);",
		"method request();",
		"method unrequest();",
		"method update();"
	];
	
	/* RELEASE */
	
	//release symbols
	var created_symbol_collection = null;
	function SymbolCollection() {
		return created_symbol_collection || this;
	}
	SymbolCollection.prototype = _allkeys;
	SymbolCollection.toString = shared_toString;
	SymbolCollection.user_manuals = [
		"constructor Initor::SymbolCollection();",
		"Return value: An object which contains all keys"
	];
	SymbolCollection[_key_createdInstance] = SymbolCollection.created = created_symbol_collection = freeze(new SymbolCollection());
	freeze(SymbolCollection);
	
	//release functions
	var created_function_collection = null;
	function FunctionCollection() {
		return created_function_collection || this;
	}
	FunctionCollection.prototype = _allfunc;
	FunctionCollection.toString = shared_toString;
	FunctionCollection.user_manuals = [
		"function Initor::FunctionCollection();",
		"Return value: An object which contains all utility functions"
	];
	FunctionCollection.prototype = _allfunc;
	FunctionCollection[_key_createdInstance] = FunctionCollection.created = created_function_collection = new FunctionCollection();
	freeze(FunctionCollection);
	
	//release methods
	var ReleaseMethods_set = new Set();
	function ReleaseMethods(object) {
		if(!is_extensible_object(object))
			throw new TypeError("arguments[0] must be extensible.");
		if (ReleaseMethods_set.has(object)) return this;
		ReleaseMethods_set.add(object);
		__addSetConsts(object, _p);
		__executePropertyMappers(_p);
		__clearAllPropertyMappers(_p);
		return this;
	}
	ReleaseMethods.toString = shared_toString;
	ReleaseMethods.user_manuals = [
		"function Initor::ReleaseMethods(Object object);",
		"Implement all methods from -k-js-abstract.js"
	];
	
	//release classes and constructors
	_def_pro(_public_proto, _key_proto, _proto_descriptor);
	_def_pro(_public_proto, "__proto__", _proto_descriptor);
	var ReleaseClasses_set = new Set();
	function ReleaseClasses(object) {
		if(!is_extensible_object(object))
			throw new TypeError("arguments[0] must be extensible.");
		if (ReleaseClasses_set.has(object)) return this;
		ReleaseClasses_set.add(object);
		__addSetConsts(object, _g);
		__executePropertyMappers(_g);
		__clearAllPropertyMappers(_g);
		__setConst(object, "_kJs_primitivePrototype", _public_proto);
		__setConst(object, _key_primitivePrototype, _public_proto);
		return this;
	}
	ReleaseClasses.toString = shared_toString;
	ReleaseClasses.user_manuals = [
		"function Initor::ReleaseClasses(Object object);",
		"Release all classes from -k-js-abstract.js to object"
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
		"constructor Initor::ClassCollection();",
		"Return a class collection"
	];
	ClassCollection[_key_createdInstance] = ClassCollection.created = created_class_collection = freeze(new ClassCollection());
	freeze(ClassCollection);
	
	var initialized = null;
	var executing_script = window.document.currentScript;
	var export_keyword = executing_script.getAttributeNS(null, "kjslib-keyword") || "_kJs_Initor";
	function Initor() {
		if (initialized) return initialized;
		var setconst = _setConst_bind(this);
		setconst("SymbolCollection", SymbolCollection);
		setconst(_key_SymbolCollection, SymbolCollection);
		setconst("FunctionCollection", FunctionCollection);
		setconst(_key_FunctionCollection, FunctionCollection);
		ReleaseMethods(this);
		setconst("ReleaseMethods", ReleaseMethods);
		setconst(_key_ReleaseMethods, ReleaseMethods);
		ReleaseClasses(this);
		setconst("ReleaseClasses", ReleaseClasses);
		setconst(_key_ReleaseClasses, ReleaseClasses);
		setconst("ClassCollection", ClassCollection);
		setconst(_key_ClassCollection, ClassCollection);
		return initialized = this;
	}
	window[export_keyword] = window[_key_Initor] = Initor;
	Initor.toString = shared_toString;
	Initor.user_manuals = [
		"constructor Initor();",
		"This constructor is used for create initor of -k-js-abstract.js",
		"Call this constructor once for all"
	];

	Initor.prototype = _create_new(_public_proto);
	Initor[_key_createdInstance] = Initor.created = initialized = freeze(new Initor());
	freeze(Initor);
	ReleaseMethods(_public_proto);

})(window, Object, Function, Symbol, Array, Map, Set);

/*******************************************************
 *                                                     *
 *                                                     *
 *                                                     *
 *******************************************************/
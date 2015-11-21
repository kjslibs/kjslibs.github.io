
(function Init(window, Object, Function, Symbol, Map, Set) {
	'use strict';
	
	/* INITIALIZATION */
	
	//first initialization
	var undefined; // locally 'undefined' is necessarry because of UglifyJS
	var executing_script = window.document.currentScript;
	var kjslibinit = window[executing_script.getAttributeNS(null, "kjslib-keyword") || "_kJs_Initor"];
	if(!kjslibinit) throw new Error("-k-js-abstract.js is required.");
	var kanilibkeyword = executing_script.getAttributeNS(null, "kanilib-keyword") || "_kAni_Initor";
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
	var _map_get = _map_.get;
	var _map_set = _map_.set;
	var _map_delete = _map_.delete;
	var _map_forEach = _map_.forEach;
	var _map_clear = _map_.clear;
	var _set_add = _set_.add;
	var _set_delete = _set_.delete;
	var _date_now = Date.now;
	var _p = _create_new(null);
	var _g = _create_new(null);
	var _r = _create_new(_public_proto);
	
	//keys as symbol
	var _key_isPaused = Symbol("check if paused");
	var _key_lastTime = Symbol("last executed timepoint");
	var _key_currentTime = Symbol("current timepoint");
	var _key_duration = Symbol("duration");
	var _key_createAnimate = Symbol("create an animate");
	var _key_animate = Symbol("one unique animate");
	var _key_getAnimateParam = Symbol("get animate parameters from animate");
	var _key_request = symbols.request;
	var _key_unrequest = symbols.unrequest;
	var _key_SymbolCollection = symbols.SymbolCollection;
	var _key_FunctionCollection = symbols.FunctionCollection;
	var _key_ReleaseClasses = symbols.ReleaseClasses;
	var _key_ClassCollection = symbols.ClassCollection;
	var _key_createdInstance = symbols.createdInstance;
	var _key_primitivePrototype = symbols.primitivePrototype;
	var _key_addMember = symbols.addMember;
	var _key_removeMember = symbols.removeMember;
	var _key_clear = symbols.clear;
	var _key_update = symbols.update;
	
	var _allkeys = freeze({
		isPaused: _key_isPaused,
		lastTime: _key_lastTime,
		currentTime: _key_currentTime,
		duration: _key_duration,
		createAnimate: _key_createAnimate,
		animate: _key_animate,
		getAnimateParam: _key_getAnimateParam,
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
	
	//enum formating
	var _enum_type = executing_script.getAttributeNS(null, "kani-enum-type");
	_enum_type && (_enum_type = _enum_type.toLocaleString());
	var _create_enum, _reset_enum;
	switch (_enum_type) {
		case "int":
		case "integer":
		case "number":
			(function () {
				var _enum_start = 0;
				var _enum_level = 0;
				_create_enum = function (/* name */) {
					var result = _enum_start;
					_enum_start += 1 << level;
					return result;
				};
				_reset_enum = function (level) {
					_enum_start = 0;
					_enum_level = level >> 0;
				};
			})();
			break;
		default:
			window.console.warn("Attribute 'kani-enum-type' of this script element is set to an invalid value. Enum type will be Symbol by default.", executing_script, executing_script.getAttributeNodeNS(null, "kani-enum-type"));
			//don't break;
		case null:
		case "symbol":
			_create_enum = function (name) {
				return Symbol(name);
			};
			_reset_enum = _function_;
	}
	
	//CLASSES DEFINITION
	
	//animate
	function Animate(callback) {
		if(!is_extensible_object(this)) return new Animate(callback);
		if(!is_valid_handler(callback))
			throw new TypeError("arguments[0] is not a valid handler.");
		var animate = this;
		prvConstructorCorrection(Animate, animate);
		callback = callback.bind(animate);
		if (typeof callback !== "function")
			throw new TypeError("arguments[0].bind() must return a function.");
		var paused = true;
		var id, last;
		function mainhandler(now) {
			var param = new prvAnimateParam(last, now);
			callback(param);
			last = now;
			id = requestAnimationFrame(mainhandler);
		}
		function firsthandler(now) {
			requestAnimationFrame(mainhandler);
			last = now;
		}
		function run() {
			id = requestAnimationFrame(firsthandler);
			paused = false;
			return animate;
		}
		function pause() {
			cancelAnimationFrame(id);
			paused = true;
			return animate;
		}
		var paused_descriptor = {
			get: function () {
				return paused;
			},
			set: function (value) {
				(value ? pause : run)();
			},
			__proto__: null
		};
		setconst1oVs1v(animate, [_key_request, "run"], run);
		setconst1oVs1v(animate, [_key_unrequest, "pause"], pause);
		_def_pro(animate, "paused", paused_descriptor);
		_def_pro(animate, _key_isPaused, paused_descriptor);
	}
	prvRegisterConstructor(Animate, (function register_proto(proto) {
		var setconst = _setConst_bind(proto);
		setconst("run", null);
		setconst("pause", null);
		setconst("paused", true);
		setconst(_key_isPaused, true);
		setconst(_key_request, null);
		setconst(_key_unrequest, null);
		return proto;
	})(_create_new(_public_proto)));
	_g._kAni_Animate = _r.Animate = Animate;
	Animate.toString = shared_toString;
	Animate.user_manuals = [
		"constructor Animate(function<void, Animate, AnimateParam> callback);"
	];
	function prvAnimateParam(last, now) {
		this[_key_duration] = (this[_key_currentTime] = now) - (this[_key_lastTime] = last);
	}
	(function (constructor) {
		var proto = constructor.prototype = _create_new(_public_proto);
		__setConst(Animate, "prvAnimateParam_prototype", proto);
		setkeytokey1o2s3b_inheritable(true);
		setkeytokey1o2s3b(proto, "now", _key_currentTime);
		setkeytokey1o2s3b(proto, "last", _key_lastTime);
		setkeytokey1o2s3b(proto, "duration", _key_duration);
		proto[_key_currentTime] = null;
		proto[_key_lastTime] = null;
		proto[_key_duration] = 0;
	})(prvAnimateParam);
	
	//actor, stage
	_reset_enum(0);
	var _enum_FIRST_IMPACT = _create_enum("Stage.FIRST_IMPACT");
	var _enum_WHILE_IMPACT = _create_enum("Stage.WHILE_IMPACT");
	var _enum_AFTER_IMPACT = _create_enum("Stage.AFTER_IMPACT");
	(function (dictionary) {
		var setconst = _setConst_bind(dictionary);
		setconst("FIRST_IMPACT", _enum_FIRST_IMPACT);
		setconst("WHILE_IMPACT", _enum_WHILE_IMPACT);
		setconst("AFTER_IMPACT", _enum_AFTER_IMPACT);
	})(Stage);
	function Stage(impact_detector, impact_handler, l_actor) {
		if(!is_extensible_object(this)) return new Stage(impact_detector, impact_handler, l_actor);
		if(!is_valid_handler(impact_detector))
			throw new TypeError("arguments[0] is not a valid handler.");
		if(!is_valid_handler(impact_handler))
			throw new TypeError("arguments[1] is not a valid handler.");
		var stage = this;
		prvConstructorCorrection(Stage, stage);
		impact_detector = impact_detector.bind(stage);
		impact_handler = impact_handler.bind(stage);
		var r_actor_map = new Map();
		var added_r_actor_map = new Map();
		var r_actor_map_set = _map_set.bind(r_actor_map);
		var r_actor_map_delete = _map_delete.bind(r_actor_map);
		var r_actor_map_forEach = _map_forEach.bind(r_actor_map);
		var r_actor_map_clear = _map_clear.bind(r_actor_map);
		var added_r_actor_map_get = _map_get.bind(added_r_actor_map);
		var added_r_actor_map_set = _map_set.bind(added_r_actor_map);
		var animateparam;
		var animate = new Animate(function (param) {
			animateparam = param;
			update();
		});
		var animate_run = animate[_key_request];
		var animate_pause = animate[_key_unrequest];
		function _prepare(r_actor) {
			var impact_state = false, impact_type;
			return function () {
				if (impact_detector(l_actor, r_actor)) {
					impact_type = impact_state ? _enum_WHILE_IMPACT : (impact_state = true, _enum_FIRST_IMPACT);
				} else if (impact_state) {
					impact_state = false;
					impact_type = _enum_AFTER_IMPACT;
				} else return; // to not execute impact_handler
				impact_handler(l_actor, r_actor, impact_type);
			};
		}
		function add(r_actor) {
			var handler = added_r_actor_map_get(r_actor);
			if(!handler) {
				handler = _prepare(r_actor);
				added_r_actor_map_set(r_actor);
			}
			r_actor_map_set(r_actor, handler);
			return stage;
		}
		function remove(r_actor) {
			r_actor_map_delete(r_actor);
			return stage;
		}
		function clear() {
			r_actor_map_clear();
			return stage;
		}
		function update() {
			r_actor_map_forEach(function (handler /*, r_actor, r_actor_map */) {
				handler();
			});
			return stage;
		}
		function createAnimateWith(r_actor) {
			var handler = added_r_actor_map_get(r_actor) || _prepare(r_actor);
			return new Animate(function (param) {
				animateparam = param;
				handler();
			});
		}
		function run() {
			animate_run();
			return stage;
		}
		function pause() {
			animate_pause();
			return stage;
		}
		function getAnimateParam() {
			return animateparam;
		}
		setconst1oVs1v(stage, [_key_addMember, "add"], add);
		setconst1oVs1v(stage, [_key_removeMember, "remove"], remove);
		setconst1oVs1v(stage, [_key_clear, "clear"], clear);
		setconst1oVs1v(stage, [_key_update, "update"], update);
		setconst1oVs1v(stage, [_key_createAnimate, "createAnimateWith"], createAnimateWith);
		setconst1oVs1v(stage, [_key_animate, "animate"], animate);
		setconst1oVs1v(stage, [_key_request, "run"], run);
		setconst1oVs1v(stage, [_key_unrequest, "pause"], pause);
		setconst1oVs1v(stage, [_key_getAnimateParam, "getAnimateParam"], getAnimateParam);
		var paused_descriptor = new DescriptorGetterSetter1os3b(animate, _key_isPaused);
		_def_pro(stage, "paused", paused_descriptor);
		_def_pro(stage, _key_isPaused, paused_descriptor);
	}
	prvRegisterConstructor(Stage, (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("add", null);
		setconst("remove", null);
		setconst("clear", null);
		setconst("update", null);
		setconst("createAnimateWith", null);
		setconst("animate", null);
		setconst("run", null);
		setconst("pause", null);
		setconst("getAnimateParam", null);
		setconst("paused", null);
		setconst(_key_addMember, null);
		setconst(_key_removeMember, null);
		setconst(_key_clear, null);
		setconst(_key_update, null);
		setconst(_key_createAnimate, null);
		setconst(_key_animate, null);
		setconst(_key_request, null);
		setconst(_key_unrequest, null);
		setconst(_key_getAnimateParam, null);
		setconst(_key_isPaused, null);
		setconst("FIRST_IMPACT", _enum_FIRST_IMPACT);
		setconst("WHILE_IMPACT", _enum_WHILE_IMPACT);
		setconst("AFTER_IMPACT", _enum_AFTER_IMPACT);
		return proto;
	})(_create_new(_public_proto)));
	_g._kAni_Stage = _r.Stage = Stage;
	Stage.toString = shared_toString;
	Stage.user_manuals = [
		"constructor Stage(ImpactDetector impact_detector, ImpactHandler impact_handler, LActor l_actor);",
		"typedef function<bool, Stage, LActor, RActor> ImpactDetector;",
		"typedef function<void, Stage, LActor, RActor, ImpactType> ImpactHandler;",
		"typedef any LActor, RActor;",
		"enum ImpactType { FIRST_IMPACT, WHILE_IMPACT, AFTER_IMPACT }"
	];
	
	//animate republic
	function prvAnimateRepublic(object, animate) {
		prvLinkObjectCore(object, this);
		this.object = object;
		var __run = animate[_key_request];
		var __pause = animate[_key_unrequest];
		var republic = this._republic = new _kJs_Republic(function (unaccepted) {
			(unaccepted ? __pause : __run)();
		});
		this.__add = republic[_key_addMember];
		this.__remove = republic[_key_removeMember];
		this.__execute = republic[_key_update];
	}
	prvAnimateRepublic.prototype = _create_new({
		__add: null,
		__remove: null,
		__execute: null,
		_republic: null,
		object: null,
		add: function (animate_civilian) {
			prvEnsureConstructor(AnimateCivilian, animate_civilian, "arguments[0] must be an animate civilian.");
			this.__add(prvGetObjectCore(animate_civilian)._civilian);
			return this.object;
		},
		remove: function (animate_civilian) {
			prvEnsureConstructor(AnimateCivilian, animate_civilian, "arguments[0] must be an animate civilian.");
			this.__remove(prvGetObjectCore(animate_civilian)._civilian);
			return this.object;
		},
		execute: function () {
			this.__execute();
			return this.object;
		},
		__proto__: null
	});
	function AnimateRepublic(animate) {
		if(!is_extensible_object(this)) return new AnimateRepublic(animate);
		prvEnsureConstructor(Animate, animate, "arguments[0] must be an animate.");
		prvConstructorCorrection(AnimateRepublic, this);
		var info = new prvAnimateRepublic(this, animate);
		setmtdfromcore2os(this, _key_addMember, info, "add");
		setmtdfromcore2os(this, _key_removeMember, info, "remove");
		setmtdfromcore2os(this, _key_update, info, "execute");
	}
	prvRegisterConstructor(AnimateRepublic, (function (proto) {
		var setconst = _setConst_bind(proto);
		return proto;
	})(_create_new(_public_proto)));
	_g._kAni_AnimateRepublic = _r.AnimateRepublic = AnimateRepublic;
	AnimateRepublic.toString = shared_toString;
	AnimateRepublic.user_manuals = [
		"constructor AnimateRepublic(Animate animate);"
	];
	
	//animate civilian
	function prvAnimateCivilian(object) {
		prvLinkObjectCore(object, this);
		this.object = object;
		var civilian = this._civilian = new _kJs_Civilian();
		this.__enter = civilian.enter;
		this.__leave = civilian.leave;
		this.__request = civilian.request;
		this.__unrequest = civilian.unrequest;
	}
	prvAnimateCivilian.prototype = _create_new({
		__enter: null,
		__leave: null,
		__request: null,
		__unrequest: null,
		_civilian: null,
		object: null,
		enter: function (animate_republic) {
			prvEnsureConstructor(AnimateRepublic, animate_republic, "arguments[0] must be an animate republic.");
			this.__enter(prvGetObjectCore(animate_republic)._republic);
			return this.object;
		},
		leave: function (animate_republic) {
			prvEnsureConstructor(AnimateRepublic, animate_republic, "arguments[0] must be an animate republic.");
			this.__leave(prvGetObjectCore(animate_republic)._republic);
			return this.object;
		},
		request: function () {
			this.__request();
			return this.object;
		},
		unrequest: function () {
			this.__unrequest();
			return this.object;
		},
		__proto__: null
	});
	function AnimateCivilian() {
		if(!is_extensible_object(this)) return new AnimateCivilian();
		prvConstructorCorrection(AnimateCivilian, this);
		var info = new prvAnimateCivilian(this);
		setmtdfromcore2os(this, _key_addMember, info, "enter");
		setmtdfromcore2os(this, _key_removeMember, info, "leave");
		setmtdfromcore2os(this, _key_request, info, "request");
		setmtdfromcore2os(this, _key_unrequest, info, "unrequest");
	}
	prvRegisterConstructor(AnimateCivilian, (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("enter", null);
		setconst("leave", null);
		setconst("request", null);
		setconst("unrequest", null);
		setconst(_key_addMember, null);
		setconst(_key_removeMember, null);
		setconst(_key_request, null);
		setconst(_key_unrequest, null);
		return proto;
	})(_create_new(_public_proto)));
	_g._kAni_AnimateCivilian = _r.AnimateCivilian = AnimateCivilian;
	AnimateCivilian.toString = shared_toString;
	AnimateCivilian.user_manuals = [
		"constructor AnimateCivilian();"
	];
	
	//vector animator
	function VectorAnimator(vecadder) {
		if(!is_extensible_object(this)) return new VectorAnimator(vecadder);
		if(!is_valid_handler(vecadder))
			throw new TypeError("arguments[0] is not a valid handler.");
		vecadder = vecadder.bind(this);
		setconst1oVs1v(this, [_key_createAnimate, "createAnimate"], function createAnimate(l_vec, r_vec) {
			return new Animate(function (param) {
				vecadder(l_vec, r_vec, param, this);
			});
		});
	}
	prvRegisterConstructor(VectorAnimator, (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("createAnimate", null);
		setconst(_key_createAnimate, null);
		return proto;
	})(_create_new(_public_proto)));
	_g._kAni_VectorAnimator = _r.VectorAnimator = VectorAnimator;
	VectorAnimator.toString = shared_toString;
	VectorAnimator.user_manuals = [
		"constructor VectorAnimator(function<void, VectorAnimator, LVec, RVec, AnimateParam, Animate> vecadder);",
		"typedef any LVec, RVec;"
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
		"constructor Initor::SymbolCollection();"
	];
	SymbolCollection[_key_createdInstance] = SymbolCollection.created = created_symbol_collection = new SymbolCollection();
	freeze(SymbolCollection);
	
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
		__setConst(object, "_kAni_primitivePrototype", _public_proto);
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
		setconst("SymbolCollection", SymbolCollection);
		setconst(_key_SymbolCollection, SymbolCollection);
		setconst("FunctionCollection", FunctionCollection);
		setconst(_key_FunctionCollection, FunctionCollection);
		ReleaseClasses(this);
		setconst("ReleaseClasses", ReleaseClasses);
		setconst(_key_ReleaseClasses, ReleaseClasses);
		setconst("ClassCollection", ClassCollection);
		setconst(_key_ClassCollection, ClassCollection);
		return initialized = this;
	}
	window[kanilibkeyword] = Initor;
	Initor.toString = shared_toString;
	Initor.user_manuals = [
		"constructor Initor();"
	];
	Initor.prototype = _create_new(_public_proto);
	Initor[_key_createdInstance] = Initor.created = initialized = freeze(new Initor());
	freeze(Initor);
	
})(window, Object, Function, Symbol, Map, Set);
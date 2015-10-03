
(function Init(window, Object, Function, Symbol, Map, Set, Array, Node, Document, Element, Attr) {
	'use strict';
	
	/* INITIALIZATION */
	
	//first initialization
	var undefined; // locally 'undefined' is necessarry because of UglifyJS
	var executing_script = window.document.currentScript;
	var kjslibinit = window[executing_script.getAttributeNS(null, "kjslib-keyword") || "_kJs_Initor"];
	if(!kjslibinit) throw new Error("-k-js-abstract.js is required.");
	var kxmllibkeyword = executing_script.getAttributeNS(null, "kxmllib-keyword") || "_kXml_Initor";
	var kjslib = new kjslibinit();
	var symbols = kjslib.SymbolCollection();
	var utils = kjslib.FunctionCollection();
	var _create_new = Object.create;
	var _def_pro = Object.defineProperty;
	var _set_proto = Object.setPrototypeOf;
	var _get_own_prop_names = Object.getOwnPropertyNames;
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
	var _addSetConsts = _local_global._kJs_addSetConsts;
	var _executePropertyMappers = _local_global._kJs_executePropertyMappers;
	var _clearAllPropertyMappers = _local_global._kJs_clearAllPropertyMappers;
	var _map_ = Map.prototype;
	var _set_ = Set.prototype;
	var _array_ = Array.prototype;
	var _node_ = Node.prototype;
	var _document_ = Document.prototype;
	var _element_ = Element.prototype;
	var _map_get = _map_.get;
	var _map_set = _map_.set;
	var _map_delete = _map_.delete;
	var _map_forEach = _map_.forEach;
	var _map_clear = _map_.clear;
	var _set_add = _set_.add;
	var _set_delete = _set_.delete;
	var _set_has = _set_.has;
	var _array_forEach = _array_.forEach;
	var __array_forEach = _function_callbind(_array_forEach);
	var _node_insertBefore = _node_.insertBefore;
	var _node_removeChild = _node_.removeChild;
	var __node_insertBefore = _function_callbind(_node_insertBefore);
	var __node_removeChild = _function_callbind(_node_removeChild);
	var _document_createElementNS = _document_.createElementNS;
	var _document_createAttributeNS = _document_.createAttributeNS;
	var _document_createTextNode = _document_.createTextNode;
	var _document_createDocumentFragment = _document_.createDocumentFragment;
	var _document_createComment = _document_.createComment;
	var __document_createElementNS = _function_callbind(_document_createElementNS);
	var __document_createAttributeNS = _function_callbind(_document_createAttributeNS);
	var __document_createTextNode = _function_callbind(_document_createTextNode);
	var __document_createDocumentFragment = _function_callbind(_document_createDocumentFragment);
	var __document_createComment = _function_callbind(_document_createComment);
	var _element_getAttributeNS = _element_.getAttributeNS;
	var _element_setAttributeNS = _element_.setAttributeNS;
	var _element_getAttributeNode = _element_.getAttributeNode;
	var _element_setAttributeNode = _element_.setAttributeNode;
	var __element_getAttributeNS = _function_callbind(_element_getAttributeNS);
	var __element_setAttributeNS = _function_callbind(_element_setAttributeNS);
	var __element_getAttributeNode = _function_callbind(_element_getAttributeNode);
	var __element_setAttributeNode = _function_callbind(_element_setAttributeNode);
	var _p = _create_new(null);
	var _g = _create_new(null);
	var _r = _create_new(_public_proto);
	
	//keys as symbol
	var _key_iterator = Symbol.iterator;
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
	var _key_node = Symbol("Base DOM Node");
	var _key_xmlns = Symbol("Namespace URI");
	var _key_getXmlns = Symbol("Get namespace URI");
	var _key_setXmlns = Symbol("Set namespace URI");
	var _key_createNode = Symbol("create a DOM Node");
	var _key_createElement = Symbol("create a DOM Element");
	var _key_createAttribute = Symbol("create a DOM Attribute");
	var _key_createTextNode = Symbol("create a DOM Text Node");
	var _key_createDocumentFracment = Symbol("create a #document-fracment");
	var _key_move = Symbol("move to new place");
	var _key_tree = Symbol("browse a tree");
	
	var _allkeys = freeze({
		node: _key_node,
		xmlns: _key_xmlns,
		getXmlns: _key_getXmlns,
		setXmlns: _key_setXmlns,
		createNode: _key_createNode,
		createElement: _key_createElement,
		createAttribute: _key_createAttribute,
		createTextNode: _key_createTextNode,
		createDocumentFragment: _key_createDocumentFracment,
		move: _key_move,
		tree: _key_tree,
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
	var setconst1oVs1v = utils._setconst1oVs1v;
	
	//enum utilities
	var _enum_type = executing_script.getAttributeNS(null, "kxml-enum-type");
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
			window.console.warn("Attribute 'kxml-enum-type' of this script element is set to an invalid value. Enum type will be Symbol by default.", executing_script, executing_script.getAttributeNodeNS(null, "kxml-enum-type"));
			//don't break;
		case null:
		case "symbol":
			_create_enum = function (name) {
				return Symbol(name);
			};
			_reset_enum = _function_;
	}
	
	//CLASSES
	
	//DocumentUtil
	_reset_enum(0);
	var _enum_ELEMENT = _create_enum("DocumentUtil.ELEMENT");
	var _enum_ATTRIBUTE = _create_enum("DocumentUtil.ATTRIBUTE");
	var _enum_TEXT = _create_enum("DocumentUtil.TEXT");
	var _enum_DOCUMENT_FRAGMENT = _create_enum("DocumentUtil.DOCUMENT_FRAGMENT");
	var _enum_COMMENT = _create_enum("DocumentUtil.COMMENT");
	function _setEnum_DocumentUtil(dictionary) {
		var setconst = _setConst_bind(dictionary);
		setconst("ELEMENT", _enum_ELEMENT);
		setconst("ATTRIBUTE", _enum_ATTRIBUTE);
		setconst("TEXT", _enum_TEXT);
		setconst("DOCUMENT_FRAGMENT", _enum_DOCUMENT_FRAGMENT);
		setconst("COMMENT", _enum_COMMENT);
		return dictionary;
	}
	(function (dictionary) {
		var setconst = _setConst_bind(dictionary);
		setconst("createNode", createNode);
		setconst("createElement", createElement);
		setconst("createTextNode", createTextNode);
	})(DocumentUtil);
	(function (A, B) {
		var proto = _setEnum_DocumentUtil(_create_new(_function_));
		_set_proto(A, proto);
		_set_proto(B, proto);
	})(createNode, DocumentUtil);
	var _createNode_namespaceURI = undefined;
	function createNode(document, content) {
		if (content instanceof Node) return content;
		if (content === null) return null;
		if (typeof content === "object") {
			if (typeof content.length === "number")
				return createDocumentFragment(document, content);
			var node = null;
			var xmlns = content.namespaceURI;
			if (xmlns === undefined)
				xmlns = _createNode_namespaceURI === undefined ? document.namespaceURI : _createNode_namespaceURI;
			switch (content.type) {
				case _enum_ELEMENT:
					node = createElement(document, xmlns, content.tag, content.attributes, content.children);
					break;
				case _enum_ATTRIBUTE:
					node = createAttribute(document, xmlns, content.name, content.value);
					break;
				case _enum_TEXT:
					node = createTextNode(document, content.value);
					break;
				case _enum_DOCUMENT_FRAGMENT:
					node = createDocumentFragment(document, content.children);
					break;
				case _enum_COMMENT:
					node = __document_createComment(document, content.value);
					break;
				default:
					return null;
			}
			var parent = content.parent;
			var before = content.before;
			(function () {
				if (parent === undefined) {
					if (before === undefined) return; // If both of 'parent' and 'before' are 'undefined', skip this action.
					before = createNode(document, before);
					parent = before.parentNode;
				} else {
					if (before === undefined) before = null;
					parent = createNode(document, parent);
				}
				__node_insertBefore(parent, node, before);
			})();
			(function __main_event__(listeners) {
				if (typeof listeners !== "object" || !listeners) return;
				_get_own_prop_names(listeners).forEach(function (event_type) {
					(function __main_mapper__(event_listener) {
						if (typeof event_listener === "function") return node.addEventListener(event_type, event_listener, false);
						if (typeof event_listener !== "object" || !event_listener) return;
						if (event_listener instanceof Array || Object.getPrototypeOf(event_listener) === _set_)
							return event_listener.forEach(__main_mapper__);
						node.addEventListener(event_type, event_listener.listener, event_listener.useCapture);
					})(listeners[event_type]);
				});
			})(content.event);
			return node;
		}
		return __document_createTextNode(document, content);
	}
	function createElement(document, xmlns, tag_name, attributes, children) {
		var element = __document_createElementNS(document, xmlns, tag_name);
		if (attributes) {
			var setAttributeNS = _element_setAttributeNS.bind(element);
			_get_own_prop_names(attributes).forEach(function (name) {
				var content = attributes[name];
				switch (content) {
					case undefined:
					case null:
						setAttributeNS(null, name, "");
						break;
					default:
						typeof content === "object" ? setAttributeNS(content.namespaceURI || null, name, String(content.value)) : setAttributeNS(null, name, String(content));
				}
			});
		}
		if (children)
			__array_forEach(children, function (child) {
				insertNodeBack(child, element);
			});
		return element;
	}
	function createAttribute(document, xmlns, name, value) {
		var attr = __document_createAttributeNS(document, xmlns, name);
		if (typeof value !== "object") attr.value = value;
		return attr;
	}
	function createTextNode(document, content) {
		return __document_createTextNode(document, content);
	}
	function createDocumentFragment(document, children) {
		var document_fragment = __document_createDocumentFragment(document);
		if (typeof children !== "object" || !children)
			return document_fragment;
		__array_forEach(children, function (child) {
			insertNodeBack(child, document_fragment);
		});
		return document_fragment;
	}
	function DocumentUtil(document) {
		if(!is_extensible_object(this)) return new DocumentUtil(document);
		if(!(document instanceof Document))
			throw new TypeError("arguments[0] must be an document");
		var document_util = this;
		prvConstructorCorrection(DocumentUtil, document_util);
		setconst1oVs1v(document_util, [_key_node, "document"], document);
		var xmlns = document.namespaceURI;
		function getNamespaceURI() {
			return xmlns;
		}
		function setNamespaceURI(namespaceURI) {
			xmlns = namespaceURI === null ? namespaceURI : String(namespaceURI);
		}
		setconst1oVs1v(document_util, [_key_getXmlns, "getNamespaceURI"], getNamespaceURI);
		setconst1oVs1v(document_util, [_key_setXmlns, "setNamespaceURI"], setNamespaceURI);
		var xmlns_descriptor = {
			get: getNamespaceURI,
			set: setNamespaceURI,
			__proto__: null
		};
		_def_pro(document_util, "namespaceURI", xmlns_descriptor);
		_def_pro(document_util, _key_xmlns, xmlns_descriptor);
		setconst1oVs1v(document_util, [_key_create, _key_createNode, "create", "createNode"], function (content) {
			_createNode_namespaceURI = xmlns;
			var node = createNode(document, content);
			_createNode_namespaceURI = undefined;
			return node;
		});
		setconst1oVs1v(document_util, [_key_createElement, "createElement"], function (tag_name, attributes, children) {
			return createElement(document, xmlns, tag_name, attributes, children);
		});
		setconst1oVs1v(document_util, [_key_createAttribute, "createAttribute"], function (name, value) {
			return createAttribute(document, xmlns, name, value);
		});
		setconst1oVs1v(document_util, [_key_createTextNode, "createTextNode"], function (content) {
			return createTextNode(document, content);
		});
		setconst1oVs1v(document_util, [_key_createDocumentFracment, "createDocumentFragment"], function (children) {
			return createDocumentFragment(document, children);
		});
	}
	prvRegisterConstructor(DocumentUtil, (function (proto) {
		var setconst = _setConst_bind(proto);
		_setEnum_DocumentUtil(proto);
		setconst("document", null);
		setconst("getNamespaceURI", null);
		setconst("setNamespaceURI", null);
		setconst("namespaceURI", null);
		setconst("create", createNode);
		setconst("createNode", createNode);
		setconst("createElement", createElement);
		setconst("createAttribute", createAttribute);
		setconst("createTextNode", createTextNode);
		setconst("createDocumentFragment", createDocumentFragment);
		setconst(_key_node, null);
		setconst(_key_getXmlns, null);
		setconst(_key_setXmlns, null);
		setconst(_key_xmlns, null);
		setconst(_key_create, createNode);
		setconst(_key_createNode, createNode);
		setconst(_key_createElement, createElement);
		setconst(_key_createAttribute, createAttribute);
		setconst(_key_createTextNode, createTextNode);
		setconst(_key_createDocumentFracment, createDocumentFragment);
		return proto;
	})(_create_new(_public_proto)));
	_g._kXml_DocumentUtil = _r.DocumentUtil = DocumentUtil;
	DocumentUtil.toString = shared_toString;
	DocumentUtil.user_manuals = [
		"constructor DocumentUtil(Document document);"
	];
	
	//ElementUtil
	function insertNode(node, parent, before) {
		
		//if node was a DOM Node
		if (node instanceof Node) return __node_insertBefore(parent, node, before);
		
		//if node was null
		if (node === null) return null;
		
		//if node was a string
		if (typeof node === "string") return __node_insertBefore(parent, __document_createTextNode(parent.ownerDocument, node), before);
		
		//if node was an array which contains the other nodes
		var forEach = node.forEach;
		if (is_valid_handler(forEach)) {
			forEach.call(node, function (element) {
				insertNode(element, parent, before);
			});
			return node;
		}
		var iterator_getter = node[_key_iterator];
		if (is_valid_handler(iterator)) {
			var iterator = iterator_getter.bind(node);
			for( ; ; ) {
				var info = iterator.next();
				if (info.done) break;
				insertNode(info.value, parent, before);
			}
			return node;
		}
		var length = node.length;
		if (isFinite(length) && !(length % 1) && length >= 0) {
			__array_forEach(node, function (element) {
				insertNode(element, parent, before);
			});
			return node;
		}
		
		//otherwise, create node
		node = createNode(parent.ownerDocument, node);
		return (node instanceof Attr) ? __element_setAttributeNode(parent, node) : __node_insertBefore(parent, node, before);
		
	}
	function insertNodeBefore(node, before) {
		return insertNode(node, before.parentNode, before);
	}
	function insertNodeBack(node, parent) {
		return insertNode(node, parent, null);
	}
	function tree(element, mapper, level) {
		mapper = mapper.bind(element);
		level >>= 0;
		allAttributes(element, function (attr, index) {
			mapper(new prvTreeParam(attr, index, level + 1));
		});
		__array_forEach(element.childNodes || [], function (child, index) {
			mapper(new prvTreeParam(child, index, ++level));
			tree(child, mapper, level--);
		});
	}
	function allChildren(element, mapper, level, elementonly) {
		mapper = mapper.bind(element);
		level >>= 0;
		__array_forEach(elementonly ? element.children : (element.childNodes || []), function (child, index) {
			mapper(new prvTreeParam(child, index, ++level));
			allChildren(child, mapper, level--, elementonly);
		});
	}
	function allAttributes(element, mapper) {
		mapper = mapper.bind(element);
		__array_forEach(element.attributes || [], function (attr, index) {
			mapper(attr, index);
		});
	}
	function prvTreeParam(node, index, level) {
		var setconst = _setConst_bind(this);
		setconst("node", node);
		setconst("index", index);
		setconst("level", level);
	}
	(function (proto) {
		ElementUtil._prvTreeParam_prototype = prvTreeParam.prototype = proto;
		var setconst = _setConst_bind(proto);
		setconst("node", null);
		setconst("index", null);
		setconst("level", null);
	})(_create_new(null));
	function allParent(element, mapper) {
		if(!element) return false;
		mapper = mapper.bind(element);
		var parent = element.parentNode;
		return mapper(parent) || allParent(parent, mapper);
	}
	function parentLevel(element, level) {
		if(!isFinite(level)) throw new TypeError(level + " is not a valid number.");
		var result = null;
		allParent(element, function (parent) {
			return --level < 1 && (result = parent, true);
		});
		return result;
	}
	(function (dictionary) {
		var setconst = _setConst_bind(dictionary);
		setconst("insertNode", insertNode);
		setconst("insertNodeBefore", insertNodeBefore);
		setconst("insertNodeBack", insertNodeBack);
		setconst("tree", tree);
		setconst("allChildren", allChildren);
		setconst("allAttributes", allAttributes);
		setconst("allParent", allParent);
		setconst("parentLevel", parentLevel);
	})(ElementUtil);
	function ElementUtil(element) {
		if(!is_extensible_object(this)) return new ElementUtil(element);
		var element_util = this;
		prvConstructorCorrection(ElementUtil, element_util);
		function append(child, before) {
			insertNode(child, element, before);
			return element_util;
		}
		var setconst = _setConst_bind(element_util);
		setconst1oVs1v(element_util, [_key_node, "element"], element);
		setconst1oVs1v(element_util, [_key_addMember, "append"], append);
		setconst1oVs1v(element_util, [_key_removeMember, "remove"], function remove(child) {
			__node_removeChild(element, child);
			return element_util;
		});
		setconst1oVs1v(element_util, [_key_tree, "tree"], function (mapper) {
			tree(element, mapper.bind(element_util));
			return element_util;
		});
		setconst("allChildren", function (mapper) {
			allChildren(element, mapper.bind(element_util));
			return element_util;
		});
		setconst("allAttributes", function (mapper) {
			allAttributes(element, mapper.bind(element_util));
			return element_util;
		});
		setconst("allParent", function (mapper) {
			allParent(element, mapper.bind(element_util));
			return element_util;
		});
		setconst("parentLevel", function (level) {
			return parentLevel(element, level);
		});
	}
	prvRegisterConstructor(ElementUtil, (function (proto) {
		var setconst = _setConst_bind(proto);
		setconst("element", null);
		setconst("append", null);
		setconst("remove", null);
		setconst("tree", null);
		setconst("allChildren", null);
		setconst("allParent", null);
		setconst("parentLevel", null);
		setconst(_key_node, null);
		setconst(_key_addMember, null);
		setconst(_key_removeMember, null);
		setconst(_key_tree, null);
		return proto;
	})(_create_new(_public_proto)));
	_g._kXml_ElementUtil = _r.ElementUtil = ElementUtil;
	ElementUtil.toString = shared_toString;
	ElementUtil.user_manuals = [
		"constructor ElementUtil(Element element);"
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
		__setConst(object, "_kXml_primitivePrototype", _public_proto);
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
	window[kxmllibkeyword] = Initor;
	Initor.toString = shared_toString;
	Initor.user_manuals = [
		"constructor Initor();"
	];
	Initor.prototype = _create_new(_public_proto);
	Initor[_key_createdInstance] = Initor.created = initialized = freeze(new Initor());
	freeze(Initor);
	
})(window, Object, Function, Symbol, Map, Set, Array, Node, Document, Element, Attr);

Resources.prototype = Object.create(null);
window.resources = new Resources(window, document, universe);

// Resources::Resources(Window, Document, Universe, void);
function Resources(window, document, universe, undefined) {
	'use strict';
	
	if (window.resources) return;
	
	var resources = this;
	
	// CONVENTION:	If a function return 0 or 1, 0 means no error and 1 means opposite.
	// CONVENTION:	Some commands use 0 or 1 as a boolean, 0 means false, 1 means true.
	
	if (main()) {
		resources._error = 1;
		throw "Bad support browser.";
	}
	
	// int main(void);
	function main() {
		implementation();
		initFuncs();
		if (glContextCreation(kxmlclasses, kgraphclasses))
			return 1;
		glObjectsCreation(xhrCreatorCreation(kjsclasses, keventclasses), gl_util);
		return 0;
	}
	
	// void implementation(void);
	function implementation() {
		Object.setPrototypeOf(Resources.prototype, universe);
		Object.setPrototypeOf(Object.prototype, resources);
	}
	
	// void initFuncs(void);
	function initFuncs() {
		
		resources.createErrMsgNode = createErrMsgNode;
		function createErrMsgNode(message) {
			return document_util.create({
				type: document_util.ELEMENT,
				tag: "div",
				attributes: {
					id: "error-message"
				},
				children: [
					message
				]
			});
		}
		
	}
	
	// int glContextCreation(ClassCollection, ClassCollection);
	function glContextCreation(kxmlclasses, kgraphclasses) {
		
		// Set up 'document_util'
		var document_util = resources.document_util = new kxmlclasses.DocumentUtil(document);
		document_util.namespaceURI = document.documentElement.namespaceURI;
		
		// Set up 'canvas'
		var canvas_container = resources.canvas_container = document_util.create({
			type: document_util.ELEMENT,
			tag: "div",
			parent: document.body,
			before: null,
			attributes: {
				id: "canvas-container"
			}
		});
		var canvas = resources.canvas = document_util.create({
			type: document_util.ELEMENT,
			tag: "canvas",
			parent: canvas_container,
			before: null,
			attributes: {
				width: 1024,
				height: 1024,
				id: "main-canvas"
			},
			children: ["Opps, your browser didn't supported HTMLCanvasElement."]
		});
		
		// Set up a 'WebGLRenderingContext' named 'gl'
		var gl = resources.gl = canvas.getContext("webgl");
		if (!gl) {
			document.body.removeChild(canvas);
			document_util.create({
				type: document_util.ELEMENT,
				tag: "div",
				parent: document.body,
				before: null,
				children: ["Your browser doesn't support WebGL or WebGL are disabled."]
			});
			return 1;
		}
		
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas, 0);
		resources.resizeCanvas = resizeCanvas; // considering neccessarility
		function resizeCanvas() {
			var width = window.innerWidth;
			var height = window.innerHeight;
			var rendersize = width < height ? width : height;
			var renderpaddingwidth = (width - rendersize) >> 1;
			var renderpaddingheight = (height - rendersize) >> 1;
			Object.assign(canvas_container.style, {
				left: csspxform(renderpaddingwidth),
				top: csspxform(renderpaddingheight),
				width: csspxform(rendersize),
				height: csspxform(rendersize)
			});
		}
		
		// Set up a 'GLUtil' named 'gl_util' from 'gl'
		resources.gl_util = new kgraphclasses.GLUtil(gl);
		
		return 0;
	}
	
	// void xhrCreatorCreation(ClassCollection, ClassCollection);
	function xhrCreatorCreation(kjsclasses, keventclasses) {
		
		resources.AllXHRs = AllXHRs; // considering necessarility
		
		return AllXHRs;
		
		// constructor AllXHRs(function<void, AllXHRs, XHRCount>, function<void, XMLHttpRequest, XMLHttpRequestProgressEvent>);
		function AllXHRs(callback, onerror) {
			
			var allxhrs = this;
			var xhrcount = allxhrs.xhrcount = new keventclasses.XHRCount(
				kjsclasses.Republic.EXECUTE_ONLY_WHEN_ALL_REQUESTED(
					callback.bind(allxhrs)
				)
			);
			
			var createxhr = allxhrs.create = resources.createxhr = xhrcount.create;
			
			var vertxhr = allxhrs.vert = createxhr("GET", "./shader.vert", 1);
			var fragxhr = allxhrs.frag = createxhr("GET", "./shader.frag", 1);
			
			onerror = ONCE_EXECUTER(onerror);
			vertxhr.addEventListener("error", onerror, 0);
			fragxhr.addEventListener("error", onerror, 0);
			
		}
		
	}
	
	// void glObjectsCreation(Constructor, GLUtil);
	function glObjectsCreation(AllXHRs, gl_util) {
		
		resources.AllGLObjs = AllGLObjs; // considering necessarility
		
		return AllGLObjs; // considering necessarility
		
		// constructor AllGLObjs(function<void, void, AllGLObjs, AllXHRs>, function<void, XMLHttpRequest, XMLHttpRequestProgressEvent>
		function AllGLObjs(callback, onerror) {
			
			var allglobjs = this;
			
			var allxhrs = new AllXHRs(function (xhrcount) {
				var program_util = allglobjs.program_util = gl_util.createProgramUtil({
					use: 1,
					link: 1,
					vertexShader: {
						source: allxhrs.vert.response,
						onerror: errorhandler
					},
					fragmentShader: {
						source: allxhrs.frag.response,
						onerror: errorhandler
					},
					onerror: errorhandler
				});
				allglobjs.a_position = program_util.createAttribUtil("a_position", 3, gl.FLOAT, 0, 0, 0);
				allglobjs.u_rotation = program_util.createUniformUtil("u_rotation", "fmat", 4);
				allglobjs.a_color = program_util.createAttribUtil("a_color", 3, gl.FLOAT, 0, 0, 0);
				function errorhandler(error) {
					console.debug(String(error));
					console.log(error);
					throw error;
				}
			
				callback(allglobjs, allxhrs);
				
			}, onerror);
			
		}
		
	}
	
}


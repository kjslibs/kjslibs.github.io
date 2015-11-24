
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
		var document_util = resources.document_util = new kxmlclasses.DocumentUtil(document);
		document_util.namespaceURI = document.documentElement.namespaceURI;
		if (glContextCreation(kxmlclasses, kgraphclasses, document_util))
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
		function createErrMsgNode(message, parent, before) {
			return document_util.create({
				type: document_util.ELEMENT,
				tag: "div",
				parent: parent,
				before: before,
				attributes: {
					id: "error-message"
				},
				children: [
					message
				]
			});
		}
		
	}
	
	// int glContextCreation(ClassCollection, ClassCollection, DocumentUtil);
	function glContextCreation(kxmlclasses, kgraphclasses, document_util) {
		
		// Create 'canvas_container'
		var canvas_container = resources.canvas_container = document_util.create({
			type: document_util.ELEMENT,
			tag: "div",
			parent: document.body || document.documentElement.children[1],
			before: null,
			attributes: {
				id: "canvas-container"
			}
		});
		
		// Create 'canvas'
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
			canvas.parentNode.removeChild(canvas);
			document_util.create(
				createErrMsgNode(
					"Your browser doesn't support WebGL or WebGL is disabled.",
					document.body,
					null
				)
			);
			return 1;
		}
		
		// Set up 'gl' modes
		gl.enable(gl.CULL_FACE);
		
		// Drawing Context Scaling
		window.addEventListener("resize", resizeCanvas, 0);
		resources.resizeCanvas = resizeCanvas;
		function resizeCanvas() {
			var width = window.innerWidth;
			var height = window.innerHeight;
			var rendersize = width < height ? width : height;
			requestAnimationFrame(function () {
				allglobjs.u_ratio.set(new Float32Array([
					height / rendersize,
					width / rendersize
				]));
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
				(function (createAttribUtil, createUniformUtil) {
					allglobjs.a_position = createAttribUtil("a_position", 3, gl.FLOAT, 0, 0, 0);
					allglobjs.u_rotation = [
						createUniformUtil("u_rotation[0]", "fmat", 4),
						createUniformUtil("u_rotation[1]", "fmat", 4),
						createUniformUtil("u_rotation[2]", "fmat", 4)
					];
					allglobjs.u_ratio = createUniformUtil("u_ratio", "fvec", 2);
					allglobjs.u_translate = createUniformUtil("u_translate", "fvec", 3);
					allglobjs.u_focal_length = createUniformUtil("u_focal_length", "float", 1);
					allglobjs.u_screen_distance = createUniformUtil("u_screen_distance", "float", 1);
					allglobjs.a_color = createAttribUtil("a_color", 3, gl.FLOAT, 0, 0, 0);
				})(program_util.createAttribUtil, program_util.createUniformUtil);
				function errorhandler(error) {
					console.debug(String(error));
					console.log(error);
					throw error;
				}
				
				guiElementsCreation(kxmlclasses, document_util, document.body || document.documentElement.children[1])
			
				callback(allglobjs, allxhrs);
				
			}, onerror);
			
		}
		
	}
	
	// int guiElementsCreation(ClassCollection, DocumentUtil, HTMLBodyElement);
	function guiElementsCreation(kxmlclasses, document_util, body) {
		
		(function (create, ELEMENT) {
			
			(function (canvas) {
				enableGrabStyle(canvas);
				var lastevent;
				canvas.addEventListener("mousedown", function (event) {
					lastevent = event;
					window.addEventListener("mousemove", onmousemove, 0);
				}, 0);
				window.addEventListener("mouseup", window.removeEventListener.bind(window, "mousemove", onmousemove, 0), 0);
				function onmousemove(event) {
					var ratio = allglobjs.u_ratio.get();
					var factor = allglobjs.u_screen_distance.value / allglobjs.u_focal_length.value;
					var shiftX = (event.clientX - lastevent.clientX) * factor / ratio[0] / parseFloat(canvas.width);
					var shiftY = (event.clientY - lastevent.clientY) * factor / ratio[1] / parseFloat(canvas.height);
					var u_translate = allglobjs.u_translate;
					var translate = u_translate.get();
					translate[0] += shiftX;
					translate[1] -= shiftY;
					u_translate.set(translate);
					lastevent = event;
				}
			})(canvas);
			
			var camera_dialog = resources.camera_dialog = create({
				type: ELEMENT,
				tag: "div",
				parent: body,
				attributes: {
					id: "dialog",
					name: "camera"
				},
				children: [
					{
						type: ELEMENT,
						tag: "iframe",
						attributes: {
							id: "image",
							type: "image/svg+xml",
							src: "camera-lens.svg"
						}
					},
					{
						type: ELEMENT,
						tag: "input",
						attributes: {
							id: "focal-length",
							type: "text",
							placeholder: "focal_length",
							value: "2.0"
						},
						event: {
							change: floatUniformSetter(allglobjs.u_focal_length)
						}
					},
					{
						type: ELEMENT,
						tag: "input",
						attributes: {
							id: "screen-distance",
							type: "text",
							placeholder: "screen_distance",
							value: "2.0"
						},
						event: {
							change: floatUniformSetter(allglobjs.u_screen_distance)
						}
					},
					{
						type: ELEMENT,
						tag: "button",
						attributes: {
							id: "close",
						},
						event: {
							click: function () {
								hideElement(camera_dialog);
							}
						},
						children: ["Close"]
					}
				]
			});
			
			var rotating_velocity_checkpoints = [-1.0, -0.5, 0.0, +0.5, +1.0];
			var rotating_velocity_dialog = resources.rotating_velocity_dialog = create({
				type: ELEMENT,
				tag: "div",
				parent: body,
				before: null,
				attributes: {
					id: "dialog",
					name: "rotating-velocity"
				},
				children: [
					{
						type: ELEMENT,
						tag: "div",
						attributes: {
							id: "slider-container"
						},
						children: [
							textDivElement("Oy -> Oz:"),
							sliderBar(
								{
									min: "-1.0",
									max: "+1.0",
									value: "+0.45"
								},
								rotating_velocity_tweaker(0),
								rotating_velocity_checkpoints
							),
							textDivElement("Ox -> Oz:"),
							sliderBar(
								{
									min: "-1.0",
									max: "+1.0",
									value: "+0.30"
								},
								rotating_velocity_tweaker(1),
								rotating_velocity_checkpoints
							),
							textDivElement("Ox -> Oy:"),
							sliderBar(
								{
									min: "-1.0",
									max: "+1.0",
									value: "+0.15"
								},
								rotating_velocity_tweaker(2),
								rotating_velocity_checkpoints
							),
							{
								type: ELEMENT,
								tag: "div",
								attributes: {
									id: "readonly-text",
									style: "text-align: center; font-size: 0.8em;"
								},
								children: [
									"Drag sliders to adjust spinning speed and directions of the cube"
								]
							}
						]
					},
					{
						type: ELEMENT,
						tag: "button",
						attributes: {
							id: "close",
						},
						event: {
							click: function () {
								hideElement(rotating_velocity_dialog);
							}
						},
						children: ["Close"]
					}
				]
			});
			
			function rotating_velocity_tweaker(index) {
				var RATIO = 0.01 * 2 / 3;
				return function (detail) {
					rotating_velocity[index] = detail.value * RATIO;
				}
			}
			
			function sliderBar(attributes, onchange, checkpoints) {
				attributes.id = "slider-bar";
				var bar = create({
					type: ELEMENT,
					tag: "div",
					attributes: attributes
				});
				if (checkpoints) {
					checkpoints.forEach(function (val) {
						var style = create({
							type: ELEMENT,
							tag: "div",
							parent: bar,
							before: null,
							attributes: {
								id: "checkpoint"
							},
							children: [String(val)]
						}).style;
						bar.addEventListener("-k-appear", function () {
							style.left = csspxform(getposfromval(val));
						}, 0);
					});
				}
				var slider = create({
					type: ELEMENT,
					tag: "div",
					parent: bar,
					before: null,
					attributes: {
						id: "slider"
					}
				});
				enableGrabStyle(slider);
				var mousex;
				var barclasses = bar.classList;
				var sliderstyle = slider.style;
				var sliderclasses = slider.classList;
				var barrect, sliderrect, limit;
				var max, min, range;
				slider.addEventListener("mousedown", function (event) {
					mousex = event.offsetX;
					barclasses.add("holding");
					sliderclasses.add("holding");
					window.addEventListener("mousemove", onmousemove, 0);
				}, 0);
				window.addEventListener("mouseup", function () {
					barclasses.remove("holding");
					sliderclasses.remove("holding");
					window.removeEventListener("mousemove", onmousemove, 0);
				}, 0);
				bar.addEventListener("-k-appear", updatefromvalue, 0);
				return bar;
				function onmousemove(event) {
					getrects();
					var position = event.screenX - barrect.left - mousex;
					if (position > limit) {
						sliderstyle.left = csspxform(limit);
						return;
					}
					if (position < 0) {
						sliderstyle.left = "0px";
						return;
					}
					sliderstyle.left = csspxform(position);
					updatefromevent(position / limit, event);
				}
				function updatefromevent(ratio, event) {
					getrange();
					var val = ratio * range + min;
					bar.setAttributeNS(null, "value", String(val));
					onchange({
						mousemove: event,
						value: val
					});
				}
				function updatefromvalue() {
					var val = parseFloat(bar.getAttributeNS(null, "value"));
					sliderstyle.left = csspxform(getposfromval(val));
				}
				function getposfromval(val) {
					getrects();
					getrange();
					return limit * (val - min) / range;
				}
				function getrects() {
					barrect = bar.getClientRects()[0];
					sliderrect = slider.getClientRects()[0];
					limit = barrect.width - sliderrect.width;
				}
				function getrange() {
					min = parseFloat(bar.getAttributeNS(null, "min"));
					max = parseFloat(bar.getAttributeNS(null, "max"));
					range = max - min;
				}
			}
			
			var about_dialog = create({
				type: ELEMENT,
				tag: "div",
				parent: body,
				before: null,
				attributes: {
					id: "dialog",
					name: "about"
				},
				children: [
					{
						type: ELEMENT,
						tag: "h3",
						attributes: {
							style: "text-align: center; font-weight: normal;"
						},
						children: ["3D Cube Demo"]
					},
					{
						type: ELEMENT,
						tag: "div",
						children: [
							textDivElement("This is a demo which show usages of kjslibs"),
							textDivElement([
								"Source code of this demo: ",
								anchorElement(
									"https://github.com/kjslibs/kjslibs.github.io/tree/master/apps/demos/cube-3d",
									"kjslibs/apps/demos/cube-3d"
								)
							]),
							textDivElement([
								"Repository kjslibs.github.io: ",
								anchorElement("https://github.com/kjslibs/kjslibs.github.io")
							]),
							textDivElement([
								"Author/Contributor: ",
								anchorElement("https://github.com/ksxgithub", "Hoàng Văn Khải")
							]),
							textDivElement([
								textDivElement("This is free software; see the source for copying conditions."),
								textDivElement("There is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.")
							])
						]
					},
					{
						type: ELEMENT,
						tag: "button",
						attributes: {
							id: "close",
						},
						event: {
							click: function () {
								hideElement(about_dialog);
							}
						},
						children: ["Close"]
					}
				]
			});
			
			var control_panel = resources.control_panel = create({
				type: ELEMENT,
				tag: "div",
				parent: body,
				before: null,
				attributes: {
					id: "control-panel"
				},
				children: [
					displayerButton(camera_dialog, "Camera"),
					displayerButton(rotating_velocity_dialog, "Spinning"),
					displayerButton(about_dialog, "About")
				]
			});
			
			(function (style) {
				var dwidth = 414.22;
				var dheight = 256;
				style.width = csspxform(dwidth);
				style.height = csspxform(dheight);
				onresize();
				window.addEventListener("resize", onresize, 0);
				function onresize() {
					var wwidth = window.innerWidth;
					var wheight = window.innerHeight;
					style.left = csspxform((wwidth - dwidth) * 0.5);
					style.top = csspxform((wheight - dheight) * 0.5);
				}
			})(Array.prototype.find.call(document.styleSheets[0].cssRules, function (rule) {
				return rule.selectorText == "#dialog"
			}).style);
			
			hideAllDialogs();
			
			function enableGrabStyle(element) {
				var elementclasses = element.classList;
				var htmlclasses = window.document.documentElement.classList;
				elementclasses.add("grab");
				element.addEventListener("mousedown", function () {
					elementclasses.remove("grab");
					htmlclasses.add("grabbing");
				}, 0);
				window.addEventListener("mouseup", function () {
					elementclasses.add("grab");
					htmlclasses.remove("grabbing");
				}, 0);
			}
			
			var appearingElement;
			
			function elementAppearanceSwitcher(element) {
				return function () {
					if (appearingElement === element) {
						hideElement(element);
					} else {
						hideAllDialogs();
						showElement(element);
					}
				}
			}
			
			function hideAllDialogs() {
				hideElement(camera_dialog);
				hideElement(rotating_velocity_dialog);
				hideElement(about_dialog);
			}
			
			function hideElement(element) {
				appearingElement = undefined;
				element.classList.add("hidden");
				massDispatchEvent(element, "-k-disapear");
			}
			
			function showElement(element) {
				appearingElement = element;
				element.classList.remove("hidden");
				massDispatchEvent(element, "-k-appear");
			}
			
			function displayerButton(element, content) {
				return create({
					type: ELEMENT,
					tag: "button",
					children: [content],
					event: {
						click: elementAppearanceSwitcher(element)
					}
				});
			}
			
			function anchorElement(url, content) {
				return create({
					type: ELEMENT,
					tag: "a",
					attributes: {
						target: "_blank",
						href: url
					},
					children: [content || url]
				});
			}
			
			function massDispatchEvent(element, type) {
				var event = new Event(type);
				var callmap = Function.call.bind(Array.prototype.map);
				return (function callback(element) {
					return {
						element: element,
						succeed: element.dispatchEvent(event),
						children: callmap(element.children, callback)
					}
				})(element);
			}
			
			function textDivElement(content) {
				return create({
					type: ELEMENT,
					tag: "div",
					attributes: {
						id: "readonly-text"
					},
					children: [content]
				});
			}
			
			function floatUniformSetter(uniform) {
				var set = uniform.set;
				return function (event) {
					set(parseFloat(event.target.value));
				}
			}
			
		})(document_util.create, document_util.ELEMENT);
		
	}
	
}


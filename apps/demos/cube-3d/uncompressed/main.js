
main(window, Float32Array);

function main(window, Float32Array, undefined) {
	'use strict';
	
	window.allglobjs = new AllGLObjs(__main__, onerror);
	
	function __main__(allglobjs) {
		
		// front = clockwise, cull counter-clockwise
		// float vertices[3 * 3 * 2 * 6];
		var vertices = new Float32Array([
			
			// LEFT FACE
			
			// Triangle (-x1)
			-1.0, -1.0, -1.0,
			-1.0, -1.0, +1.0,
			-1.0, +1.0, +1.0,
			
			// Triangle (-x2)
			-1.0, -1.0, -1.0,
			-1.0, +1.0, +1.0,
			-1.0, +1.0, -1.0,
			
			// BOTTOM FACE
			
			// Triangle (-y1)
			-1.0, -1.0, -1.0,
			-1.0, -1.0, +1.0,
			+1.0, -1.0, +1.0,
			
			// Triangle (-y2)
			-1.0, -1.0, -1.0,
			+1.0, -1.0, +1.0,
			+1.0, -1.0, -1.0,
			
			// BACK FACE
			
			// Triangle (-z1)
			-1.0, -1.0, -1.0,
			+1.0, -1.0, -1.0,
			+1.0, +1.0, -1.0,
			
			// Triangle (-z2)
			-1.0, -1.0, -1.0,
			+1.0, +1.0, -1.0,
			-1.0, +1.0, -1.0,
			
			// RIGHT FACE
			
			// Triangle (+x1)
			+1.0, -1.0, -1.0,
			+1.0, -1.0, +1.0,
			+1.0, +1.0, +1.0,
			
			// Triangle (+x2)
			+1.0, -1.0, -1.0,
			+1.0, +1.0, +1.0,
			+1.0, +1.0, -1.0,
			
			// TOP FACE
			
			// Triangle (+y1)
			-1.0, +1.0, -1.0,
			+1.0, +1.0, -1.0,
			+1.0, +1.0, +1.0,
			
			// Triangle (+y2)
			-1.0, +1.0, -1.0,
			+1.0, +1.0, +1.0,
			-1.0, +1.0, +1.0,
			
			// FRONT FACE
			
			// Triangle (+z1)
			-1.0, -1.0, +1.0,
			-1.0, +1.0, +1.0,
			+1.0, +1.0, +1.0,
			
			// Triangle (+z2)
			-1.0, -1.0, +1.0,
			+1.0, +1.0, +1.0,
			+1.0, -1.0, +1.0
			
		]);
		
		// define color per vertex (see vertices[] above)
		// float color[vertices.length];
		var color = window.color = new Float32Array(vertices.length);
		var define_color = window.define_color = (function () {
			DefineColor.prototype = {
				RED: createColor(1.0, 0.0, 0.0),
				GREEN: createColor(0.0, 1.0, 0.0),
				BLUE: createColor(0.0, 0.0, 1.0),
				mix: mixColor,
				mixBright: createColorMixer(function (a, b) {
					return a + b;
				}),
				mixAvg: createColorMixer(function (a, b) {
					return 0.5 * (a + b);
				}),
				mixDark: createColorMixer(function (a, b) {
					return 1.0 - a - b;
				})
			};
			return new DefineColor();
			function DefineColor() {
				var define_color = this;
				var position = 0;
				createMethodAdder(define_color)
					("addColor3f", addColor3f)
					("addColor3fv", addColor3fv)
					("pointer", pointer)
				;
				function addColor3f(red, green, blue) {
					addElement(red)(green)(blue);
					return addColor3f;
				};
				function addColor3fv(rgb) {
					addColor3f(rgb[0], rgb[1], rgb[2]);
					return addColor3fv;
				}
				function pointer(pos) {
					if (typeof pos !== "number") {
						return position;
					}
					position = pos;
					return pointer;
				};
				function addElement(e) {
					color[position] = e;
					++position;
					return addElement;
				}
			}
			function createColor(red, green, blue) {
				return new Float32Array([red, green, blue]);
			}
			function mixColor(calculate, rgb1, rgb2) {
				var rgb = new Float32Array(3);
				make(0);
				make(1);
				make(2);
				return rgb;
				function make(index) {
					rgb[index] = calculate(rgb1[index], rgb2[index]);
				}
			}
			function createColorMixer(method) {
				return mixColor.bind(undefined, method);
			}
		})();
		(function (RR, GG, BB, mix2x3fv) {
			var GB = mix2x3fv(GG, BB);
			var RB = mix2x3fv(RR, BB);
			var RG = mix2x3fv(RR, GG);
			define_color
				.pointer(0)
				.addColor3fv
					(RR)(RR)(RR)(RR)(RR)(RR) // LEFT FACE
					(GG)(GG)(GG)(GG)(GG)(GG) // BOTTOM FACE
					(BB)(BB)(BB)(BB)(BB)(BB) // BACK FACE
					(GB)(GB)(GB)(GB)(GB)(GB) // RIGHT FACE
					(RB)(RB)(RB)(RB)(RB)(RB) // TOP FACE
					(RG)(RG)(RG)(RG)(RG)(RG) // FRONT FACE
			; // end commands sequence
		})(define_color.RED, define_color.GREEN, define_color.BLUE, define_color.mixAvg);
		
		// Pass data to shader
		gl_util.createBufferUtil({
			bind: true,
			target: gl.ARRAY_BUFFER,
			usage: gl.STATIC_DRAW,
			data: vertices
		});
		allglobjs.a_position.active();
		allglobjs.a_position.set();
		gl_util.createBufferUtil({
			bind: true,
			target: gl.ARRAY_BUFFER,
			usage: gl.STATIC_DRAW,
			data: color
		});
		allglobjs.a_color.active();
		allglobjs.a_color.set();
		allglobjs.u_rotation.set([1, 0, 0, 1]);
		
		gl.drawArrays(gl.TRIANGLES, 0, 3 * 2 * 6);
		
	}
	
	function onerror() {
		var body = document.body;
		clearChildren(body);
		body.insertBefore(createErrMsgNode("ERROR 404: Resources Not Found."), null);
	}
	
	console.log("Load done.");
	
}


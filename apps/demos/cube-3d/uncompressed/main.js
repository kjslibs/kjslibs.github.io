
main(window, Float32Array);

function main(window, Float32Array, undefined) {
	'use strict';
	
	if (window.__badsupport) {
		alert("Your browser does not support some important features.\nIt's time to change your browser.");
	}
	
	window.allglobjs = new AllGLObjs(__main__, onerror);
	
	function __main__(allglobjs) {
		
		// define color per vertex (see cube_pattern[] above)
		// float color[cube_pattern.length];
		var color = window.color = new Float32Array(cube_pattern.length);
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
				}
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
				}
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
		resizeCanvas();
		var actual_vertices = new Float32Array(cube_pattern.length);
		Matrix.scalarMultiply(actual_vertices, 0, cube_pattern, 0, cube_pattern.length, 0.3);
		(function (a_position, a_color, ARRAY_BUFFER, STATIC_DRAW) {
			a_position.createBufferUtil(ARRAY_BUFFER, STATIC_DRAW, actual_vertices);
			a_position.active();
			a_color.createBufferUtil(ARRAY_BUFFER, STATIC_DRAW, color);
			a_color.active();
		})(allglobjs.a_position, allglobjs.a_color, gl.ARRAY_BUFFER, gl.STATIC_DRAW);
		function Rotator() {
			var matrices = [
				new Float32Array(4 * 4),
				new Float32Array(4 * 4),
				new Float32Array(4 * 4)
			];
			var param = new Float32Array([-0.25 * Math.PI, -0.25 * Math.PI, -0.25 * Math.PI]);
			this.matrices = matrices;
			this.param = window.rotatorparam = param;
			this.animate = window.rotatorani = new kaniclasses.Animate(animator);
			this.makeRotation = makeRotation;
			Matrix.makeIdentity
				(matrices[0], 0, 4)
				(matrices[1], 0, 4)
				(matrices[2], 0, 4)
			;
			function makeRotation(yz, xz, xy) {
				makeRotationElement(0, yz, 1, 2);
				makeRotationElement(1, xz, 0, 2);
				makeRotationElement(2, xy, 0, 1);
			}
			function makeRotationElement(id, theta, pid, nid) {
				Matrix.makeRotationMatrix(matrices[id], 0, 4, theta, pid, nid);
				allglobjs.u_rotation[id].value = matrices[id];
			}
			function animator() {
				makeRotation(param[0], param[1], param[2]);
			}
		}
		
		(function (kaniclasses) {
			
			var elements_count = 2 * 3 * 6;
			var drawani = new kaniclasses.Animate(function (aniparam) {
				gl.drawArrays(gl.TRIANGLES, 0, elements_count);
			});
			var rotator = window.rotator = new Rotator();
			var autorotationani = window.autorotationani = (function (rotation_param, TAU) {
				var rotating_velocity = window.rotating_velocity = new Float32Array([0.003, 0.002, 0.001]);
				var dur;
				return new kaniclasses.VectorAnimator(function (lvec, rvec, animateparam) {
					dur = animateparam.duration;
					addAngle(lvec, rvec, 0);
					addAngle(lvec, rvec, 1);
					addAngle(lvec, rvec, 2);
				}).createAnimate(rotation_param, rotating_velocity);
				function addAngle(lvec, rvec, index) {
					lvec[index] += rvec[index] * dur;
					lvec[index] %= TAU;
				}
			})(rotator.param, 2 * Math.PI);
			drawani.run();
			rotator.animate.run();
			autorotationani.run();
			
		})(kaniclasses);
		
		allglobjs.u_focal_length.value = 2.0;
		allglobjs.u_screen_distance.value = 2.0;
		
	}
	
	function onerror() {
		var body = document.body;
		clearChildren(body);
		body.insertBefore(createErrMsgNode("ERROR 404: Resources Not Found."), null);
	}
	
	console.log("Load done.");
	
}


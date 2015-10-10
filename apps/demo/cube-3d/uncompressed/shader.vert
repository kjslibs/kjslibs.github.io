
attribute vec3 a_position;
uniform vec4 u_rotation;
varying vec3 v_color;

void main() {
	v_color = a_position; // Just a startup. I'm now don't know what to do with v_color.
	gl_Position = vec4(a_position, 1.0) * u_rotation;
}


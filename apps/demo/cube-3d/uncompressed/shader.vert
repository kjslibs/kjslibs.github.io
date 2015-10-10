
// For calculating position per vertex
attribute vec3 a_position;
uniform vec4 u_rotation;

// For calculating color per fragment shader's extrema
attribute vec3 a_color;
varying vec3 v_color;

void main() {
	v_color = a_color;
	gl_Position = vec4(a_position, 1.0) * u_rotation;
}


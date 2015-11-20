
// For calculating position per vertex

attribute vec3 a_position;
uniform mat4 u_rotation[3]; // 3x [yz, xz, xy]
uniform float u_focal_length;
uniform float u_screen_distance;

// For calculating color per fragment shader's extrema

attribute vec3 a_color;
varying vec3 v_color;

// Function prototypes

void main();
vec4 getRotatedPosition(vec4, mat4 [3]);
vec4 getResizedPosition(vec4, float, float);

// Function definitions

void main() {
	v_color = a_color;
	gl_Position = getRotatedPosition(vec4(a_position, 1.0), u_rotation);
}

vec4 getRotatedPosition(vec4 position, mat4 rotation[3]) {
	return position * rotation[0] * rotation[1] * rotation[2];
}

vec4 getResizedPosition(vec4 position, float focal_length, float screen_distance) {
	return vec4(0.0, 0.0, 0.0, 0.0);
}


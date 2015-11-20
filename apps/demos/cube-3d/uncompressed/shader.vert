
// For calculating position per vertex

attribute vec3 a_position;
uniform mat4 u_rotation[3]; // 3x [yz, xz, xy]
uniform float u_focal_length;
uniform float u_screen_distance; // distance between optical center and point (0, 0, 0)

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
	vec4 rotated = getRotatedPosition(vec4(a_position, 1.0), u_rotation);
	vec4 resized = getResizedPosition(rotated, u_focal_length, u_screen_distance);
	gl_Position = resized;
}

vec4 getRotatedPosition(vec4 position, mat4 rotation[3]) {
	return position * rotation[0] * rotation[1] * rotation[2];
}

vec4 getResizedPosition(vec4 position, float focal_length, float screen_distance) {
	float distance_screen_point = screen_distance + position.z;
	vec2 resized = (focal_length / distance_screen_point) * position.xy;
	return vec4(resized, position.zw);
}


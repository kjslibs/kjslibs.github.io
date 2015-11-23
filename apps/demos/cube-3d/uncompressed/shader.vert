
// For calculating position per vertex

attribute vec3 a_position;
uniform mat4 u_rotation[3]; // 3x [yz, xz, xy]
uniform vec2 u_ratio;
uniform vec3 u_translate;
uniform float u_focal_length;
uniform float u_screen_distance; // distance between optical center and point (0, 0, 0)

// For calculating color per fragment shader's extrema

attribute vec3 a_color;
varying vec3 v_color;

// Function prototypes

void main();
void rotate(inout vec4, mat4 [3]);
void translate(inout vec4, vec3);
void cameratweak(inout vec4, vec2, float, float);

// Function definitions

void main() {
	v_color = a_color;
	gl_Position = vec4(a_position.xy, -a_position.z, 1.0);
	rotate(gl_Position, u_rotation);
	translate(gl_Position, u_translate);
	cameratweak(gl_Position, u_ratio, u_focal_length, u_screen_distance);
}

void rotate(inout vec4 position, mat4 rotation[3]) {
	position = position * rotation[0] * rotation[1] * rotation[2];
}

void translate(inout vec4 position, vec3 delta) {
	position.xyz += delta;
}

void cameratweak(inout vec4 position, vec2 ratio, float focal_length, float screen_distance) {
	float distance_screen_point = screen_distance - position.z;
	position.xy *= focal_length / distance_screen_point;
	position.x *= ratio.x;
	position.y *= ratio.y;
}


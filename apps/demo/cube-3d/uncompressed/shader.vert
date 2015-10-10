
// Test

attribute vec3 a_position;
uniform vec4 u_rotation;

void main() {
	gl_Position = vec4(a_position, 1.0);
}


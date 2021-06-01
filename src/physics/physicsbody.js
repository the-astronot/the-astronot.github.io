//import Vector3 from "./vector3.js"

const time = 1;

class PhysicsBody {
	constructor(name, mass, position, velocity) {
		this.name = name;
		this.mass = mass;
		this.position = position;
		this.velocity = velocity;
		this.new_position = position;
	}

	// Figures out where to move next
	calc_new_position(bodies) {
		let forces = this.calc_forces(bodies);
		this.velocity.x += forces.x*time;
		this.velocity.y += forces.y*time;
		this.velocity.z += forces.z*time;
		this.new_position.x += this.velocity.x*time;
		this.new_position.y += this.velocity.y*time;
		this.new_position.z += this.velocity.z*time;
	}

	calc_forces(bodies) {
		let forces = new THREE.Vector3(0,0,0);
		let g = .00001;
		for (let i=0; i<bodies.length; i++) {
			if (bodies[i].name != this.name) {
				let dist_x = this.position.x - bodies[i].position.x;
				let dist_y = this.position.y - bodies[i].position.y;
				let dist_z = this.position.z - bodies[i].position.z;
				let dist_xy = Math.sqrt(dist_x**2+dist_y**2);
				let dist_tot = Math.sqrt(dist_xy**2+dist_z**2);
				if (dist_x != 0.0) {
					if (bodies[i].position.x > this.position.x) {
						forces.x += (Math.abs(dist_x)/dist_tot)*(g*bodies[i].mass)/(dist_tot**2);
					} else {
						forces.x -= (Math.abs(dist_x)/dist_tot)*(g*bodies[i].mass)/(dist_tot**2);
					}
				}
				if (dist_y != 0.0) {
					if (bodies[i].position.y > this.position.y) {
						forces.y += (Math.abs(dist_y)/dist_tot)*(g*bodies[i].mass)/(dist_tot**2);
					} else {
						forces.y -= (Math.abs(dist_y)/dist_tot)*(g*bodies[i].mass)/(dist_tot**2);
					}
				}
				if (dist_z != 0.0) {
					if (bodies[i].position.z > this.position.z) {
						forces.z += (Math.abs(dist_z)/dist_tot)*(g*bodies[i].mass)/(dist_tot**2);
					} else {
						forces.z -= (Math.abs(dist_z)/dist_tot)*(g*bodies[i].mass)/(dist_tot**2);
					}
				}
			}
		}
		return forces;
	}

	move() {
		this.position = this.new_position;
	}
}
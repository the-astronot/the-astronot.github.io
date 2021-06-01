let camera, scene, renderer;
let geometry, material, mesh;
let m_line, e_line, s_line;
let e_pos = new THREE.Vector3(0,0,0);
let e_vel = new THREE.Vector3(0,0,0);
let m_pos = new THREE.Vector3(1,0,0);
let m_vel = new THREE.Vector3(0,.0025,.002);
let s_pos = new THREE.Vector3(0, .65, 0)
let s_vel = new THREE.Vector3(.003, 0, .0025)
var earth = new PhysicsBody("Earth", 1, e_pos, e_vel);
var moon = new PhysicsBody("Moon", .05, m_pos, m_vel);
var ss = new PhysicsBody("Space_Station", .001, s_pos, s_vel)
let bodies = [earth, moon, ss];

init();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 5;

	scene = new THREE.Scene();

	e_geometry = new THREE.SphereGeometry(.5, 10, 10);
	const e_wireframe = new THREE.WireframeGeometry( e_geometry );
	e_line = new THREE.LineSegments( e_wireframe );
	e_line.material.depthTest = false;
	e_line.material.opacity = 0.25;
	e_line.material.transparent = true;
	const e_mesh = new THREE.Mesh(e_geometry, e_line);
	scene.add( e_line );

	m_geometry = new THREE.SphereGeometry(.1, 5, 5);
	const m_wireframe = new THREE.WireframeGeometry( m_geometry );
	m_line = new THREE.LineSegments( m_wireframe );
	m_line.material.depthTest = false;
	m_line.material.opacity = 0.25;
	m_line.material.transparent = true;
	const m_mesh = new THREE.Mesh(m_geometry, m_line);
	scene.add( m_line );

	s_geometry = new THREE.BoxGeometry(.05,.05,.05);
	const s_wireframe = new THREE.WireframeGeometry(s_geometry, 5, 5);
	s_line = new THREE.LineSegments(s_wireframe);
	scene.add(s_line)

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animation );
	document.body.appendChild( renderer.domElement );


}

function animation( time ) {

	earth.calc_new_position(bodies);
	moon.calc_new_position(bodies);
	ss.calc_new_position(bodies);
	earth.move();
	moon.move();
	ss.move();
	//console.log(moon.position)
	e_line.position.x = earth.position.x;
	e_line.position.y = earth.position.y;
	e_line.position.z = earth.position.z;
	m_line.position.x = moon.position.x;
	m_line.position.y = moon.position.y;
	m_line.position.z = moon.position.z;
	s_line.position.x = ss.position.x;
	s_line.position.y = ss.position.y;
	s_line.position.z = ss.position.z;
	console.log(m_line.position)
	//m_mesh.position.x += .1;
	renderer.render( scene, camera );

}
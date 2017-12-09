const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

const container = document.getElementById("container");

const renderer = new THREE.WebGLRenderer();

const camera = new THREE.PerspectiveCamera(
  VIEW_ANGLE,
  ASPECT,
  NEAR,
  FAR
);

const scene = new THREE.Scene();

scene.add(camera);

renderer.setSize(WIDTH, HEIGHT);

container.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(3,3,3);
var material = new THREE.MeshBasicMaterial({color:0xffff00, wireframe:true});

var mesh = new THREE.Mesh(geometry, material);
mesh.position.z = -10;

scene.add(mesh);

function update(){
  
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  
  renderer.render(scene, camera);
  
  requestAnimationFrame(update);
}

requestAnimationFrame(update);

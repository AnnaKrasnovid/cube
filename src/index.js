import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Text } from 'troika-three-text';

import './index.css';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// цвет фона
//scene.background = new THREE.Color(0xf8eeef)
// тут 0 - полная прозрачность фона сцены
renderer.setClearColor(0x000000, 0);

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x87b692 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//cube edges
const geometryEdges = new THREE.BoxGeometry(1, 1, 1);
const edges = new THREE.EdgesGeometry(geometryEdges);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xa4c4ac }));
scene.add(line);

// поворот мышью
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.rotateSpeed = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

//изменение размеров фигуры, при изменении ширины экрана
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

// Текст
const myText1 = new Text();
scene.add(myText1);
myText1.text = 'Yes';
myText1.fontSize = 0.15;
myText1.position.z = 0.5001;
myText1.position.x = -0.15;
myText1.position.y = 0.1;
myText1.color = 0xffffff;

const myText2 = new Text();
scene.add(myText2);
myText2.text = 'No!';
myText2.fontSize = 0.15;
myText2.position.z = -0.1;
myText2.position.x = -0.1;
myText2.position.y = 0.51;
myText2.color = 0xffffff;
myText2.rotation.x = -1.5;

const myText3 = new Text();
scene.add(myText3);
myText3.text = 'Perhaps';
myText3.fontSize = 0.15;
myText3.position.z = -0.3;
myText3.position.x = -0.51;
myText3.position.y = 0.1;
myText3.color = 0xffffff;
myText3.rotation.y = -1.555;

const myText4 = new Text();
scene.add(myText4);
myText4.text = 'Definitely \n not!';
myText4.fontSize = 0.15;
myText4.position.z = 0.3;
myText4.position.x = 0.51;
myText4.position.y = 0.15;
myText4.color = 0xffffff;
myText4.rotation.y = 1.555;

const myText5 = new Text();
scene.add(myText5);
myText5.text = 'Forget';
myText5.fontSize = 0.15;
myText5.position.z = -0.5001;
myText5.position.x = 0.2;
myText5.position.y = 0.1;
myText5.color = 0xffffff;
myText5.rotation.y = 3.1;

const myText6 = new Text();
scene.add(myText6);
myText6.text = 'Yes!!!';
myText6.fontSize = 0.15;
myText6.position.z = 0.1;
myText6.position.x = -0.15;
myText6.position.y = -0.5;
myText6.color = 0xffffff;
myText6.rotation.x = 1.555;

myText1.sync();
myText2.sync();
myText3.sync();
myText4.sync();
myText5.sync();
myText6.sync();
animate();
onWindowResize();

//свет
// const light = new THREE.AmbientLight(0x404040, 1); // soft white light
// scene.add(light);
// let ligth = new THREE.PointLight(0xffffff)
// ligth.position.set(20, 10, 1)
// scene.add(ligth)

// let ligth2 = new THREE.PointLight(0xffffff)
// ligth.position.set(5, 3, 1)
// scene.add(ligth2)

// const pointLight = new THREE.PointLight(0xff0000, 1, 100);
// pointLight.position.set(3, 3, 3);
// scene.add(pointLight);

// const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
// scene.add( pointLightHelper );






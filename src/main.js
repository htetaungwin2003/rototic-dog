import './style.css';

import '../node_modules/flowbite/dist/flowbite';
import 'preline';
import Robot from './app';
import Typed from 'typed.js';

const typed = new Typed('#element', {
  strings: ['ROBOTIC DOG NAME LOKI'],
  typeSpeed: 50,
});


const robot = new Robot();
robot.init();
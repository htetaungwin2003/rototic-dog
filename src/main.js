import './style.css';

import '../node_modules/flowbite/dist/flowbite';
import 'preline';
import 'animate.css';
import Robot from './app';
import Typed from 'typed.js';

const typed = new Typed('#element', {
  strings: ['ROBOTIC DOG NAME LOKI'],
  typeSpeed: 50,
});

const typed2 = new Typed('#element2', {
  strings: ['ROBOTIC DOG LOKI'],
  typeSpeed: 50,
  backSpeed: 100,
 loop : true ,
  loopCount: Infinity,
});




const robot = new Robot();
robot.init();
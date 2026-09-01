import './style.css';

import 'flowbite';

import 'preline';
import 'animate.css';
import Robot from './app';
import Typed from 'typed.js';


const typed = new Typed('#element', {
  strings: ['ROBOTIC DOG NAME LUCKY'],
  typeSpeed: 50,
  backSpeed: 100,
 loop : true ,
  loopCount: Infinity,
});

const typed2 = new Typed('#element2', {
  strings: ['ROBOTIC DOG LUCKY'],
  typeSpeed: 50,
  backSpeed: 100,
 loop : true ,
  loopCount: Infinity,
});




const robot = new Robot();
robot.init();
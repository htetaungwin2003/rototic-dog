import './style.css';

import '../node_modules/flowbite/dist/flowbite';
import 'preline';
import Robot from './app';
import Typed from 'typed.js';

const typed = new Typed('#element', {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 50,
});


const robot = new Robot();
robot.init();
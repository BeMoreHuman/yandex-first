import Popper from 'popper.js';

import {nodesToArray, onceTransitionEnd} from '../helpers';

export default function showPopup(programName) {
	let timerId = null;
	let wasShown = false;
	
	const programs = nodesToArray(document.querySelectorAll('.channel-program'));
	programs.forEach((program) => {
		const popup = program.querySelector('.channel-program__popup');
		
		program.addEventListener('mouseenter', () => {
			timerId = setTimeout(() => {
				program.popper = new Popper(program, popup, {
					placement: 'left',
				});
				
				program.popper.onCreate(() => popup.classList.add('channel-program__popup--visible'));
				wasShown = true;
			}, 600);
		});
		
		program.addEventListener('mouseleave', () => {
			timerId && clearTimeout(timerId);
			
			if (timerId && wasShown) {
				onceTransitionEnd(popup, () => {
					program.popper && program.popper.destroy();
				});
				
				popup.classList.remove('channel-program__popup--visible');
			}
			
			timerId = null;
			wasShown = false;
		});
	});
}

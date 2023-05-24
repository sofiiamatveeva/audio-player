import convertToHtml from '../../utils/htmlElement';
import ButtonTemplate from './button.component.html';
import './button.component.scss';

const ButtonComponent = ({ title, className, onClick }) => {
	const BUTTON_ELEMENT = convertToHtml(ButtonTemplate);

	BUTTON_ELEMENT.innerHTML = title;
	BUTTON_ELEMENT.classList.add(className);
	BUTTON_ELEMENT.addEventListener('click', onClick);

	return BUTTON_ELEMENT;
};

export default ButtonComponent;

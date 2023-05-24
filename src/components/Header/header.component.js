import convertToHtml from '../../utils/htmlElement';
import HeaderTemplate from './header.component.html';
import ButtonComponent from '../Button/button.component';
import './header.component.scss';

const HeaderComponent = convertToHtml(HeaderTemplate);
const CUSTOM_BUTTON = ButtonComponent({
	title: '123',
	className: 'custom-button',
	onClick: () => console.log(9999),
});

HeaderComponent.appendChild(CUSTOM_BUTTON);

export default HeaderComponent;

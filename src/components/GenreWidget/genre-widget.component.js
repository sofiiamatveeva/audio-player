import convertToHtml from '../../utils/htmlElement';
import GenreWidgetTemplate from './genre-widget.component.html';
import './genre-widget.component.scss';

const GenreWidgetComponent = (genreInfo) => {
	const GENRE_WIDGET_ELEMENT = convertToHtml(GenreWidgetTemplate);

	const GENRE_NAME = GENRE_WIDGET_ELEMENT.querySelector('[data-genre="name"]');

	GENRE_NAME.innerHTML = genreInfo.name;
	GENRE_WIDGET_ELEMENT.style.background = genreInfo.background;

	return GENRE_WIDGET_ELEMENT;
};

export default GenreWidgetComponent;

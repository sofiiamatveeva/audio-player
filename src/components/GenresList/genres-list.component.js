import GenresCollection from '../../collections/genres.collection';
import ApiService from '../../services/api.service';
import convertToHtml from '../../utils/htmlElement';
import GenreWidgetComponent from '../GenreWidget/genre-widget.component';
import GenresListTemplate from './genres-list.component.html';
import './genres-list.component.scss';

const GenresListComponent = convertToHtml(GenresListTemplate);
const genresCollection = new GenresCollection(ApiService);

genresCollection.getAllGenres().then((genresLibrary) => {
	const GENRES_LIST_ELEMENT = document.getElementById('genres-list');
	genresCollection.saveGenresLibrary(genresLibrary);

	genresCollection.genresLibrary.forEach((genre) => {
		const GENRE_ELEMENT = GenreWidgetComponent(genre);

		GENRES_LIST_ELEMENT.appendChild(GENRE_ELEMENT);
	});
});

export default GenresListComponent;

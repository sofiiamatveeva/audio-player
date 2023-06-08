import GenresCollection from '../../collections/genres.collection';
import ApiService from '../../services/api.service';
import convertToHtml from '../../utils/htmlElement';
import GenreWidgetComponent from '../GenreWidget/genre-widget.component';
import GenresListTemplate from './genres-list.component.html';

const GenresListComponent = convertToHtml(GenresListTemplate);
const genresCollection = new GenresCollection(ApiService);

genresCollection.getAllGenres().then((genresLibrary) => {
	genresCollection.saveGenresLibrary(genresLibrary);

	genresCollection.genresLibrary.forEach((genre) => {
		const GENRE_ELEMENT = GenreWidgetComponent(genre);

		console.log(GenresListComponent);
		GenresListComponent.appendChild(GENRE_ELEMENT);
	});
});

export default GenresListComponent;

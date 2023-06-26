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
	const PREV_BUTTON = document.getElementById('prev-genres-btn');
	const NEXT_BUTTON = document.getElementById('next-genres-btn');
	let genreElementWidth = 0;
	let genresListWidth = 0;
	let translation = 0;
	let genresCount = 0;
	let genresCountPerSlide = 0;
	let maxSlide = 0;
	let listPadding = parseInt(window.getComputedStyle(GENRES_LIST_ELEMENT).paddingLeft) * 2;

	PREV_BUTTON.setAttribute('disabled', true);

	genresCollection.saveGenresLibrary(genresLibrary);

	genresCollection.genresLibrary.forEach((genre) => {
		const GENRE_ELEMENT = GenreWidgetComponent(genre);
		GENRES_LIST_ELEMENT.appendChild(GENRE_ELEMENT);
		genreElementWidth = GENRE_ELEMENT.offsetWidth + parseInt(window.getComputedStyle(GENRE_ELEMENT).margin) * 2;
		genresListWidth = Math.round(GENRES_LIST_ELEMENT.offsetWidth);
		genresCount += 1;
	});

	genresCountPerSlide = Math.round((genresListWidth - listPadding) / genreElementWidth);
	maxSlide = Math.round(genreElementWidth * (genresCountPerSlide + (genresCount % genresCountPerSlide)));


	const translateGenresList = (translation) => {
		GENRES_LIST_ELEMENT.style.transform = `translateX(${translation}px)`;
	};

	const goToNextSlide = () => {
		if (-(maxSlide + translation) > -(genreElementWidth * genresCountPerSlide)) {
			translation -= genreElementWidth * (genresCount % genresCountPerSlide)
		} else {
			translation -= genreElementWidth * genresCountPerSlide;
		}

		translateGenresList(translation);
	};

	const goToPrevSlide = () => {
		if (translation > -Math.round(genreElementWidth * genresCountPerSlide) && translation !== 0) {
			translation += genreElementWidth * (genresCount % genresCountPerSlide)
		} else {
			translation += genreElementWidth * genresCountPerSlide;
		}

		translateGenresList(translation);
	};

	PREV_BUTTON.addEventListener('click', () => {
		goToPrevSlide();

		if (translation === 0) {
			PREV_BUTTON.setAttribute('disabled', true);
		}

		if (-translation < Math.round(genreElementWidth * (genresCountPerSlide + (genresCount % genresCountPerSlide)))) {
			NEXT_BUTTON.removeAttribute('disabled');
		}
	});

	NEXT_BUTTON.addEventListener('click', () => {
		goToNextSlide();
		
		if (translation < 0) {
			PREV_BUTTON.removeAttribute('disabled');
		}

		if (-translation === Math.round(genreElementWidth * (genresCountPerSlide + (genresCount % genresCountPerSlide)))) {
			NEXT_BUTTON.setAttribute('disabled', true);
		}
	});
});

export default GenresListComponent;
import Genre from '../models/Genre';

export default class GenresCollection {
	constructor(ApiService) {
		this.apiService = ApiService;
		this.genresPromise = null;
		this.genresLibrary = null;
	}

	async getAllGenres() {
		try {
			if (!this.genresPromise) {
				this.genresPromise = this.apiService.getAllGenres();
			}

			return this.genresPromise;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	saveGenresLibrary(genres) {
		const library = genres.map((genre) => new Genre(this.apiService, genre));

		this.genresLibrary = library;
	}
}

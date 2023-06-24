import Artist from '../models/Artist';

export default class ArtistsCollection {
	constructor(ApiService) {
		this.apiService = ApiService;
		this.artistsPromise = null;
		this.artistsLibrary = null;
	}

	async getAllArtists() {
		try {
			if (!this.artistsPromise) {
				this.artistsPromise = this.apiService.getAllArtists();
			}

			return this.artistsPromise;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	saveArtistsLibrary(artists) {
		const library = artists.map((artist) => new Artist(this.apiService, artist));

		this.artistsLibrary = library;
	}
}

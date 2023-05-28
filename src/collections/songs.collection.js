import { Song } from "../models/Song";

export class SongsCollection {
	constructor(ApiService) {
		this.apiService = ApiService;
		this.songsPromise = null;
		this.library = null;
	}

	async getAllSongs() {
		try {
			if (!this.songsPromise) {
				this.songsPromise = this.apiService.getAllSongs();
			}

			return this.songsPromise;
		} catch(error) {
			console.error(error);
			throw error;
		}
	}

	saveSongsLibrary(songs) {
		songs = songs.map(song => {
			return new Song(this.apiService, song);
		});

		this.library = songs;
	}
}
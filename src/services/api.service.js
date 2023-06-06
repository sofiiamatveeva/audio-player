import { GET_ALL_SONGS, GET_ALL_ARTISTS, IMAGES_URL } from '../constants/apiConstants';

export default class ApiService {
	static async getAllSongs() {
		try {
			const response = await fetch(GET_ALL_SONGS);
			const songs = await response.json();

			return songs;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async getAllArtists() {
		try {
			const response = await fetch(GET_ALL_ARTISTS);
			const artists = await response.json();

			return artists;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static getImage(target) {
		return IMAGES_URL + target;
	}
}

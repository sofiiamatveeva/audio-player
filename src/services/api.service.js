import { GET_ALL_SONGS, IMAGES_URL } from "../constants/apiConstants";

export class ApiService {
	static async getAllSongs() {
		try {
			const response = await fetch(GET_ALL_SONGS);
			const songs = await response.json();

			return songs;
		} catch(error) {
			console.error(error);
			throw error;
		}
	}

	static getImage(target) {
		return IMAGES_URL + target;
	}
}
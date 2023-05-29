export class Song {
	constructor(ApiService, ...songProps) {
		this.apiService = ApiService;
		Object.assign(this, ...songProps);
		this.isPlaying = false;
	}

	toggleSong() {
		this.isPlaying = !this.isPlaying;
	}
};
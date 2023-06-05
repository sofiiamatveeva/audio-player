export default class Song {
	constructor(ApiService, ...songProps) {
		this.apiService = ApiService;
		Object.assign(this, ...songProps);
		this.isPlaying = false;
	}

	toggleSong() {
		this.isPlaying = !this.isPlaying;
	}

	getSongAvatar() {
		return this.apiService.getImage(this.song_cover);
	}

	getDurationInMinutes() {
		const MIN_BASE = 60;
		const HOUR_BASE = 60 * 60;
		let handledTime = '';
		let hours = 0;
		let minutes = 0;
		let secs = 0;

		if (this.duration >= HOUR_BASE) {
			hours = Math.floor(this.duration / HOUR_BASE);
			this.duration -= hours * HOUR_BASE;
		}

		if (this.duration >= MIN_BASE) {
			minutes = Math.floor(this.duration / MIN_BASE);
			secs = this.duration - minutes * MIN_BASE;
		}

		if (hours) {
			handledTime = `${hours.toString().padStart(2, '0')}:`;
		}

		handledTime += minutes.toString().padStart(2, '0');
		handledTime += `:${secs.toString().padStart(2, '0')}`;

		return handledTime;
	}
}

export default class Artist {
	constructor(ApiService, ...props) {
		this.apiService = ApiService;
		Object.assign(this, ...props);
	}

	getFollowersCount() {
		const THOUSAND = 1000;
		const MILLION = 1000000;

		if (this.followers > THOUSAND && this.followers < MILLION) {
			return `${Math.floor(this.followers / THOUSAND)}K`;
		} if (this.followers > MILLION) {
			return `${Math.floor(this.followers / MILLION)}M`;
		}
		return this.followers;
	}
}

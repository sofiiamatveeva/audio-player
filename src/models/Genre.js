export default class Genre {
	constructor(ApiService, ...props) {
		this.apiService = ApiService;
		Object.assign(this, ...props);
	}
}
import './artist-widget.component.scss';
import ArtistWidgetTemplate from './artist-widget.component.html';
import convertToHtml from '../../utils/htmlElement';
import { IMAGES_URL } from '../../constants/apiConstants';

const ArtistWidgetComponent = (artistInfo) => {
	const ARTIST_WIDGET_ELEMENT = convertToHtml(ArtistWidgetTemplate);

	const ARTIST_NAME = ARTIST_WIDGET_ELEMENT.querySelector('[data-artist="name"]');
	const ARTIST_GENRES = ARTIST_WIDGET_ELEMENT.querySelector('[data-artist="genres"]');
	const ARTIST_FOLLOWERS = ARTIST_WIDGET_ELEMENT.querySelector('[data-artist="followers"]');
	const ARTIST_AVATAR = ARTIST_WIDGET_ELEMENT.querySelector('[data-artist="avatar"]');

	ARTIST_NAME.innerHTML = artistInfo.name;
	ARTIST_GENRES.innerHTML = artistInfo.genres.slice(0, 3).join(' | ');
	ARTIST_FOLLOWERS.innerHTML = artistInfo.getFollowersCount() + ' followers';

	const artistAvatar = new Image(100, 100);
	artistAvatar.src = IMAGES_URL + artistInfo.artist_avatar;
	ARTIST_AVATAR.append(artistAvatar);

	return ARTIST_WIDGET_ELEMENT;
};

export default ArtistWidgetComponent;
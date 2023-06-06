import './song-widget.component.scss';
import SongWidgetTemplate from './song-widget.component.html';
import convertToHtml from '../../utils/htmlElement';

const SongWidgetComponent = (song) => {
	const SONG_WIDGET_ELEMENT = convertToHtml(SongWidgetTemplate);

	const SONG_NAME = SONG_WIDGET_ELEMENT.querySelector('[data-song="name"]');
	const SONG_ALBUM = SONG_WIDGET_ELEMENT.querySelector('[data-song="album"]');
	const SONG_ARTIST = SONG_WIDGET_ELEMENT.querySelector('[data-song="artist"]');
	const SONG_TIME = SONG_WIDGET_ELEMENT.querySelector('[data-song="time"]');
	const SONG_AVATAR = SONG_WIDGET_ELEMENT.querySelector('[data-song="avatar"]');

	SONG_NAME.innerHTML = song.name;
	SONG_ALBUM.innerHTML = song.album_name;
	SONG_ARTIST.innerHTML = song.artist_name;
	SONG_TIME.innerHTML = song.getDurationInMinutes();

	const songAvatar = new Image(60, 60);
	songAvatar.src = song.getSongAvatar();
	SONG_AVATAR.append(songAvatar);

	return SONG_WIDGET_ELEMENT;
};

export default SongWidgetComponent;

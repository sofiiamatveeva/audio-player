import { SongsCollection } from "../../collections/songs.collection";
import { ApiService } from '../../services/api.service';
import convertToHtml from '../../utils/htmlElement';
import PlaylistTemplate from './playlist.component.html';
import SongWidgetComponent from "../SongWidget/song-widget.component";
import './playlist.component.scss';

const PlaylistComponent = convertToHtml(PlaylistTemplate);

const songs = new SongsCollection(ApiService);

songs.getAllSongs().then(library => {
	songs.saveSongsLibrary(library);

	songs.library.forEach((song) => {
		const SONG_ELEMENT = SongWidgetComponent(song);
		PlaylistComponent.appendChild(SONG_ELEMENT);
	});
});

export default PlaylistComponent;
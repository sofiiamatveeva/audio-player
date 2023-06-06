import ArtistsCollection from '../../collections/artists.collection';
import ApiService from '../../services/api.service';
import convertToHtml from '../../utils/htmlElement';
import ArtistWidgetComponent from '../ArtistWidget/artist-widget.component';
import ArtistListTemplate from './artist-list.component.html';
import './artist-list.component.scss';

const ArtistListComponent = convertToHtml(ArtistListTemplate);

const artists = new ArtistsCollection(ApiService);

artists.getAllArtists().then(artistsLibrary => {
	artists.saveArtistsLibrary(artistsLibrary);

	artists.artistsLibrary.forEach(artist => {
		const ARTIST_WIDGET_ELEMENT = ArtistWidgetComponent(artist);
		ArtistListComponent.appendChild(ARTIST_WIDGET_ELEMENT);
	});
});

export default ArtistListComponent;
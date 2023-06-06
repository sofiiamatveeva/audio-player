import convertToHtml from '../../utils/htmlElement';
import HomePageTemplate from './home-page.component.html';
import './home-page.component.scss';
import PlaylistComponent from '../Playlist/playlist.component';
import ArtistListComponent from '../ArtistList/artist-list.component';

const HomePageComponent = convertToHtml(HomePageTemplate);

HomePageComponent.appendChild(PlaylistComponent);
HomePageComponent.appendChild(ArtistListComponent);

export default HomePageComponent;
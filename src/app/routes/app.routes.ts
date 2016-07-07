import { provideRouter, RouterConfig } from '@angular/router';
import { AboutComponent } from '../components/about/';
import { SearchComponent } from '../components/search/';
import { ArtistComponent } from '../components/artist/';
import { AlbumComponent } from '../components/album/';

export const routes: RouterConfig = [
  { path: '' , component : SearchComponent},
  { path: 'about' , component : AboutComponent},
  { path: 'artist/:id' , component:ArtistComponent},
  { path: 'album/:id' , component:AlbumComponent} 
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
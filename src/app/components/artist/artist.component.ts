import { Component, OnInit } from '@angular/core';
import { SpotService }  from '../../services/spot.service';
import { Artist } from '../../class/artist';
import { Album } from '../../class/album';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.css']
})
export class ArtistComponent implements OnInit {
 // private id:string;
  private artist : Artist[];
  private albums : Album[];

  constructor(private _spotService:SpotService , private _router: Router, private _route: ActivatedRoute) {

  }

  ngOnInit() {
    //fetch the params that was arrived from the url
    this._route.params.subscribe(params => {
      let id = params['id']; // (+) converts string 'id' to a number
      this._spotService.getArtist(id).subscribe(artist => { this.artist = artist});
      this._spotService.getAlbums(id).subscribe(albums => { this.albums = albums.items});
      //this.service.getHero(id).then(hero => this.hero = hero);
    });
  }

  linkRoute(albumId:string){
    this._router.navigate(['/album',albumId]);
  }

}

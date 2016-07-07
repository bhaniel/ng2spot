import { Component, OnInit } from '@angular/core';
import { SpotService }  from '../../services/spot.service';
import { Artist } from '../../class/artist';
import { Album } from '../../class/album';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
  styleUrls: ['album.component.css']
})
export class AlbumComponent implements OnInit {
   private album : Album[];
   constructor(private _spotService:SpotService , private _router: Router, private _route: ActivatedRoute) {

  }

  ngOnInit() {
     this._route.params.subscribe(params => {
      let id = params['id']; // (+) converts string 'id' to a number
      this._spotService.getAlbum(id).subscribe(album => { console.log(album); this.album = album});
      //this.service.getHero(id).then(hero => this.hero = hero);
    });
  }

}

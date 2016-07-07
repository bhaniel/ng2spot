import { Component, OnInit } from '@angular/core';
import { SpotService }  from '../../services/spot.service';
import { Artist } from '../../class/artist';
import { ROUTER_DIRECTIVES , Router} from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class SearchComponent implements OnInit {
    private searchStr:string;
    private searchRes : Artist[];

    constructor(private _spotService:SpotService , private _router: Router) {
        this.searchStr = '';
    }

    ngOnInit() {
    }

    searchMusic() {
        this._spotService.searchMusic(this.searchStr).subscribe(res=>{ this.searchRes = res.artists.items;});
        console.log(this.searchRes);
    }

    linkRoute(id:string){
        this._router.navigate(['/artist', id]);
            console.log(id);
    }

}
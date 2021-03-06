import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  //@Input() items: any[] = [];
  public searched: string;

  artists: any[] = [];
  albums: any[] = [];
  topTracks: any[] = [];

  constructor(private _Spotify: SpotifyService, private router: Router) { }

  getFirebase(searchTerm: string){
    this._Spotify.AddSearchesToFirebaseDatabase(searchTerm)
  }


  searchArtists(searchTerm: string) {
    this.searched = searchTerm
    this._Spotify.getArtist(searchTerm)
      .subscribe((data: any) => {
        this.artists = data;
        console.log(searchTerm);
        console.log(this.artists);
      });
     // this.searchAlbumn(searchTerm)
  }
  searchAlbumn(searchTerm: string) {
    this._Spotify.getAlbumn(searchTerm)
      .subscribe((data: any) => {
        this.albums = data;
       // console.log(this.albums);
      });
  }

  /*   //Display Artist in a different Page
    DisplayArtists(item: any) {
      let artistID;
      if (item.type === 'artist') {
        artistID = item.id;
      }
      else {
        artistID = item.artists.id;
      }
      //Navigate to Artist Page
      this.router.navigate(['/artist', artistID]);
    }
   */
  /*   //Display Album in a different Page
    DisplayAlbum(item: any) {
      let albumID;
      if (item.type === 'album') {
        albumID = item.id;
      }
      else {
        albumID = item.album.id;
      }
      //Navigate to Artist Page
      this.router.navigate(['/albums', albumID]);
    }
   */

  getTopTracks(id: string) {
  console.log(id)
    this._Spotify.getArtist_Track(id)
      .subscribe(
        (data: any) => {
              this.topTracks = data.tracks;
      console.log(this.topTracks)
      });

   
  }




  ngOnInit() {

  }

}

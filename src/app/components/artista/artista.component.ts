import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  loading: boolean;
  artista: any;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute,
    private spotify: SpotifyService) {
      this.loading = true;
      this.router.params.subscribe(params => {
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
        this.loading = false;
      });
   }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
    });
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks(id).subscribe(tracks => {
      this.topTracks = tracks;
      console.log(tracks);
    });
  }

}

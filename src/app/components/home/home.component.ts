import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, errorService => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorService.error.error.message;
        console.log(errorService);
      });
  }

  ngOnInit() {
  }

}

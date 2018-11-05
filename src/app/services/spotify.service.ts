import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = 'https://api.spotify.com/v1/';

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDAltpVyqC7t-wuGtvcU85FWAXgQ9YsYw3t6lfViyBw2PFtqB5qI5ae6eiPz7Gaql2cCDmcJlTAmO8SHNE'
    });

    return this.http.get(url + query, { headers: headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
            .pipe(map(data =>  data['albums'].items));
    // es lo mismo que esto:
    // return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', { headers: headers })
    //         .pipe(map(data => {
    //           return data['albums'].items;
    //         }));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=10`)
            .pipe(map(data =>  data['artists'].items));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
            .pipe(map(data =>  data['tracks']));
  }
}

import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as Rx from 'rxjs';

@Injectable()
export class ClarifaiService {

  private token$: Rx.Observable<string>;

  constructor(private http: Http) {
  }

  getRandomImageUrl() {
    // replace maybe with an image service?
    // return this.http.get('https://randomimageservice')
    //   .map(response => response.json().urls);

    return Rx.Observable.of('https://static.pexels.com/photos/25053/pexels-photo-25053.jpg');
  }

  tag(imageUrl: string): Rx.Observable<string[]> {
    return this.getToken()
      .map(token => new Headers({ 'Authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }))
      .flatMap(headers =>
        this.http.get('https://api.clarifai.com/v1/tag', {
          headers: headers,
          search: `url=${imageUrl}`
        }))
      .map(response => response.json().results[0].result.tag.classes as string[]);
  }

  private getToken(): Rx.Observable<string> {
    if (!this.token$) {
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      this.token$ = this.http.get(`~/secrets.json`)
        .map(result => result.json())
        .map(apiKeys => `client_id=${apiKeys.client_id}&client_secret=${apiKeys.client_secret}&grant_type=client_credentials`)
        .switchMap(body => this.http.post('https://api.clarifai.com/v1/token/', body, { headers: headers }))
        .map(response => response.json().access_token)
        .cache();
    }
    return this.token$;
  }
}

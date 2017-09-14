import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TrackService {
    private search: string;
    private API_URL: string = environment.API_URL;

    constructor(private _http: Http) { }

    getTracks(search) {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
  
        return this._http.post(this.API_URL +'/tracks/search/',{'query':search}, {headers: headers}).map(res => res.json());
    }

}

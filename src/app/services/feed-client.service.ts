import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { FeedModel } from '../models/feed-model';

@Injectable({
  providedIn: 'root'
})
export class FeedClientService {

  constructor(private httpClient: HttpClient) { }

  getFeed(url: string): Observable<FeedModel> {
    var params = new HttpParams();
    params.append("url", url)
    return this.httpClient.get("http://localhost:8080/feed", { params: { url: url} } ) as Observable<FeedModel>;
  }
}

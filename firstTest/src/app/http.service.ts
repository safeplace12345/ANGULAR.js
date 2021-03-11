import { Injectable } from '@angular/core';
// import the ajax abilities
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) { }
  my(){
    console.log("list Running.....")
  }
  getBeer(){
    return this._http.get('https://api.openbrewerydb.org/breweries')
  }
}

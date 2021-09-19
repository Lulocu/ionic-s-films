import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilm } from '../model/model.films';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://www.omdbapi.com/?';
  apiKey = 'yourKey'; // <-- Enter your own key here!
  
    constructor(private http: HttpClient){}
    detailedFilm: IFilm;
    public getFilmList(title: string){
      
      let req = this.url+'s=\''+title+'\'&type=movie&apikey='+this.apiKey;
  
      return this.http.get<IFilm[]>(req).pipe(map(results => results['Search']));
      
      //console.log(this.lista);
      
    }
    public getFilm(title: string){

      let req = this.url+'t=\''+title+'\'&type=movie&apikey='+this.apiKey;
  
      return this.http.get<IFilm>(req).pipe(map(results => results));
    }
}
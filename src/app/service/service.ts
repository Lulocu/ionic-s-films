import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilm } from '../model/model.films';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://www.omdbapi.com/?';
  apiKey = '&apikey=55c72716'; // <-- Enter your own key here!
  
    constructor(private http: HttpClient){}
    
    public getFilmList(title: string){
      
      let req = this.url+'s=\''+title+'\''+this.apiKey;
  
      return this.http.get<IFilm[]>(req).pipe(map(results => results['Search']));
      
      //console.log(this.lista);
      
    }
}
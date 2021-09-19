import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilm } from '../model/model.films';
import { DataService } from '../service/service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  films : Observable<IFilm[]>;

  constructor(private ServicesFilm: DataService) {}

  ngOnInit(){
    this.getFilmList('Lord');
  }

  getFilmList(title): void{
    this.films = this.ServicesFilm.getFilmList(title);
  
  }
}

import { Component, OnInit } from '@angular/core';
import { IFilm } from '../model/model.films';
import { DataService } from '../service/service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})
export class DetailsPage implements OnInit{
  film : IFilm;
  
  constructor(private ServicesFilm: DataService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    
    this.getFilm();
  }

  getFilm(): void{
    let title = this.activatedRoute.snapshot.paramMap.get('Title');
    this.ServicesFilm.getFilm(title).subscribe(result => this.film = result);
    
  }
}

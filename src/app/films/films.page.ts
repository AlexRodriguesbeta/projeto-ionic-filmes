import { MovieapiService } from './../movieapi.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
  providers: [
    MovieapiService
  ]
})
export class FilmsPage implements OnInit {

  constructor(private movieapiService: MovieapiService){ }

  //public object_film ={
    //titulo: 'Filme teste', 
    //data: 'November 5, 1955',
    //descricao: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine',
    //quant_likes: 8,
    //quant_comentarios: 10,   
    //time_coment: "18h November"
  //}

  public list_movies = new Array<any>(); 

  ngOnInit() { 
    this.movieapiService.readData().subscribe(data=>{
      const obj = data as any; 
      this.list_movies.push(obj); 
      console.log(this.list_movies); 
    }); 
  }
}

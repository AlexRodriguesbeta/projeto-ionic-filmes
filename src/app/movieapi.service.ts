import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable() 
export class MovieapiService {

  public api: string = "https://api.themoviedb.org/3/movie/latest?api_key=f04b92ed64eb23c5a67a64dbb733429c&query&language=pt-BR";

  public api2: string = "https://api.themoviedb.org/3/search/movie?api_key=f04b92ed64eb23c5a67a64dbb733429c&query="; 

  constructor(private http: HttpClient) { }

  readData(){
    return this.http.get(this.api); 
  }

  readSearch(api2 : string){
    return this.http.get(this.api2+api2+'&language=pt-br'); 
  }

}

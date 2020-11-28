import { AlertController } from '@ionic/angular';
import { MovieapiService } from '../movieapi.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  providers: [
    MovieapiService
  ]
})

export class SearchPage implements OnInit {

  constructor(private alertCtrl : AlertController, private movieapiService: MovieapiService, private http: HttpClient) { }

  ngOnInit() {
  }

  public name_movie = new Array<any>(); 

  async searchMovie(){
    this.name_movie = [];
    const alert = await this.alertCtrl.create({
      header: "Digite o nome do filme",
      inputs: [{
        name: 'buscar',
        type: 'text',
      }],
        buttons: [{
          text: "procurar",
          handler: (form)=>{ 
            this.searchApi(form.buscar);
          }
        }]
    })

   await alert.present(); 
  }

  async searchApi(nameMovie: string){
    this.movieapiService.readSearch(nameMovie).subscribe(data=>{
      this.http.get(nameMovie); 
      const obj = data as any; 
      this.name_movie.push(obj.results); 
      console.log(this.name_movie[0]); 
    }, error => {
      console.log("Erro");
    }); 
  }

}

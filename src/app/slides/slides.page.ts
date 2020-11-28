import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  public object_film = {};

  constructor() { 
    let userJson = localStorage.getItem('userDb');
    this.object_film = JSON.parse(userJson);
    console.log(this.object_film);
  }

  ngOnInit() {
    
  }

}

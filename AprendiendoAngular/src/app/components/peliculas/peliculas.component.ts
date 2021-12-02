import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck {

  public title: string;
  public peliculas!: Array<any>;

  constructor() { 
    
    this.title = 'Películas';
    this.peliculas = [
      {titulo: "Spiderman 4", image:'https://www.nacionflix.com/__export/1635039461533/sites/debate/img/2021/10/23/sony-spiderman-4.jpg_1902800913.jpg'},

      {titulo: "Los vengadores Endgame", image:'https://i1.wp.com/hipertextual.com/wp-content/uploads/2019/04/hipertextual-nuevo-trailer-avengers-endgame-agradece-fans-universo-marvel-2019351167.jpg?fit=1600%2C900&ssl=1'},

      {titulo: "Superman vs Batman", image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/batman-v-superman-el-amanecer-de-la-justicia-2016-ben-affleck-y-henry-cavill-1558006115.jpg?crop=1xw:0.8880994671403197xh;center,top&resize=1200:*'}
    ];
   
  }

  ngOnInit(): void {
  }

  ngDoCheck() {

  }

  cambiarTitulo(){
    this.title = 'Titulo cambiado';
  }

  ngOnDestroy(){
    
  }
}

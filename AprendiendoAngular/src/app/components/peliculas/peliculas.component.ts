import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck {

  public titulo: string;

  constructor() { 
    this.titulo = 'Componente peliculas';
  }

  ngOnInit(): void {
  }

  ngDoCheck() {

  }

  cambiarTitulo(){
    this.titulo = 'Titulo cambiado';
  }

  ngOnDestroy(){
    
  }
}

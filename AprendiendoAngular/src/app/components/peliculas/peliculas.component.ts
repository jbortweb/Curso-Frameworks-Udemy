import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck {

  public title: string;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;
  public fecha: any;
  

  constructor(

    private _peliculaService: PeliculaService
  ) { 
    
    this.title = 'Películas';
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);
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

  mostrarFavorita(event: any){
    this.favorita = event.pelicula;
  }
}

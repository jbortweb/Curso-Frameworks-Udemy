import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()

export class PeliculaService {

    public peliculas: Pelicula[];

    constructor (){

        this.peliculas = [
            new Pelicula('Spiderman 4', 2021, 'https://www.nacionflix.com/__export/1635039461533/sites/debate/img/2021/10/23/sony-spiderman-4.jpg_1902800913.jpg'),
      
            new Pelicula('Los vengadores Endgame', 2020, 'https://i1.wp.com/hipertextual.com/wp-content/uploads/2019/04/hipertextual-nuevo-trailer-avengers-endgame-agradece-fans-universo-marvel-2019351167.jpg?fit=1600%2C900&ssl=1'),
      
            new Pelicula('Superman vs Batman', 2019, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/batman-v-superman-el-amanecer-de-la-justicia-2016-ben-affleck-y-henry-cavill-1558006115.jpg?crop=1xw:0.8880994671403197xh;center,top&resize=1200:*')
          ];
    }

    getPeliculas(){
        return this.peliculas;
    }
}
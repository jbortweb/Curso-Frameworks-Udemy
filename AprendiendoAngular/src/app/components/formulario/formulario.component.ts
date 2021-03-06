import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo!: string;
  public pulso!: string;

  constructor() { 

    this.user = {
      nombre:'',
      apellidos:'',
      bio:'',
      genero:''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('Formulario enviado correctamente');
    console.log(this.user);
  }

  /* EVENTOS ANGULAR
  hasDadoClick(){
    alert ('Has dado click');
  }

  hasSalido(){
    alert ('Has salido');
  }
  hasPulsado(){
    alert('Has pulsado');
  }
  */

}

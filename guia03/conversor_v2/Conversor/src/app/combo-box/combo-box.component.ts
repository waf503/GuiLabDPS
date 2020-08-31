import { Component, OnInit } from '@angular/core';

//Agregar los siguiente modulos
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule}from '@angular/forms'

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {
  //Variables
  unidades;
  opcionSeleccionado: String;
  valorcm:number;
  valorconversion:number;

  constructor() { }

  ngOnInit(): void {
    //incializando las variables
    this.unidades = ["Pulgada","Metro","Kilometro"];
    this.opcionSeleccionado="Selecciona";
    this.valorcm=0;
    this.valorconversion=0;
  }

  //funcion que realiza los calculos
  capturar(){
    switch(this.opcionSeleccionado){
      case'Pulgada':
        this.valorconversion=this.valorcm*0.39270;
      break;
      case'Metro':
        this.valorconversion=this.valorcm/100;
      break;
      case'Kilometro':
        this.valorconversion=this.valorcm/100000;
      break;
    }
  }
}
export class AppComponent{
}

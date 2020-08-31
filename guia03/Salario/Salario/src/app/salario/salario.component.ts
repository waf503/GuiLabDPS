import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';


@Component({
  selector: 'app-salario',
  templateUrl: './salario.component.html',
  styleUrls: ['./salario.component.css']
})
export class SalarioComponent implements OnInit {
  
  registro=[];
  empleado:any;
  nombre:string;
  apellido:string;
  sueldo:number;
  sueldoFinal:number;
  contador:number;
  seguro:number ;
  afp:number ;
  renta:number ;
  descuento:number;

  constructor() { }

  ngOnInit(): void {
    this.sueldo=0;
    this.sueldoFinal=0;
    this.nombre='';
    this.apellido='';
    this.contador=0;
    this.seguro=0;
    this.afp=0;
    this.renta=0;
    this.descuento=0;
  }

  ingresar(){
    
    this.seguro = this.sueldo*0.073;
    this.renta = this.sueldo*0.11;
    this.afp = this.sueldo*0.051;

    this.descuento = (this.seguro+this.renta+this.afp);
    this.sueldoFinal = this.sueldo-this.descuento;


    this.empleado={"nombre":this.nombre,"apellido":this.apellido,"sueldo":this.sueldo,"seguro":this.seguro,"renta":this.renta,"afp":this.afp,"descuento":this.descuento,"sueldoFinal":this.sueldoFinal};
    this.registro.push(this.empleado);
    this.contador++;
  }
}

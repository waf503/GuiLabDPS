import { Component } from '@angular/core';
import { Alumno } from './models/alumno';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';
  //Arreglo del tipo Alumno, que tiene 3 registros almacenados
  alumnoArray: Alumno[] = [
    {id:1, name:"Alex",lastname:"Campos",age:35,direccion:"San Salvador",email:"alex@gmail.com",tel:72448544},
    {id:2, name:"Juan",lastname:"Lopez",age:20,direccion:"La Union",email:"lopez@gmail.com",tel:72447734},
    {id:3, name:"Maria",lastname:"Castro",age:23,direccion:"La Paz",email:"maria@gmail.com",tel:71668544}
  ]
  //atributo selecAlumno del tipo Alumno, por lo tanto, puede almacenar un objto
  selectedAlumno: Alumno = {id:0, name:'', lastname:'', age:0, direccion:'', email:'',tel:0};
  //un metodo que no retorna nada void, recibe como parametro una variable del
  //tipo Alumno, para ser asignada al atributo selecAlumno y poder ser mostrado
  //en pantalla.
  openForEdit(alumno: Alumno): void{
    this.selectedAlumno = alumno;
  }
  /**Metodo que no retorna nada "void", No recibe parametro, pero realiza dos
   * operaciones agregar /  editar, si no hay registro seleccionado se guarda,
   * de lo contrario limpia el atributo
   * 
   */
  addOrEdit(): void{
    if(this.selectedAlumno.id === 0)//insert
    {
      this.selectedAlumno.id = this.alumnoArray.length + 1;
      this.alumnoArray.push(this.selectedAlumno);
    }
    this.selectedAlumno = {id:0, name: '', lastname: '', age: 0, direccion: '',email: '', tel: 0};
  }
  //Metodo que no retorna nada "void", No recibe parametro, elimina del arreglo el
  //registro, pero antes muestra en pantalla un confirmar, se recorre el arreglo
  //realizando un "filter" para no almacenar el registro seleccionado en el nuevo
  //areglo "alumnoArray" , por eso ocupados el operador "!=" y luego limpiamos
  //el registro seleccionado
  delete(): void{
    if(confirm('Esta seguro de eliminar el Registro?')){
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = {id:0, name: '', lastname: '', age:0, direccion: '', email: '',tel: 0};
    }
  }
}

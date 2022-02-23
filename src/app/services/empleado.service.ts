import { Injectable } from '@angular/core';
import { Empleado } from '../interface/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  empleados:Empleado[]=[];

  con : number=0;
  constructor() { }
  getAll(){
    return this.empleados;
  }
  eli(num:number){
    this.empleados.splice(num,1);
  }
  addUser(empl:Empleado){
    this.empleados.push(empl);
    console.log(this.empleados);
  }
}

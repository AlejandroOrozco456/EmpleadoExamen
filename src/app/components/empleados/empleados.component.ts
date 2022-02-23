import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interface/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:Empleado[]=[];

  constructor(private EmpleadoServive:EmpleadoService) { }

  eliminar(num:number){
    this.EmpleadoServive.eli(num);
    console.log(num);
  }

  ngOnInit(): void {
    this.empleados= this.EmpleadoServive.getAll();
  }

}

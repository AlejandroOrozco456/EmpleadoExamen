import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Empleado } from 'src/app/interface/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formulario = this.formBuilder.group({
    nombre:'',
    apellidos:'',
    fechaNaci:'',
    domicilio:'',
    cPostal:'',
    telefono:'',
    email:'',
    contraseña:'',
  });
  empleados : Empleado[]=[];


  constructor(private formBuilder: FormBuilder, private EmpleadoService:EmpleadoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let nuevoEmpleado : Empleado = {
      nombre :this.formulario.get('nombre')?.value,
      apellidos :this.formulario.get('apellidos')?.value,
      fechaNaci:this.formulario.get('fechaNaci')?.value,
      domicilio:this.formulario.get('domicilio')?.value,
      cPostal:this.formulario.get('cPostal')?.value,
      telefono:this.formulario.get('telefono')?.value,
      email:this.formulario.get('email')?.value,
      contraseña:this.formulario.get('contraseña')?.value, 
  }

  this.EmpleadoService.addUser(nuevoEmpleado);
  this.empleados=this.EmpleadoService.getAll();
    this.limpiarForm();
  }
  limpiarForm(){
    this.formulario.reset()
}
}

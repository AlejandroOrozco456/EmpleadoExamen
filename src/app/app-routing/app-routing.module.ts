import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { EmpleadosComponent } from '../components/empleados/empleados.component';

const routes : Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'empleados',
    component:EmpleadosComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

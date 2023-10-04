import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './app/layout/index/index.component';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { PessoasdetailsComponent } from './app/pessoas/pessoasdetails/pessoasdetails.component';

const routes: Routes = [
  {path: "" , component: IndexComponent},
  //{path: "login", component: LoginComponent},
  {path: "admin", component: IndexComponent, children:[

    {path: "pessoas", component: PessoaslistComponent},
    {path: "carros", component:CarroslistComponent},
    {path: "pessoas/novo", component:PessoasdetailsComponent},
    {path: "pessoas/editar/:id", component:PessoasdetailsComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'read', component: ReadComponent},
  {path:'create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

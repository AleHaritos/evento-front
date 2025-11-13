import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { ListarEventosComponent } from './features/eventos/pages/listar-eventos/listar-eventos.component';
import { FormsEventosComponent } from './features/eventos/pages/forms-eventos/forms-eventos.component';

const routes: Routes = [
  { path: '', component: FormsEventosComponent },
  { path: 'listar-eventos', component: ListarEventosComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

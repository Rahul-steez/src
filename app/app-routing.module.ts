import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: UsuariosComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', component: UsuariosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

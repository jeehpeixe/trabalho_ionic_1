import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'turma', loadChildren: './turma/turma.module#TurmaPageModule', canActivate: [AuthGuard] },
  { path: 'turma-detalhe', loadChildren: './turma-detalhe/turma-detalhe.module#TurmaDetalhePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

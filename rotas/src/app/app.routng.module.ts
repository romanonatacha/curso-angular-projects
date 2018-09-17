import { NgModule } from "@angular/core";

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from "./guards/auth.guard";

const appRoutes: Routes = [
    { path: 'cursos', loadChildren: '../app/cursos/cursos.module#CursosModule', canActivate: [AuthGuard]},
    { path: 'alunos', loadChildren: '../app/alunos/alunos.module#AlunosModule', canActivate: [AuthGuard]},

    // { path: 'cursos', component: CursosComponent},
    // { path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
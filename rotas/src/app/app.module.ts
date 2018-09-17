import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
import { CursosService } from './cursos/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { routing } from './app.routing';
import { AppRoutingModule } from './app.routng.module';
import { FormsModule } from '@angular/forms';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    // CursosModule,
    AppRoutingModule,
    FormsModule
    // AlunosModule
    // routing
  ],
  providers: [AuthService, AuthGuard],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

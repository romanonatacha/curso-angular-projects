import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { AlunoRoutingModule } from './alunos.routing.module';
import { NgModule } from "@angular/core";

import { AlunosComponent } from './alunos.component';
import { CommonModule } from "@angular/common";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';


@NgModule({
    imports: [
        CommonModule,
        AlunoRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        AlunosComponent, 
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers:[AlunosService]
})

export class AlunosModule {}
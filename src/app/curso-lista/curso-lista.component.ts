import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-lista',
  standalone: true,
  imports: [],
  templateUrl: './curso-lista.component.html',
  styleUrl: './curso-lista.component.css'
})
export class CursoListaComponent implements OnInit {
     cursos:any[] =[];

   constructor(private cursoService: CursoService){}

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

}

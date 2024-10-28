import { Component } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.css'
})
export class CursoFormComponent {
  nombre: string = '';
  descripcion: string = '';

  constructor(private cursoService: CursoService) { }

  onSubmit() {
    if (this.nombre && this.descripcion) {
      const nuevoCurso = { nombre: this.nombre, descripcion: this.descripcion };
      this.cursoService.addCurso(nuevoCurso);
      this.nombre = '';
      this.descripcion = '';
    }
}
}
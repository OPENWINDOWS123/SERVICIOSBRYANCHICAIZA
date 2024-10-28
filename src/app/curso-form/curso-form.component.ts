import { Component } from '@angular/core';
import { CursoService } from '../curso.service';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
=======
>>>>>>> b16185c476f0ccb281748b66bc3af2287a0c9aeb

@Component({
  selector: 'app-curso-form',
  standalone: true,
<<<<<<< HEAD
  imports: [FormsModule,NgIf],
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css'] // Corrección aquí
=======
  imports: [],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.css'
>>>>>>> b16185c476f0ccb281748b66bc3af2287a0c9aeb
})
export class CursoFormComponent {
  nombre: string = '';
  descripcion: string = '';

<<<<<<< HEAD
  fecha: string = '';      // Campo para la fecha
  duracion: number | null = null; // Campo para la duración en semanas

  constructor(private cursoService: CursoService) { }

  onSubmit() {
    if (this.nombre && this.descripcion  && this.fecha && this.duracion) {
      const nuevoCurso = {
        nombre: this.nombre,
        descripcion: this.descripcion,
      
        fecha: this.fecha,
        duracion: this.duracion
      };
      this.cursoService.addCurso(nuevoCurso);
      this.limpiarFormulario();
    }
  }

  limpiarFormulario() {
    this.nombre = '';
    this.descripcion = '';
  
    this.fecha = '';
    this.duracion = null;
  }
=======
  constructor(private cursoService: CursoService) { }

  onSubmit() {
    if (this.nombre && this.descripcion) {
      const nuevoCurso = { nombre: this.nombre, descripcion: this.descripcion };
      this.cursoService.addCurso(nuevoCurso);
      this.nombre = '';
      this.descripcion = '';
    }
}
>>>>>>> b16185c476f0ccb281748b66bc3af2287a0c9aeb
}
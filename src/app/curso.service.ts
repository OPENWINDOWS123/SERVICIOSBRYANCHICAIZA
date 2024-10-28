<<<<<<< HEAD
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private cursos: any[] = []; // Cambia 'any' por una interfaz si tienes definida

  // Método para agregar un curso
  addCurso(curso: any) {
    this.cursos.push(curso);
  }

  // Método para obtener la lista de cursos
  getCursos() {
    return this.cursos;
  }

  // Método para eliminar un curso por índice
  removeCurso(index: number) {
    this.cursos.splice(index, 1);
  }
  updateCurso(index: number, cursoActualizado: CursoService): void {
    if (index >= 0 && index < this.cursos.length) {
      this.cursos[index] = { ...this.cursos[index], ...cursoActualizado }; // Mezcla los atributos
    } else {
      throw new Error('Índice fuera de rango'); // Manejo de errores
    }
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import(HttpClient) from 'angular/commom/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursosKey = 'cursos';

  constructor(private http: HttpClient) { }

  getCursos(): any[] {
    const cursos = localStorage.getItem(this.cursosKey);
    return cursos ? JSON.parse(cursos) : [];
  }

  addCurso(curso: any): void {
    const cursos = this.getCursos();
    cursos.push(curso);
    localStorage.setItem(this.cursosKey, JSON.stringify(cursos));
  }
  getDatosAdicionales(){
    return this.http.get('URL_DEL_SERVICIO');
>>>>>>> b16185c476f0ccb281748b66bc3af2287a0c9aeb
  }
}

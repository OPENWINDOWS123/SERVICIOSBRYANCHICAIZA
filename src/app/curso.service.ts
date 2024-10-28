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
  }
}

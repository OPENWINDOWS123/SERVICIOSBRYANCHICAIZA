import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, RouterOutlet } from '@angular/router';
import { CursoFormComponent } from "./curso-form/curso-form.component";
import { CursoListaComponent } from "./curso-lista/curso-lista.component";
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { InicioComponent } from "./pages/inicio/inicio.component";
=======
import { RouterOutlet } from '@angular/router';
>>>>>>> b16185c476f0ccb281748b66bc3af2287a0c9aeb

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, CursoFormComponent, CursoListaComponent, FormsModule, NgFor, RouterModule, InicioComponent],
=======
  imports: [RouterOutlet],
>>>>>>> b16185c476f0ccb281748b66bc3af2287a0c9aeb
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nombre-del-proyecto';
<<<<<<< HEAD
 
=======
>>>>>>> b16185c476f0ccb281748b66bc3af2287a0c9aeb
}

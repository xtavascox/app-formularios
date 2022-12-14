import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

interface Persona {
  name: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  name: string
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  persona: Persona = {
    name: 'Gustavo',
    favoritos: [
      {id: 1, name: 'God of War'},
      {id: 2, name: 'Call of Duty'},
    ]
  }

  nuevoJuego: string = ''

  guardar() {
    console.log('Formulario posteado')
  }

  eliminar(idx: number) {
    this.persona.favoritos.splice(idx, 1)
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      name: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito})

    this.nuevoJuego=''
  }
}

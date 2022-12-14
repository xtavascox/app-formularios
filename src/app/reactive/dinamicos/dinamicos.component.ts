import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  persona: FormGroup = this.fb.group({
    nombre: ['dasdasd', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['God of War', Validators.required]
    ], Validators.required)
  });
  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr() {
    return this.persona.get('favoritos') as FormArray;
  }

  constructor(private readonly fb: FormBuilder) {
  }

  campoEsValido(campo: string) {
    return this.persona.controls[campo].errors
      && this.persona.controls[campo].touched
  }

  guardar() {
    if (!this.persona.valid) {
      this.persona.markAllAsTouched()
      return;
    }

    console.log(this.persona.value)

    this.persona.reset()
  }

  agregarFavorito() {
    if (!this.nuevoFavorito.valid) return;
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset();
  }

  borrarFavorito(idx: number) {
    this.favoritosArr.removeAt(idx);
  }

}

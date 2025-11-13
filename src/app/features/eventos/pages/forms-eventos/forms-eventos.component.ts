import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-eventos',
  templateUrl: './forms-eventos.component.html',
  styleUrls: ['./forms-eventos.component.css']
})
export class FormsEventosComponent {

formsEvento: FormGroup = new FormGroup({
  titulo: new FormControl(null, [Validators.maxLength(100)]),
  descricao: new FormControl(null, [Validators.maxLength(1000)]),
  dataEvento: new FormControl(null),
  horaEvento: new FormControl(null),
  local: new FormControl(null, [Validators.maxLength(200)])
})

submeter() {
  if (this.formsEvento.valid) {
    this.formsEvento.reset()

    Object.keys(this.formsEvento.controls).forEach(key => {
    const control = this.formsEvento.get(key);
    control?.setErrors(null);
    control?.markAsPristine();
    control?.markAsUntouched();
    control?.updateValueAndValidity();
  });
  }
}

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventoServiceService } from '../../service/evento-service.service';
import { Evento } from 'src/app/shared/models/Evento';

@Component({
  selector: 'app-forms-eventos',
  templateUrl: './forms-eventos.component.html',
  styleUrls: ['./forms-eventos.component.css']
})
export class FormsEventosComponent {

  constructor(
    private service: EventoServiceService
  ) { }

  formsEvento: FormGroup = new FormGroup({
    titulo: new FormControl(null, [Validators.maxLength(100)]),
    descricao: new FormControl(null, [Validators.maxLength(1000)]),
    dataEvento: new FormControl(null, [Validators.required]),
    horaEvento: new FormControl("00:00"),
    local: new FormControl(null, [Validators.maxLength(200)])
  })

  submeter() {
    if (this.formsEvento.valid) {
      const data = this.formsEvento.get('dataEvento')?.value;
      const hora = this.formsEvento.get('horaEvento')?.value;

      const [h, m] = hora.split(':').map(Number);
      const dataHora = new Date(data);
      dataHora.setHours(h);
      dataHora.setMinutes(m);

      const evento: Evento = {
        titulo: this.formsEvento.get("titulo")?.value,
        descricao: this.formsEvento.get("descricao")?.value,
        local: this.formsEvento.get("local")?.value,
        dataHoraEvento: dataHora.toISOString()
      }
      console.log(evento)
      this.service.salvarEvento(evento).subscribe(res => {
        console.log(res)
        this.formsEvento.reset()

        Object.keys(this.formsEvento.controls).forEach(key => {
          const control = this.formsEvento.get(key);
          control?.setErrors(null);
          control?.markAsPristine();
          control?.markAsUntouched();
          control?.updateValueAndValidity();
        });
      })

    }
  }

}

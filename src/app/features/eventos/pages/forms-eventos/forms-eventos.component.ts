import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventoServiceService } from '../../service/evento-service.service';
import { Evento } from 'src/app/shared/models/Evento';
import { UtilService } from 'src/app/shared/util/util.service';

@Component({
  selector: 'app-forms-eventos',
  templateUrl: './forms-eventos.component.html',
  styleUrls: ['./forms-eventos.component.css']
})
export class FormsEventosComponent {

  constructor(
    private service: EventoServiceService,
    private util: UtilService
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

      const ano = data.getFullYear();
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const dia = String(data.getDate()).padStart(2, '0');
      const horaFormatada = String(h).padStart(2, '0');
      const minutoFormatado = String(m).padStart(2, '0');

      const localDateTime = `${ano}-${mes}-${dia}T${horaFormatada}:${minutoFormatado}:00`;

      const evento: Evento = {
        titulo: this.formsEvento.get("titulo")?.value,
        descricao: this.formsEvento.get("descricao")?.value,
        local: this.formsEvento.get("local")?.value,
        dataHoraEvento: localDateTime
      }
      this.service.salvarEvento(evento).subscribe(res => {
        this.formsEvento.reset()

        Object.keys(this.formsEvento.controls).forEach(key => {
          const control = this.formsEvento.get(key);
          control?.setErrors(null);
          control?.markAsPristine();
          control?.markAsUntouched();
          control?.updateValueAndValidity();
        });

        this.util.snackBar("Evento salvo com sucesso!", 1)
      })

    }
  }

}

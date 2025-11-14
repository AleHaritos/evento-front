import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventoServiceService } from '../../service/evento-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/shared/models/Evento';
import { UtilService } from 'src/app/shared/util/util.service';

@Component({
  selector: 'app-detalhe-evento',
  templateUrl: './detalhe-evento.component.html',
  styleUrls: ['./detalhe-evento.component.css']
})
export class DetalheEventoComponent implements OnInit {

  constructor(
    private service: EventoServiceService,
    private route: ActivatedRoute,
    private router: Router, 
    private util: UtilService
  ) { }

  formsEvento: FormGroup = new FormGroup({
    id: new FormControl(null),
    titulo: new FormControl(null, [Validators.maxLength(100)]),
    descricao: new FormControl(null, [Validators.maxLength(1000)]),
    dataEvento: new FormControl(null, [Validators.required]),
    horaEvento: new FormControl("00:00"),
    local: new FormControl(null, [Validators.maxLength(200)])
  })

  id!: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.id = id;
      this.service.buscarEventoPorId(id).subscribe(res => {
        this.formsEvento.patchValue({
          dataEvento: new Date(res.dataHoraEvento),
          horaEvento: res.dataHoraEvento.substring(11, 16),
          titulo: res.titulo,
          descricao: res.descricao,
          local: res.local,
          id: res.id
        });
      })
    });
  }

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
      this.service.alterarEvento(evento, this.id).subscribe(res => {
        this.util.snackBar("Evento alterado com sucesso!", 1)
        this.router.navigate(["/listar-eventos"])
      })

    }
  }

  deletar() {
    this.service.deletarEvento(this.id).subscribe(res => {
      this.util.snackBar("Evento deletado com sucesso!", 1)
      this.router.navigate(["/listar-eventos"])
    })
  }

}

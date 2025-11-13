import { Component, OnInit } from '@angular/core';
import { EventoServiceService } from '../../service/evento-service.service';

@Component({
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.css']
})
export class ListarEventosComponent implements OnInit{

constructor(
  private service: EventoServiceService
){}

  ngOnInit(): void {
    
  }

  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'dataHora', 'local', 'detalhes'];

}

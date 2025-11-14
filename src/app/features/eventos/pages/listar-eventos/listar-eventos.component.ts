import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EventoServiceService } from '../../service/evento-service.service';
import { Evento } from 'src/app/shared/models/Evento';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.css']
})
export class ListarEventosComponent implements AfterViewInit {

  constructor(
    private service: EventoServiceService
  ) { }

  eventos: Evento[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit() {
  this.paginator.page.subscribe((event: PageEvent) => {
    this.carregarEventos(event.pageIndex, event.pageSize);
  });

  this.carregarEventos(0, this.paginator.pageSize || 5);
}

carregarEventos(pageIndex: number, pageSize: number) {
  this.service.buscarEventos(pageIndex, pageSize).subscribe(response => {
    this.eventos = response.eventos; 
    this.paginator.length = response.quantidadeEvento 
  });
}

  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'dataHoraEvento', 'local', 'detalhe'];

}

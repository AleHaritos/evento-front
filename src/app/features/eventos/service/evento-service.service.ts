import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { UtilService } from 'src/app/shared/util/util.service';

@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {

  constructor(
    public http: HttpClient,
    public util: UtilService
  ) { }

  salvarEvento(evento: any): Observable<any> {
    return this.http.post(`${this.util.backUrl()}/api/events`, evento)
      .pipe(
        map(res => res),
        catchError(e => this.util.errorHandler(e.error))
      )
  }

  buscarEventos(pagina: number, tamanhoPagina: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.util.backUrl()}/api/events`, { params: { pagina, tamanhoPagina } })
      .pipe(
        map(res => res),
        catchError(e => this.util.errorHandler(e.error))
      )
  }

  buscarEventoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.util.backUrl()}/api/events/${id}`)
      .pipe(
        map(res => res),
        catchError(e => this.util.errorHandler(e))
      )
  }

  alterarEvento(evento: any, id: number): Observable<any> {
    return this.http.put(`${this.util.backUrl()}/api/events/${id}`, evento)
      .pipe(
        map(res => res),
        catchError(e => this.util.errorHandler(e.error))
      )
  }

  deletarEvento(id: number): Observable<any> {
    return this.http.delete(`${this.util.backUrl()}/api/events/${id}`)
      .pipe(
        map(res => res),
        catchError(e => this.util.errorHandler(e.error))
      )
  }

}

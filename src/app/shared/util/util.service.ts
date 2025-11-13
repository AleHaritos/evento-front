import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private toast: MatSnackBar
  ) { }

  backUrl(): String {
        return "http://localhost:8080"
    }

snackBar(msg: string, status?: number): void {
        let color;
        switch(status) {
          case 1:
            color = ['green-msg'];
            break;
          case 2: 
            color = ['warn-msg']
            break;
          case 3: 
            color = ['red-msg'];
            break;
          case 4: 
            color = ['info-msg']
            break;
          default: 
            color = ['info-msg'];
        }
        this.toast.open(msg, 'x', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          panelClass: color
        })
    }

    validacaoDeErro(e: any): void {
      let status = e.status
      switch (status) {
        case 400: {
          this.snackBar(`${status} ${e.error.error}`, 3)
          break;
        }
        case 401: {
          this.snackBar(`${status} ${e.error.error}`, 3)
          break;
        }
        case 404: {
          this.snackBar(`${status} Não encontrado!`, 2)
          break;
        }
        case 500: {
          this.snackBar(`${status} ${e.error.error}`, 3)
          break;
        }
        case 502: {
          this.snackBar(`${status} ${e.error.error}`, 3)
          break;
        }
      }
    }

    
errorHandler(e: any): Observable<any> {
  this.validacaoDeErro(e);
  return EMPTY;
}

}

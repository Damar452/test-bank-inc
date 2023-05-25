import { Injectable } from '@angular/core';
import {  HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { GeneralModalService } from '../utilities/general-modal/general-modal.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private generalModalService: GeneralModalService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      finalize(() => {
        //todo
      }),
      catchError((excepcion: HttpErrorResponse) => {
        if(excepcion.status >= 400) {
          this.generalModalService.showModal({ title: 'Error en la petición', message: excepcion.error})
        }
        return throwError(excepcion.error.text);
      })
    );
  }
}

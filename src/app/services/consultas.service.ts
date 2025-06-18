import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ConsultaRequest {
  tabla: string;
  campos?: string[];
  condiciones?: { campo: string; valor: any }[];
}
@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private readonly apiUrl = 'http://localhost:3000/api/consultas';

  constructor(private http: HttpClient) { }

  consultarTabla(request: ConsultaRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, request);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoPokeapiService {

  url: string = "https://pokeapi.co/api/v2/"

  constructor(
    private http: HttpClient
  ) { }

  obtenerPokemon(event: string): Observable<any> {

      return this.http.get<any>(`${this.url}/pokemon/${event}`);
  }



}

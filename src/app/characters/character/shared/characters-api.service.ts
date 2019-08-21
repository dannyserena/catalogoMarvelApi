import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  /*Esses dados a Marvel vai nos fornecer é importante */
  PUBLIC_KEY = '';
  HASH = '';
  /*URL_API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&orderBy=name&limit=10&apikey=ed5accb8c7697714ac1dbf1c7584c3c0&hash=${this.HASH}`;
  */
 /*URL_API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`; */

 URL_API = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=ed5accb8c7697714ac1dbf1c7584c3c0`;

  /* chave publica ed5accb8c7697714ac1dbf1c7584c3c0
     chave privada   f01465bfead08c522f32eb8e5f5983ca5223bbdd */

  constructor(private http: HttpClient) { }

  /**com o metodo get vamos listar todos os personagens,
   *  lembre-se de ler a documentação da API para informar os dados
   * que você que no meu caso optei por characters */

   getAllCharacters(): Observable<any> {
     return this.http.get<any>(this.URL_API)
     .pipe(map((data: any) => data.data.results))
   }
}

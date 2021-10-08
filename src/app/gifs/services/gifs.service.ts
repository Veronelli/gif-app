import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { SeachGifsResponse } from '../interfaces/gifs.interface';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = environment.U_KEY;//You need create a file named enviroment.ts
  private _historial: string[] = [];
  private serviceURL: string = "https://api.giphy.com/v1/gifs/search";

  public resultados: any[] = [];

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
    this.buscarGifs(this._historial[0]);
  }



  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams().set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SeachGifsResponse>(this.serviceURL, { params })
      .subscribe((resp) => {
        console.log(resp)
        this.resultados = resp.data;
      });

  }

}

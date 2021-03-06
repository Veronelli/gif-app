import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent {

  constructor(private gifsService: GifsService) { }

  get resultados() {
    return [...this.gifsService.resultados];

  }

}

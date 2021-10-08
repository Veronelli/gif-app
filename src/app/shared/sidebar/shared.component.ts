import { Component } from "@angular/core";
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html'
})
export class SharedComponent {

    get historial() { return this.gifsService.historial }
    constructor(public gifsService: GifsService) { }

}
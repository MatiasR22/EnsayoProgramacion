import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-bloque',
    templateUrl: './bloque.component.html',
    styleUrls: ['./bloque.component.scss']
})
export class BloqueComponent {
    public bloques = [{
        titulo: 'BLOQUE'
    }];

    constructor() { }

    public agregarBloque() {
        this.bloques.push({
            titulo: 'BLOQUE'
        });
    }

}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parametros',
    templateUrl: './parametros.component.html',
    styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent {
    public parametros = [{
        moneda: '',
        precioPorPax: '',
        impuesto: '',
        total: '',
        comision: ''
    }];

    constructor() { }

    public agregarParametros() {
        this.parametros.push({
            moneda: '',
            precioPorPax: '',
            impuesto: '',
            total: '',
            comision: ''
        });
    }

}

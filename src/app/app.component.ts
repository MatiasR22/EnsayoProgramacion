import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ensayo';
    
    // Dowload HTML to PDF
    htmltoPDF() {
        html2canvas(document.querySelector("#programmerExample")).then(canvas => {
            var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
            var imgData  = canvas.toDataURL("image/jpeg", 1.0);
            pdf.addImage(imgData,0,0,canvas.width, canvas.height);
            pdf.save('ensayoProgramador.pdf');
        });
    }
}

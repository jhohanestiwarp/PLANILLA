import { Component, OnInit } from '@angular/core';
import { formatoService } from 'src/app/service/planilla.service';

@Component({
  selector: 'app-list-formato',
  templateUrl: './list-formato.component.html',
  styleUrls: ['./list-formato.component.css']
})
export class ListformatoComponent implements OnInit {
  public formatos:any;

  constructor(
    private formatoService:formatoService,
    ) {
     
    }
  
  ngOnInit(): void {
    this.formatoService.Listformato().subscribe(result =>{this.formatos = result
  });
}

  deleteformato(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.formatoService.Deleteformato(id).subscribe((respuesta)=>{
      this.formatos.splice(iControl, 1)
    });
  }

  
  }
}

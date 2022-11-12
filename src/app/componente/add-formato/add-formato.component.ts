import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { formatoService } from 'src/app/service/planilla.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-formato',
  templateUrl: './add-formato.component.html',
  styleUrls: ['./add-formato.component.css']
})
export class AddformatoComponent implements OnInit {
  formformato:FormGroup; 
  constructor(public formulario:FormBuilder,
    private formatoService:formatoService,
    private ruteador:Router ) {
      this.formformato=this.formulario.group({
        formato:['']
      })
  
     }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log(this.formformato.value)
    this.formatoService.Addformato(this.formformato.value).subscribe(result=>{
      alert("Registro agregado con exito")
      this.ruteador.navigateByUrl('/list-formato');
    });

  }

}

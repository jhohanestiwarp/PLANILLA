import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { formatoService } from 'src/app/service/planilla.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-formato',
  templateUrl: './edit-formato.component.html',
  styleUrls: ['./edit-formato.component.css']
})
export class EditformatoComponent implements OnInit {
  formformato:FormGroup= this.formulario.group({
    fecha:"",
    dia_solicitado:"",
    cedula:"",
    hora_inicio:"",
    hora_fin:""
  })
  id: string =""
  constructor(public formulario:FormBuilder,
    private formatoService:formatoService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      const idParam =this.activedRoute.snapshot.paramMap.get('id');

      if (idParam === null) {
        return // redirecciona a la vista de listado
      }

      this.id = idParam;

      this.formatoService.Obtenerformato(this.id).subscribe(result =>{
        console.log(result);
        this.formformato.setValue({
          formato:result['formato'],
        });
      }
      );
      this.formformato = this.formulario.group(
        {
          formato:[''],
        }
      );
  
     }

  ngOnInit(): void {
  }

  // enviarDatos():any {
  //   console.log(this.formformato.value)
  //   this.formatoService.Updateformato({ 
  //     id: this.id,
  //     formato: this.formformato.value.formato as string
  //   }).subscribe(result=>{
  //     alert("Registro MODIFICADO con exito");  
  //     this.ruteador.navigateByUrl('/list-formato');
  //   });
    

  // }

}


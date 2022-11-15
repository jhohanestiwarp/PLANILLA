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
  formformato:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private formatoService:formatoService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.elID=this.activedRoute.snapshot.paramMap.get('id_formato');
     

      this.formatoService.Obtenerformato(this.elID).subscribe(result =>{
        console.log(result);
        this.formformato.setValue({
          id_cargo:result['id_cargo'],
          id_rol:result['id_rol'],
          id_carga_formato:result['id_carga_formato'],
          id_tipo_documento:result['id_tipo_documento'],
          
          
        });
      }
      );
  
      this.formformato = this.formulario.group(
        {
    
          id_cargo:[''],
          id_rol:[''],
          id_carga_formato:[''],
          id_tipo_documento:['']

        }
      );
  
     }

  ngOnInit(): void {
    console.log(this.elID);
  }

  enviarDatos():any {
    console.log
    this.formatoService.Updateformato({id_formato:this.elID,...this.formformato.value}).subscribe(result=>{
      alert("Modificar con exito");
      this.ruteador.navigateByUrl('/list-formato');
    });

  }

}

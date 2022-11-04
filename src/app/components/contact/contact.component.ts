import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceProductService } from '../../../core/service-product/service-product.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

/**
 * Componente del formuluario de contacto
 */
export class ContactComponent implements OnInit {
  
    formulario: FormGroup;    

    constructor(private serviceProductos : ServiceProductService) {
      this.formulario = new FormGroup({
        nombre : new FormControl('',[
          Validators.required
        ]),
        apellido : new FormControl('',[
          Validators.required
        ]),
        mail : new FormControl('',[
          Validators.required,
          Validators.pattern("[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?")
          ]
        ),
        telefono : new FormControl('',[
          Validators.required
        ])
       })
     }

    ngOnInit() {       
    }

    /**
     * Esta funcion permite consumir el servicio del contacto del formulario
     */
    async guardarContacto(){   
      let data = {
        'firstname' : this.formulario.value.nombre,
        'lastname' : this.formulario.value.apellido,
        'email' : this.formulario.value.mail,
        'phone' : this.formulario.value.telefono
    }
    await this.serviceProductos.setFormulario(data).toPromise().then(
        response => {   

        }
      ).catch(
        error => {         
          alert(error.statusText);
          console.log(error);
        }
      )
    }

}

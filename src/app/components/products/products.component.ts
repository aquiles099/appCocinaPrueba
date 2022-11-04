import { Component, OnInit } from '@angular/core';
import { ServiceProductService } from '../../../core/service-product/service-product.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
/**
 * Componente del listado de producto y las categorias
 */

export class ProductsComponent implements OnInit {
    public dataProductos :any;
    public loading: Boolean;
    skeleton: any[] = [1,2,3,4,5,6];
    public activeMenu = '';
    constructor(private serviceProductos : ServiceProductService) { }

    ngOnInit() {     
      this.getAllProductos();
    }

    /**
     * Obtiene todos los productos
     */
    getAllProductos(){
      this.loading = true
      this.activeMenu = 'Todos';
      this.serviceProductos.getAllProduct().subscribe(
        response => {                               
            this.loading = false;                  
            this.dataProductos = response;            
        },
       (error) => {
        this.loading = false;
        console.log("ocurrio un error al precargar ***** ", error);
        }
      );
    }

    /**
    *Funcion para consumir api por categoria
    */
    getProductCategories(type:any){
      this.loading = true
      this.activeMenu = type;
        let data = {
            'filter' : type
        }
        this.serviceProductos.getCategoryProduct(data).toPromise().then(
          response => {                 
            this.loading = false;
            this.dataProductos = response;
          }
        ).catch(
          error => {
            this.loading = false;
            console.log("error:", error);
          }
        )
    }
}

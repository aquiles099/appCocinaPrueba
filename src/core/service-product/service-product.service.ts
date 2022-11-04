import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
  public url = environment.url;
  private api_productos = this.url+'api/';  //url del nombre del servicio

  constructor(private http: HttpClient) { }

  /**
   * Obtiene todos los productos
   * @returns 
   */
  getAllProduct() : Observable<any>{  
    return this.http.get(this.api_productos +'articles')
  }
  
  /**
   * Obtiene los productos por categoria
   * @param data 
   * @returns 
   */
  getCategoryProduct(data:any) : Observable<any>{ 
    return this.http.get(this.api_productos +'articles', {params:data})
  }
  
  /**
   * Envia el formulario de newslatter
   * @param data 
   * @returns 
   */
  setFormulario(data: any): Observable<any>{ 
    return this.http.post(this.api_productos +'newsletter', data)
  }

}

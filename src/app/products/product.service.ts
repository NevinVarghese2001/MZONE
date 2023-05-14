import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  //api to view all product
  viewAllProduct(){
    return this.http.get('http://localhost:3000/products')
  }
  //view single product
   viewProduct(pid:any){
       return this.http.get('http://localhost:3000/products/'+pid)
   }

    // api call to add new product
  addNewProduct(pdata:any){
    return this.http.post('http://localhost:3000/products',pdata)
  }
   
   //PRODUCT DELETE
   deleteProduct(pid:any){
    return this.http.delete('http://localhost:3000/products/'+pid)
   }

   //edit product
   editProduct(pid:any,pdata:any){
    return this.http.put('http://localhost:3000/products/'+pid,pdata)
   }

}

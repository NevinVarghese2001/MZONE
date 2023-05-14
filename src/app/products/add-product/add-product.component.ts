import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
 
  constructor(private fb: FormBuilder,private ps:ProductService,private router:Router) { }

  addProductForm = this.fb.group({
    id: [""],
    productName:  [""],
    brand:  [""],
    Discription:  [""],
    categoryId:  [""],
    price: [""],
    rating: [""],
    warranty: [""],
    productImg: [""]
  })


  addProduct() {
    
    let pdata = {
      id: this.addProductForm.value.id,
      productName: this.addProductForm.value.productName,
      brand: this.addProductForm.value.brand,
      Discription: this.addProductForm.value.Discription,
      categoryId: this.addProductForm.value.categoryId,
      price: this.addProductForm.value.price,
      rating: this.addProductForm.value.rating,
      warranty: this.addProductForm.value.warranty,
      productImg: this.addProductForm.value.productImg
      
    }
    this.ps.addNewProduct(pdata).subscribe((item:any)=>{
      alert("newproduct added")
      this.router.navigateByUrl("products")
    })

  }

}



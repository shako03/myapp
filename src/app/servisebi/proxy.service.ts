// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProxyService {

//   constructor(private http: HttpClient) { }

//   getAllCards(): Observable<any> {
//     return this.http.get('https://fakestoreapi.com/products')
//   }
//   getAllCategories(): Observable<any> {
//     return this.http.get('https://fakestoreapi.com/products/categories')
//   }

//   getAllCardsByCategory(categoryId: String): Observable<any> {
//     const url = `https://fakestoreapi.com/products/category/${categoryId}`;
//     return this.http.get(url);
//   }
//   postData(data: any): Observable<any> {
//     const url = 'https://fakestoreapi.com/products';
//     return this.http.post(url, data);
//   }
// }

// proxy.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getAllCategories(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  getAllCardsByCategory(categoryId: string): Observable<any> {
    const url = `https://fakestoreapi.com/products/category/${categoryId}`;
    return this.http.get(url);
  }

  addProduct(productData: any): Observable<any> {
    const url = 'https://fakestoreapi.com/products'; 
    return this.http.post(url, productData);
  }
  addCart(productData: any): Observable<any> {
    const url = 'https://fakestoreapi.com/carts';
    const body = {
      userId: 5,
      date: "2020-02-03",
      products: [{ productId: productData.id, quantity: 1 }]
    };
    return this.http.post(url, body);
  }
}






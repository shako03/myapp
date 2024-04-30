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
    const url = 'https://fakestoreapi.com/products'; // Endpoint for adding a new product
    return this.http.post(url, productData);
  }
}






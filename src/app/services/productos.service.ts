import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

cargando = true;

  productos: Producto[] = [];
// Inyectamos con private http
  constructor( private http: HttpClient) { 
    
    this.cargarProductos();

  }

  private cargarProductos(){
    // Leer el archivo JSON
  this.http.get('https://angular-portafolio-7bd6d.firebaseio.com/productos_idx.json')
  .subscribe( (resp: Producto[]) => {

    console.log(resp); 
	this.productos = resp;
  
  this.cargando = false; // Aca deja de cargar cuando se tiene respuesta
  });
}}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { productoDesp } from 'src/app/interfaces/producto-desp.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: productoDesp;
  id: string;

  constructor( private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params.subscribe( parametros => {
     // console.log(parametros);
      this.productoService.getProducto(parametros['id']).subscribe( (producto: productoDesp) => {
        this.id = parametros['id'];
        this.producto = producto;
        // console.log(producto);
      });
    });
  }

}

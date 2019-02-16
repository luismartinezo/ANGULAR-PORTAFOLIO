import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'portafolio';

  // Aca inyectamos los productos ya que este archivo es global
  constructor( public infoPaginaService: InfoPaginaService,
               public productoService: ProductosService){


  }
}

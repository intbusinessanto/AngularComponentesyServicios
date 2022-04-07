import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  products: Product[] = [
    {
      id: '1',
      name: 'Care Nalga',
      price: 304,
      image: 'https://picsum.photos/200'
    },
    {
      id: '2',
      name: 'Care Verga',
      price: 305,
      image: 'https://picsum.photos/200'
    },
    {
      id: '3',
      name: 'Care Cuco',
      price: 306,
      image: 'https://picsum.photos/200'
    },
    {
      id: '4',
      name: 'Care Lo Mio',
      price: 307,
      image: 'https://picsum.photos/200'
    },
    {
      id: '5',
      name: 'Care Puño',
      price: 308,
      image: 'https://picsum.photos/200'
    },
    {
      id: '6',
      name: 'Care Pene',
      price: 309,
      image: 'https://picsum.photos/200'
    },
  ];

  onLoaded(img: string){
    console.log('Log Padre', img);
  }
}

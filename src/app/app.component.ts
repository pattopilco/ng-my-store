import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  btnDisable = true;
  nombres = "Isabella Pilco Duarte";
  edad = 10;

  toggleButton(){
    this.btnDisable = !this.btnDisable;
  }

  addEdad(){
    this.edad = this.edad + 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTo);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.nombres = element.value;
  }


  // NGFOR
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';

  addName(){
    this.names.push(this.newName);
  }

  deleteName(index: number){
    this.names.splice(index);
  }

  //NGFOR ARRAY

  products: Product[] = [
    {
      name:'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all'
    },
    {
      name: 'Bicicleta case nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colección de albunes',
      price: 34,
      image: './assets/images/album.jpg'
    }
  ]

}



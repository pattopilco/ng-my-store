import { Component } from '@angular/core';

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
}



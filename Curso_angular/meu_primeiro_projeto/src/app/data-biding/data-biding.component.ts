import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {

  public nome: string = 'Taylor'
  public idade: number = 24
  public checkoutDisable: boolean = false
  public imgSrc: string = 'https://www.psu.com/wp/wp-content/uploads/2020/06/horizon-forbidden-west-desktop-and-mobile-wallpapers-released-by-guerrilla.jpg'
  public imgTitle: string = 'Propety Binding'

  public position: { x: number, y: number } = { x: 0, y: 0 }


  public alertaInfo(valor: MouseEvent) {
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent) {

    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}


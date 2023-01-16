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
  public imgSrc: string = 'https://w0.peakpx.com/wallpaper/655/215/HD-wallpaper-death-stranding-thumbnail.jpg'
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


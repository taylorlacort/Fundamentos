import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deretivas-estruturais',
  templateUrl: './deretivas-estruturais.component.html',
  styleUrls: ['./deretivas-estruturais.component.scss']
})
export class DeretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Taylor Lacort", idade: 24 },
    { nome: "Mariaa Lacort", idade: 49 },
    { nome: "Anderson Lacort", idade: 46 }
  ]


  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false
      } else {
        this.condition = true
      }
    }, 2000)
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false
    } else {
      this.conditionClick = true
    }
  }

  public onClickAddList() {
    this.list.push({ nome: "Sabirna Machado", idade: 21 })
  }
  public onClickEventList(event: number) {
    this.list.slice(event, 1)
  }

}

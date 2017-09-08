import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-comp',
  templateUrl: './color-comp.component.html',
  styleUrls: ['./color-comp.component.css']
})
export class ColorCompComponent implements OnInit {

  private params: any;

    agInit(params: any): void {
      this.params = params;
    }
  constructor() { }

  ngOnInit() {
  }

}

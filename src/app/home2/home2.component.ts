import { Component, OnInit } from '@angular/core';
declare var skrollr: any;

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    skrollr.init();
  }

}

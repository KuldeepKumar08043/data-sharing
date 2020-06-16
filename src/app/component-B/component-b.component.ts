import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../services/bridge-service.service';

@Component({
  selector: 'component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentB implements OnInit {
  count: number;
  constructor( private bridgeService: BridgeService ) { }

  ngOnInit() {
    this.bridgeService.currentCountNumber.subscribe(sharedCountnumber => {
      this.count = sharedCountnumber;
    })
  }

}

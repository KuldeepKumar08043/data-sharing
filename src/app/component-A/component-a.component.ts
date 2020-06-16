import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../services/bridge-service.service';

@Component({
  selector: 'component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentA implements OnInit {
  count = 0;
  constructor( private bridgeService: BridgeService ) { }

  ngOnInit() {
  }

  onAddCountActionHandler() {
    this.count = this.count + 1;
    this.bridgeService.fetchCurrentCountNumber(this.count);
  }

}

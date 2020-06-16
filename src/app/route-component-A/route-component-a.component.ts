import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'route-component-a',
  templateUrl: './route-component-a.component.html',
  styleUrls: ['./route-component-a.component.scss']
})
export class RouteComponentA implements OnInit {

  constructor( private _routes: Router ) { }

  ngOnInit() {
  }

  onActionHandler(currectValue) {
    this._routes.navigateByUrl('/route-b/'+currectValue.value);
  }

}

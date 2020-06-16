import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'route-component-b',
  templateUrl: './route-component-b.component.html',
  styleUrls: ['./route-component-b.component.scss']
})
export class RouteComponentB implements OnInit {
  valuefromCompA: string;
  constructor(private router: ActivatedRoute ) { }

  ngOnInit() {
    this.router.params.subscribe(
      (param: Params) => {
        this.valuefromCompA = param.page;
      }
    )
  }
}

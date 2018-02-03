import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  animations: [
    routeFadeStateTrigger
  ],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true

  constructor() { }

  ngOnInit() {
  }

}

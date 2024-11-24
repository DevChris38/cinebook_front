import { Component, OnInit } from '@angular/core';
import { CustomerInformations } from '../../customer-informations';

@Component({
    selector: 'app-my-site',
    imports: [],
    templateUrl: './my-site.component.html',
    styleUrl: './my-site.component.css'
})
export class MySiteComponent implements OnInit {
  ngOnInit() {
    console.log(history.state);
  }

  protected readonly customerInformations: CustomerInformations = history.state;
}

import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SecurityService } from './services/security.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    public router: Router,
    private securityService: SecurityService,
  ) {}

  login() {
    window.location.href = 'http://localhost:8080/login';
  }
}

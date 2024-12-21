import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SecurityService } from './services/security.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isConnected: WritableSignal<boolean> = signal(false);
  username: string = '';

  constructor(
    public router: Router,
    private securityService: SecurityService,
    private authService: AuthService,
  ) {
    console.log('test');
    this.isConnected.set(!!authService.getToken());
  }

  ngOnInit() {
    this.authService.getTokenObservable().subscribe((token) => {
      if (token) {
        this.isConnected.set(true);
      }
    });
  }

  login() {
    window.location.href = 'http://localhost:8080/login';
  }

  onDeconnection() {
    this.authService.deconnection();
    this.isConnected.set(false);
    this.router.navigate(['login']);
  }

  onProfil() {
    this.router.navigate(['pageperso/' + localStorage.getItem('username')]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-perso',
  imports: [],
  templateUrl: './page-perso.component.html',
  standalone: true,
  styleUrl: './page-perso.component.css',
})
export class PagePersoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  userName: string | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userName = params.get('userName');
    });
  }
}

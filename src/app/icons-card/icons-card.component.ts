import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-icons-card',
  standalone: true,
  imports: [MatIcon, MatTooltip],
  templateUrl: './icons-card.component.html',
  styleUrl: './icons-card.component.css',
})
export class IconsCardComponent {
  isPremium = input.required<boolean>();
  isLongTimeAdopter = input.required<boolean>();
}

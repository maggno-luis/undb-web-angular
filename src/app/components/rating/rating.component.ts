import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input() rating: number = 0;

  getBarColor(): string {
    const percentage = (this.rating / 10) * 100;
    // Calcula a cor baseada na avaliação
    const red = Math.max(255 - Math.round((percentage * 2.55)), 0);
    const green = Math.max(Math.round(percentage * 2.55), 0);
    return `rgb(${red}, ${green}, 0)`;
  }
}

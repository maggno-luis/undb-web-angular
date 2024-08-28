import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RatingComponent } from "../rating/rating.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})

export class MovieCardComponent {

  constructor(private router: Router){}

  @Input() id!: number;
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() rating!: number;
  @Output() cardClick = new EventEmitter<void>();

  currentPage: number = 1;
  totalPages: number = 1;

  onCardClick() {
    this.cardClick.emit();
  }

  goToDetails(id: number) {
    console.log('Redirecionando para o ID do filme:', id);
    this.router.navigate(['/movie', id]);
  }
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMovies(this.currentPage);
    }
  }
  loadMovies(currentPage: number) {
    throw new Error('Method not implemented.');
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadMovies(this.currentPage);
    }
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
